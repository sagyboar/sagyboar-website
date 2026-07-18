import type { LucideIcon } from "lucide-react";
import {
	Bot,
	Building2,
	Cloud,
	Code2,
	CreditCard,
	GitBranch,
	Layers,
	Rocket,
	Shield,
	Sparkles,
	TrendingDown,
	TrendingUp,
	Users,
	Wrench,
} from "lucide-react";

export const pricingStats = [
	{
		prefix: "",
		end: 80,
		suffix: "%",
		decimalPlaces: 0,
		label: "of DevOps work automated by AI",
	},
	{
		prefix: "$",
		end: 0,
		suffix: "",
		decimalPlaces: 0,
		label: "infra cost — you run on your own cloud",
	},
	{
		prefix: "",
		end: 99.9,
		suffix: "%",
		decimalPlaces: 1,
		label: "uptime SLA on Enterprise",
	},
] as const;

export type PricingAudience = "user" | "team";

export const businessModelTagline =
	"Automate with AI, scale with a shared DevOps team, and run on your own cloud — zero infrastructure cost on us.";

export const indieBusinessModelTagline =
	"Deploy on our infra, bring your own database, and pay yearly in USD — built for students, freelancers, and solo builders.";

export const audienceBusinessModelTagline: Record<PricingAudience, string> = {
	team: businessModelTagline,
	user: indieBusinessModelTagline,
};

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
	ctaHref: boolean;
	includes: readonly PlanInclude[];
};

export type FreePricingPlan = {
	id: string;
	name: string;
	label: string;
	tagline: string;
	cta: string;
	includes: readonly string[];
};

export type AudiencePricing = {
	freePlan?: FreePricingPlan;
	plans: readonly PaidPricingPlan[];
	/** Short blurb under the audience toggle */
	subtitle?: string;
	/** Exclusion / comparison callout under cards */
	exclusionNote?: string;
};

export const freePlan = {
	id: "free",
	name: "Free",
	label: "Free for users",
	tagline:
		"Connect GitHub and deploy simple frontend apps — like Vercel, no backend required.",
	cta: "Deploy for free",
	includes: [
		"Connect GitHub or GitLab",
		"Deploy static & frontend apps",
		"Preview on every push",
		"Sagyboar subdomain & SSL",
		"Community support",
	],
} as const satisfies FreePricingPlan;

export type PlanLimitation = {
	id: string;
	name: string;
	price: string;
	items: readonly string[];
};

export const teamPlanLimitations = [
	{
		id: "starter",
		name: "Starter",
		price: "$249/month",
		items: [
			"Up to 10 projects",
			"Shared DevOps support during business hours",
			"Cloud infrastructure billed directly to your own provider account",
		],
	},
	{
		id: "growth",
		name: "Growth",
		price: "$499/month",
		items: [
			"Up to 20 projects",
			"5 agents",
			"Priority support queue with faster response",
			"Cloud infrastructure billed directly to your own provider account",
		],
	},
	{
		id: "enterprise",
		name: "Enterprise",
		price: "$999/month",
		items: [
			"Up to 30 projects",
			"8 agents",
			"SSO and audit logs",
			"Premium SLA with priority incident handling",
			"Custom integrations and dedicated technical contact",
			"Cloud infrastructure billed directly to your own provider account",
		],
	},
] as const satisfies readonly PlanLimitation[];

export const planLimitations = teamPlanLimitations;

export const indiePlanLimitations = [
	{
		id: "solo",
		name: "Solo",
		price: "$19/year",
		items: [
			"1 project only",
			"512 MB RAM / 1 GB disk",
			"100 build minutes & 10 GB bandwidth per month",
			"No subdomain",
			"Community support only (Discord)",
			"Must bring your own database",
		],
	},
	{
		id: "builder",
		name: "Builder",
		price: "$29/year",
		items: [
			"Up to 3 projects",
			"1 GB RAM / 3 GB disk each",
			"300 build minutes & 50 GB bandwidth per month",
			"1 subdomain",
			"Email support with 48hr response",
			"Must bring your own database",
		],
	},
	{
		id: "indie-team",
		name: "Team",
		price: "$49/year",
		items: [
			"Up to 5 projects",
			"2 GB RAM / 5 GB disk each",
			"750 build minutes & 100 GB bandwidth per month",
			"Up to 3 subdomains / 2 seats",
			"Limited auto-heal (restart/rollback only)",
			"Must bring your own database",
		],
	},
] as const satisfies readonly PlanLimitation[];

export const audiencePlanLimitations: Record<
	PricingAudience,
	readonly PlanLimitation[]
> = {
	team: teamPlanLimitations,
	user: indiePlanLimitations,
};

/** Team plans — B2B / BYOC (USD, monthly) */
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
		ctaHref: true,
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
		ctaHref: true,
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
		ctaHref: false,
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

/** Indie / user plans — Sagyboar VPS (USD, yearly) */
export const userPricingPlans = [
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
		ctaHref: true,
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
		ctaHref: true,
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
		id: "indie-team",
		name: "Team",
		tagline: "For small indie teams that need a bit more headroom.",
		price: 49,
		currency: "usd",
		billingPeriod: "year",
		priceNote: "/year, billed annually",
		recommended: false,
		cta: "Get Started",
		ctaHref: true,
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

export const indieExclusionNote =
	"Not included in Indie plans: shared DevOps agents, managed database, SLA guarantees, and full auto-heal with pull requests — these stay exclusive to our BYOC (B2B) plans.";

export const audiencePricing: Record<PricingAudience, AudiencePricing> = {
	team: {
		plans: teamPricingPlans,
		subtitle:
			"For funded startups and teams — BYOC, shared DevOps, billed monthly in USD.",
	},
	user: {
		plans: userPricingPlans,
		subtitle:
			"For students, freelancers, and solo builders — deploy on our infra, pay yearly.",
		exclusionNote: indieExclusionNote,
	},
};

export const pricingPlans = teamPricingPlans;

export const teamGeneralTerms = [
	"Platform subscriptions are billed monthly in USD.",
	"You bring your own cloud (AWS, GCP, Azure, or DigitalOcean) — cloud usage is billed directly to your account by the provider, at cost.",
	"Fair usage policy applies to all plans.",
	"Custom development and integrations outside plan scope are quoted separately.",
] as const;

export const indieGeneralTerms = [
	"Indie plans are billed annually in USD ($), paid up front for the year.",
	"Apps run on Sagyboar-managed VPS infrastructure — not on your own cloud account.",
	"You must bring your own database (Supabase, Neon, Mongo Atlas, etc.). Managed databases are not included.",
	"Fair usage policy applies to build minutes, bandwidth, and compute on all Indie plans.",
	"Shared DevOps agents, SLA guarantees, and full auto-heal with pull requests are exclusive to Team (BYOC) plans.",
	"Upgrades take effect immediately; downgrades apply at the end of the current billing year.",
] as const;

export const audienceGeneralTerms: Record<
	PricingAudience,
	readonly string[]
> = {
	team: teamGeneralTerms,
	user: indieGeneralTerms,
};

export const generalTerms = teamGeneralTerms;

export const byocSteps = [
	{
		step: "01",
		title: "You bring your own cloud",
		description:
			"AWS, GCP, Azure, or DigitalOcean — whatever you already use. We connect to your account securely.",
		icon: Cloud,
	},
	{
		step: "02",
		title: "You pay the cloud bill",
		description:
			"Infrastructure is billed directly to your provider account, at cost. No markup, no lock-in on our side.",
		icon: CreditCard,
	},
	{
		step: "03",
		title: "We charge for platform + DevOps",
		description:
			"You pay only for the Sagyboar platform and managed DevOps — like SaaS and a managed service combined.",
		icon: Layers,
	},
] as const;

export const sharedDevOpsSteps = [
	{
		step: "01",
		title: "One team, many projects",
		description:
			"AI automates ~80% of the work, so a single DevOps engineer can support 10–15 projects at once.",
		icon: Users,
	},
	{
		step: "02",
		title: "AI responds first",
		description:
			"Issue detected → ticket auto-created → AI suggests a fix → humans step in only for complex problems.",
		icon: Bot,
	},
	{
		step: "03",
		title: "Scale without hiring",
		description:
			"10 projects → 1 engineer. 50 projects → 3–4 engineers. Margins grow as you scale.",
		icon: TrendingUp,
	},
] as const;

export const indieInfraSteps = [
	{
		step: "01",
		title: "Deploy on our VPS",
		description:
			"Your apps run on Sagyboar-managed infrastructure — no AWS account, no cloud bill, no BYOC setup.",
		icon: Layers,
	},
	{
		step: "02",
		title: "Pay yearly in USD",
		description:
			"Simple annual pricing in $ for students, freelancers, and solo builders — pick Solo, Builder, or Team.",
		icon: CreditCard,
	},
	{
		step: "03",
		title: "Bring your own database",
		description:
			"Connect Supabase, Neon, Mongo Atlas, or any hosted DB. We host the app; you own the data layer.",
		icon: GitBranch,
	},
] as const;

export const indieSupportSteps = [
	{
		step: "01",
		title: "AI watches your apps",
		description:
			"Detection and alerts on every Indie plan. Builder adds auto-tickets; Team adds limited auto-heal.",
		icon: Bot,
	},
	{
		step: "02",
		title: "Support that matches the tier",
		description:
			"Community Discord on Solo, email within 48h on Builder, priority email within 24h on Team.",
		icon: Users,
	},
	{
		step: "03",
		title: "Upgrade when you outgrow Indie",
		description:
			"Need shared DevOps, SLA, or full auto-heal with PRs? Move to Team BYOC plans when you're ready.",
		icon: TrendingUp,
	},
] as const;

export const idealCustomers: { title: string; icon: LucideIcon }[] = [
	{ title: "SaaS Startups", icon: Rocket },
	{ title: "Software Dev Companies", icon: Code2 },
	{ title: "AI Startups", icon: Bot },
	{ title: "SMEs Going Digital", icon: TrendingUp },
	{ title: "Dev Agencies", icon: Users },
	{ title: "Teams Without DevOps", icon: Wrench },
];

export const indieIdealCustomers: { title: string; icon: LucideIcon }[] = [
	{ title: "Students", icon: Sparkles },
	{ title: "Freelancers", icon: Code2 },
	{ title: "Solo Builders", icon: Rocket },
	{ title: "Side Projects", icon: GitBranch },
	{ title: "Indie Hackers", icon: Bot },
	{ title: "Early MVPs", icon: TrendingUp },
];

export const idealCustomerThread =
	"The common thread: they have a product and a dev team — but no dedicated DevOps, or can't afford one. Exactly the people Sagyboar replaces.";

export const indieIdealCustomerThread =
	"The common thread: they ship real apps without a company budget — students, freelancers, and solo builders who need hosted infra priced in USD, yearly.";

export const audienceIdealCustomers: Record<
	PricingAudience,
	{
		customers: { title: string; icon: LucideIcon }[];
		thread: string;
	}
> = {
	team: { customers: idealCustomers, thread: idealCustomerThread },
	user: { customers: indieIdealCustomers, thread: indieIdealCustomerThread },
};

export type PlanFitGuideItem = {
	id: string;
	plan: string;
	price: string;
	audience: string;
	backgroundImage: string;
	icon: LucideIcon;
	points: readonly string[];
};

export const teamPlanFitGuide = [
	{
		id: "starter",
		plan: "Starter",
		price: "$249/month",
		audience: "Best for…",
		backgroundImage: "/Hobby.png",
		icon: Sparkles,
		points: [
			"Teams shipping their first production apps",
			"Up to 10 projects with AI deployment & monitoring",
			"Auto ticket generate",
			"Shared DevOps support without a full-time hire",
		],
	},
	{
		id: "growth",
		plan: "Growth",
		price: "$499/month",
		audience: "Best for…",
		backgroundImage: "/startup.png",
		icon: Rocket,
		points: [
			"Scaling teams running up to 20 projects",
			"Auto heal with pull ticket",
			"Auto ticket generate & assign to 5 agents",
			"Faster support response and a priority queue",
		],
	},
	{
		id: "enterprise",
		plan: "Enterprise",
		price: "$999/month",
		audience: "Best for…",
		backgroundImage: "/Enterprise.png",
		icon: Building2,
		points: [
			"Established teams with up to 30 projects",
			"Auto heal with pull ticket",
			"SSO and audit logs",
			"Premium SLA and priority incident handling",
		],
	},
] as const satisfies readonly PlanFitGuideItem[];

export const indiePlanFitGuide = [
	{
		id: "solo",
		plan: "Solo",
		price: "$19/year",
		audience: "Best for…",
		backgroundImage: "/Hobby.png",
		icon: Sparkles,
		points: [
			"Students and hobbyists with a single project",
			"512 MB RAM on Sagyboar-managed VPS",
			"Community support via Discord",
			"Bring your own database — no company cloud bill",
		],
	},
	{
		id: "builder",
		plan: "Builder",
		price: "$29/year",
		audience: "Best for…",
		backgroundImage: "/startup.png",
		icon: Rocket,
		points: [
			"Freelancers and solo builders with up to 3 apps",
			"Subdomain + auto-ticket to your repo",
			"Email support within 48 hours",
			"More build minutes and bandwidth for real shipping",
		],
	},
	{
		id: "indie-team",
		plan: "Team",
		price: "$49/year",
		audience: "Best for…",
		backgroundImage: "/Enterprise.png",
		icon: Users,
		points: [
			"Small indie teams with up to 5 projects",
			"2 seats and up to 3 subdomains",
			"Limited auto-heal (restart/rollback)",
			"Priority email support within 24 hours",
		],
	},
] as const satisfies readonly PlanFitGuideItem[];

export const audiencePlanFitGuide: Record<
	PricingAudience,
	readonly PlanFitGuideItem[]
> = {
	team: teamPlanFitGuide,
	user: indiePlanFitGuide,
};

export const planFitGuide = teamPlanFitGuide;

export type ComparisonCell = string;

export interface ComparisonRow {
	feature: string;
	Sagyboar: ComparisonCell;
	others: ComparisonCell;
	hiringTeam: ComparisonCell;
}

export const marketComparison: ComparisonRow[] = [
	{
		feature: "Starting price",
		Sagyboar: "$249/mo",
		others: "~$7–25/mo",
		hiringTeam: "$3,000+/mo",
	},
	{
		feature: "Bring your own cloud",
		Sagyboar: "Yes",
		others: "Partial / self-host",
		hiringTeam: "N/A",
	},
	{
		feature: "AI monitoring",
		Sagyboar: "Full AI",
		others: "None",
		hiringTeam: "Extra cost",
	},
	{
		feature: "Auto heal with pull ticket",
		Sagyboar: "Growth+",
		others: "No",
		hiringTeam: "Manual",
	},
	{
		feature: "Auto ticket generate & assign to agent",
		Sagyboar: "Yes",
		others: "No",
		hiringTeam: "No",
	},
	{
		feature: "Dedicated developer",
		Sagyboar: "Included",
		others: "No",
		hiringTeam: "Yes (costly)",
	},
	{
		feature: "DevOps engineer",
		Sagyboar: "Included",
		others: "No",
		hiringTeam: "Yes (costly)",
	},
	{
		feature: "QA tester",
		Sagyboar: "On demand",
		others: "No",
		hiringTeam: "Yes (costly)",
	},
	{
		feature: "SLA uptime guarantee",
		Sagyboar: "99.9%",
		others: "Basic / none",
		hiringTeam: "Custom",
	},
	{
		feature: "1-click deploy",
		Sagyboar: "Yes",
		others: "Mostly yes",
		hiringTeam: "No",
	},
	{
		feature: "AI Dockerfile generation",
		Sagyboar: "Yes",
		others: "No",
		hiringTeam: "No",
	},
];

export const whyChooseSagyboar: {
	title: string;
	description: string;
	icon: LucideIcon;
}[] = [
	{
		title: "AI that actually works for you",
		description:
			"Our AI monitors your logs 24/7, detects anomalies before they become outages, and auto-generates detailed issue tickets directly in your connected repo — with priority levels and estimated fix times.",
		icon: Bot,
	},
	{
		title: "A real team, not just a tool",
		description:
			"Unlike Render or Railway, we assign you an AI-powered developer, a DevOps engineer, and a QA tester. Your project gets maintained by humans + AI — not left for you to figure out alone.",
		icon: Users,
	},
	{
		title: "Bring your own cloud",
		description:
			"Deploy frontend, backend, or full-stack apps to your own AWS, GCP, Azure, or DigitalOcean account. Infrastructure is billed to you at cost — no markup, no lock-in — while we handle the platform and DevOps.",
		icon: Rocket,
	},
	{
		title: "Scale without hiring DevOps",
		description:
			"A shared DevOps team plus AI automation replaces a full-time hire. Skip the $3,000+/month salaries and pay a flat platform fee that grows with your projects, not your headcount.",
		icon: TrendingDown,
	},
	{
		title: "Issues auto-flow to your repo",
		description:
			"When our AI detects a problem, it creates a GitHub/GitLab ticket with a full description, reproduction steps, severity level, and time estimate — high-priority issues go straight to an available agent.",
		icon: GitBranch,
	},
	{
		title: "Enterprise-grade reliability",
		description:
			"99.9% uptime SLA, 4-hour response guarantee, AWS-backed dedicated infrastructure, and full audit logs. We treat your product like it's our own — because our reputation depends on it.",
		icon: Shield,
	},
];

export const pricingFaqs = [
	{
		question: "Where are my apps hosted?",
		answer:
			"You bring your own cloud — AWS, GCP, Azure, or DigitalOcean. We connect to your account and deploy there, so infrastructure is billed directly to you at cost. You pay Sagyboar only for the platform and managed DevOps.",
	},
	{
		question: "What is the BYOC (bring your own cloud) model?",
		answer:
			"Instead of reselling infrastructure with a markup, we deploy onto your own cloud provider account. You keep full ownership and pay the provider directly for what you use, while we handle deployment, monitoring, and DevOps on top of it. No lock-in.",
	},
	{
		question: "How does the shared DevOps team work?",
		answer:
			"Our AI automates roughly 80% of routine DevOps work, so a single DevOps engineer can support 10–15 projects. Issues are detected automatically, tickets are auto-created, and AI suggests fixes — humans step in for the complex cases. This is how we keep costs far below a full-time hire.",
	},
	{
		question: "How does auto issue ticketing work?",
		answer:
			"Our AI monitoring engine watches your logs and metrics in real time. When it detects an anomaly or error, it automatically opens a ticket in your connected GitHub or GitLab repo with a full description, severity level, and estimated resolution time. High-priority issues are instantly assigned to the first available agent.",
	},
	{
		question: "Can I upgrade or downgrade my plan?",
		answer:
			"Yes, you can switch plans at any time. Upgrades are effective immediately. Downgrades take effect at the end of your current billing cycle.",
	},
	{
		question: "What does the SLA guarantee mean?",
		answer:
			"On Enterprise, we provide a premium SLA with priority incident handling, including a committed response time on critical issues. If we miss these targets, you receive a credit on your next invoice. No excuses.",
	},
	{
		question: "How many projects can I run on each plan?",
		answer:
			"Starter includes up to 10 projects, Growth up to 20, and Enterprise up to 30. If you need more, talk to sales and we'll tailor a plan to your volume.",
	},
] as const;
