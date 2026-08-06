import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import {
	Badge,
	BrowserFrame,
	FinalCTA,
	GlowButton,
	PageShell,
	SectionHeading,
} from "@/components/ui/sagy";
import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FeatureBentoCard } from "./FeatureBentoCard";
import { FeatureCapabilities } from "./FeatureCapabilities";
import { FeatureItemGraphic } from "./FeatureItemGraphic";
import {
	type FeatureBadge as FeatureBadgeType,
	type FeaturePageData,
	featurePages,
} from "./features-data";

const BADGE_ORDER: FeatureBadgeType[] = ["CORE", "AI", "MANAGED", "NEW"];

export function FeaturePage({ feature }: { feature: FeaturePageData }) {
	const Icon = feature.icon;
	const related = featurePages
		.filter((item) => item.slug !== feature.slug)
		.slice(0, 3);
	const heroGraphic = feature.items.find((item) => item.graphic)?.graphic;
	const badgesPresent = BADGE_ORDER.filter((badge) =>
		feature.items.some((item) => item.badge === badge),
	);

	return (
		<PageShell>
			{/* Hero — headline + live graphic showcase */}
			<ScrollReveal
				as="section"
				className={cn(
					"relative border-b border-sagy-border",
					spacing.sectionYLarge,
				)}
				aria-label="Feature hero"
				stagger
			>
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<div>
							<ScrollRevealItem>
								<nav
									aria-label="Breadcrumb"
									className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-sagy-muted"
								>
									<Link
										href="/features"
										className="transition-colors hover:text-sagy-heading"
									>
										Features
									</Link>
									<ChevronRight className="size-3" aria-hidden="true" />
									<span>{feature.group}</span>
								</nav>

								<div className="mt-5 inline-flex items-center gap-2 rounded-full border border-sagy-border bg-sagy-heading/[0.04] px-3 py-1.5">
									<Icon
										className="size-4 text-sagy-accent"
										strokeWidth={1.75}
										aria-hidden="true"
									/>
									<span className="font-mono text-[11px] uppercase tracking-wider text-sagy-body">
										{feature.title}
									</span>
								</div>
							</ScrollRevealItem>

							<ScrollRevealItem>
								<SectionHeading
									title={feature.headline}
									titleHighlight={feature.headlineHighlight}
									subline={feature.summary}
									as="h1"
									size="hero"
									className="mt-6"
								/>
							</ScrollRevealItem>

							<ScrollRevealItem>
								<div className="mt-8 flex flex-wrap items-center gap-3">
									<span className="font-mono text-[11px] uppercase tracking-wider text-sagy-muted">
										{feature.items.length} capabilities
									</span>
									<span
										className="h-3 w-px bg-sagy-heading/[0.12]"
										aria-hidden="true"
									/>
									{badgesPresent.map((badge) => (
										<Badge key={badge} variant={badge} />
									))}
								</div>

								<div className="mt-10 flex flex-wrap items-center gap-3">
									<GlowButton href={Sagyboar_PORTAL_URL} external>
										Get started
									</GlowButton>
									<GlowButton href="/contact" variant="ghost">
										Talk to sales
									</GlowButton>
								</div>
							</ScrollRevealItem>
						</div>

						<ScrollRevealItem>
							<BrowserFrame
								title={feature.title}
								contentClassName="aspect-[4/3]"
							>
								{heroGraphic ? (
									<FeatureItemGraphic
										name={heroGraphic}
										label={`${feature.title} overview`}
										className="p-4 sm:p-6"
									/>
								) : null}
							</BrowserFrame>
						</ScrollRevealItem>
					</div>
				</div>
			</ScrollReveal>

			<FeatureCapabilities featureTitle={feature.title} items={feature.items} />

			{/* Related features */}
			<ScrollReveal
				as="section"
				className={cn("border-b border-sagy-border", spacing.sectionY)}
				aria-label="Explore more features"
				stagger
			>
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<ScrollRevealItem>
						<SectionHeading
							title="Explore more features"
							titleHighlight="features"
							subline="One platform for deployment, monitoring, diagnosis, and your team."
							align="center"
							className="mx-auto"
						/>
					</ScrollRevealItem>

					<div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{related.map((item) => (
							<ScrollRevealItem key={item.slug}>
								<FeatureBentoCard slug={item.slug} size="default" />
							</ScrollRevealItem>
						))}
					</div>
				</div>
			</ScrollReveal>

			<FinalCTA
				title="Ready to ship with Sagyboar?"
				titleHighlight="Sagyboar?"
				subline="Deploy your first app in minutes, or talk to us about a managed setup for your team."
				primaryCta={{
					label: "Get started",
					href: Sagyboar_PORTAL_URL,
					external: true,
				}}
				secondaryCta={{ label: "View pricing", href: "/pricing" }}
				className="pb-24"
			/>
		</PageShell>
	);
}
