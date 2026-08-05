import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { type JobsGraphicName, JobsWhyWorkGraphic } from "./JobsWhyWorkGraphic";
import { whyWorkAtSagyboar } from "./jobs-data";

export function JobsWhyWork() {
	return (
		<ScrollReveal
			as="section"
			className={cn("border-b border-white/[0.08]", spacing.sectionY)}
			aria-label="Why work at Sagyboar"
			stagger
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<ScrollRevealItem>
					<SectionHeading
						eyebrow="The offer"
						title="Why work at Sagyboar"
						titleHighlight="Sagyboar"
						subline="A small, remote team selling and building a product engineers actually want."
						align="center"
						className="mx-auto"
					/>
				</ScrollRevealItem>

				<div className="mt-14 flex flex-col gap-6">
					{whyWorkAtSagyboar.map((card, index) => {
						const mediaRight = index % 2 === 1;

						return (
							<ScrollRevealItem key={card.title}>
								<article className="grid overflow-hidden sagy-spotlight rounded-xl border border-white/[0.08] bg-sagy-surface shadow-sagy-card transition-colors duration-300 hover:border-sagy-accent/25 sm:grid-cols-2">
									<div
										className={cn(
											"relative min-h-[14rem] border-b border-white/[0.08] bg-sagy-surface-elevated/70 sm:min-h-[19rem] sm:border-b-0",
											mediaRight
												? "sm:order-2 sm:border-l"
												: "sm:order-1 sm:border-r",
										)}
									>
										<JobsWhyWorkGraphic
											name={card.graphic as JobsGraphicName}
											label={card.imageAlt}
											className="p-4 sm:p-6"
										/>
									</div>

									<div
										className={cn(
											"flex flex-col justify-center p-6 sm:p-8",
											mediaRight ? "sm:order-1" : "sm:order-2",
										)}
									>
										<div className="flex items-center gap-3">
											<span
												className="font-display text-2xl leading-none text-white/[0.14]"
												aria-hidden="true"
											>
												{String(index + 1).padStart(2, "0")}
											</span>
											<span
												className="h-px w-8 bg-gradient-to-r from-sagy-accent/50 to-transparent"
												aria-hidden="true"
											/>
										</div>
										<h3 className="mt-4 font-display text-xl uppercase leading-tight tracking-tight text-white sm:text-2xl">
											{card.title}
										</h3>
										<p className="mt-3 font-sans text-sm leading-relaxed text-sagy-body sm:text-base">
											{card.description}
										</p>
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
