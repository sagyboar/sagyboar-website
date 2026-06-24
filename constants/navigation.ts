import type { LucideIcon } from "lucide-react";
import {
	Activity,
	Bot,
	Building2,
	Database,
	Handshake,
	KeyRound,
	LayoutDashboard,
	Paintbrush,
	Rocket,
	ScrollText,
	Server,
	Shield,
} from "lucide-react";

export type NavLinkItem = {
	title: string;
	href: string;
	description: string;
	icon: LucideIcon;
	target?: string;
	footerLabel?: string;
};

export type FooterLink = {
	href: string;
	label: string;
};

export const platformFeatureLinks: NavLinkItem[] = [
	{
		title: "Application Deployment",
		footerLabel: "Application Deployment Platform",
		href: "/features/application-deployment-platform",
		description: "Deploy and manage applications with ease",
		icon: Rocket,
	},
	{
		title: "Databases",
		href: "/features/database-management-tool",
		description: "Manage your databases effortlessly",
		icon: Database,
	},
	{
		title: "Application Management",
		href: "/features/application-management-software",
		description: "Monitor and control your applications",
		icon: LayoutDashboard,
	},
	{
		title: "Monitoring",
		href: "/features/container-server-monitoring",
		description: "Keep your systems running smoothly",
		icon: Activity,
	},
	{
		title: "AI Deployment",
		footerLabel: "Deploy AI",
		href: "/deploy-ai",
		description: "Empower your team to deploy AI tools",
		icon: Bot,
	},
];

export const enterpriseFeatureLinks: NavLinkItem[] = [
	{
		title: "RBAC",
		href: "/features/role-based-access-control",
		description: "Fine-grained role-based access control",
		icon: Shield,
	},
	{
		title: "SSO",
		href: "/features/single-sign-on",
		description: "Single sign-on for your organization",
		icon: KeyRound,
	},
	{
		title: "Audit Logs",
		href: "/features/audit-logs",
		description: "Full visibility into every action",
		icon: ScrollText,
	},
	{
		title: "White Labeling",
		href: "/features/white-labeling",
		description: "Deploy under your own brand",
		icon: Paintbrush,
	},
];

/** Grouped feature links — matches footer Platform + Enterprise Features sections */
export const featureMenuGroups = [
	{
		label: "Platform",
		items: platformFeatureLinks,
	},
	{
		label: "Enterprise",
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
		title: "Enterprise",
		href: "/enterprise",
		description: "Enterprise-grade deployment platform",
		icon: Building2,
	},
	{
		title: "Partners",
		href: "/partners",
		description: "Partner program and integrations",
		icon: Handshake,
	},
	{
		title: "Self-Hosted",
		footerLabel: "Self-Hosted PaaS",
		href: "/self-hosted-paas",
		description: "Self-hosted PaaS built for developers",
		icon: Server,
	},
];

export const topNavLinks: FooterLink[] = [
	{ href: "/pricing", label: "Pricing" },
	{ href: "/blog", label: "Blog" },
];

export const companyLinks: FooterLink[] = [
	{ href: "/blog", label: "Blog" },
	{ href: "/jobs", label: "Careers" },
	{ href: "/terms-of-service", label: "Terms of Service" },
	{ href: "/privacy", label: "Privacy Policy" },
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
	};
}

export const productLinks: FooterLink[] = [
	{ href: "/", label: "Home" },
	{ href: "/pricing", label: "Pricing" },
	{ href: "/contact", label: "Contact" },
];

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
		title: "Product",
		ariaLabel: "Product",
		links: productLinks,
	},
	{
		title: "Company",
		ariaLabel: "Company",
		links: companyLinks,
	},
];
