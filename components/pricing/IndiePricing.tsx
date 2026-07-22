"use client";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import {
	indieExclusionNote,
	indiePricingPlans,
	pricingModels,
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

type IndiePricingProps = {
	onTalkToSales: () => void;
	/** When used inside the audience toggle, hide the section heading */
	embedded?: boolean;
};

export function IndiePricing({
	onTalkToSales,
	embedded = false,
}: IndiePricingProps) {
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
						pay yearly.
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
						pay yearly.
					</p>
				</>
			)}

			<div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-3 md:items-stretch md:gap-6">
				{indiePricingPlans.map((plan) => (
					<PaidPlanCard
						key={plan.id}
						plan={plan}
						onTalkToSales={onTalkToSales}
					/>
				))}
			</div>

			<div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-muted/20 px-5 py-4 text-center sm:px-6">
				<p className="text-sm leading-relaxed text-muted-foreground">
					{indieExclusionNote}
				</p>
			</div>
		</div>
	);
}
