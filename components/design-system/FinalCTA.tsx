import { spacing } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { GlowButton } from "./GlowButton";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

type FinalCtaAction = {
	label: string;
	href?: string;
	onClick?: () => void;
	external?: boolean;
};

type FinalCTAProps = {
	title: string;
	titleHighlight?: string;
	subline: string;
	primaryCta: FinalCtaAction;
	secondaryCta?: FinalCtaAction;
	className?: string;
	id?: string;
};

/** Indigo-glow finale panel — the single CTA treatment for every page */
export function FinalCTA({
	title,
	titleHighlight,
	subline,
	primaryCta,
	secondaryCta,
	className,
	id,
}: FinalCTAProps) {
	return (
		<ScrollReveal
			as="section"
			id={id}
			className={cn("relative z-10", spacing.sectionY, className)}
			aria-label="Call to action"
			stagger
		>
			<div className="mx-auto max-w-5xl px-4 sm:px-6">
				<ScrollRevealItem>
					<div className="relative overflow-hidden rounded-2xl border border-sagy-accent/20 px-6 py-16 text-center sm:px-12 sm:py-20">
						<div
							className="pointer-events-none absolute inset-0 bg-sagy-grain opacity-20"
							aria-hidden="true"
						/>
						<div
							className="pointer-events-none absolute inset-0 bg-sagy-cta-glow"
							aria-hidden="true"
						/>
						<div className="relative z-10">
							<SectionHeading
								title={title}
								titleHighlight={titleHighlight}
								subline={subline}
								align="center"
								className="mx-auto"
							/>
							<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
								<GlowButton
									href={primaryCta.href}
									onClick={primaryCta.onClick}
									external={primaryCta.external}
									className="!rounded-full"
								>
									{primaryCta.label}
								</GlowButton>
								{secondaryCta && (
									<GlowButton
										href={secondaryCta.href}
										onClick={secondaryCta.onClick}
										external={secondaryCta.external}
										variant="ghost"
									>
										{secondaryCta.label}
									</GlowButton>
								)}
							</div>
						</div>
					</div>
				</ScrollRevealItem>
			</div>
		</ScrollReveal>
	);
}
