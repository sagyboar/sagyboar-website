import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { BrowserFrame, GlowButton, SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SolutionStackGraphic } from "./SolutionStackGraphic";
import type { SolutionPageData } from "./solution-types";

type SolutionSpotlightProps = {
	data: SolutionPageData["spotlight"];
};

export function SolutionSpotlight({ data }: SolutionSpotlightProps) {
	return (
		<ScrollReveal
			as="section"
			className={cn(
				"border-b border-sagy-border bg-sagy-surface/40",
				spacing.sectionY,
			)}
			aria-label={data.title}
			stagger
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
					{/* Media leads on desktop — mirrors the hero's text-first layout */}
					<ScrollRevealItem className="lg:order-1">
						<BrowserFrame title={data.eyebrow} contentClassName="aspect-[4/3]">
							{data.graphic ? (
								<SolutionStackGraphic
									name={data.graphic}
									label={data.imageAlt}
									className="p-4 sm:p-6"
								/>
							) : (
								<Image
									src={data.image}
									alt={data.imageAlt}
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 50vw"
								/>
							)}
						</BrowserFrame>
					</ScrollRevealItem>

					<ScrollRevealItem className="lg:order-2">
						<SectionHeading
							eyebrow={data.eyebrow}
							title={data.title}
							titleHighlight={data.titleHighlight}
							subline={data.description}
						/>
						<div className="mt-8">
							<GlowButton href={data.ctaHref} external={data.ctaExternal}>
								{data.cta}
							</GlowButton>
						</div>
					</ScrollRevealItem>
				</div>
			</div>
		</ScrollReveal>
	);
}
