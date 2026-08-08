import {
	ScrollReveal,
	ScrollRevealItem,
} from "@/components/design-system/ScrollReveal";
import { cn } from "@/lib/utils";

const STATS = [
	{ label: "Deploy speed", value: "Sub-minute deploys" },
	{ label: "Monitoring", value: "24/7 AI monitoring" },
	{ label: "Supported stacks", value: "Static · SPA · WordPress" },
] as const;

export function FreeDeploySocialProof() {
	return (
		<ScrollReveal
			as="section"
			className="relative border-y border-sagy-border py-10 sm:py-12"
			aria-label="Platform highlights"
			stagger
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<ScrollRevealItem>
					<p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-sagy-muted">
						Trusted by builders shipping on Sagyboar
					</p>
				</ScrollRevealItem>
				<div className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-4">
					{STATS.map((stat) => (
						<ScrollRevealItem key={stat.label}>
							<div className="text-center">
								<p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sagy-muted">
									{stat.label}
								</p>
								<p
									className={cn(
										"mt-2 font-display text-lg uppercase tracking-tight text-sagy-heading sm:text-xl",
									)}
								>
									{stat.value}
								</p>
							</div>
						</ScrollRevealItem>
					))}
				</div>
			</div>
		</ScrollReveal>
	);
}
