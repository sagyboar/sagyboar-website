import {
	getDummyPostsByTag,
	getDummyTags,
} from "@/constants/blog-posts";
import type { Post } from "@/lib/ghost";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
	params: { tag: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { tag } = await params;
	const posts = getDummyPostsByTag(tag);

	if (!posts || posts.length === 0) {
		return {
			title: "Tag Not Found",
			description: "The requested tag could not be found",
		};
	}

	const tagName =
		posts[0].tags?.find((t: { slug: string }) => t.slug === tag)?.name || tag;

	return {
		title: `${tagName} Posts`,
		description: `Browse all posts tagged with ${tagName}`,
	};
}

export async function generateStaticParams() {
	const tags = getDummyTags();
	return tags.map((tag: { slug: string }) => ({ tag: tag.slug }));
}

export default async function TagPage({ params }: Props) {
	const { tag } = await params;
	const posts = getDummyPostsByTag(tag);

	if (!posts || posts.length === 0) {
		notFound();
	}

	const tagName =
		posts[0].tags?.find((t: { slug: string }) => t.slug === tag)?.name || tag;

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto max-w-5xl px-4 py-12">
				<Link
					href="/blog"
					className="mb-8 inline-flex items-center text-primary transition-colors hover:text-primary/80"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="mr-2 h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
							clipRule="evenodd"
						/>
					</svg>
					Back to Blog
				</Link>

				<div className="mb-8">
					<h1 className="mb-2 font-display text-3xl tracking-tight text-foreground">
						Posts tagged with{" "}
						<span className="text-primary">&ldquo;{tagName}&rdquo;</span>
					</h1>
					<p className="text-muted-foreground">
						{posts.length} {posts.length === 1 ? "post" : "posts"} found
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{posts.map((post: Post) => (
						<BlogPostCard key={post.id} post={post} />
					))}
				</div>
			</div>
		</div>
	);
}

function BlogPostCard({ post }: { post: Post }) {
	const formattedDate = new Date(post.published_at).toLocaleDateString("en", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<Link href={`/blog/${post.slug}`} className="group">
			<div className="h-full overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/30">
				{post.feature_image && (
					<div className="relative h-48 w-full">
						<Image
							src={post.feature_image}
							alt={post.title}
							fill
							className="object-cover"
						/>
					</div>
				)}
				<div className="p-6">
					<h2 className="mb-2 line-clamp-2 text-xl font-semibold transition-colors group-hover:text-primary">
						{post.title}
					</h2>
					<p className="mb-4 text-sm text-muted-foreground">
						{formattedDate} • {post.reading_time} min read
					</p>
					<p className="line-clamp-2 text-muted-foreground">
						{post.custom_excerpt || post.excerpt}
					</p>
					<div className="mt-4 flex items-center">
						{post.primary_author?.profile_image && (
							<div className="relative mr-3 h-10 w-10 overflow-hidden rounded-full">
								<Image
									src={post.primary_author.profile_image}
									alt={post.primary_author.name}
									fill
									className="object-cover"
								/>
							</div>
						)}
						<p className="font-medium text-foreground">
							{post.primary_author?.name || "Unknown Author"}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
}
