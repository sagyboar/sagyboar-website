import type { LucideIcon } from "lucide-react";
import {
	Bot,
	Building2,
	GitBranch,
	Rocket,
	Shield,
	Sparkles,
	TrendingDown,
	Users,
} from "lucide-react";

export const pricingStats = [
	{
		prefix: "",
		end: 87,
		suffix: "%",
		decimalPlaces: 0,
		label: "avg cost saved vs hiring separately",
	},
	{
		prefix: "<",
		end: 2,
		suffix: " min",
		decimalPlaces: 0,
		label: "from code to live deployment",
	},
	{
		prefix: "",
		end: 99.9,
		suffix: "%",
		decimalPlaces: 1,
		label: "uptime SLA on Enterprise",
	},
] as const;

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
		id: "hobby",
		name: "Hobby",
		price: "$49/month",
		items: [
			"Suitable for low-to-moderate traffic applications",
			"Additional storage, bandwidth, or compute usage is billed separately",
		],
	},
	{
		id: "startup",
		name: "Startup",
		price: "$249/month",
		items: [
			"Includes standard infrastructure allocation",
			"Additional cloud resources, storage, bandwidth, databases, or third-party costs are billed separately",
			"Engineering support is limited to operational tasks, bug fixes, deployments, and minor enhancements",
		],
	},
	{
		id: "enterprise",
		name: "Enterprise",
		price: "$1,499/month",
		items: [
			"Unlimited applications and databases subject to fair usage",
			"Client may use their own AWS, GCP, or Azure account",
			"Infrastructure costs beyond included allocations are billed separately at actual cost",
			"Custom enterprise requirements are quoted separately",
		],
	},
] as const;

export const pricingPlans = [
	{
		id: "hobby",
		name: "Hobby",
		tagline: "For solo developers, MVPs, and personal projects.",
		price: 49,
		recommended: false,
		cta: "Get started",
		ctaHref: true,
		includes: [
			"1 application deployment",
			"Managed hosting on Sagyboar infrastructure",
			"Basic AI monitoring & uptime alerts",
			"Automated issue ticket creation",
			"1 managed database",
			"10 GB storage",
			"Custom domain & SSL",
			"Community support",
		],
	},
	{
		id: "startup",
		name: "Startup",
		tagline:
			"For growing startups that need reliable DevOps without hiring a full-time team.",
		price: 249,
		recommended: true,
		cta: "Get started",
		ctaHref: true,
		includes: [
			"Up to 5 applications",
			"One-click deployments",
			"Advanced AI monitoring & log analysis",
			"Automated issue tickets with prioritization",
			"Up to 3 managed databases",
			"50 GB storage",
			"AI-assisted engineering support (up to 10 hrs/month)",
			"On-demand DevOps assistance",
			"Email & chat support (48-hour response target)",
		],
	},
	{
		id: "enterprise",
		name: "Enterprise",
		tagline:
			"For businesses that require dedicated infrastructure and a fully managed platform team.",
		price: 1499,
		recommended: false,
		cta: "Talk to sales",
		ctaHref: false,
		includes: [
			"Unlimited applications (fair usage applies)",
			"Dedicated infrastructure (AWS, GCP, Azure, or client-owned cloud)",
			"Complete AI DevOps suite",
			"Automated ticket routing & escalation",
			"Unlimited managed databases (fair usage applies)",
			"200 GB storage included",
			"Dedicated AI-powered developer",
			"Dedicated DevOps engineer",
			"QA support on demand",
			"SLA: 4-hour response target",
			"99.9% uptime commitment",
			"Custom integrations & onboarding",
		],
	},
] as const;

export const generalTerms = [
	"Prices are billed monthly.",
	"Cloud infrastructure, bandwidth, storage, and third-party service costs beyond included limits are charged separately.",
	"Fair usage policy applies to all plans.",
	"Custom development requests outside plan scope are quoted separately.",
] as const;

export const planFitGuide = [
	{
		id: "hobby",
		plan: "Hobby",
		price: "$49/month",
		audience: "Best for…",
		backgroundImage: "/Hobby.png",
		icon: Sparkles,
		points: [
			"Solo developers building MVPs or personal projects",
			"Low-to-moderate traffic applications",
			"Managed hosting with basic AI monitoring",
			"Community support and automated issue tickets",
		],
	},
	{
		id: "startup",
		plan: "Startup",
		price: "$249/month",
		audience: "Best for…",
		backgroundImage: "/startup.png",
		icon: Rocket,
		points: [
			"Growing startups scaling production apps",
			"Teams that need DevOps without a full-time hire",
			"AI-assisted engineering and on-demand DevOps help",
			"Multiple apps with prioritized support",
		],
	},
	{
		id: "enterprise",
		plan: "Enterprise",
		price: "$1,499/month",
		audience: "Best for…",
		backgroundImage: "/Enterprise.png",
		icon: Building2,
		points: [
			"Businesses needing dedicated infrastructure",
			"A fully managed platform team on your stack",
			"SLA-backed uptime and 4-hour response targets",
			"Custom integrations, onboarding, and QA on demand",
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
		Sagyboar: "$49/mo",
		others: "~$7–25/mo",
		hiringTeam: "$3,000+/mo",
	},
	{
		feature: "Managed hosting",
		Sagyboar: "Yes",
		others: "Partial / self-host",
		hiringTeam: "No",
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
		title: "1-click deploy, zero config",
		description:
			"Deploy frontend, backend, or full-stack apps with a single click on our managed AWS infrastructure. No Dockerfile knowledge, no server setup, no infrastructure headaches.",
		icon: Rocket,
	},
	{
		title: "Save up to 92% vs market rates",
		description:
			"Enterprise clients save $7,000–$11,000/month vs hiring a developer + DevOps + QA separately. Startup clients save $1,100–$1,500/month vs piecing together tools and freelancers.",
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
			"Hobby and Startup plans use managed hosting on Sagyboar infrastructure. Enterprise clients get dedicated infrastructure on AWS, GCP, Azure, or their own client-owned cloud account.",
	},
	{
		question: "What does the AI-assisted engineering support include on Startup?",
		answer:
			"Startup includes up to 10 hours per month of AI-assisted engineering support for operational tasks, bug fixes, deployments, and minor enhancements. Custom development outside this scope is quoted separately.",
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
			"On Enterprise, we guarantee 99.9% uptime and a 4-hour maximum response time on all critical issues. If we miss these targets, you receive a credit on your next invoice. No excuses.",
	},
	{
		question: "What is the fair usage policy?",
		answer:
			"All plans include standard infrastructure allocations suited to typical usage. Additional cloud resources, storage, bandwidth, databases, and third-party service costs beyond included limits are billed separately. Enterprise unlimited applications and databases are subject to fair usage.",
	},
	{
		question: "Can Enterprise clients use their own cloud account?",
		answer:
			"Yes. Enterprise clients may use their own AWS, GCP, or Azure account. Infrastructure costs beyond included allocations are billed separately at actual cost.",
	},
] as const;
