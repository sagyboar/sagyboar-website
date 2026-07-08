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

export const businessModelTagline =
	"Automate with AI, scale with a shared DevOps team, and run on your own cloud — zero infrastructure cost on us.";

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
} as const;

export const planLimitations = [
	{
		id: "free",
		name: "Free",
		price: "$0/month",
		items: [
			"Frontend-only — no backend or database",
			"Fair usage limits apply",
		],
	},
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
			"Priority support queue with faster response",
			"Cloud infrastructure billed directly to your own provider account",
		],
	},
	{
		id: "enterprise",
		name: "Enterprise",
		price: "$1,000/month",
		items: [
			"Up to 30 projects",
			"Premium SLA with priority incident handling",
			"Custom integrations and dedicated technical contact",
			"Cloud infrastructure billed directly to your own provider account",
		],
	},
] as const;

export const pricingPlans = [
	{
		id: "starter",
		name: "Starter",
		tagline:
			"For teams shipping their first production apps without a DevOps hire.",
		price: 249,
		recommended: false,
		cta: "Get started",
		ctaHref: true,
		includes: [
			"Up to 10 projects",
			"AI deployment + monitoring",
			"Auto incident detection",
			"Auto GitHub/GitLab tickets",
			"Shared DevOps support",
		],
	},
	{
		id: "growth",
		name: "Growth",
		tagline:
			"For scaling teams that need faster support and deeper insights.",
		price: 499,
		recommended: true,
		cta: "Get started",
		ctaHref: true,
		includes: [
			"Up to 20 projects",
			"Everything in Starter",
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
		price: 1000,
		recommended: false,
		cta: "Talk to sales",
		ctaHref: false,
		includes: [
			"Up to 30 projects",
			"Everything in Growth",
			"Premium SLA",
			"Priority incident handling",
			"Custom integrations",
			"Dedicated tech contact",
		],
	},
] as const;

export const generalTerms = [
	"Platform subscriptions are billed monthly.",
	"You bring your own cloud (AWS, GCP, Azure, or DigitalOcean) — cloud usage is billed directly to your account by the provider, at cost.",
	"Fair usage policy applies to all plans.",
	"Custom development and integrations outside plan scope are quoted separately.",
] as const;

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

export const idealCustomers: { title: string; icon: LucideIcon }[] = [
	{ title: "SaaS Startups", icon: Rocket },
	{ title: "Software Dev Companies", icon: Code2 },
	{ title: "AI Startups", icon: Bot },
	{ title: "SMEs Going Digital", icon: TrendingUp },
	{ title: "Dev Agencies", icon: Users },
	{ title: "Teams Without DevOps", icon: Wrench },
];

export const idealCustomerThread =
	"The common thread: they have a product and a dev team — but no dedicated DevOps, or can't afford one. Exactly the people Sagyboar replaces.";

export const planFitGuide = [
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
			"Automatic incident detection and repo tickets",
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
			"Faster support response and a priority queue",
			"Advanced analytics and AI optimization suggestions",
			"Everything in Starter, leveled up",
		],
	},
	{
		id: "enterprise",
		plan: "Enterprise",
		price: "$1,000/month",
		audience: "Best for…",
		backgroundImage: "/Enterprise.png",
		icon: Building2,
		points: [
			"Established teams with up to 30 projects",
			"Premium SLA and priority incident handling",
			"Custom integrations and a dedicated tech contact",
			"Run everything on your own cloud account",
		],
	},
] as const;

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
		feature: "Auto repo issue tickets",
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
