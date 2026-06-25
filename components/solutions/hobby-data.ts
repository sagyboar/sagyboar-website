import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import type { SolutionPageData } from "./solution-types";

export const hobbySolutionPage: SolutionPageData = {
	hero: {
		title: "Hobby",
		headline: "Deploy your side projects without the DevOps headache",
		headlineHighlight: "DevOps headache",
		description:
			"For solo developers, MVPs, and personal projects. Get managed hosting, AI monitoring, automated issue tickets, and community support — all from $49/month.",
		price: "$49/month",
		cta: "Get started",
		ctaHref: Sagyboar_PORTAL_URL,
		ctaExternal: true,
		heroImage: "/Hobby.png",
		heroImageAlt: "Sagyboar Hobby plan",
		icon: "sparkles",
	},
	stack: {
		title: "Everything in Hobby",
		titleHighlight: "Hobby",
		subtitle:
			"Scroll through five core capabilities included in the Hobby plan.",
		sections: [
			{
				title: "One application, fully managed",
				description:
					"Deploy a production app without wiring servers yourself. Hobby includes one managed application on Sagyboar infrastructure with SSL and a custom domain.",
				image: "/Default.png",
				imageAlt: "Sagyboar projects dashboard",
			},
			{
				title: "Managed hosting included",
				description:
					"Skip the infrastructure rabbit hole. Your app runs on our managed stack so you can focus on building — not patching servers or chasing uptime.",
				image: "/Default.png",
				imageAlt: "Managed servers on Sagyboar",
			},
			{
				title: "AI monitoring & alerts",
				description:
					"Basic AI monitoring watches your app around the clock and surfaces uptime issues before your users do.",
				image: "/Default.png",
				imageAlt: "AI monitoring dashboard",
			},
			{
				title: "Automated issue tickets",
				description:
					"When something breaks, Sagyboar can open structured issue tickets in your repo so fixes start faster.",
				image: "/Default.png",
				imageAlt: "Deployment and issue tracking",
			},
			{
				title: "Database, storage & support",
				description:
					"Includes one managed database, 10 GB storage, and community support — everything a solo builder needs to ship confidently.",
				image: "/Default.png",
				imageAlt: "Compose and database management",
			},
		],
	},
	spotlight: {
		eyebrow: "Built for builders",
		title: "Ship your side project in minutes, not weekends",
		titleHighlight: "not weekends",
		description:
			"Connect your repo, pick a stack, and deploy to managed infrastructure with SSL and monitoring already wired up. Hobby gives solo builders production-grade hosting without learning Kubernetes.",
		cta: "Start with Hobby",
		ctaHref: Sagyboar_PORTAL_URL,
		ctaExternal: true,
		image: "/Hobby.png",
		imageAlt: "Deploy a project on Sagyboar",
	},
	faq: {
		title: "Hobby plan FAQ",
		titleHighlight: "FAQ",
		subtitle:
			"Common questions about deploying side projects on Sagyboar Hobby.",
		items: [
			{
				question: "What is included in the Hobby plan?",
				answer:
					"Hobby includes one managed application, basic AI monitoring, automated issue tickets, one managed database, 10 GB storage, custom domain with SSL, and community support — all for $49/month.",
			},
			{
				question: "Where is my app hosted?",
				answer:
					"Hobby uses managed hosting on Sagyboar infrastructure. We handle servers, SSL, and uptime monitoring so you can focus on building.",
			},
			{
				question: "How does automated issue ticketing work?",
				answer:
					"When our AI monitoring detects an error or anomaly, it opens a structured ticket in your connected GitHub or GitLab repo with context, severity, and suggested next steps.",
			},
			{
				question: "Can I upgrade to Startup later?",
				answer:
					"Yes. You can upgrade at any time from the dashboard. Upgrades take effect immediately so you can scale as your project grows.",
			},
			{
				question: "What does the fair usage policy mean for Hobby?",
				answer:
					"Hobby is built for low-to-moderate traffic side projects and MVPs. Additional storage, bandwidth, or compute beyond included limits is billed separately.",
			},
			{
				question: "What kind of support do I get?",
				answer:
					"Hobby includes community support through our channels. For faster response times and dedicated engineering help, consider upgrading to Startup.",
			},
		],
	},
	cta: {
		title: "Ready to deploy without the DevOps grind?",
		description:
			"Join solo developers shipping faster on Sagyboar. Get started with Hobby today or talk to us if you have questions.",
		primaryCta: "Get started",
		primaryHref: Sagyboar_PORTAL_URL,
		primaryExternal: true,
		secondaryCta: "Contact us",
		secondaryHref: "/contact",
	},
};
