"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { byocSteps, sharedDevOpsSteps } from "./pricing-data";
import { PricingSectionHeading } from "./PricingSectionHeading";

type ModelStep = {
	step: string;
	title: string;
	description: string;
	icon: LucideIcon;
};

function StepCard({ item, index }: { item: ModelStep; index: number }) {
	const Icon = item.icon;
	return (
		<motion.article
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
				ease: [0.22, 1, 0.36, 1],
			}}
			className="relative flex flex-col rounded-3xl border border-border bg-card/50 p-6 shadow-sm"
		>
			<div className="flex items-center justify-between">
				<div className="flex size-11 items-center justify-center rounded-xl border border-border/50 bg-primary/10 text-primary">
					<Icon className="size-5" strokeWidth={1.75} />
				</div>
				<span className="font-display text-3xl font-bold text-muted-foreground/25">
					{item.step}
				</span>
			</div>
			<h3 className="mt-5 text-base font-semibold text-foreground">
				{item.title}
			</h3>
			<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
				{item.description}
			</p>
		</motion.article>
	);
}

export function PricingModel() {
	return (
		<div className="mx-auto max-w-7xl">
			<PricingSectionHeading before="The BYOC model — why it's" highlight="genius" />
			<p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
				You bring the cloud. We bring the platform and the team. Zero
				infrastructure cost sits on us.
			</p>
			<div className="mt-10 grid gap-6 md:grid-cols-3">
				{byocSteps.map((item, index) => (
					<StepCard key={item.step} item={item} index={index} />
				))}
			</div>

			<div className="mt-20">
				<PricingSectionHeading
					before="Shared DevOps team"
					highlight="model"
				/>
				<p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
					One team, powered by AI, supporting many projects — so you scale
					without hiring.
				</p>
				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{sharedDevOpsSteps.map((item, index) => (
						<StepCard key={item.step} item={item} index={index} />
					))}
				</div>
			</div>
		</div>
	);
}
