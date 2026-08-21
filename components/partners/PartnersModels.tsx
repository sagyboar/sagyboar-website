import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { partnerModels } from "./partners-data";

export function PartnersModels() {
	return (
		<ScrollReveal
			as="section"
			id="models"
			className={cn(
				"scroll-mt-28 border-b border-sagy-border",
				spacing.sectionY,
			)}
			aria-label="Partnership models"
			stagger
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<ScrollRevealItem>
					<SectionHeading
						title="Partnership models"
						titleHighlight="models"
						align="center"
						className="mx-auto"
					/>
				</ScrollRevealItem>

				<div className="mt-14 grid gap-6 pt-3 lg:grid-cols-3 lg:items-stretch">
					{partnerModels.map((model) => {
						const Icon = model.icon;

						return (
							<ScrollRevealItem key={model.name} className="h-full">
								<article
									className={cn(
										"sagy-spotlight relative flex h-full flex-col rounded-xl border bg-sagy-surface px-6 py-8 shadow-sagy-card transition-colors duration-300",
										model.featured
											? "border-sagy-accent/30"
											: "border-sagy-border hover:border-sagy-accent/25",
									)}
								>
									{model.featured ? (
										<span className="absolute -top-2.5 left-6 inline-flex items-center rounded-full border border-sagy-accent/30 bg-sagy-surface px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-sagy-accent">
											Most popular
										</span>
									) : null}

									<div className="flex items-center gap-3">
										<span
											className="font-display text-2xl leading-none text-sagy-heading/[0.14]"
											aria-hidden="true"
										>
											{model.number}
										</span>
										<span
											className="h-px w-8 bg-gradient-to-r from-sagy-accent/50 to-transparent"
											aria-hidden="true"
										/>
										<span className="flex size-10 items-center justify-center rounded-lg border border-sagy-border bg-sagy-heading/[0.04]">
											<Icon
												className="size-4 text-sagy-body"
												strokeWidth={1.5}
												aria-hidden="true"
											/>
										</span>
									</div>

									<h3 className="mt-5 font-display text-xl uppercase tracking-tight text-sagy-heading sm:text-2xl">
										{model.name}
									</h3>
									<p className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-sagy-muted">
										{model.bestFor}
									</p>
									<p className="mt-4 font-sans text-sm leading-relaxed text-sagy-body">
										{model.description}
									</p>

									<ul className="mt-6 flex flex-col gap-2.5">
										{model.bullets.map((bullet) => (
											<li
												key={bullet}
												className="flex gap-2 font-sans text-sm leading-relaxed text-sagy-body"
											>
												<Check
													className="mt-0.5 size-3.5 shrink-0 text-sagy-accent"
													strokeWidth={2}
													aria-hidden="true"
												/>
												{bullet}
											</li>
										))}
									</ul>

									<div className="mt-auto pt-6">
										<span className="inline-flex items-center rounded-full border border-sagy-accent/30 bg-sagy-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-sagy-accent">
											{model.rate}
										</span>
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
