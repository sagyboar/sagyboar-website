import { BlogPortableText } from "@/components/blog/BlogPortableText";
import { PageShell } from "@/components/ui/sagy";
import { SITE_NAME } from "@/constants/seo-data";
import { urlForImage } from "@/lib/sanity/image";
import { getPostBySlug, getPostSlugs } from "@/lib/sanity/queries";
import { ogImageUrl } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60;

type BlogPostPageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	const slugs = await getPostSlugs();
	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = await getPostBySlug(slug);
	if (!post) {
		return { title: "Post not found" };
	}

	const ogImage = post.mainImage
		? urlForImage(post.mainImage).width(1200).height(630).url()
		: ogImageUrl(post.title);

	return {
		title: post.title,
		description: post.excerpt ?? `${post.title} — ${SITE_NAME} Blog`,
		alternates: { canonical: `/blog/${post.slug}` },
		openGraph: {
			title: post.title,
			description: post.excerpt,
			type: "article",
			publishedTime: post.publishedAt,
			images: [{ url: ogImage }],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.excerpt,
			images: [ogImage],
		},
	};
}

function formatDate(iso: string) {
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(new Date(iso));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);
	if (!post) notFound();

	const coverUrl = post.mainImage
		? urlForImage(post.mainImage).width(1400).height(788).url()
		: null;

	return (
		<PageShell>
			<article className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32">
				<p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-sagy-muted">
					<Link
						href="/blog"
						className="transition-colors hover:text-sagy-accent"
					>
						Blog
					</Link>
					<span className="mx-2" aria-hidden="true">
						/
					</span>
					<span>Article</span>
				</p>

				<h1 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-sagy-heading sm:text-5xl lg:text-6xl">
					{post.title}
				</h1>

				<div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-sagy-muted">
					<time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
					{post.author?.name && (
						<>
							<span aria-hidden="true">·</span>
							<span className="text-sagy-body">{post.author.name}</span>
						</>
					)}
				</div>

				{post.excerpt && (
					<p className="mt-6 font-sans text-lg leading-relaxed text-sagy-body">
						{post.excerpt}
					</p>
				)}

				{coverUrl && (
					<div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-sagy-border">
						<Image
							src={coverUrl}
							alt={post.mainImage?.alt ?? post.title}
							fill
							priority
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 768px"
						/>
					</div>
				)}

				{post.body && post.body.length > 0 && (
					<div className="mt-12">
						<BlogPortableText value={post.body} />
					</div>
				)}

				{post.author && (
					<aside className="mt-16 rounded-2xl border border-sagy-border bg-sagy-heading/[0.03] p-5 sm:p-6">
						<p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sagy-muted">
							Author
						</p>
						<p className="mt-2 font-display text-xl uppercase tracking-tight text-sagy-heading">
							{post.author.name}
						</p>
						{post.author.bio && (
							<p className="mt-2 font-sans text-sm leading-relaxed text-sagy-body">
								{post.author.bio}
							</p>
						)}
					</aside>
				)}

				<div className="mt-12 border-t border-sagy-border pt-8">
					<Link
						href="/blog"
						className="font-mono text-xs uppercase tracking-[0.18em] text-sagy-accent transition-colors hover:text-sagy-heading"
					>
						← All posts
					</Link>
				</div>
			</article>
		</PageShell>
	);
}
