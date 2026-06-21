import { Container } from "@/components/Container";
import { HeroParticleWave } from "@/components/hero/hero-particle-wave";
import { getDummyPosts, getDummyTags } from "@/constants/blog-posts";
import type { Post } from "@/lib/ghost";
import { RssIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostCard } from "./components/BlogPostCard";
import { SearchAndFilter } from "./components/SearchAndFilter";

export const metadata: Metadata = {
	title: "Blog",
	description: "Latest news, updates, and articles from Sagyboar",
};

export default async function BlogPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const searchParams2 = await searchParams;
	const posts = getDummyPosts();
	const tags = getDummyTags();
	const search =
		typeof searchParams2.search === "string" ? searchParams2.search : "";
	const selectedTag =
		typeof searchParams2.tag === "string" ? searchParams2.tag : "";

	const filteredPosts = posts.filter((post) => {
		const matchesSearch =
			search === "" ||
			post.title.toLowerCase().includes(search.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(search.toLowerCase());

		const matchesTag =
			selectedTag === "" || post.tags?.some((tag) => tag.slug === selectedTag);

		return matchesSearch && matchesTag;
	});

	return (
		<div className="min-h-screen bg-background">
			<section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28">
				<HeroParticleWave />
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[58%] bg-gradient-to-b from-background via-background/95 to-transparent"
				/>
				<Container className="relative z-10">
					<div className="mx-auto max-w-5xl">
						<div className="flex items-center justify-between gap-4">
							<div>
								<p className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">
									Blog
								</p>
								<h1 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
									Sagyboar latest news & updates
								</h1>
							</div>
							<Link
								href="/rss.xml"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="RSS feed"
							>
								<RssIcon className="h-5 w-5" />
							</Link>
						</div>
					</div>
				</Container>
			</section>

			<Container className="py-12">
				<div className="mx-auto max-w-5xl">
					<SearchAndFilter
						tags={tags}
						initialSearch={search}
						initialTag={selectedTag}
						searchPlaceholder="Search posts..."
						allTagsText="All Tags"
					/>

					{filteredPosts.length === 0 ? (
						<div className="flex min-h-[20vh] items-center justify-center py-12 text-center">
							<p className="text-xl text-muted-foreground">
								{search || selectedTag
									? "No posts found matching your criteria"
									: "No posts available"}
							</p>
						</div>
					) : (
						<div className="space-y-8">
							{filteredPosts.map((post: Post) => (
								<BlogPostCard key={post.id} post={post} />
							))}
						</div>
					)}
				</div>
			</Container>
		</div>
	);
}
