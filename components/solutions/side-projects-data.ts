import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import {
	formatSolutionHeroPrice,
	solutionPricingPlans,
} from "@/lib/pricing";
import type { SolutionPageData } from "./solution-types";

/** Side Projects maps to the Indie Solo tier on /pricing */
const soloPlan = solutionPricingPlans.sideProjects.indie;
const soloPrice = formatSolutionHeroPrice("sideProjects");

export const sideProjectsSolutionPage: SolutionPageData = {
	hero: {
		title: "Side Projects",
		headline: "Deploy your side projects without the DevOps headache",
		headlineHighlight: "DevOps headache",
		description: `${soloPlan.tagline} Always-on hosting on our managed VPS, AI alerts with auto-tickets to your repo, and email support — from ${soloPrice}.`,
		price: soloPrice,
		cta: soloPlan.cta,
		ctaHref: soloPlan.ctaHref ?? Sagyboar_PORTAL_URL,
		ctaExternal: true,
		heroImage: "/Hobby.png",
		heroImageAlt: "Deploy your side projects without the DevOps headache",
		heroGraphic: "sideProject",
		icon: "sparkles",
	},
	stack: {
		title: "Everything in Solo",
		titleHighlight: "Solo",
		subtitle:
			"Side Projects runs on the Indie Solo plan — same specs and pricing as on our pricing page.",
		sections: [
			{
				title: "One project on managed VPS",
				description:
					"Deploy one production app on Sagyboar-managed infrastructure with SSL, always-on uptime, and one custom subdomain — no cloud account required.",
				image: "/Default.png",
				imageAlt: "Sagyboar projects dashboard",
				graphic: "oneApp",
			},
			{
				title: "512 MB RAM, always-on",
				description:
					"512 MB RAM pooled across your project with always-on scheduling — your app stays reachable without cold starts after idle time.",
				image: "/Default.png",
				imageAlt: "Managed servers on Sagyboar",
				graphic: "managedHosting",
			},
			{
				title: "AI alerts & auto-tickets",
				description:
					"AI monitoring sends alerts and opens structured auto-tickets in your connected GitHub or GitLab repo when issues are detected.",
				image: "/Default.png",
				imageAlt: "AI monitoring dashboard",
				graphic: "uptime",
			},
			{
				title: "Bring your own database",
				description:
					"Connect your own database — Supabase, Neon, MongoDB Atlas, or any external provider. Managed databases are not included on Indie plans.",
				image: "/Default.png",
				imageAlt: "External database connection",
				graphic: "database",
			},
			{
				title: "Disk, bandwidth & email support",
				description:
					"Includes 3 GB disk, 200 build minutes/month, 25 GB bandwidth/month, and email support with a 48-hour response time.",
				image: "/Default.png",
				imageAlt: "Plan resources and support",
				graphic: "tickets",
			},
		],
	},
	spotlight: {
		eyebrow: "Indie Solo plan",
		title: "Ship your side project in minutes, not weekends",
		titleHighlight: "not weekends",
		description:
			"Connect your repo, attach your own database, and deploy to our managed VPS with SSL and monitoring already wired up — priced for students, freelancers, and solo builders.",
		cta: soloPlan.cta,
		ctaHref: soloPlan.ctaHref ?? Sagyboar_PORTAL_URL,
		ctaExternal: true,
		image: "/Hobby.png",
		imageAlt: "Ship your side project in minutes, not weekends",
		graphic: "quickShip",
	},
	faq: {
		title: "Side Projects FAQ",
		titleHighlight: "FAQ",
		subtitle: "Common questions about the Indie Solo plan for side projects.",
		items: [
			{
				question: "What is included for Side Projects?",
				answer: `Side Projects uses the Indie Solo plan (${soloPrice}): 1 project, 512 MB RAM pooled, 3 GB disk, always-on hosting, 200 build minutes/month, 25 GB bandwidth/month, 1 subdomain, AI monitoring with alerts and auto-tickets to your repo, and email support with a 48-hour response. You must bring your own database (Supabase, Neon, Mongo Atlas, etc.) — managed databases are not included.`,
			},
			{
				question: "Is a managed database included?",
				answer:
					"No. Indie plans require you to bring your own database. Connect Supabase, Neon, MongoDB Atlas, PlanetScale, or any external provider. Managed databases are exclusive to Team (BYOC) plans.",
			},
			{
				question: "Where is my app hosted?",
				answer:
					"On Sagyboar-managed VPS infrastructure — not on your own cloud account. We handle the server, SSL, and uptime monitoring so you can focus on building.",
			},
			{
				question: "How does automated issue ticketing work?",
				answer:
					"When AI monitoring detects an error or anomaly, it opens a structured ticket in your connected GitHub or GitLab repo with context, severity, and suggested next steps.",
			},
			{
				question: "Can I upgrade later?",
				answer:
					"Yes. Move up to Builder or Studio on Indie for more projects, RAM, and auto-heal — or switch to Team BYOC plans when you need shared DevOps, managed databases, and SLA-backed support.",
			},
			{
				question: "What does the fair usage policy mean?",
				answer:
					"Indie plans include monthly build minutes and bandwidth caps. Additional compute, storage, or bandwidth beyond included limits may be billed separately under our fair usage policy.",
			},
		],
	},
	cta: {
		title: "Ready to deploy without the DevOps grind?",
		titleHighlight: "DevOps grind?",
		description:
			"Join solo developers shipping on the Indie Solo plan. Get started today or contact us if you have questions.",
		primaryCta: soloPlan.cta,
		primaryHref: soloPlan.ctaHref ?? Sagyboar_PORTAL_URL,
		primaryExternal: true,
		secondaryCta: "Contact us",
		secondaryHref: "/contact",
	},
};
