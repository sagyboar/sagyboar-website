import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { BrowserFrame, GlowButton, SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { Building2, ChevronRight, Rocket, Sparkles } from "lucide-react";
import Image from "next/image";
import { SolutionStackGraphic } from "./SolutionStackGraphic";
import type { SolutionIconName, SolutionPageData } from "./solution-types";

const SOLUTION_ICONS = {
	sparkles: Sparkles,
	rocket: Rocket,
	building2: Building2,
} satisfies Record<SolutionIconName, typeof Sparkles>;

type SolutionHeroProps = {
	data: SolutionPageData["hero"];
};

export function SolutionHero({ data }: SolutionHeroProps) {
	const Icon = SOLUTION_ICONS[data.icon];
	const [priceAmount, pricePeriod] = data.price.split("/");

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
								<span className="text-sagy-body">{data.title}</span>
							</p>

							<div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5">
								<Icon
									className="size-4 text-sagy-accent"
									strokeWidth={1.75}
									aria-hidden="true"
								/>
								<span className="font-mono text-[11px] uppercase tracking-wider text-sagy-body">
									{data.title}
								</span>
							</div>
						</ScrollRevealItem>

						<ScrollRevealItem>
							<SectionHeading
								title={data.headline}
								titleHighlight={data.headlineHighlight}
								subline={data.description}
								as="h1"
								size="hero"
								className="mt-6"
							/>
						</ScrollRevealItem>

						<ScrollRevealItem>
							<div className="mt-8 flex items-baseline gap-1.5">
								<span className="font-display text-3xl uppercase tracking-tight text-white sm:text-4xl">
									{priceAmount}
								</span>
								{pricePeriod && (
									<span className="font-mono text-xs uppercase tracking-wider text-sagy-muted">
										/{pricePeriod}
									</span>
								)}
							</div>

							<div className="mt-8 flex flex-wrap items-center gap-3">
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
						<BrowserFrame title={data.title} contentClassName="aspect-[4/3]">
							{data.heroGraphic ? (
								<SolutionStackGraphic
									name={data.heroGraphic}
									label={data.heroImageAlt}
									className="p-4 sm:p-6"
								/>
							) : (
								<Image
									src={data.heroImage}
									alt={data.heroImageAlt}
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 50vw"
									priority
								/>
							)}
						</BrowserFrame>
					</ScrollRevealItem>
				</div>
			</div>
		</ScrollReveal>
	);
}
