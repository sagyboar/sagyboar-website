import { Card } from "@/components/design-system/Card";
import {
	ScrollReveal,
	ScrollRevealItem,
} from "@/components/design-system/ScrollReveal";
import { SectionHeading } from "@/components/design-system/SectionHeading";
import { testimonials } from "@/components/home/data/home-content";
import { cn } from "@/lib/utils";

export function HomeTestimonials() {
	return (
		<ScrollReveal
			as="section"
			className="relative z-10 px-4 py-24 sm:px-6 sm:py-28"
			aria-label="Testimonials"
			stagger
		>
			<div className="mx-auto max-w-6xl">
				<ScrollRevealItem>
					<SectionHeading
						eyebrow="TESTIMONIALS"
						title="Loved by engineers who ship"
						titleHighlight="ship"
						align="center"
						className="mx-auto mb-16"
					/>
				</ScrollRevealItem>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{testimonials.map((t, i) => (
						<ScrollRevealItem key={t.name}>
							<Card
								spotlight={false}
								className={cn(
									"relative h-full",
									i === 0 &&
										"before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sagy-accent/50 before:to-transparent",
								)}
							>
								<blockquote className="font-sans text-base leading-relaxed text-sagy-body">
									&ldquo;{t.quote}&rdquo;
								</blockquote>
								<footer className="mt-6 flex items-center gap-3">
									<div
										className="flex size-10 items-center justify-center rounded-full border border-sagy-border bg-sagy-heading/[0.04] font-mono text-sm text-sagy-heading"
										aria-hidden="true"
									>
										{t.initial}
									</div>
									<div>
										<p className="font-sans text-sm font-medium text-sagy-heading">
											{t.name}
										</p>
										<p className="font-mono text-xs text-sagy-muted">
											{t.company}
										</p>
									</div>
								</footer>
							</Card>
						</ScrollRevealItem>
					))}
				</div>
			</div>
		</ScrollReveal>
	);
}
