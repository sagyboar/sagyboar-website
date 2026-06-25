"use client";

import clsx from "clsx";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import { freePlan, pricingPlans } from "./pricing-data";

type PaidPlan = (typeof pricingPlans)[number];

type PricingPlansGridProps = {
	onTalkToSales: () => void;
};

function PaidPlanCard({
	plan,
	onTalkToSales,
	compact = false,
}: {
	plan: PaidPlan;
	onTalkToSales: () => void;
	compact?: boolean;
}) {
	return (
		<section
			id={plan.id}
			className={clsx(
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
				className={clsx(
					"font-medium text-foreground",
					compact ? "text-base" : "text-lg",
				)}
			>
				{plan.name}
			</h3>
			<p
				className={clsx(
					"mt-1 text-muted-foreground",
					compact ? "text-xs leading-relaxed" : "text-sm",
				)}
			>
				{plan.tagline}
			</p>

			<div className={compact ? "mt-4" : "mt-6"}>
				<span
					className={clsx(
						"font-semibold text-primary",
						compact ? "text-2xl" : "text-3xl",
					)}
				>
					${plan.price.toLocaleString()}
				</span>
				<span
					className={clsx(
						"text-muted-foreground",
						compact ? "text-sm" : "text-lg",
					)}
				>
					/month
				</span>
			</div>

			<div className={compact ? "mt-4" : "mt-6"}>
				<p className="text-xs font-semibold uppercase tracking-wider text-foreground">
					Includes
				</p>
				<ul
					className={clsx(
						"mt-3 flex flex-col gap-2 text-muted-foreground",
						compact ? "text-xs" : "text-sm",
					)}
				>
					{plan.includes.map((item) => (
						<li key={item} className="flex gap-2">
							<Check
								className={clsx(
									"mt-0.5 shrink-0 text-primary",
									compact ? "h-3.5 w-3.5" : "h-4 w-4",
								)}
							/>
							{item}
						</li>
					))}
				</ul>
			</div>

			<div className={clsx("mt-auto", compact ? "pt-5" : "pt-8")}>
				{plan.ctaHref ? (
					<Link
						href={Sagyboar_PORTAL_URL}
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

export function PricingPlansGrid({ onTalkToSales }: PricingPlansGridProps) {
	const hobbyPlan = pricingPlans.find((plan) => plan.id === "hobby");
	const growthPlans = pricingPlans.filter((plan) => plan.id !== "hobby");

	if (!hobbyPlan) return null;

	return (
		<div className="mx-auto mt-12 max-w-7xl">
			<div className="grid gap-6 lg:grid-cols-3 lg:items-start lg:gap-6">
				{/* Free + Hobby — stacked, each with its own outline */}
				<div className="flex flex-col gap-4">
					<section
						id={freePlan.id}
						className="flex flex-col rounded-3xl border-2 border-dashed border-border bg-muted/15 px-5 py-6"
					>
						<p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
							{freePlan.label}
						</p>
						<h3 className="mt-2 text-base font-semibold text-foreground">
							{freePlan.name}
						</h3>
						<p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
							{freePlan.tagline}
						</p>

						<div className="mt-4">
							<span className="text-2xl font-semibold text-foreground">$0</span>
							<span className="text-sm text-muted-foreground">/month</span>
						</div>

						<ul className="mt-4 flex flex-col gap-2 text-xs text-muted-foreground">
							{freePlan.includes.map((item) => (
								<li key={item} className="flex gap-2">
									<Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
									{item}
								</li>
							))}
						</ul>

						<div className="mt-auto pt-5">
							<Link
								href={Sagyboar_PORTAL_URL}
								target="_blank"
								className={buttonVariants({
									variant: "outline",
									size: "sm",
									className: "w-full gap-1.5 text-xs",
								})}
							>
								{freePlan.cta}
								<ArrowUpRight className="h-3.5 w-3.5" />
							</Link>
						</div>
					</section>

					<PaidPlanCard
						plan={hobbyPlan}
						onTalkToSales={onTalkToSales}
						compact
					/>
				</div>

				{growthPlans.map((plan) => (
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
