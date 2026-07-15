"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { audiencePlanFitGuide, type PricingAudience } from "./pricing-data";

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
							className="group relative min-h-[22rem] overflow-hidden rounded-3xl border border-border/60"
						>
							<div
								aria-hidden
								className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
								style={{ backgroundImage: `url(${guide.backgroundImage})` }}
							/>
							<div
								aria-hidden
								className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/25"
							/>
							<div className="relative z-10 flex h-full flex-col justify-between p-6">
								<div className="flex size-10 items-center justify-center rounded-xl border border-border/50 bg-background/70 text-foreground shadow-sm backdrop-blur-sm">
									<Icon className="size-4" strokeWidth={1.75} />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-foreground">
										{guide.plan}{" "}
										<span className="text-primary">{guide.price}</span>
									</h3>
									<p className="mt-3 text-sm font-medium text-foreground">
										{guide.audience}
									</p>
									<ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
										{guide.points.map((point) => (
											<li key={point} className="flex gap-2">
												<Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
												{point}
											</li>
										))}
									</ul>
								</div>
							</div>
						</motion.article>
					);
				})}
			</motion.div>
		</AnimatePresence>
	);
}
