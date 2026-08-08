import {
	type FeaturePageData,
	featurePages,
} from "@/components/features/features-data";
import type { SiteNavMenuKey } from "@/constants/site-nav";
import {
	formatSolutionHeroPrice,
	formatSolutionNavPrice,
} from "@/lib/pricing";
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
	/** Short one-liner for the nav dropdown, where `description` is too long */
	tagline?: string;
	/** Entry price shown as a chip in the nav dropdown */
	price?: string;
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
		description: `For solo developers, MVPs, and personal projects. Managed VPS hosting, AI monitoring, and email support from ${formatSolutionHeroPrice("sideProjects")}. Bring your own database.`,
		tagline: "Solo devs, MVPs, and personal projects",
		price: formatSolutionNavPrice("sideProjects"),
		icon: Sparkles,
		backgroundImage: "/Hobby.png",
	},
	{
		title: "Scale-ups",
		footerLabel: "Scale-ups",
		href: "/solutions/scale-ups",
		description: `Team Starter BYOC plan for growing companies — up to 10 projects, AI deployment & monitoring, auto tickets, and shared DevOps from ${formatSolutionHeroPrice("scaleUps")}.`,
		tagline: "Growing teams without a DevOps hire",
		price: formatSolutionNavPrice("scaleUps"),
		icon: Rocket,
		backgroundImage: "/startup.png",
	},
	{
		title: "Organizations",
		footerLabel: "Organizations",
		href: "/solutions/organizations",
		description: `Team Enterprise BYOC plan — up to 30 projects, auto-heal, 8 agents, SSO, premium SLA, and dedicated tech contact from ${formatSolutionHeroPrice("organizations")}.`,
		tagline: "Dedicated infra with SLA-backed uptime",
		price: formatSolutionNavPrice("organizations"),
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

/** Item shape used by the nav dropdowns (desktop panels + mobile accordion) */
export type NavMenuItem = {
	title: string;
	href: string;
	description?: string;
	icon: LucideIcon;
	/** Rendered as a small chip beside the title, e.g. an entry price */
	badge?: string;
};

export type NavMenuSection = {
	label: string;
	items: NavMenuItem[];
};

const LEGAL_HREFS = new Set(["/terms-of-service", "/sla", "/privacy"]);

export const navMenuSections: Record<SiteNavMenuKey, NavMenuSection[]> = {
	features: featureMenuGroups.map((group) => ({
		label: group.label,
		items: group.items.map((item) => ({
			title: item.title,
			href: item.href,
			description: item.description,
			icon: item.icon,
		})),
	})),
	solutions: [
		{
			label: "By team size",
			items: solutionLinks.map((item) => ({
				title: item.title,
				href: item.href,
				description: item.tagline ?? item.description,
				icon: item.icon,
				badge: item.price,
			})),
		},
	],
	company: [
		{
			label: "Company",
			items: companyLinks
				.filter(
					(link) => !LEGAL_HREFS.has(link.href) && link.href !== "/pricing",
				)
				.map((link) => ({
					title: link.label,
					href: link.href,
					icon: link.icon,
				})),
		},
		{
			label: "Legal",
			items: companyLinks
				.filter((link) => LEGAL_HREFS.has(link.href))
				.map((link) => ({
					title: link.label,
					href: link.href,
					icon: link.icon,
				})),
		},
	],
};

/** Bottom row of each dropdown panel */
export const navMenuFooters: Record<
	SiteNavMenuKey,
	{ href: string; label: string; hint: string }
> = {
	features: {
		href: "/features",
		label: "Browse all features",
		hint: "Overview",
	},
	solutions: { href: "/pricing", label: "Compare every plan", hint: "Pricing" },
	company: { href: "/jobs", label: "We're hiring", hint: "Careers" },
};

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
