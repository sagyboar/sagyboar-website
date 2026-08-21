import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { Card, SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { partnerBenefits } from "./partners-data";

export function PartnersBenefits() {
	return (
		<ScrollReveal
			as="section"
			className={cn("border-b border-sagy-border", spacing.sectionY)}
			aria-label="What you get"
			stagger
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<ScrollRevealItem>
					<SectionHeading
						title="What you get"
						titleHighlight="get"
						align="center"
						className="mx-auto"
					/>
				</ScrollRevealItem>

				<div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{partnerBenefits.map((benefit) => {
						const Icon = benefit.icon;

						return (
							<ScrollRevealItem key={benefit.title}>
								<Card spotlight tilt className="h-full">
									<div className="flex size-10 items-center justify-center rounded-lg border border-sagy-border bg-sagy-heading/[0.04]">
										<Icon
											className="size-4 text-sagy-body"
											strokeWidth={1.5}
											aria-hidden="true"
										/>
									</div>
									<h3 className="mt-4 font-sans text-base font-medium leading-snug text-sagy-heading">
										{benefit.title}
									</h3>
									<p className="mt-3 font-sans text-sm leading-relaxed text-sagy-body">
										{benefit.description}
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
