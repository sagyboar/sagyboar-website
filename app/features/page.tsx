import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FeatureBadge } from "@/components/features/FeatureBadge";
import {
	FeatureCtaBackground,
	FeatureHeroBackground,
} from "@/components/features/FeatureBackgrounds";
import {
	featurePages,
	type FeatureGroup,
} from "@/components/features/features-data";
import { HeadingHighlight } from "@/components/solutions/HeadingHighlight";
import { Button } from "@/components/ui/button";
import { pageSeo } from "@/constants/seo-data";
import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.features);

const GROUP_ORDER: FeatureGroup[] = ["Platform", "AI & Operations"];

const GROUP_BLURB: Record<FeatureGroup, string> = {
	Platform:
		"Everything you need to ship and run apps — deployments, pipelines, databases, and infrastructure.",
	"AI & Operations":
		"An embedded AI layer plus a managed team that monitors, diagnoses, heals, and reviews on your behalf.",
};

export default function FeaturesPage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero */}
			<section className="relative overflow-hidden border-b border-border bg-background py-24 sm:py-32 lg:py-36">
				<FeatureHeroBackground />
				<Container className="relative z-10">
					<div className="mx-auto max-w-3xl text-center">
						<p className="text-sm font-semibold uppercase tracking-wider text-primary">
							Platform Feature Reference
						</p>
						<h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
							<HeadingHighlight
								text="One platform for your entire stack"
								highlight="entire stack"
							/>
						</h1>
						<p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
							An AI-native, self-hosted DevOps platform that unifies deployment,
							monitoring, diagnosis, self-healing, and your engineering team —
							all from one control plane.
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

			{/* Feature groups */}
			{GROUP_ORDER.map((group) => {
				const groupFeatures = featurePages.filter(
					(feature) => feature.group === group,
				);

				return (
					<section
						key={group}
						className="border-b border-border py-20 sm:py-28"
					>
						<Container>
							<div className="mx-auto max-w-3xl text-center">
								<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
									<HeadingHighlight
										text={group}
										highlight={group === "Platform" ? "Platform" : "Operations"}
									/>
								</h2>
								<p className="mt-4 text-lg text-muted-foreground">
									{GROUP_BLURB[group]}
								</p>
							</div>

							<div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
								{groupFeatures.map((feature) => {
									const Icon = feature.icon;
									return (
										<Link
											key={feature.slug}
											href={`/features/${feature.slug}`}
											className="group flex flex-col rounded-2xl border border-border bg-card/50 p-6 shadow-sm transition-colors hover:border-primary/40"
										>
											<div className="flex items-center justify-between">
												<div className="flex size-11 items-center justify-center rounded-xl border border-border/50 bg-accent/30 text-primary">
													<Icon className="size-5" strokeWidth={1.75} />
												</div>
												<FeatureBadge badge={feature.items[0].badge} />
											</div>
											<h3 className="mt-4 text-base font-semibold text-foreground">
												{feature.title}
											</h3>
											<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
												{feature.summary}
											</p>
											<span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
												Explore
												<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
											</span>
										</Link>
									);
								})}
							</div>
						</Container>
					</section>
				);
			})}

			{/* CTA */}
			<section className="relative overflow-hidden py-20 sm:py-28">
				<FeatureCtaBackground />
				<Container className="relative z-10">
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
							<HeadingHighlight
								text="Ready to ship with SAGYBOAR?"
								highlight="SAGYBOAR?"
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
								<Link href="/contact">Talk to sales</Link>
							</Button>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}
