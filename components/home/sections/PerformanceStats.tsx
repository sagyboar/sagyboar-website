import { Card } from "@/components/design-system/Card";
import {
	ScrollReveal,
	ScrollRevealItem,
} from "@/components/design-system/ScrollReveal";
import { SectionHeading } from "@/components/design-system/SectionHeading";
import { performanceStats } from "@/components/home/data/home-content";

export function PerformanceStats() {
	return (
		<ScrollReveal
			as="section"
			className="relative z-10 px-4 py-24 sm:px-6 sm:py-28"
			aria-label="Performance statistics"
			stagger
		>
			<div className="mx-auto max-w-6xl">
				<ScrollRevealItem>
					<SectionHeading
						eyebrow="PERFORMANCE"
						title="Engineered for Performance"
						titleHighlight="Performance"
						align="center"
						className="mx-auto mb-16"
					/>
				</ScrollRevealItem>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{performanceStats.map((stat) => {
						const Icon = stat.icon;
						return (
							<ScrollRevealItem key={stat.label}>
								<Card
									spotlight
									className="relative h-full bg-sagy-mesh bg-sagy-surface"
								>
									<div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
										<Icon className="size-4 text-sagy-body" strokeWidth={1.5} />
									</div>
									<p className="font-display text-4xl uppercase tracking-tight text-white sm:text-5xl">
										{stat.metric}
									</p>
									<p className="mt-2 font-sans text-sm font-medium text-white">
										{stat.label}
									</p>
									<p className="mt-2 font-sans text-sm leading-relaxed text-sagy-body">
										{stat.description}
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
