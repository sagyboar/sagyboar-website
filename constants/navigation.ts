import type { LucideIcon } from "lucide-react";
import {
	Activity,
	Bot,
	Briefcase,
	Building2,
	Database,
	FileText,
	KeyRound,
	LayoutDashboard,
	Mail,
	Newspaper,
	Paintbrush,
	Rocket,
	ScrollText,
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
		title: "Hobby",
		footerLabel: "Hobby",
		href: "/solutions/hobby",
		description:
			"For solo developers, MVPs, and personal projects. Managed hosting, AI monitoring, and community support from $49/month.",
		icon: Sparkles,
		backgroundImage: "/Hobby.png",
	},
	{
		title: "Startup",
		footerLabel: "Startup",
		href: "/solutions/startup",
		description:
			"For growing startups that need reliable DevOps without hiring full-time. AI-assisted engineering and on-demand DevOps from $249/month.",
		icon: Rocket,
		backgroundImage: "/startup.png",
	},
	{
		title: "Enterprise",
		footerLabel: "Enterprise",
		href: "/solutions/enterprise",
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
	{ href: "/blog", label: "Blog", icon: Newspaper },
	{ href: "/jobs", label: "Careers", icon: Briefcase },
	{ href: "/contact", label: "Contact Us", icon: Mail },
	{ href: "/pricing", label: "Pricing", icon: Tag },
	{ href: "/terms-of-service", label: "Terms of Service", icon: FileText },
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
