import { Sagyboar_BRAND_NAME } from "@/constants/branding";

export const SITE_URL = "https://Sagyboar.space";
export const SITE_NAME = Sagyboar_BRAND_NAME;
/** Curated link index for LLM crawlers (llms.txt spec). */
export const LLMS_TXT_PATH = "/llms.txt";
/** Full product knowledge base in Markdown for AI systems. */
export const LLMS_FULL_PATH = "/Sagyboar.md";
/** Fallback static OG image. Pages use the dynamic /api/og generator. */
export const DEFAULT_OG_IMAGE = "/OG-Image.png";
export const SITE_DESCRIPTION =
	"An AI-native DevOps platform for deployment, monitoring, diagnosis, and managed engineering — deploy in minutes with zero lock-in.";

/** Base keywords applied site-wide (root metadata) */
export const SITE_KEYWORDS = [
	"Sagyboar",
	"AI DevOps platform",
	"application deployment",
	"PaaS",
	"managed hosting",
	"CI/CD",
	"Docker deployment",
	"infrastructure monitoring",
	"AI error diagnosis",
	"self-healing infrastructure",
	"database management",
	"DevOps automation",
];

export type PageSeoEntry = {
	title: string;
	description: string;
	path: string;
	absoluteTitle?: boolean;
	noIndex?: boolean;
	/** Short, human label rendered on the generated OG image (defaults to title) */
	ogLabel?: string;
};

/** Single source of truth for static page SEO */
export const pageSeo = {
	home: {
		title: "Sagyboar — One Stop Solution for Your Deployment",
		description:
			"Deploy applications, manage databases, and monitor your infrastructure from a single AI-native platform.",
		path: "/",
		absoluteTitle: true,
		ogLabel: "Deploy with ease",
	},
	pricing: {
		title: "Pricing — One Platform, Zero DevOps Headaches",
		description:
			"Compare Sagyboar Free, Hobby, Startup, and Enterprise plans. AI-powered deployment, monitoring, and a real team.",
		path: "/pricing",
		ogLabel: "Pricing",
	},
	features: {
		title: "Platform Features",
		description:
			"One control plane for deployment, monitoring, AI diagnosis, self-healing, and your entire engineering team.",
		path: "/features",
		ogLabel: "Features",
	},
	contact: {
		title: "Contact Us",
		description:
			"Get in touch with the Sagyboar team for pricing, enterprise onboarding, and support.",
		path: "/contact",
		ogLabel: "Contact",
	},
	about: {
		title: "About Us",
		description:
			"Meet Sagyboar — our mission, our journey, and the principles behind our AI-native DevOps platform.",
		path: "/about",
		ogLabel: "About Us",
	},
	jobs: {
		title: "Careers & Open Positions",
		description:
			"Join Sagyboar and help teams deploy faster with our AI-native DevOps platform.",
		path: "/jobs",
		ogLabel: "Careers",
	},
	solutionsHobby: {
		title: "Hobby — Deploy Side Projects Without DevOps",
		description:
			"Managed hosting, AI monitoring, and community support for solo developers and MVPs from $49/month.",
		path: "/solutions/hobby",
		ogLabel: "Hobby",
	},
	solutionsStartup: {
		title: "Startup — Scale Without a Full DevOps Team",
		description:
			"Up to five apps, advanced AI monitoring, and AI-assisted engineering for growing startups from $249/month.",
		path: "/solutions/startup",
		ogLabel: "Startup",
	},
	solutionsEnterprise: {
		title: "Enterprise — Dedicated Infrastructure & Platform Team",
		description:
			"SLA-backed uptime, dedicated cloud infrastructure, and a fully managed DevOps team from $1,499/month.",
		path: "/solutions/enterprise",
		ogLabel: "Enterprise",
	},
	privacy: {
		title: "Privacy Policy",
		description:
			"How Sagyboar collects, uses, and protects your personal data.",
		path: "/privacy",
		ogLabel: "Privacy Policy",
	},
	termsOfService: {
		title: "Terms of Service",
		description:
			"Terms of Service for Sagyboar's cloud and on-premise deployment platform.",
		path: "/terms-of-service",
		ogLabel: "Terms of Service",
	},
	sla: {
		title: "Service Level Agreement",
		description:
			"Uptime, response times, backup policy, and service credits for Sagyboar Cloud Services by plan.",
		path: "/sla",
		ogLabel: "SLA",
	},
} as const satisfies Record<string, PageSeoEntry>;

export const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: SITE_NAME,
	url: SITE_URL,
	logo: `${SITE_URL}/Sagyboar-logo.png`,
	description: SITE_DESCRIPTION,
	sameAs: ["https://github.com/Sagyboar/Sagyboar", "https://x.com/getSagyboar"],
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
