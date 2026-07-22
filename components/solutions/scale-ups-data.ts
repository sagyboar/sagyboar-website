import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import type { SolutionPageData } from "./solution-types";

export const scaleUpsSolutionPage: SolutionPageData = {
	hero: {
		title: "Scale-ups",
		headline: "Scale your product without hiring a full DevOps team",
		headlineHighlight: "DevOps team",
		description:
			"For growing companies that need reliable deployments, advanced monitoring, and real engineering help. Run up to five apps with AI-assisted support and on-demand DevOps from $249/month.",
		price: "$249/month",
		cta: "Get started",
		ctaHref: Sagyboar_PORTAL_URL,
		ctaExternal: true,
		heroImage: "/startup.png",
		heroImageAlt: "Scale your product without hiring a full DevOps team",
		heroGraphic: "scale",
		icon: "rocket",
	},
	stack: {
		title: "Everything for Scale-ups",
		titleHighlight: "Scale-ups",
		subtitle:
			"Five capabilities that help growing companies ship faster with less overhead.",
		sections: [
			{
				title: "Up to five applications",
				description:
					"Run multiple production services from one platform. Scale-ups supports up to five managed applications with one-click deployments and shared observability.",
				image: "/Default.png",
				imageAlt: "Multiple projects on Sagyboar",
				graphic: "fiveApps",
			},
			{
				title: "One-click deployments",
				description:
					"Push to main and ship. Connect your repo and deploy with automated builds, rollbacks, and environment management built in.",
				image: "/Default.png",
				imageAlt: "One-click deployment logs",
				graphic: "deploy",
			},
			{
				title: "Advanced AI monitoring",
				description:
					"Go beyond uptime checks with log analysis, anomaly detection, and prioritized alerts so your company catches issues before customers do.",
				image: "/Default.png",
				imageAlt: "Advanced monitoring dashboard",
				graphic: "monitoring",
			},
			{
				title: "AI-assisted engineering",
				description:
					"Get up to 10 hours per month of AI-assisted engineering for operational tasks, bug fixes, deployments, and minor enhancements.",
				image: "/Default.png",
				imageAlt: "Managed infrastructure for scale-ups",
				graphic: "aiEngineer",
			},
			{
				title: "On-demand DevOps & support",
				description:
					"Email and chat support with a 48-hour response target, plus on-demand DevOps assistance when you need an expert in the loop.",
				image: "/Default.png",
				imageAlt: "Collaboration on Sagyboar",
				graphic: "support",
			},
		],
	},
	spotlight: {
		eyebrow: "Grow without the hire",
		title: "Your DevOps team — without the payroll",
		titleHighlight: "the payroll",
		description:
			"Scale-ups replaces the early infrastructure hire with managed hosting, advanced monitoring, and hands-on engineering support. Focus your runway on product, not server firefights.",
		cta: "Get started",
		ctaHref: Sagyboar_PORTAL_URL,
		ctaExternal: true,
		image: "/startup.png",
		imageAlt: "A full DevOps team without the payroll",
		graphic: "noPayroll",
	},
	faq: {
		title: "Scale-ups FAQ",
		titleHighlight: "FAQ",
		subtitle:
			"Common questions about scaling production apps on Sagyboar Scale-ups.",
		items: [
			{
				question: "What is included for Scale-ups?",
				answer:
					"Scale-ups includes up to five applications, one-click deployments, advanced AI monitoring, prioritized issue tickets, up to three managed databases, 50 GB storage, AI-assisted engineering (up to 10 hrs/month), on-demand DevOps assistance, and email & chat support.",
			},
			{
				question: "What does AI-assisted engineering support cover?",
				answer:
					"It covers operational tasks, bug fixes, deployments, and minor enhancements — up to 10 hours per month. Custom development outside this scope is quoted separately.",
			},
			{
				question: "How fast is support on Scale-ups?",
				answer:
					"Scale-ups includes email and chat support with a 48-hour response target. Critical production issues are prioritized through our on-demand DevOps channel.",
			},
			{
				question: "Can I run multiple environments?",
				answer:
					"Yes. Deploy staging and production apps across your included application slots and manage them from a single dashboard.",
			},
			{
				question: "What happens if I outgrow Scale-ups?",
				answer:
					"You can move to Organizations for dedicated infrastructure, SLA-backed uptime, and a fully managed platform team. Upgrades take effect immediately.",
			},
			{
				question: "How does fair usage work on Scale-ups?",
				answer:
					"Scale-ups includes standard infrastructure allocation suited to growing companies. Additional cloud resources, storage, bandwidth, or databases beyond included limits are billed separately.",
			},
		],
	},
	cta: {
		title: "Ready to scale without slowing down?",
		description:
			"Join companies shipping faster on Sagyboar. Get started with Scale-ups or talk to us about your stack.",
		primaryCta: "Get started",
		primaryHref: Sagyboar_PORTAL_URL,
		primaryExternal: true,
		secondaryCta: "Contact us",
		secondaryHref: "/contact",
	},
};
