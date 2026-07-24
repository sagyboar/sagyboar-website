"use client";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
	getIndiePlanPrice,
	indieExclusionNote,
	indiePricingPlans,
	pricingModels,
	type IndieBillingCycle,
	type IndiePricingPlan,
	type PaidPricingPlan,
} from "./pricing-data";
import { PricingSectionHeading } from "./PricingSectionHeading";

function formatPlanPrice(plan: PaidPricingPlan) {
	if (plan.currency === "inr") {
		return `₹${plan.price.toLocaleString("en-IN")}`;
	}
	return `$${plan.price.toLocaleString("en-US")}`;
}

function defaultPeriodLabel(plan: PaidPricingPlan) {
	return plan.billingPeriod === "year" ? "/year" : "/month";
}

export function PaidPlanCard({
	plan,
	onTalkToSales,
	compact = false,
}: {
	plan: PaidPricingPlan;
	onTalkToSales: () => void;
	compact?: boolean;
}) {
	return (
		<section
			id={plan.id}
			className={cn(
				"relative flex flex-col rounded-3xl border-2 bg-card",
				compact ? "px-5 py-6" : "px-6 py-8",
				plan.recommended
					? "border-primary/50 shadow-md"
					: "border-dashed border-border",
			)}
		>
			{plan.recommended ? (
				<Badge className="absolute -top-2.5 left-6">Most popular</Badge>
			) : null}

			<h3
				className={cn(
					"font-medium text-foreground",
					compact ? "text-base" : "text-lg",
				)}
			>
				{plan.name}
			</h3>
			<p
				className={cn(
					"mt-1 text-muted-foreground",
					compact ? "text-xs leading-relaxed" : "text-sm",
				)}
			>
				{plan.tagline}
			</p>

			<div className={compact ? "mt-4" : "mt-6"}>
				<span
					className={cn(
						"font-semibold text-primary",
						compact ? "text-2xl" : "text-3xl",
					)}
				>
					{formatPlanPrice(plan)}
				</span>
				{plan.priceNote ? null : (
					<span
						className={cn(
							"text-muted-foreground",
							compact ? "text-sm" : "text-lg",
						)}
					>
						{defaultPeriodLabel(plan)}
					</span>
				)}
				{plan.priceNote ? (
					<p
						className={cn(
							"mt-1 text-muted-foreground",
							compact ? "text-xs" : "text-sm",
						)}
					>
						{plan.priceNote}
					</p>
				) : null}
			</div>

			<div className={compact ? "mt-4" : "mt-6"}>
				<p className="text-xs font-semibold uppercase tracking-wider text-foreground">
					Includes
				</p>
				<ul
					className={cn(
						"mt-3 flex flex-col gap-2 text-muted-foreground",
						compact ? "text-xs" : "text-sm",
					)}
				>
					{plan.includes.map((item) => {
						const text = typeof item === "string" ? item : item.text;
						const highlighted = typeof item !== "string" && item.highlighted;

						return (
							<li
								key={text}
								className={cn(
									"flex gap-2",
									highlighted &&
										"rounded-lg border border-primary/30 bg-primary/5 px-2 py-1.5 font-medium text-foreground",
								)}
							>
								<Check
									className={cn(
										"mt-0.5 shrink-0 text-primary",
										compact ? "h-3.5 w-3.5" : "h-4 w-4",
									)}
								/>
								<span className="flex flex-wrap items-center gap-1.5">
									{text}
									{highlighted ? (
										<Badge
											variant="secondary"
											className={cn(
												"bg-primary/15 text-primary",
												compact
													? "px-1.5 py-0 text-[9px]"
													: "px-1.5 py-0 text-[10px]",
											)}
										>
											Important
										</Badge>
									) : null}
								</span>
							</li>
						);
					})}
				</ul>
			</div>

			<div className={cn("mt-auto", compact ? "pt-5" : "pt-8")}>
				{plan.ctaHref ? (
					<Link
						href={plan.ctaHref}
						target="_blank"
						className={buttonVariants({
							variant: plan.recommended ? "default" : "outline",
							size: compact ? "sm" : "default",
							className: "w-full gap-2",
						})}
					>
						{plan.cta}
						<ArrowUpRight className="h-4 w-4" />
					</Link>
				) : (
					<Button
						onClick={onTalkToSales}
						size={compact ? "sm" : "default"}
						className="w-full gap-2"
					>
						{plan.cta}
						<ArrowUpRight className="h-4 w-4" />
					</Button>
				)}
			</div>
		</section>
	);
}

function BillingCycleToggle({
	value,
	onChange,
}: {
	value: IndieBillingCycle;
	onChange: (value: IndieBillingCycle) => void;
}) {
	const options: { id: IndieBillingCycle; label: string }[] = [
		{ id: "month", label: "Monthly" },
		{ id: "year", label: "Annual" },
	];

	return (
		<div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
			<div
				role="tablist"
				aria-label="Billing cycle"
				className="flex w-fit items-center gap-1 rounded-full border border-border bg-muted/40 p-1"
			>
				{options.map((option) => {
					const selected = value === option.id;

					return (
						<button
							key={option.id}
							type="button"
							role="tab"
							aria-selected={selected}
							onClick={() => onChange(option.id)}
							className={cn(
								"relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
								selected
									? "text-background"
									: "text-muted-foreground hover:text-foreground",
							)}
						>
							{selected ? (
								<motion.span
									layoutId="indie-billing-pill"
									className="absolute inset-0 rounded-full bg-foreground shadow-sm"
									transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
								/>
							) : null}
							<span className="relative z-10">{option.label}</span>
						</button>
					);
				})}
			</div>

			<AnimatePresence initial={false}>
				{value === "year" ? (
					<motion.div
						key="annual-savings"
						initial={{ opacity: 0, x: -6 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -6 }}
						transition={{ duration: 0.2 }}
					>
						<Badge
							variant="secondary"
							className="bg-primary/15 text-primary"
						>
							2 months free
						</Badge>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
}

function IndiePlanCard({
	plan,
	billingCycle,
	onTalkToSales,
}: {
	plan: IndiePricingPlan;
	billingCycle: IndieBillingCycle;
	onTalkToSales: () => void;
}) {
	const price = getIndiePlanPrice(plan, billingCycle);
	const periodLabel = billingCycle === "year" ? "/year" : "/month";
	const isExternal =
		typeof plan.ctaHref === "string" && plan.ctaHref.startsWith("http");

	return (
		<section
			id={plan.id}
			className={cn(
				"relative flex flex-col rounded-3xl border-2 bg-card px-5 py-6 sm:px-6 sm:py-8",
				plan.recommended
					? "border-primary/50 shadow-md"
					: "border-dashed border-border",
				plan.comingSoon && "opacity-60",
			)}
		>
			{plan.badge ? (
				<Badge
					variant={plan.comingSoon ? "secondary" : "default"}
					className={cn(
						"absolute -top-2.5 left-5 sm:left-6",
						plan.comingSoon &&
							"border-border bg-muted text-muted-foreground",
					)}
				>
					{plan.badge}
				</Badge>
			) : null}

			<h3 className="text-lg font-medium text-foreground">{plan.name}</h3>
			<p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

			<div className="mt-6">
				<span
					className={cn(
						"text-3xl font-semibold",
						plan.comingSoon ? "text-muted-foreground" : "text-primary",
					)}
				>
					${price.toLocaleString("en-US")}
				</span>
				{plan.monthlyPrice > 0 ? (
					<span className="text-lg text-muted-foreground">{periodLabel}</span>
				) : null}
			</div>

			<div className="mt-6">
				<p className="text-xs font-semibold uppercase tracking-wider text-foreground">
					Includes
				</p>
				<ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
					{plan.includes.map((item) => (
						<li
							key={item.text}
							className={cn(
								"flex gap-2",
								item.keyDifferentiator &&
									"rounded-lg border border-border/80 bg-muted/40 px-2 py-1.5 font-medium text-foreground",
								item.accent &&
									"rounded-lg bg-white/5 px-2 py-1.5 font-semibold text-white",
							)}
						>
							<Check
								className={cn(
									"mt-0.5 h-4 w-4 shrink-0",
									item.accent
										? "text-white"
										: item.keyDifferentiator
											? "text-foreground"
											: "text-primary",
								)}
							/>
							<span
								className={cn(
									item.accent && "font-semibold text-white",
								)}
							>
								{item.text}
							</span>
						</li>
					))}
				</ul>
			</div>

			<div className="mt-auto pt-8">
				{plan.ctaHref ? (
					<Link
						href={plan.ctaHref}
						target={isExternal ? "_blank" : undefined}
						rel={isExternal ? "noopener noreferrer" : undefined}
						className={buttonVariants({
							variant: plan.recommended
								? "default"
								: plan.comingSoon
									? "secondary"
									: "outline",
							className: "w-full gap-2",
						})}
					>
						{plan.cta}
						<ArrowUpRight className="h-4 w-4" />
					</Link>
				) : (
					<Button onClick={onTalkToSales} className="w-full gap-2">
						{plan.cta}
						<ArrowUpRight className="h-4 w-4" />
					</Button>
				)}
			</div>
		</section>
	);
}

type IndiePricingProps = {
	onTalkToSales: () => void;
	/** When used inside the audience toggle, hide the section heading */
	embedded?: boolean;
};

export function IndiePricing({
	onTalkToSales,
	embedded = false,
}: IndiePricingProps) {
	const [billingCycle, setBillingCycle] =
		useState<IndieBillingCycle>("month");

	return (
		<div className={embedded ? "mt-8" : "mt-12"}>
			{embedded ? (
				<div className="mx-auto max-w-2xl text-center">
					<h3 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
						{pricingModels.indie.name}{" "}
						<span className="border-b-2 border-blue-400 text-blue-400">
							Plans
						</span>
					</h3>
					<p className="mt-3 text-sm text-muted-foreground sm:text-base">
						For students, freelancers, and solo builders — deploy on our infra,
						billed monthly or annually.
					</p>
				</div>
			) : (
				<>
					<PricingSectionHeading
						before={pricingModels.indie.name}
						highlight="Plans"
					/>
					<p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
						For students, freelancers, and solo builders — deploy on our infra,
						billed monthly or annually.
					</p>
				</>
			)}

			<div className="mt-8">
				<BillingCycleToggle
					value={billingCycle}
					onChange={setBillingCycle}
				/>
			</div>

			<div className="mx-auto mt-10 grid max-w-7xl gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:items-stretch xl:gap-5">
				{indiePricingPlans.map((plan) => (
					<IndiePlanCard
						key={plan.id}
						plan={plan}
						billingCycle={billingCycle}
						onTalkToSales={onTalkToSales}
					/>
				))}
			</div>

			<p className="mx-auto mt-6 max-w-2xl text-center text-sm sm:text-base">
				<span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-semibold text-primary">
					Need more? Extra RAM at $6/GB/mo
				</span>
			</p>

			<div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-muted/20 px-5 py-4 text-center sm:px-6">
				<p className="text-sm leading-relaxed text-muted-foreground">
					{indieExclusionNote}
				</p>
			</div>
		</div>
	);
}
