import type { SolutionPageData } from "./solution-types";

export const enterpriseSolutionPage: SolutionPageData = {
	hero: {
		title: "Enterprise",
		headline: "Dedicated infrastructure and a platform team on your stack",
		description:
			"For businesses that need SLA-backed uptime, dedicated cloud infrastructure, and a fully managed DevOps team. AWS, GCP, Azure, or your own account — from $1,499/month.",
		price: "$1,499/month",
		cta: "Talk to sales",
		ctaHref: "/contact",
		heroImage: "/Enterprise.png",
		heroImageAlt: "Sagyboar Enterprise plan",
		icon: "building2",
	},
	stack: {
		title: "Everything in Enterprise",
		subtitle:
			"Five enterprise-grade capabilities for teams that cannot afford downtime.",
		sections: [
			{
				title: "Unlimited applications",
				description:
					"Deploy across your entire product surface with unlimited managed applications, subject to fair usage. One platform for every service your business runs.",
				image: "/primary/projects.png",
				imageAlt: "Enterprise project management",
			},
			{
				title: "Dedicated infrastructure",
				description:
					"Run on dedicated AWS, GCP, or Azure infrastructure — or bring your own cloud account. Full control with Sagyboar managing the operational layer.",
				image: "/enterprise/servers-permission.png",
				imageAlt: "Dedicated server permissions",
			},
			{
				title: "Complete AI DevOps suite",
				description:
					"Advanced monitoring, log analysis, automated ticket routing, and escalation workflows tuned for high-stakes production environments.",
				image: "/primary/monitoring.png",
				imageAlt: "Enterprise monitoring suite",
			},
			{
				title: "Dedicated platform team",
				description:
					"Get a dedicated AI-powered developer, DevOps engineer, and QA support on demand — an extension of your engineering org without the hiring cycle.",
				image: "/enterprise/custom-roles.png",
				imageAlt: "Custom roles and team access",
			},
			{
				title: "SLA, onboarding & integrations",
				description:
					"99.9% uptime commitment, 4-hour critical response targets, custom integrations, and white-glove onboarding to get your stack production-ready.",
				image: "/enterprise/git-permission.png",
				imageAlt: "Git permissions and integrations",
			},
		],
	},
	spotlight: {
		eyebrow: "Built for scale",
		title: "Enterprise-grade ops without building an ops department",
		description:
			"Hand off infrastructure, monitoring, and incident response to a team that lives in production. Enterprise gives you SLA-backed reliability and dedicated engineers who know your stack.",
		cta: "Talk to sales",
		ctaHref: "/contact",
		image: "/Enterprise.png",
		imageAlt: "Sagyboar Enterprise overview",
	},
	faq: {
		title: "Enterprise plan FAQ",
		subtitle:
			"Common questions about dedicated infrastructure and managed teams on Sagyboar Enterprise.",
		items: [
			{
				question: "What is included in the Enterprise plan?",
				answer:
					"Enterprise includes unlimited applications (fair usage), dedicated infrastructure on AWS/GCP/Azure or client-owned cloud, the complete AI DevOps suite, unlimited managed databases (fair usage), 200 GB storage, a dedicated AI-powered developer, dedicated DevOps engineer, QA on demand, 4-hour SLA response, 99.9% uptime commitment, and custom integrations with onboarding.",
			},
			{
				question: "Can we use our own cloud account?",
				answer:
					"Yes. Enterprise clients may use their own AWS, GCP, or Azure account. Infrastructure costs beyond included allocations are billed separately at actual cost.",
			},
			{
				question: "What does the SLA guarantee mean?",
				answer:
					"We guarantee 99.9% uptime and a 4-hour maximum response time on all critical issues. If we miss these targets, you receive a credit on your next invoice.",
			},
			{
				question: "How does ticket routing and escalation work?",
				answer:
					"Our AI engine routes incidents by severity, assigns them to the right engineer, and escalates automatically when response targets are at risk.",
			},
			{
				question: "Is custom development included?",
				answer:
					"Enterprise covers operational tasks, deployments, monitoring, and platform management. Custom development requests outside plan scope are quoted separately.",
			},
			{
				question: "How does onboarding work?",
				answer:
					"Every Enterprise engagement includes custom onboarding: infrastructure review, integration setup, access controls, and a runbook tailored to your stack and compliance needs.",
			},
		],
	},
	cta: {
		title: "Ready for a platform team on your side?",
		description:
			"Talk to our sales team about dedicated infrastructure, SLAs, and a managed DevOps partnership built for your business.",
		primaryCta: "Talk to sales",
		primaryHref: "/contact",
		secondaryCta: "View pricing",
		secondaryHref: "/pricing",
	},
};
