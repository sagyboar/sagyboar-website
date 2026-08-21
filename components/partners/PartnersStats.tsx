import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { Card } from "@/components/ui/sagy";
import { partnerStats } from "./partners-data";

export function PartnersStats() {
	return (
		<ScrollReveal
			as="section"
			className="relative z-10 border-b border-sagy-border px-4 py-12 sm:px-6 sm:py-16"
			aria-label="Partner capabilities"
			stagger
		>
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
					{partnerStats.map((stat) => (
						<ScrollRevealItem key={stat.label}>
							<Card spotlight className="h-full px-4 py-5 sm:p-6">
								<p className="font-display text-3xl uppercase tracking-tight text-sagy-heading sm:text-4xl">
									{stat.metric}
								</p>
								<p className="mt-2 font-sans text-xs leading-relaxed text-sagy-body sm:text-sm">
									{stat.label}
								</p>
							</Card>
						</ScrollRevealItem>
					))}
				</div>
			</div>
		</ScrollReveal>
	);
}
