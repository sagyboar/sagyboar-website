"use client";

import NumberTicker from "@/components/ui/number-ticker";
import { motion } from "framer-motion";
import { pricingStats } from "./pricing-data";

export function PricingHeroStats() {
	return (
		<div className="mt-10 grid gap-4 sm:grid-cols-3">
			{pricingStats.map((stat, index) => (
				<motion.div
					key={stat.label}
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-40px" }}
					transition={{
						duration: 0.5,
						delay: index * 0.12,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="group relative overflow-hidden sagy-spotlight rounded-xl border border-sagy-border bg-sagy-surface px-4 py-5 shadow-sagy-card transition-colors hover:border-sagy-accent/25"
				>
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sagy-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					/>
					<p className="relative font-display text-2xl tracking-tight sm:text-3xl">
						<span className="inline-flex items-baseline gap-0.5">
							{stat.prefix ? (
								<span className="text-sagy-accent">{stat.prefix}</span>
							) : null}
							<NumberTicker
								value={stat.end}
								decimalPlaces={stat.decimalPlaces}
								delay={0.15 + index * 0.1}
								className="text-sagy-heading"
							/>
							<span className="text-sagy-heading">{stat.suffix}</span>
						</span>
					</p>
					<p className="relative mt-2 font-sans text-xs leading-relaxed text-sagy-body sm:text-sm">
						{stat.label}
					</p>
				</motion.div>
			))}
		</div>
	);
}
