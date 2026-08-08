import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import {
	formatSolutionHeroPrice,
	solutionPricingPlans,
} from "@/lib/pricing";
import type { SolutionPageData } from "./solution-types";

/** Scale-ups maps to the Team Starter tier on /pricing */
const starterPlan = solutionPricingPlans.scaleUps.team;
const starterPrice = formatSolutionHeroPrice("scaleUps");

export const scaleUpsSolutionPage: SolutionPageData = {
	hero: {
		title: "Scale-ups",
		headline: "Scale your product without hiring a full DevOps team",
		headlineHighlight: "DevOps team",
		description: `${starterPlan.tagline} Run up to 10 projects on your own cloud with AI deployment, monitoring, auto incident detection, and shared DevOps support — from ${starterPrice}.`,
		price: starterPrice,
		cta: starterPlan.cta,
		ctaHref: starterPlan.ctaHref ?? Sagyboar_PORTAL_URL,
		ctaExternal: true,
		heroImage: "/startup.png",
		heroImageAlt: "Scale your product without hiring a full DevOps team",
		heroGraphic: "scale",
		icon: "rocket",
	},
	stack: {
		title: "Everything in Starter",
		titleHighlight: "Starter",
		subtitle:
			"Scale-ups runs on the Team Starter plan — same specs and BYOC model as on our pricing page.",
		sections: [
			{
				title: "Up to 10 projects",
				description:
					"Deploy and manage up to 10 production projects from one platform — with AI-assisted deployment, monitoring, and shared observability across your stack.",
				image: "/Default.png",
				imageAlt: "Multiple projects on Sagyboar",
				graphic: "fiveApps",
			},
			{
				title: "Bring your own cloud",
				description:
					"Connect AWS, GCP, Azure, or DigitalOcean. Infrastructure is billed directly to your cloud account at cost — no markup and no vendor lock-in on compute.",
				image: "/Default.png",
				imageAlt: "Bring your own cloud",
				graphic: "deploy",
			},
			{
				title: "AI deployment & monitoring",
				description:
					"AI-powered deployment pipelines plus monitoring and auto incident detection so your team catches production issues before customers do.",
				image: "/Default.png",
				imageAlt: "AI deployment and monitoring",
				graphic: "monitoring",
			},
			{
				title: "Auto ticket generate",
				description:
					"When incidents are detected, Sagyboar automatically generates structured tickets with context and severity so fixes start faster.",
				image: "/Default.png",
				imageAlt: "Automated incident tickets",
				graphic: "aiEngineer",
			},
			{
				title: "Shared DevOps support",
				description:
					"Shared DevOps support during business hours — platform guidance, deployment help, and operational backup without hiring full-time.",
				image: "/Default.png",
				imageAlt: "Shared DevOps support",
				graphic: "support",
			},
		],
	},
	spotlight: {
		eyebrow: "Team Starter plan",
		title: "Your DevOps team — without the payroll",
		titleHighlight: "the payroll",
		description:
			"Starter replaces an early infrastructure hire with a BYOC DevOps platform: you keep your cloud account and bill, we run AI deployment, monitoring, and shared DevOps on top.",
		cta: starterPlan.cta,
		ctaHref: starterPlan.ctaHref ?? Sagyboar_PORTAL_URL,
		ctaExternal: true,
		image: "/startup.png",
		imageAlt: "A full DevOps team without the payroll",
		graphic: "noPayroll",
	},
	faq: {
		title: "Scale-ups FAQ",
		titleHighlight: "FAQ",
		subtitle: "Common questions about the Team Starter plan for scale-ups.",
		items: [
			{
				question: "What is included for Scale-ups?",
				answer: `Scale-ups uses the Team Starter plan (${starterPrice}): up to 10 projects, AI deployment and monitoring, auto incident detection, auto ticket generate, and shared DevOps support. You bring your own cloud (AWS, GCP, Azure, or DigitalOcean) — cloud usage is billed directly to your provider account.`,
			},
			{
				question: "Do I need my own cloud account?",
				answer:
					"Yes. Team plans are BYOC (bring your own cloud). You connect your AWS, GCP, Azure, or DigitalOcean account and pay the provider directly at cost. Sagyboar charges only for the platform and managed DevOps.",
			},
			{
				question: "Is auto-heal with pull requests included?",
				answer:
					"Not on Starter. Auto heal with pull ticket, agent assignment, and priority support are available on Growth and Enterprise Team plans.",
			},
			{
				question: "How does shared DevOps support work?",
				answer:
					"Shared DevOps support during business hours covers platform guidance, deployment troubleshooting, and operational help — without a dedicated engineer on your payroll.",
			},
			{
				question: "What happens if I outgrow Starter?",
				answer:
					"Upgrade to Growth for up to 20 projects, auto-heal with pull tickets, 5 agents, and faster support — or Enterprise for SSO, premium SLA, and a dedicated technical contact.",
			},
			{
				question: "How does fair usage work on Team plans?",
				answer:
					"Fair usage applies to platform resources and agent usage across all Team tiers. Cloud infrastructure is always billed separately by your provider. Custom development outside plan scope is quoted separately.",
			},
		],
	},
	cta: {
		title: "Ready to scale without slowing down?",
		description:
			"Join teams shipping on the Team Starter plan. Get started today or talk to us about your stack.",
		primaryCta: starterPlan.cta,
		primaryHref: starterPlan.ctaHref ?? Sagyboar_PORTAL_URL,
		primaryExternal: true,
		secondaryCta: "Contact us",
		secondaryHref: "/contact",
	},
};
