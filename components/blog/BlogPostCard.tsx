import { urlForImage } from "@/lib/sanity/image";
import type { BlogPostListItem } from "@/lib/sanity/types";
import Image from "next/image";
import Link from "next/link";

function formatDate(iso: string) {
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	}).format(new Date(iso));
}

export function BlogPostCard({ post }: { post: BlogPostListItem }) {
	const imageUrl = post.mainImage
		? urlForImage(post.mainImage).width(800).height(500).url()
		: null;

	return (
		<Link
			href={`/blog/${post.slug}`}
			className="group flex flex-col overflow-hidden rounded-2xl border border-sagy-border bg-sagy-heading/[0.03] transition-colors duration-200 hover:border-sagy-accent/30 hover:bg-sagy-heading/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent"
		>
			<div className="relative aspect-[16/10] overflow-hidden border-b border-sagy-border bg-sagy-heading/[0.04]">
				{imageUrl ? (
					<Image
						src={imageUrl}
						alt={post.mainImage?.alt ?? post.title}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				) : (
					<div className="absolute inset-0 bg-sagy-radial-glow opacity-60" />
				)}
			</div>
			<div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
				<div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-sagy-muted">
					<time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
					{post.author?.name && (
						<>
							<span aria-hidden="true">·</span>
							<span>{post.author.name}</span>
						</>
					)}
				</div>
				<h2 className="font-display text-2xl uppercase tracking-tight text-sagy-heading transition-colors group-hover:text-sagy-accent">
					{post.title}
				</h2>
				{post.excerpt && (
					<p className="line-clamp-3 font-sans text-sm leading-relaxed text-sagy-body">
						{post.excerpt}
					</p>
				)}
			</div>
		</Link>
	);
}
