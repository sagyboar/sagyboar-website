import { Sagyboar_PORTAL_URL } from "@/constants/branding";

/**
 * Canonical pricing source of truth for the Sagyboar marketing site.
 * Import model/tier names, prices, features, and CTA hrefs from here —
 * do not hardcode plan labels in components.
 */

export type PricingAudience = "user" | "team";
export type PlanCurrency = "usd" | "inr";
export type PlanBillingPeriod = "month" | "year";

export type PlanInclude = string | { text: string; highlighted: true };

export type PaidPricingPlan = {
	id: string;
	name: string;
	tagline: string;
	price: number;
	currency: PlanCurrency;
	billingPeriod: PlanBillingPeriod;
	priceNote?: string;
	recommended: boolean;
	cta: string;
	/** Portal URL when self-serve; null opens sales contact */
	ctaHref: string | null;
	includes: readonly PlanInclude[];
};

export type FreePricingPlan = {
	id: string;
	name: string;
	label: string;
	tagline: string;
	cta: string;
	ctaHref: string;
	includes: readonly string[];
};

export type PricingModelId = "indie" | "team";

export type PricingModel = {
	id: PricingModelId;
	/** Display name on the pricing toggle and throughout the site */
	name: "Indie" | "Team";
	/** Audience key used by the pricing page toggle */
	audience: PricingAudience;
	description: string;
	billingPeriod: PlanBillingPeriod;
	currency: PlanCurrency;
};

/** Two pricing models shown on the /pricing toggle */
export const pricingModels = {
	indie: {
		id: "indie",
		name: "Indie",
		audience: "user",
		description:
			"Deploy on Sagyboar's managed infra — billed yearly in USD.",
		billingPeriod: "year",
		currency: "usd",
	},
	team: {
		id: "team",
		name: "Team",
		audience: "team",
		description:
			"BYOC (bring your own cloud) — billed monthly in USD.",
		billingPeriod: "month",
		currency: "usd",
	},
} as const satisfies Record<PricingModelId, PricingModel>;

export const pricingModelByAudience: Record<PricingAudience, PricingModel> = {
	user: pricingModels.indie,
	team: pricingModels.team,
};

export const freePlan = {
	id: "free",
	name: "Free",
	label: "Free for users",
	tagline:
		"Connect GitHub and deploy simple frontend apps — like Vercel, no backend required.",
	cta: "Deploy for free",
	ctaHref: Sagyboar_PORTAL_URL,
	includes: [
		"Connect GitHub or GitLab",
		"Deploy static & frontend apps",
		"Preview on every push",
		"Sagyboar subdomain & SSL",
		"Community support",
	],
} as const satisfies FreePricingPlan;

/** Indie tiers — Solo → Builder → Studio (cheap → premium) */
export const indiePricingPlans = [
	{
		id: "solo",
		name: "Solo",
		tagline: "One project on our infra — ideal for students and side projects.",
		price: 19,
		currency: "usd",
		billingPeriod: "year",
		priceNote: "/year, billed annually",
		recommended: false,
		cta: "Get Started",
		ctaHref: Sagyboar_PORTAL_URL,
		includes: [
			"1 project",
			"512 MB RAM / 1 GB disk",
			"100 build minutes/month",
			"10 GB bandwidth/month",
			"1 team seat",
			"No subdomain",
			"Bring your own database (Supabase, Neon, Mongo Atlas, etc.)",
			"AI monitoring: detection/alerts only",
			"Support: Community (Discord)",
		],
	},
	{
		id: "builder",
		name: "Builder",
		tagline: "For freelancers and solo builders shipping a few real apps.",
		price: 29,
		currency: "usd",
		billingPeriod: "year",
		priceNote: "/year, billed annually",
		recommended: true,
		cta: "Get Started",
		ctaHref: Sagyboar_PORTAL_URL,
		includes: [
			"Up to 3 projects",
			"1 GB RAM / 3 GB disk each",
			"300 build minutes/month",
			"50 GB bandwidth/month",
			"1 team seat",
			"1 subdomain",
			"Bring your own database",
			"AI monitoring: + auto-ticket to repo",
			"Support: Email, 48hr response",
		],
	},
	{
		id: "studio",
		name: "Studio",
		tagline: "For small indie teams that need a bit more headroom.",
		price: 49,
		currency: "usd",
		billingPeriod: "year",
		priceNote: "/year, billed annually",
		recommended: false,
		cta: "Get Started",
		ctaHref: Sagyboar_PORTAL_URL,
		includes: [
			"Up to 5 projects",
			"2 GB RAM / 5 GB disk each",
			"750 build minutes/month",
			"100 GB bandwidth/month",
			"2 team seats",
			"Up to 3 subdomains",
			"Bring your own database",
			"AI monitoring: + limited auto-heal (restart/rollback)",
			"Support: Priority email, 24hr response",
		],
	},
] as const satisfies readonly PaidPricingPlan[];

/** Team BYOC tiers — Starter → Growth → Enterprise (cheap → premium) */
export const teamPricingPlans = [
	{
		id: "starter",
		name: "Starter",
		tagline:
			"For teams shipping their first production apps without a DevOps hire.",
		price: 249,
		currency: "usd",
		billingPeriod: "month",
		recommended: false,
		cta: "Get started",
		ctaHref: Sagyboar_PORTAL_URL,
		includes: [
			"Up to 10 projects",
			"AI deployment + monitoring",
			"Auto incident detection",
			"Auto ticket generate",
			"Shared DevOps support",
		],
	},
	{
		id: "growth",
		name: "Growth",
		tagline: "For scaling teams that need faster support and deeper insights.",
		price: 499,
		currency: "usd",
		billingPeriod: "month",
		recommended: true,
		cta: "Get started",
		ctaHref: Sagyboar_PORTAL_URL,
		includes: [
			"Up to 20 projects",
			"Everything in Starter",
			{
				text: "Auto heal with pull ticket",
				highlighted: true,
			},
			"Auto ticket generate & assign to agent",
			"5 agents",
			"Faster support response",
			"Advanced analytics",
			"AI optimization suggestions",
			"Priority queue",
		],
	},
	{
		id: "enterprise",
		name: "Enterprise",
		tagline:
			"For established teams that need premium SLAs and dedicated support.",
		price: 999,
		currency: "usd",
		billingPeriod: "month",
		recommended: false,
		cta: "Talk to sales",
		ctaHref: null,
		includes: [
			"Up to 30 projects",
			"Everything in Growth",
			{
				text: "Auto heal with pull ticket",
				highlighted: true,
			},
			"Auto ticket generate & assign to agent",
			"8 agents",
			"SSO",
			"Audit logs",
			"Premium SLA",
			"Priority incident handling",
			"Custom integrations",
			"Dedicated tech contact",
		],
	},
] as const satisfies readonly PaidPricingPlan[];

/** @deprecated Prefer indiePricingPlans — alias kept for gradual migration */
export const userPricingPlans = indiePricingPlans;

export type AudiencePricing = {
	freePlan?: FreePricingPlan;
	plans: readonly PaidPricingPlan[];
	subtitle?: string;
	exclusionNote?: string;
};

export const indieExclusionNote =
	"Not included in Indie plans: shared DevOps agents, managed database, SLA guarantees, and full auto-heal with pull requests — these stay exclusive to our BYOC (B2B) plans.";

export const audiencePricing: Record<PricingAudience, AudiencePricing> = {
	team: {
		plans: teamPricingPlans,
		subtitle:
			"For funded startups and teams — BYOC, shared DevOps, billed monthly in USD.",
	},
	user: {
		plans: indiePricingPlans,
		subtitle:
			"For students, freelancers, and solo builders — deploy on our infra, pay yearly.",
		exclusionNote: indieExclusionNote,
	},
};

export const pricingPlans = teamPricingPlans;

export function formatPlanPriceLabel(plan: PaidPricingPlan): string {
	const amount =
		plan.currency === "inr"
			? `₹${plan.price.toLocaleString("en-IN")}`
			: `$${plan.price.toLocaleString("en-US")}`;
	const period = plan.billingPeriod === "year" ? "year" : "month";
	return `${amount}/${period}`;
}

/** Canonical tier display names by model (cheap → premium) */
export const indieTierNames = indiePricingPlans.map((p) => p.name);
export const teamTierNames = teamPricingPlans.map((p) => p.name);
