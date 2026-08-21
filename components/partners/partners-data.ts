import type { LucideIcon } from "lucide-react";
import {
	Building2,
	Gauge,
	Handshake,
	Megaphone,
	MessageSquare,
	Newspaper,
	Rocket,
	Share2,
	ShieldCheck,
	Tag,
	Users,
} from "lucide-react";

export const partnerHero = {
	eyebrow: "Partner Program",
	title: "Sell deploys you never have to staff for.",
	titleHighlight: "never have to staff for",
	subline:
		"Refer, resell, or co-deliver on an AI-native DevOps platform. We handle deploy, host, and 24/7 healing — you keep the client and the margin.",
	primaryCta: { label: "Apply to partner", href: "#apply" },
	secondaryCta: { label: "See the models", href: "#models" },
} as const;

export const partnerStats = [
	{ metric: "<1 min", label: "Live deploy on our infra" },
	{ metric: "24/7", label: "Monitoring & auto-healing" },
	{ metric: "~70%", label: "Manual DevOps effort saved" },
	{ metric: "0", label: "DevOps headcount to add" },
] as const;

export type PartnerAudience = {
	title: string;
	tag: string;
	description: string;
	icon: LucideIcon;
};

export const partnerAudiences: PartnerAudience[] = [
	{
		title: "Consultants & creators",
		tag: "Referral partner",
		description:
			"CAs, freelancers, dev-influencers, solo builders. You know teams who need reliable hosting — send them our way and earn on every one that signs.",
		icon: Users,
	},
	{
		title: "Dev & web agencies",
		tag: "White-label & co-delivery",
		description:
			"You build client apps but don't want an in-house DevOps team. Ship deploy, hosting, and monitoring under your own brand — we stay invisible.",
		icon: Building2,
	},
];

export type PartnerModel = {
	number: string;
	name: string;
	bestFor: string;
	description: string;
	bullets: readonly string[];
	rate: string;
	featured?: boolean;
	icon: LucideIcon;
};

export const partnerModels: PartnerModel[] = [
	{
		number: "01",
		name: "Referral",
		bestFor: "Best for consultants & creators",
		description:
			"Send us a client who already needs hosting. We close, deliver, and support. You stay out of delivery entirely.",
		bullets: [
			"2.5% lifetime recurring, or 10% of first-year revenue — your pick",
			"Zero onboarding cost — just a referral link",
			"No delivery or support work on you",
		],
		rate: "2.5% recurring / mo",
		icon: Share2,
	},
	{
		number: "02",
		name: "White-label",
		bestFor: "Best for dev & web agencies",
		description:
			"Resell deploy + hosting + monitoring under your own brand. Sagyboar runs the backend, fully invisible to your client.",
		bullets: [
			"Get a low wholesale rate, charge your client your own price — the difference is your profit",
			"You own the client & the build/maintenance fee",
			"Pool many client sites on shared infra",
		],
		rate: "Up to 30% off list",
		featured: true,
		icon: Tag,
	},
	{
		number: "03",
		name: "Co-delivery",
		bestFor: "Best for bigger builds",
		description:
			"You build the app, we own deploy & ops on the client's own cloud. Client sees both — Sagyboar as the DevOps backbone.",
		bullets: [
			"Managed add-on MRR or revenue split",
			"Runs on the client's own cloud (BYOC)",
			"Named as the infra partner on the project",
		],
		rate: "Custom split",
		icon: Handshake,
	},
];

export type PartnerBenefit = {
	title: string;
	description: string;
	icon: LucideIcon;
};

export const partnerBenefits: PartnerBenefit[] = [
	{
		title: "Pre-sales support",
		description:
			"We join your client calls, scope the deploy, and help you close — at no cost to you.",
		icon: MessageSquare,
	},
	{
		title: "White-label assets",
		description:
			"Dashboards, health reports, and status pages carrying your brand, not ours.",
		icon: Newspaper,
	},
	{
		title: "Partner dashboard",
		description:
			"Track referrals, client deploys, and payouts in one place — logs and monitoring included.",
		icon: Gauge,
	},
	{
		title: "Priority incidents",
		description:
			"Partner deployments get faster response and a direct line when something breaks.",
		icon: ShieldCheck,
	},
	{
		title: "Onboarding help",
		description:
			"We migrate the first client sites with you, so your first deal goes live clean.",
		icon: Rocket,
	},
	{
		title: "Co-marketing",
		description:
			"Joint case studies and shoutouts once your clients are live and happy.",
		icon: Megaphone,
	},
];

export const partnerCta = {
	title: "Bring your first client this week.",
	titleHighlight: "this week.",
	subline:
		"Tell us how you sell and we'll match you to a model. No lock-in, no setup fee.",
	primaryCta: { label: "Apply to partner", href: "/contact" },
	secondaryCta: { label: "Book a call", href: "/contact" },
} as const;
