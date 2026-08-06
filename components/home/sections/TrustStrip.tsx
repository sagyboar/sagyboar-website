import {
	ScrollReveal,
	ScrollRevealItem,
} from "@/components/design-system/ScrollReveal";
import { trustStrip } from "@/components/home/data/home-content";

export function TrustStrip() {
	return (
		<ScrollReveal
			as="section"
			className="relative z-10 border-y border-sagy-border px-4 py-12 sm:px-6 sm:py-16"
			aria-label="Trusted by"
			stagger
		>
			<div className="mx-auto max-w-6xl text-center">
				<ScrollRevealItem>
					<p className="font-sans text-sm text-sagy-muted">
						{trustStrip.headline}
					</p>
				</ScrollRevealItem>
				<div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
					{trustStrip.logos.map((logo) => (
						<ScrollRevealItem key={logo}>
							<span className="font-display text-lg uppercase tracking-wide text-sagy-heading/25 transition-colors hover:text-sagy-heading/40 sm:text-xl">
								{logo}
							</span>
						</ScrollRevealItem>
					))}
				</div>
			</div>
		</ScrollReveal>
	);
}
