import { Sagyboar_BRAND_NAME } from "@/constants/branding";

export const SITE_URL = "https://Sagyboar.com";
export const SITE_NAME = Sagyboar_BRAND_NAME;
export const DEFAULT_OG_IMAGE = "/og.png";
export const SITE_DESCRIPTION =
	"An AI-native DevOps platform for deployment, monitoring, diagnosis, and managed engineering — deploy in minutes with zero lock-in.";

export type PageSeoEntry = {
	/** Page title without site suffix (layout template adds "| Sagyboar") */
	title: string;
	description: string;
	path: string;
	/** When true, title is used as-is (no template suffix) */
	absoluteTitle?: boolean;
	noIndex?: boolean;
};

/** Single source of truth for static page SEO */
export const pageSeo = {
	home: {
		title: "Sagyboar — One Stop Solution for Your Deployment",
		description:
			"Deploy applications, manage databases, and monitor your infrastructure from a single AI-native platform.",
		path: "/",
		absoluteTitle: true,
	},
	pricing: {
		title: "Pricing — One Platform, Zero DevOps Headaches",
		description:
			"Compare Sagyboar Free, Hobby, Startup, and Enterprise plans. AI-powered deployment, monitoring, and a real team.",
		path: "/pricing",
	},
	features: {
		title: "Platform Features",
		description:
			"One control plane for deployment, monitoring, AI diagnosis, self-healing, and your entire engineering team.",
		path: "/features",
	},
	contact: {
		title: "Contact Us",
		description:
			"Get in touch with the Sagyboar team for pricing, enterprise onboarding, and support.",
		path: "/contact",
	},
	jobs: {
		title: "Careers & Open Positions",
		description:
			"Join Sagyboar and help teams deploy faster with our AI-native DevOps platform.",
		path: "/jobs",
	},
	solutionsHobby: {
		title: "Hobby — Deploy Side Projects Without DevOps",
		description:
			"Managed hosting, AI monitoring, and community support for solo developers and MVPs from $49/month.",
		path: "/solutions/hobby",
	},
	solutionsStartup: {
		title: "Startup — Scale Without a Full DevOps Team",
		description:
			"Up to five apps, advanced AI monitoring, and AI-assisted engineering for growing startups from $249/month.",
		path: "/solutions/startup",
	},
	solutionsEnterprise: {
		title: "Enterprise — Dedicated Infrastructure & Platform Team",
		description:
			"SLA-backed uptime, dedicated cloud infrastructure, and a fully managed DevOps team from $1,499/month.",
		path: "/solutions/enterprise",
	},
	privacy: {
		title: "Privacy Policy",
		description: "How Sagyboar collects, uses, and protects your personal data.",
		path: "/privacy",
	},
	termsOfService: {
		title: "Terms of Service",
		description:
			"Terms of Service for Sagyboar's cloud and on-premise deployment platform.",
		path: "/terms-of-service",
	},
} as const satisfies Record<string, PageSeoEntry>;

export const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: SITE_NAME,
	url: SITE_URL,
	logo: `${SITE_URL}/Sagyboar-logo.png`,
	description: SITE_DESCRIPTION,
	sameAs: [
		"https://github.com/Sagyboar/Sagyboar",
		"https://x.com/getSagyboar",
	],
};

export const websiteJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: SITE_NAME,
	url: SITE_URL,
	description: SITE_DESCRIPTION,
	potentialAction: {
		"@type": "SearchAction",
		target: `${SITE_URL}/features?q={search_term_string}`,
		"query-input": "required name=search_term_string",
	},
};
