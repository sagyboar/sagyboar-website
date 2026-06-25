"use client";

import { motion } from "framer-motion";
import NumberTicker from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";
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
					className="group relative"
				>
					<div
						aria-hidden
						className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/50 via-fuchsia-500/25 to-orange-400/40 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"
					/>
					<div
						className={cn(
							"relative overflow-hidden rounded-2xl p-[1px]",
							"bg-gradient-to-br from-primary/35 via-border/40 to-orange-400/30",
						)}
					>
						<div className="relative rounded-[calc(1rem-1px)] bg-card/75 px-4 py-5 backdrop-blur-md dark:bg-card/55">
							<div
								aria-hidden
								className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
							/>
							<p className="relative font-display text-2xl font-bold tracking-tight sm:text-3xl">
								<span className="inline-flex items-baseline gap-0.5">
									{stat.prefix ? (
										<span className="bg-gradient-to-r from-primary via-violet-500 to-orange-400 bg-clip-text text-transparent">
											{stat.prefix}
										</span>
									) : null}
									<NumberTicker
										value={stat.end}
										decimalPlaces={stat.decimalPlaces}
										delay={0.15 + index * 0.1}
										className="text-black dark:text-white"
									/>
									<span className="text-black dark:text-white">
										{stat.suffix}
									</span>
								</span>
							</p>
							<p className="relative mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
								{stat.label}
							</p>
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
}
