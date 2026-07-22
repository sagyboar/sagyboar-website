import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import type { SolutionPageData } from "./solution-types";

export const sideProjectsSolutionPage: SolutionPageData = {
	hero: {
		title: "Side Projects",
		headline: "Deploy your side projects without the DevOps headache",
		headlineHighlight: "DevOps headache",
		description:
			"For solo developers, MVPs, and personal projects. Get managed hosting, AI monitoring, automated issue tickets, and community support — all from $49/month.",
		price: "$49/month",
		cta: "Get started",
		ctaHref: Sagyboar_PORTAL_URL,
		ctaExternal: true,
		heroImage: "/Hobby.png",
		heroImageAlt: "Deploy your side projects without the DevOps headache",
		heroGraphic: "sideProject",
		icon: "sparkles",
	},
	stack: {
		title: "Everything for Side Projects",
		titleHighlight: "Side Projects",
		subtitle:
			"Scroll through five core capabilities included for side-project builders.",
		sections: [
			{
				title: "One application, fully managed",
				description:
					"Deploy a production app without wiring servers yourself. Side Projects includes one managed application on Sagyboar infrastructure with SSL and a custom domain.",
				image: "/Default.png",
				imageAlt: "Sagyboar projects dashboard",
				graphic: "oneApp",
			},
			{
				title: "Managed hosting included",
				description:
					"Skip the infrastructure rabbit hole. Your app runs on our managed stack so you can focus on building — not patching servers or chasing uptime.",
				image: "/Default.png",
				imageAlt: "Managed servers on Sagyboar",
				graphic: "managedHosting",
			},
			{
				title: "AI monitoring & alerts",
				description:
					"Basic AI monitoring watches your app around the clock and surfaces uptime issues before your users do.",
				image: "/Default.png",
				imageAlt: "AI monitoring dashboard",
				graphic: "uptime",
			},
			{
				title: "Automated issue tickets",
				description:
					"When something breaks, Sagyboar can open structured issue tickets in your repo so fixes start faster.",
				image: "/Default.png",
				imageAlt: "Deployment and issue tracking",
				graphic: "tickets",
			},
			{
				title: "Database, storage & support",
				description:
					"Includes one managed database, 10 GB storage, and community support — everything a solo builder needs to ship confidently.",
				image: "/Default.png",
				imageAlt: "Compose and database management",
				graphic: "database",
			},
		],
	},
	spotlight: {
		eyebrow: "Built for builders",
		title: "Ship your side project in minutes, not weekends",
		titleHighlight: "not weekends",
		description:
			"Connect your repo, pick a stack, and deploy to managed infrastructure with SSL and monitoring already wired up. Side Projects gives solo builders production-grade hosting without learning Kubernetes.",
		cta: "Get started",
		ctaHref: Sagyboar_PORTAL_URL,
		ctaExternal: true,
		image: "/Hobby.png",
		imageAlt: "Ship your side project in minutes, not weekends",
		graphic: "quickShip",
	},
	faq: {
		title: "Side Projects FAQ",
		titleHighlight: "FAQ",
		subtitle:
			"Common questions about deploying side projects on Sagyboar.",
		items: [
			{
				question: "What is included for Side Projects?",
				answer:
					"Side Projects includes one managed application, basic AI monitoring, automated issue tickets, one managed database, 10 GB storage, custom domain with SSL, and community support — all for $49/month.",
			},
			{
				question: "Where is my app hosted?",
				answer:
					"Side Projects uses managed hosting on Sagyboar infrastructure. We handle servers, SSL, and uptime monitoring so you can focus on building.",
			},
			{
				question: "How does automated issue ticketing work?",
				answer:
					"When our AI monitoring detects an error or anomaly, it opens a structured ticket in your connected GitHub or GitLab repo with context, severity, and suggested next steps.",
			},
			{
				question: "Can I upgrade to Scale-ups later?",
				answer:
					"Yes. You can upgrade at any time from the dashboard. Upgrades take effect immediately so you can scale as your project grows.",
			},
			{
				question: "What does the fair usage policy mean for Side Projects?",
				answer:
					"Side Projects is built for low-to-moderate traffic side projects and MVPs. Additional storage, bandwidth, or compute beyond included limits is billed separately.",
			},
			{
				question: "What kind of support do I get?",
				answer:
					"Side Projects includes community support through our channels. For faster response times and dedicated engineering help, consider upgrading to Scale-ups.",
			},
		],
	},
	cta: {
		title: "Ready to deploy without the DevOps grind?",
		description:
			"Join solo developers shipping faster on Sagyboar. Get started with Side Projects today or talk to us if you have questions.",
		primaryCta: "Get started",
		primaryHref: Sagyboar_PORTAL_URL,
		primaryExternal: true,
		secondaryCta: "Contact us",
		secondaryHref: "/contact",
	},
};
