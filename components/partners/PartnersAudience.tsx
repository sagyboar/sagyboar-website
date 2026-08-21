import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { Card, SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { partnerAudiences } from "./partners-data";

export function PartnersAudience() {
	return (
		<ScrollReveal
			as="section"
			className={cn("border-b border-sagy-border", spacing.sectionY)}
			aria-label="Who it's for"
			stagger
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<ScrollRevealItem>
					<SectionHeading
						title="Who it's for"
						titleHighlight="for"
						align="center"
						className="mx-auto"
					/>
				</ScrollRevealItem>

				<div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2">
					{partnerAudiences.map((audience) => {
						const Icon = audience.icon;

						return (
							<ScrollRevealItem key={audience.title}>
								<Card spotlight tilt className="h-full">
									<div className="flex items-center justify-between gap-3">
										<span className="flex size-10 items-center justify-center rounded-lg border border-sagy-border bg-sagy-heading/[0.04]">
											<Icon
												className="size-4 text-sagy-body"
												strokeWidth={1.5}
												aria-hidden="true"
											/>
										</span>
										<span className="inline-flex items-center rounded-full border border-sagy-accent/30 bg-sagy-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-sagy-accent">
											{audience.tag}
										</span>
									</div>
									<h3 className="mt-4 font-display text-xl uppercase leading-tight tracking-tight text-sagy-heading sm:text-2xl">
										{audience.title}
									</h3>
									<p className="mt-3 font-sans text-sm leading-relaxed text-sagy-body sm:text-base">
										{audience.description}
									</p>
								</Card>
							</ScrollRevealItem>
						);
					})}
				</div>
			</div>
		</ScrollReveal>
	);
}
