import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { HeadingHighlight } from "@/components/solutions/HeadingHighlight";
import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import { FeatureCtaBackground, FeatureDetailBackground } from "./FeatureBackgrounds";
import { FeatureCapabilities } from "./FeatureCapabilities";
import { RelatedFeatureCard } from "./RelatedFeatureCard";
import { featurePages, type FeaturePageData } from "./features-data";

export function FeaturePage({ feature }: { feature: FeaturePageData }) {
	const Icon = feature.icon;
	const related = featurePages
		.filter((item) => item.slug !== feature.slug)
		.slice(0, 3);

	return (
		<div className="min-h-screen bg-background">
			{/* Hero */}
			<section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-32">
				<FeatureDetailBackground />
				<Container className="relative z-10">
					<div className="mx-auto max-w-3xl text-center">
						<div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm">
							<Icon className="size-4 text-primary" aria-hidden />
							<span>{feature.title}</span>
						</div>

						<h1 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
							<HeadingHighlight
								text={feature.headline}
								highlight={feature.headlineHighlight}
							/>
						</h1>
						<p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
							{feature.summary}
						</p>

						<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
							<Button asChild size="lg" className="gap-2 rounded-full">
								<Link href={Sagyboar_PORTAL_URL} target="_blank">
									Get started
									<ArrowUpRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="rounded-full"
							>
								<Link href="/contact">Talk to sales</Link>
							</Button>
						</div>
					</div>
				</Container>
			</section>

			<FeatureCapabilities
				featureTitle={feature.title}
				items={feature.items}
			/>

			{/* Related features */}
			<section className="py-20 sm:py-28">
				<Container>
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
							<HeadingHighlight text="Explore more features" highlight="features" />
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							One platform for deployment, monitoring, diagnosis, and your team.
						</p>
					</div>

					<div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{related.map((item) => {
							const RelatedIcon = item.icon;
							return (
								<RelatedFeatureCard
									key={item.slug}
									slug={item.slug}
									title={item.navTitle}
									description={item.navDescription}
									icon={
										<RelatedIcon className="size-5" strokeWidth={1.75} />
									}
								/>
							);
						})}
					</div>
				</Container>
			</section>

			{/* CTA */}
			<section className="relative overflow-hidden py-20 mb-20 sm:py-28 max-w-5xl mx-auto rounded-2xl border">
				<FeatureCtaBackground />
				<Container className="relative z-10">
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
							<HeadingHighlight
								text="Ready to ship with Sagyboar?"
								highlight="Sagyboar?"
							/>
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Deploy your first app in minutes, or talk to us about a managed
							setup for your team.
						</p>
						<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
							<Button asChild size="lg" className="gap-2 rounded-full">
								<Link href={Sagyboar_PORTAL_URL} target="_blank">
									Get started
									<ArrowUpRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="rounded-full"
							>
								<Link href="/pricing">View pricing</Link>
							</Button>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}
