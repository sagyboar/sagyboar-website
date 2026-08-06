import {
	CtaPanel,
	GlowButton,
	ScrollReveal,
	ScrollRevealItem,
	SectionHeading,
} from "@/components/design-system";
import { PageShell } from "@/components/design-system/PageShell";
import { FeatureBentoCard } from "@/components/features/FeatureBentoCard";
import {
	getFeatureCardSize,
	sortFeaturesForBento,
} from "@/components/features/feature-bento-config";
import {
	type FeatureGroup,
	featurePages,
} from "@/components/features/features-data";
import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import { spacing } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

const GROUP_ORDER: FeatureGroup[] = ["Platform", "AI & Operations"];

const GROUP_BLURB: Record<FeatureGroup, string> = {
	Platform:
		"Everything you need to ship and run apps — deployments, pipelines, databases, and infrastructure.",
	"AI & Operations":
		"An embedded AI layer plus a managed team that monitors, diagnoses, heals, and reviews on your behalf.",
};

const GROUP_HIGHLIGHT: Record<FeatureGroup, string> = {
	Platform: "Platform",
	"AI & Operations": "Operations",
};

export function FeaturesIndexPage() {
	return (
		<PageShell>
			{/* Hero — same treatment as homepage */}
			<ScrollReveal
				as="section"
				className={cn(
					"relative border-b border-sagy-border",
					spacing.sectionYLarge,
				)}
				aria-label="Features hero"
				stagger
			>
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<ScrollRevealItem>
						<SectionHeading
							eyebrow="Platform Feature Reference"
							title="One platform for your entire stack"
							titleHighlight="entire stack"
							subline="An AI-native, self-hosted DevOps platform that unifies deployment, monitoring, diagnosis, self-healing, and your engineering team — all from one control plane."
							align="center"
							as="h1"
							size="hero"
							className="mx-auto"
						/>
					</ScrollRevealItem>
					<ScrollRevealItem>
						<div className="mt-10 flex flex-wrap items-center justify-center gap-3">
							<GlowButton href={Sagyboar_PORTAL_URL} external>
								Get started
							</GlowButton>
							<GlowButton href="/pricing" variant="ghost">
								View pricing
							</GlowButton>
						</div>
					</ScrollRevealItem>
				</div>
			</ScrollReveal>

			{/* Feature groups — bento grid */}
			{GROUP_ORDER.map((group) => {
				const groupFeatures = sortFeaturesForBento(
					featurePages.filter((feature) => feature.group === group),
				);

				return (
					<ScrollReveal
						key={group}
						id={group === "Platform" ? "platform" : "ai-operations"}
						as="section"
						className={cn("border-b border-sagy-border", spacing.sectionY)}
						aria-label={group}
						stagger
					>
						<div className="mx-auto max-w-6xl px-4 sm:px-6">
							<ScrollRevealItem>
								<SectionHeading
									title={group}
									titleHighlight={GROUP_HIGHLIGHT[group]}
									subline={GROUP_BLURB[group]}
									align="center"
									className="mx-auto"
								/>
							</ScrollRevealItem>

							<div className="mx-auto mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{groupFeatures.map((feature) => {
									const size = getFeatureCardSize(feature.slug);
									return (
										<ScrollRevealItem
											key={feature.slug}
											className={cn(
												size === "hero" && "sm:col-span-2 lg:row-span-2",
												size === "wide" && "sm:col-span-2",
											)}
										>
											<FeatureBentoCard slug={feature.slug} size={size} tilt />
										</ScrollRevealItem>
									);
								})}
							</div>
						</div>
					</ScrollReveal>
				);
			})}

			{/* CTA — brand panel matching homepage finale */}
			<CtaPanel
				title="Ready to ship with Sagyboar?"
				titleHighlight="Sagyboar?"
				subline="Deploy your first app in minutes, or talk to us about a managed setup for your team."
				primaryCta={{
					label: "Get started",
					href: Sagyboar_PORTAL_URL,
					external: true,
				}}
				secondaryCta={{ label: "Talk to sales", href: "/contact" }}
				className="pb-24"
			/>
		</PageShell>
	);
}
