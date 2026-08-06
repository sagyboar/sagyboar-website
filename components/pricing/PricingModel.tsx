"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { PricingSectionHeading } from "./PricingSectionHeading";
import {
	type PricingAudience,
	byocSteps,
	indieInfraSteps,
	indieSupportSteps,
	sharedDevOpsSteps,
} from "./pricing-data";

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
			className="relative flex flex-col sagy-spotlight rounded-xl border border-sagy-border bg-sagy-surface p-6 shadow-sagy-card transition-colors hover:border-sagy-accent/25"
		>
			<div className="flex items-center justify-between">
				<div className="flex size-10 items-center justify-center rounded-lg border border-sagy-border bg-sagy-heading/[0.04]">
					<Icon className="size-4 text-sagy-body" strokeWidth={1.5} />
				</div>
				<span className="font-display text-3xl text-sagy-heading/10">{item.step}</span>
			</div>
			<h3 className="mt-5 font-sans text-base font-medium text-sagy-heading">
				{item.title}
			</h3>
			<p className="mt-2 font-sans text-sm leading-relaxed text-sagy-body">
				{item.description}
			</p>
		</motion.article>
	);
}

type PricingModelProps = {
	audience: PricingAudience;
};

export function PricingModel({ audience }: PricingModelProps) {
	const isIndie = audience === "user";

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={audience}
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -8 }}
				transition={{ duration: 0.2 }}
				className="mx-auto max-w-7xl"
			>
				{isIndie ? (
					<>
						<PricingSectionHeading
							before="The Indie model — simple"
							highlight="hosting"
						/>
						<p className="mx-auto mt-4 max-w-2xl text-center text-sagy-body">
							We host your app on our VPS. You bring the database. You pay
							monthly or annually in USD — no cloud account required.
						</p>
						<div className="mt-10 grid gap-6 md:grid-cols-3">
							{indieInfraSteps.map((item, index) => (
								<StepCard key={item.step} item={item} index={index} />
							))}
						</div>

						<div className="mt-20">
							<PricingSectionHeading
								before="Monitoring &"
								highlight="support"
							/>
							<p className="mx-auto mt-4 max-w-2xl text-center text-sagy-body">
								AI monitoring grows with your tier. Full shared DevOps stays on
								Team BYOC plans.
							</p>
							<div className="mt-10 grid gap-6 md:grid-cols-3">
								{indieSupportSteps.map((item, index) => (
									<StepCard key={item.step} item={item} index={index} />
								))}
							</div>
						</div>
					</>
				) : (
					<>
						<PricingSectionHeading
							before="The BYOC model — why it's"
							highlight="genius"
						/>
						<p className="mx-auto mt-4 max-w-2xl text-center text-sagy-body">
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
							<p className="mx-auto mt-4 max-w-2xl text-center text-sagy-body">
								One team, powered by AI, supporting many projects — so you scale
								without hiring.
							</p>
							<div className="mt-10 grid gap-6 md:grid-cols-3">
								{sharedDevOpsSteps.map((item, index) => (
									<StepCard key={item.step} item={item} index={index} />
								))}
							</div>
						</div>
					</>
				)}
			</motion.div>
		</AnimatePresence>
	);
}
