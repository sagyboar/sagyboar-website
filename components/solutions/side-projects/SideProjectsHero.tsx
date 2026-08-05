import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { SolutionStackGraphic } from "@/components/solutions/SolutionStackGraphic";
import type { SolutionPageData } from "@/components/solutions/solution-types";
import { BrowserFrame, GlowButton, SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { ChevronRight, Sparkles } from "lucide-react";

type SideProjectsHeroProps = {
	data: SolutionPageData["spotlight"];
};

/** Primary hero — spotlight copy leads, quickShip mockup on the right */
export function SideProjectsHero({ data }: SideProjectsHeroProps) {
	return (
		<ScrollReveal
			as="section"
			className={cn(
				"relative border-b border-white/[0.08]",
				spacing.sectionYLarge,
			)}
			aria-label="Hero"
			stagger
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
					<div>
						<ScrollRevealItem>
							<p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-sagy-muted">
								Solutions
								<ChevronRight className="size-3" aria-hidden="true" />
								<span className="text-sagy-body">Side Projects</span>
							</p>

							<div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5">
								<Sparkles
									className="size-4 text-sagy-accent"
									strokeWidth={1.75}
									aria-hidden="true"
								/>
								<span className="font-mono text-[11px] uppercase tracking-wider text-sagy-body">
									{data.eyebrow}
								</span>
							</div>
						</ScrollRevealItem>

						<ScrollRevealItem>
							<SectionHeading
								title={data.title}
								titleHighlight={data.titleHighlight}
								subline={data.description}
								as="h1"
								size="hero"
								className="mt-6"
							/>
						</ScrollRevealItem>

						<ScrollRevealItem>
							<div className="mt-10 flex flex-wrap items-center gap-3">
								<GlowButton href={data.ctaHref} external={data.ctaExternal}>
									{data.cta}
								</GlowButton>
								<GlowButton href="/pricing" variant="ghost">
									View pricing
								</GlowButton>
							</div>
						</ScrollRevealItem>
					</div>

					<ScrollRevealItem>
						<BrowserFrame title={data.eyebrow} contentClassName="aspect-[4/3]">
							{data.graphic ? (
								<SolutionStackGraphic
									name={data.graphic}
									label={data.imageAlt}
									className="p-4 sm:p-6"
								/>
							) : null}
						</BrowserFrame>
					</ScrollRevealItem>
				</div>
			</div>
		</ScrollReveal>
	);
}
