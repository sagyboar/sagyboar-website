import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { PageShell, SectionHeading } from "@/components/ui/sagy";
import { pageSeo } from "@/constants/seo-data";
import { getPosts } from "@/lib/sanity/queries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.blog);

export const revalidate = 60;

export default async function BlogIndexPage() {
	const posts = await getPosts();

	return (
		<PageShell>
			<section className="mx-auto max-w-6xl pb-20 pt-28 sm:pb-28 sm:pt-32">
				<SectionHeading
					as="h1"
					size="hero"
					eyebrow="Blog"
					title="Notes from the control plane"
					titleHighlight="control plane"
					subline="Product updates, DevOps thinking, and how Sagyboar helps teams ship without a dedicated ops hire."
				/>

				{posts.length === 0 ? (
					<div className="mt-16 rounded-2xl border border-sagy-border bg-sagy-heading/[0.03] px-6 py-16 text-center">
						<p className="font-mono text-xs uppercase tracking-[0.2em] text-sagy-muted">
							Coming soon
						</p>
						<p className="mx-auto mt-4 max-w-md font-sans text-base text-sagy-body">
							No posts published yet. Create an Author and Post in{" "}
							<span className="text-sagy-heading">/studio</span>, then publish
							to see them here.
						</p>
					</div>
				) : (
					<div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:gap-8">
						{posts.map((post) => (
							<BlogPostCard key={post._id} post={post} />
						))}
					</div>
				)}
			</section>
		</PageShell>
	);
}
