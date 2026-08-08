import { homeFaqs } from "@/constants/home-faqs";
import { Sagyboar_BRAND_NAME } from "@/constants/branding";

export const SITE_URL = "https://sagyboar.space";
export const SITE_NAME = Sagyboar_BRAND_NAME;
/** Curated link index for LLM crawlers (llms.txt spec). */
export const LLMS_TXT_PATH = "/llms.txt";
/** Full product knowledge base for AI systems. */
export const LLMS_FULL_PATH = "/llms-full.txt";
/** Domain-named agent summary markdown. */
export const SAGYBOAR_SPACE_MD_PATH = "/sagyboar.space.md";
/** Legacy full KB path (backward compatibility). */
export const LLMS_LEGACY_FULL_PATH = "/Sagyboar.md";
/** Fallback static OG image. Pages use the dynamic /api/og generator. */
export const DEFAULT_OG_IMAGE = "/OG-Image.png";

/** ~155 chars — primary + secondary high-intent keywords */
export const SITE_DESCRIPTION =
	"AI-native DevOps platform for auto-healing deployments. Fully managed application hosting with zero cloud lock-in — the Heroku alternative you control.";

/** Base keywords applied site-wide (root metadata) */
export const SITE_KEYWORDS = [
	"Sagyboar",
	"AI native DevOps platform",
	"AI DevOps platform",
	"auto healing deployment platform",
	"auto-healing deployment",
	"fully managed application deployment platform",
	"Heroku alternative with zero cloud lock in",
	"Heroku alternative",
	"zero cloud lock-in",
	"managed cloud platform",
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
	"BYOC deployment",
];

/** High-intent keywords boosted on the homepage */
export const HOME_KEYWORDS = [
	"AI native DevOps platform",
	"auto healing deployment platform",
	"fully managed application deployment platform",
	"Heroku alternative with zero cloud lock in",
	"AI-powered DevOps control plane",
	"self-healing infrastructure",
	"zero vendor lock-in PaaS",
];

export type PageSeoEntry = {
	title: string;
	description: string;
	path: string;
	absoluteTitle?: boolean;
	noIndex?: boolean;
	/** Short, human label rendered on the generated OG image (defaults to title) */
	ogLabel?: string;
	/** Page-specific keywords merged with SITE_KEYWORDS */
	keywords?: readonly string[];
};

/** Single source of truth for static page SEO */
export const pageSeo = {
	home: {
		// 52 chars — primary keyword + brand
		title: "Sagyboar | AI-Native DevOps & Auto-Healing Deployment",
		// 158 chars
		description:
			"Deploy, monitor, and scale apps with zero cloud lock-in. Sagyboar is an AI-native DevOps platform that auto-heals deployments and fully manages your apps.",
		path: "/",
		absoluteTitle: true,
		ogLabel: "AI-Native DevOps Platform",
		keywords: HOME_KEYWORDS,
	},
	pricing: {
		title: "Pricing — AI DevOps Platform Plans",
		description:
			"Compare Indie and Team BYOC plans for Sagyboar — the AI-native DevOps and auto-healing deployment platform with zero cloud lock-in. Start free.",
		path: "/pricing",
		ogLabel: "Pricing",
		keywords: [
			"AI DevOps platform pricing",
			"managed DevOps plans",
			"Heroku alternative pricing",
		],
	},
	features: {
		title: "Features — Auto-Healing DevOps Platform",
		description:
			"Explore Sagyboar features: AI-native deployment, auto-healing, anomaly detection, monitoring, and fully managed application infrastructure.",
		path: "/features",
		ogLabel: "Features",
		keywords: [
			"auto healing deployment features",
			"AI DevOps features",
			"self-healing infrastructure",
		],
	},
	freeDeploy: {
		title: "Free Deployment — 3 Months Managed Hosting",
		description:
			"Deploy static sites, SPAs, or WordPress free for 3 months. One-click deploy with AI monitoring, health checks, and zero setup. No credit card required.",
		path: "/free-deploy",
		ogLabel: "Free Deploy",
		keywords: [
			"free website deployment",
			"free managed hosting",
			"WordPress deployment",
			"SPA hosting",
		],
	},
	contact: {
		title: "Contact Us",
		description:
			"Talk to the Sagyboar team about the AI-native DevOps platform, enterprise onboarding, pricing, and fully managed deployments.",
		path: "/contact",
		ogLabel: "Contact",
	},
	about: {
		title: "About Us — AI-Native DevOps Platform",
		description:
			"Meet Sagyboar — the mission, journey, and principles behind our AI-native DevOps and auto-healing deployment platform.",
		path: "/about",
		ogLabel: "About Us",
	},
	jobs: {
		title: "Careers & Open Positions",
		description:
			"Join Sagyboar and help teams ship faster with our AI-native DevOps platform and auto-healing deployment control plane.",
		path: "/jobs",
		ogLabel: "Careers",
	},
	solutionsSideProjects: {
		title: "Side Projects — Deploy Without DevOps",
		description:
			"Fully managed application deployment for solo developers and MVPs. AI monitoring, auto-healing, and zero lock-in from $49/month.",
		path: "/solutions/side-projects",
		ogLabel: "Side Projects",
		keywords: [
			"managed deployment for side projects",
			"Heroku alternative for indie hackers",
		],
	},
	solutionsScaleUps: {
		title: "Scale-ups — Scale Without a Full DevOps Hire",
		description:
			"AI-native DevOps for growing companies: auto-healing deployments, advanced monitoring, and managed engineering from $249/month.",
		path: "/solutions/scale-ups",
		ogLabel: "Scale-ups",
		keywords: [
			"DevOps platform for scale-ups",
			"auto healing deployment for startups",
		],
	},
	solutionsOrganizations: {
		title: "Organizations — Fully Managed DevOps Platform",
		description:
			"SLA-backed uptime, dedicated infrastructure, and a fully managed application deployment platform for enterprises from $1,499/month.",
		path: "/solutions/organizations",
		ogLabel: "Organizations",
		keywords: [
			"fully managed application deployment platform",
			"enterprise DevOps platform",
		],
	},
	privacy: {
		title: "Privacy Policy",
		description:
			"How Sagyboar collects, uses, and protects your personal data on our AI-native DevOps platform.",
		path: "/privacy",
		ogLabel: "Privacy Policy",
	},
	termsOfService: {
		title: "Terms of Service",
		description:
			"Terms of Service for Sagyboar's AI-native DevOps and fully managed application deployment platform.",
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
	watchIntro: {
		title: "Product Intro — Deploy, Monitor & Auto-Heal",
		description:
			"Watch the Sagyboar intro: a 22-second tour of AI-native DevOps, auto-healing deployments, and zero cloud lock-in.",
		path: "/watch/intro",
		ogLabel: "Product intro video",
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

/** SoftwareApplication schema for rich results / entity understanding */
export const softwareApplicationJsonLd = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: SITE_NAME,
	applicationCategory: "DeveloperApplication",
	operatingSystem: "Web",
	url: SITE_URL,
	description: SITE_DESCRIPTION,
	offers: {
		"@type": "Offer",
		price: "0",
		priceCurrency: "USD",
		description: "Free tier available — fully managed application deployment",
	},
	featureList: [
		"AI-native DevOps control plane",
		"Auto-healing deployments",
		"Anomaly detection and auto ticketing",
		"Fully managed application hosting",
		"Zero cloud lock-in / BYOC",
		"Heroku alternative",
	],
};

/** Homepage FAQPage schema — kept in sync with constants/home-faqs.ts */
export const homeFaqJsonLd = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: homeFaqs.map((faq) => ({
		"@type": "Question",
		name: faq.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: faq.answer,
		},
	})),
};
