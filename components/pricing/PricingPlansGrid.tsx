"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Users } from "lucide-react";
import Link from "next/link";
import { IndiePricing, PaidPlanCard } from "./IndiePricing";
import {
	audiencePricing,
	pricingModels,
	type FreePricingPlan,
	type PaidPricingPlan,
	type PricingAudience,
} from "./pricing-data";

type PricingPlansGridProps = {
	audience: PricingAudience;
	onTalkToSales: () => void;
};

function FreePlanCard({ plan }: { plan: FreePricingPlan }) {
	return (
		<section
			id={plan.id}
			className="flex flex-col rounded-3xl border-2 border-dashed border-border bg-muted/15 px-5 py-6"
		>
			<p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
				{plan.label}
			</p>
			<h3 className="mt-2 text-base font-semibold text-foreground">
				{plan.name}
			</h3>
			<p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
				{plan.tagline}
			</p>

			<div className="mt-4">
				<span className="text-2xl font-semibold text-foreground">$0</span>
				<span className="text-sm text-muted-foreground">/month</span>
			</div>

			<ul className="mt-4 flex flex-col gap-2 text-xs text-muted-foreground">
				{plan.includes.map((item) => (
					<li key={item} className="flex gap-2">
						<Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
						{item}
					</li>
				))}
			</ul>

			<div className="mt-auto pt-5">
				<Link
					href={plan.ctaHref}
					target="_blank"
					className={buttonVariants({
						variant: "outline",
						size: "sm",
						className: "w-full gap-1.5 text-xs",
					})}
				>
					{plan.cta}
					<ArrowUpRight className="h-3.5 w-3.5" />
				</Link>
			</div>
		</section>
	);
}

function EmptyAudienceState({ audience }: { audience: PricingAudience }) {
	return (
		<div className="mx-auto mt-12 flex max-w-md flex-col items-center rounded-3xl border-2 border-dashed border-border bg-muted/15 px-8 py-16 text-center">
			<div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
				<Users className="size-5" />
			</div>
			<h3 className="mt-5 text-lg font-medium text-foreground">
				{audience === "user"
					? `${pricingModels.indie.name} plans`
					: `${pricingModels.team.name} plans`}{" "}
				coming soon
			</h3>
			<p className="mt-2 text-sm text-muted-foreground">
				We&apos;re finalizing{" "}
				{audience === "user"
					? pricingModels.indie.name.toLowerCase()
					: pricingModels.team.name.toLowerCase()}{" "}
				pricing. Switch to the other tab, or check back shortly.
			</p>
		</div>
	);
}

function TeamPlansGrid({
	freePlan,
	plans,
	onTalkToSales,
}: {
	freePlan?: FreePricingPlan;
	plans: readonly PaidPricingPlan[];
	onTalkToSales: () => void;
}) {
	const starterPlan = plans.find((plan) => plan.id === "starter");
	const otherPlans = plans.filter((plan) => plan.id !== "starter");
	const hasFreeStarterStack = Boolean(freePlan && starterPlan);

	if (!freePlan && plans.length === 0) {
		return null;
	}

	if (freePlan && plans.length === 0) {
		return (
			<div className="mx-auto mt-12 max-w-sm">
				<FreePlanCard plan={freePlan} />
			</div>
		);
	}

	if (hasFreeStarterStack && starterPlan) {
		return (
			<div className="mx-auto mt-12 max-w-7xl">
				<div className="grid gap-6 lg:grid-cols-3 lg:items-start lg:gap-6">
					<div className="flex flex-col gap-4">
						<FreePlanCard plan={freePlan!} />
						<PaidPlanCard
							plan={starterPlan}
							onTalkToSales={onTalkToSales}
							compact
						/>
					</div>

					{otherPlans.map((plan) => (
						<PaidPlanCard
							key={plan.id}
							plan={plan}
							onTalkToSales={onTalkToSales}
						/>
					))}
				</div>
			</div>
		);
	}

	const columnCount = plans.length + (freePlan ? 1 : 0);

	return (
		<div
			className={cn(
				"mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 md:items-start lg:gap-6",
				columnCount === 1 && "max-w-md md:grid-cols-1",
				columnCount === 2 && "max-w-3xl",
				columnCount >= 3 && "lg:grid-cols-3",
			)}
		>
			{freePlan ? <FreePlanCard plan={freePlan} /> : null}
			{plans.map((plan) => (
				<PaidPlanCard
					key={plan.id}
					plan={plan}
					onTalkToSales={onTalkToSales}
				/>
			))}
		</div>
	);
}

export function PricingPlansGrid({
	audience,
	onTalkToSales,
}: PricingPlansGridProps) {
	const pricing = audiencePricing[audience];
	const isEmpty = !pricing.freePlan && pricing.plans.length === 0;

	return (
		<div>
			{pricing.subtitle && audience === "team" ? (
				<p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
					{pricing.subtitle}
				</p>
			) : null}

			<AnimatePresence mode="wait">
				<motion.div
					key={audience}
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -8 }}
					transition={{ duration: 0.2 }}
				>
					{isEmpty ? (
						<EmptyAudienceState audience={audience} />
					) : audience === "user" ? (
						<IndiePricing onTalkToSales={onTalkToSales} embedded />
					) : (
						<TeamPlansGrid
							freePlan={pricing.freePlan}
							plans={pricing.plans}
							onTalkToSales={onTalkToSales}
						/>
					)}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
