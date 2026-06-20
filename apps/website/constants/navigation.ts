import type { LucideIcon } from "lucide-react";
import {
	Activity,
	BookOpen,
	Bot,
	Briefcase,
	Building2,
	CircleHelp,
	Database,
	GitCompare,
	Handshake,
	LayoutDashboard,
	LayoutTemplate,
	Rocket,
	Server,
} from "lucide-react";

export type NavLinkItem = {
	title: string;
	href: string;
	description: string;
	icon: LucideIcon;
	target?: string;
};

export const featureLinks: NavLinkItem[] = [
	{
		title: "Application Deployment",
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
		href: "/deploy-ai",
		description: "Empower your team to deploy AI tools",
		icon: Bot,
	},
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
		href: "/self-hosted-paas",
		description: "Self-hosted PaaS built for developers",
		icon: Server,
	},
];

export const resourceLinks: NavLinkItem[] = [
	{
		title: "Templates",
		href: "https://templates.dokploy.com",
		description: "Ready-to-deploy templates",
		icon: LayoutTemplate,
		target: "_blank",
	},
	{
		title: "Dokploy vs.",
		href: "/comparison",
		description: "Compare Dokploy to alternatives",
		icon: GitCompare,
	},
	{
		title: "Blog",
		href: "/blog",
		description: "Latest news and updates",
		icon: BookOpen,
	},
	{
		title: "FAQ",
		href: "/#faqs",
		description: "Frequently asked questions",
		icon: CircleHelp,
	},
	{
		title: "Careers",
		href: "/jobs",
		description: "See open positions at Dokploy",
		icon: Briefcase,
	},
];
