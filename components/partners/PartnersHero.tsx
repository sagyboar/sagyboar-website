import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { GlowButton, SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { partnerHero } from "./partners-data";

export function PartnersHero() {
	return (
		<ScrollReveal
			as="section"
			className={cn(
				"relative border-b border-sagy-border",
				spacing.sectionYLarge,
			)}
			aria-label="Partner Program hero"
			stagger
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<ScrollRevealItem>
					<SectionHeading
						eyebrow={partnerHero.eyebrow}
						title={partnerHero.title}
						titleHighlight={partnerHero.titleHighlight}
						subline={partnerHero.subline}
						align="center"
						as="h1"
						size="hero"
						className="mx-auto"
					/>
				</ScrollRevealItem>
				<ScrollRevealItem>
					<div className="mt-10 flex flex-wrap items-center justify-center gap-3">
						<GlowButton href={partnerHero.primaryCta.href}>
							{partnerHero.primaryCta.label}
						</GlowButton>
						<GlowButton href={partnerHero.secondaryCta.href} variant="ghost">
							{partnerHero.secondaryCta.label}
						</GlowButton>
					</div>
				</ScrollRevealItem>
			</div>
		</ScrollReveal>
	);
}
