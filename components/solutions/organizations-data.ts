import {
	formatSolutionHeroPrice,
	solutionPricingPlans,
} from "@/lib/pricing";
import type { SolutionPageData } from "./solution-types";

/** Organizations maps to the Team Enterprise tier on /pricing */
const enterprisePlan = solutionPricingPlans.organizations.team;
const enterprisePrice = formatSolutionHeroPrice("organizations");
const enterpriseCtaHref = enterprisePlan.ctaHref ?? "/contact";

export const organizationsSolutionPage: SolutionPageData = {
	hero: {
		title: "Organizations",
		headline: "Enterprise DevOps on your cloud — without building an ops department",
		headlineHighlight: "ops department",
		description: `${enterprisePlan.tagline} Up to 30 projects on your own cloud with auto-heal, 8 agents, SSO, premium SLA, and a dedicated technical contact — from ${enterprisePrice}.`,
		price: enterprisePrice,
		cta: enterprisePlan.cta,
		ctaHref: enterpriseCtaHref,
		heroImage: "/Enterprise.png",
		heroImageAlt:
			"Sagyboar platform connecting your cloud, servers, team and monitoring",
		heroGraphic: "enterprise",
		icon: "building2",
	},
	stack: {
		title: "Everything in Enterprise",
		titleHighlight: "Enterprise",
		subtitle:
			"Organizations runs on the Team Enterprise plan — same specs and BYOC model as on our pricing page.",
		sections: [
			{
				title: "Up to 30 projects",
				description:
					"Run up to 30 production projects from one platform — with everything in Growth plus enterprise-grade controls, SLAs, and priority incident handling.",
				image: "/Default.png",
				imageAlt: "Organization project management",
				graphic: "apps",
			},
			{
				title: "Bring your own cloud",
				description:
					"Connect AWS, GCP, Azure, or DigitalOcean. Cloud usage is billed directly to your provider at cost — Sagyboar charges for the platform and managed DevOps only.",
				image: "/Default.png",
				imageAlt: "Bring your own cloud infrastructure",
				graphic: "infrastructure",
			},
			{
				title: "Auto-heal & 8 agents",
				description:
					"Auto heal with pull ticket, auto ticket generate and assign to agent, plus 8 agents for deeper automation across your production stack.",
				image: "/Default.png",
				imageAlt: "Auto-heal and agent automation",
				graphic: "aiops",
			},
			{
				title: "SSO, audit logs & premium SLA",
				description:
					"Enterprise access controls with SSO and audit logs, plus premium SLA commitments and priority incident handling for high-stakes environments.",
				image: "/Default.png",
				imageAlt: "SSO and audit logging",
				graphic: "team",
			},
			{
				title: "Integrations & dedicated contact",
				description:
					"Custom integrations plus a dedicated technical contact who knows your stack — for onboarding, escalations, and ongoing platform partnership.",
				image: "/Default.png",
				imageAlt: "Custom integrations and dedicated support",
				graphic: "sla",
			},
		],
	},
	spotlight: {
		eyebrow: "Team Enterprise plan",
		title: "Enterprise-grade ops without building an ops department",
		titleHighlight: "ops department",
		description:
			"Enterprise gives established teams BYOC DevOps at scale: your cloud account, our AI deployment and monitoring, auto-heal with pull tickets, and a dedicated technical contact when production cannot afford to wait.",
		cta: enterprisePlan.cta,
		ctaHref: enterpriseCtaHref,
		image: "/Enterprise.png",
		imageAlt: "Enterprise ops with SLA-backed support",
		graphic: "ops",
	},
	faq: {
		title: "Organizations FAQ",
		titleHighlight: "FAQ",
		subtitle:
			"Common questions about the Team Enterprise plan for organizations.",
		items: [
			{
				question: "What is included for Organizations?",
				answer: `Organizations uses the Team Enterprise plan (${enterprisePrice}): up to 30 projects, everything in Growth, auto heal with pull ticket, auto ticket generate and assign to agent, 8 agents, SSO, audit logs, premium SLA, priority incident handling, custom integrations, and a dedicated technical contact. You bring your own cloud — infrastructure is billed directly to your provider.`,
			},
			{
				question: "Can we use our own cloud account?",
				answer:
					"Yes. All Team plans are BYOC (bring your own cloud). Connect AWS, GCP, Azure, or DigitalOcean and pay your provider directly at cost. Sagyboar bills only for the platform subscription and managed DevOps.",
			},
			{
				question: "What does premium SLA include?",
				answer:
					"Enterprise includes premium SLA with priority incident handling. Specific uptime and response targets are defined in your agreement — contact sales for details tailored to your organization.",
			},
			{
				question: "How do the 8 agents work?",
				answer:
					"Agents automate operational workflows — incident detection, ticket generation and assignment, and auto-heal with pull tickets. Enterprise includes 8 agents for broader coverage across your projects.",
			},
			{
				question: "Is custom development included?",
				answer:
					"Enterprise covers platform operations, deployments, monitoring, and integrations within plan scope. Custom development or work outside plan scope is quoted separately.",
			},
			{
				question: "How do I get started on Enterprise?",
				answer:
					"Talk to sales to review your stack, cloud setup, compliance needs, and onboarding plan. We'll align SSO, audit logging, and integrations before you go live.",
			},
		],
	},
	cta: {
		title: "Ready for enterprise DevOps on your cloud?",
		description:
			"Talk to our team about the Enterprise plan — premium SLA, dedicated technical contact, and BYOC at scale.",
		primaryCta: enterprisePlan.cta,
		primaryHref: enterpriseCtaHref,
		secondaryCta: "View pricing",
		secondaryHref: "/pricing",
	},
};
