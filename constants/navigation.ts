import {
	type FeaturePageData,
	featurePages,
} from "@/components/features/features-data";
import type { LucideIcon } from "lucide-react";
import {
	Briefcase,
	Building2,
	FileText,
	Gauge,
	Info,
	Mail,
	Rocket,
	Shield,
	Sparkles,
	Tag,
} from "lucide-react";

export type NavLinkItem = {
	title: string;
	href: string;
	description: string;
	icon: LucideIcon;
	target?: string;
	footerLabel?: string;
	backgroundImage?: string;
};

export type FooterLink = {
	href: string;
	label: string;
	icon: LucideIcon;
};

function featureToNavLink(feature: FeaturePageData): NavLinkItem {
	return {
		title: feature.navTitle,
		href: `/features/${feature.slug}`,
		description: feature.navDescription,
		icon: feature.icon,
	};
}

export const platformFeatureLinks: NavLinkItem[] = featurePages
	.filter((feature) => feature.group === "Platform")
	.map(featureToNavLink);

export const enterpriseFeatureLinks: NavLinkItem[] = featurePages
	.filter((feature) => feature.group === "AI & Operations")
	.map(featureToNavLink);

/** Grouped feature links — matches footer feature sections */
export const featureMenuGroups = [
	{
		label: "Platform",
		items: platformFeatureLinks,
	},
	{
		label: "AI & Operations",
		items: enterpriseFeatureLinks,
	},
] as const;

/** All feature pages (flat list for mobile, etc.) */
export const featureLinks: NavLinkItem[] = [
	...platformFeatureLinks,
	...enterpriseFeatureLinks,
];

export const solutionLinks: NavLinkItem[] = [
	{
		title: "Side Projects",
		footerLabel: "Side Projects",
		href: "/solutions/side-projects",
		description:
			"For solo developers, MVPs, and personal projects. Managed hosting, AI monitoring, and community support from $49/month.",
		icon: Sparkles,
		backgroundImage: "/Hobby.png",
	},
	{
		title: "Scale-ups",
		footerLabel: "Scale-ups",
		href: "/solutions/scale-ups",
		description:
			"For growing companies that need reliable DevOps without hiring full-time. AI-assisted engineering and on-demand DevOps from $249/month.",
		icon: Rocket,
		backgroundImage: "/startup.png",
	},
	{
		title: "Organizations",
		footerLabel: "Organizations",
		href: "/solutions/organizations",
		description:
			"Dedicated infrastructure, a fully managed platform team, SLA-backed uptime, and custom onboarding from $1,499/month.",
		icon: Building2,
		backgroundImage: "/Enterprise.png",
	},
];

export const topNavLinks: FooterLink[] = [
	{ href: "/pricing", label: "Pricing", icon: Tag },
];

export const companyLinks: FooterLink[] = [
	{ href: "/about", label: "About Us", icon: Info },
	{ href: "/jobs", label: "Careers", icon: Briefcase },
	{ href: "/contact", label: "Contact Us", icon: Mail },
	{ href: "/pricing", label: "Pricing", icon: Tag },
	{ href: "/terms-of-service", label: "Terms of Service", icon: FileText },
	{ href: "/sla", label: "Service Level Agreement", icon: Gauge },
	{ href: "/privacy", label: "Privacy Policy", icon: Shield },
];

export type FooterSectionGroup = {
	label: string;
	links: FooterLink[];
};

export type FooterSection = {
	title: string;
	ariaLabel: string;
	links?: FooterLink[];
	groups?: FooterSectionGroup[];
};

function toFooterLink(item: NavLinkItem): FooterLink {
	return {
		href: item.href,
		label: item.footerLabel ?? item.title,
		icon: item.icon,
	};
}

export const footerSections: FooterSection[] = [
	{
		title: "Features",
		ariaLabel: "Features",
		groups: featureMenuGroups.map((group) => ({
			label: group.label,
			links: group.items.map(toFooterLink),
		})),
	},
	{
		title: "Solutions",
		ariaLabel: "Solutions",
		links: solutionLinks.map(toFooterLink),
	},
	{
		title: "Company",
		ariaLabel: "Company",
		links: companyLinks,
	},
];
