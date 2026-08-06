"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { type PricingAudience, audiencePlanFitGuide } from "./pricing-data";

type PricingPlanFitGuideProps = {
	audience: PricingAudience;
};

export function PricingPlanFitGuide({ audience }: PricingPlanFitGuideProps) {
	const planFitGuide = audiencePlanFitGuide[audience];

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={audience}
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -8 }}
				transition={{ duration: 0.2 }}
				className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-3"
			>
				{planFitGuide.map((guide, index) => {
					const Icon = guide.icon;
					return (
						<motion.article
							key={guide.id}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="sagy-spotlight group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-xl border border-sagy-accent/30 bg-gradient-to-b from-sagy-accent/10 via-sagy-surface to-sagy-surface p-6 shadow-sagy-card transition-colors hover:border-sagy-accent/45"
						>
							<div className="flex size-10 items-center justify-center rounded-lg border border-sagy-accent/25 bg-sagy-accent/10 text-sagy-accent">
								<Icon className="size-4" strokeWidth={1.5} />
							</div>
							<div>
								<h3 className="font-display text-lg uppercase tracking-tight text-sagy-heading">
									{guide.plan}{" "}
									<span className="text-sagy-accent">{guide.price}</span>
								</h3>
								<p className="mt-3 font-sans text-sm font-medium text-foreground">
									{guide.audience}
								</p>
								<ul className="mt-3 flex flex-col gap-2 font-sans text-sm text-sagy-body">
									{guide.points.map((point) => (
										<li key={point} className="flex gap-2">
											<Check className="mt-0.5 h-4 w-4 shrink-0 text-sagy-accent" />
											{point}
										</li>
									))}
								</ul>
							</div>
						</motion.article>
					);
				})}
			</motion.div>
		</AnimatePresence>
	);
}
