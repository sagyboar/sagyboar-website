import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { FeatureBadge } from "./FeatureBadge";
import { FeatureItemMedia } from "./FeatureItemMedia";
import type { FeatureItem } from "./features-data";

type FeatureCapabilitiesProps = {
	featureTitle: string;
	items: FeatureItem[];
};

const anchorId = (index: number) => `capability-${index + 1}`;
const stepLabel = (index: number) => String(index + 1).padStart(2, "0");

export function FeatureCapabilities({
	featureTitle,
	items,
}: FeatureCapabilitiesProps) {
	return (
		<ScrollReveal
			as="section"
			className={cn("border-b border-white/[0.08]", spacing.sectionY)}
			aria-label="What's included"
			stagger
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<ScrollRevealItem>
					<SectionHeading
						title="What's included"
						titleHighlight="included"
						subline={`Everything ${featureTitle} brings to your stack.`}
						align="center"
						className="mx-auto"
					/>
				</ScrollRevealItem>

				{/* Jump links — quick index of every capability below */}
				<ScrollRevealItem>
					<ul className="mt-10 flex flex-wrap justify-center gap-2">
						{items.map((item, index) => (
							<li key={item.name}>
								<a
									href={`#${anchorId(index)}`}
									className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 font-sans text-xs text-sagy-body transition-colors hover:border-sagy-accent/30 hover:bg-sagy-accent/10 hover:text-white"
								>
									<span className="font-mono text-[10px] text-sagy-accent">
										{stepLabel(index)}
									</span>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</ScrollRevealItem>

				<div className="mt-16 flex flex-col gap-16 sm:mt-20 sm:gap-24">
					{items.map((item, index) => {
						const mediaFirst = index % 2 === 1;

						return (
							<ScrollRevealItem key={item.name}>
								<article
									id={anchorId(index)}
									className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-16"
								>
									<div className={cn("min-w-0", mediaFirst && "lg:order-2")}>
										<div className="flex items-center gap-3">
											<span
												className="font-display text-3xl leading-none text-white/[0.12]"
												aria-hidden="true"
											>
												{stepLabel(index)}
											</span>
											<span
												className="h-px w-8 bg-gradient-to-r from-sagy-accent/50 to-transparent"
												aria-hidden="true"
											/>
											<FeatureBadge badge={item.badge} />
										</div>

										<h3 className="mt-5 font-display text-2xl uppercase tracking-tight text-white sm:text-3xl">
											{item.name}
										</h3>
										<p className="mt-4 font-sans text-base leading-relaxed text-sagy-body sm:text-lg">
											{item.description}
										</p>
									</div>

									<div className={cn("min-w-0", mediaFirst && "lg:order-1")}>
										<FeatureItemMedia item={item} />
									</div>
								</article>
							</ScrollRevealItem>
						);
					})}
				</div>
			</div>
		</ScrollReveal>
	);
}
