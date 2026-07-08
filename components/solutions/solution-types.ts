export type SolutionIconName = "sparkles" | "rocket" | "building2";

export type SolutionGraphicName =
	| "apps"
	| "infrastructure"
	| "aiops"
	| "team"
	| "sla"
	| "enterprise"
	| "ops"
	| "scale"
	| "fiveApps"
	| "deploy"
	| "monitoring"
	| "aiEngineer"
	| "support"
	| "noPayroll"
	| "sideProject"
	| "oneApp"
	| "managedHosting"
	| "uptime"
	| "tickets"
	| "database"
	| "quickShip";

export type SolutionFaq = {
	question: string;
	answer: string;
};

export type SolutionStackCard = {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	graphic?: SolutionGraphicName;
};

export type SolutionPageData = {
	hero: {
		title: string;
		headline: string;
		headlineHighlight?: string;
		description: string;
		price: string;
		cta: string;
		ctaHref: string;
		ctaExternal?: boolean;
		heroImage: string;
		heroImageAlt: string;
		heroGraphic?: SolutionGraphicName;
		icon: SolutionIconName;
	};
	stack: {
		title: string;
		titleHighlight?: string;
		subtitle: string;
		sections: readonly SolutionStackCard[];
	};
	spotlight: {
		eyebrow: string;
		title: string;
		titleHighlight?: string;
		description: string;
		cta: string;
		ctaHref: string;
		ctaExternal?: boolean;
		image: string;
		imageAlt: string;
		graphic?: SolutionGraphicName;
	};
	faq: {
		title: string;
		titleHighlight?: string;
		subtitle: string;
		items: readonly SolutionFaq[];
	};
	cta: {
		title: string;
		description: string;
		primaryCta: string;
		primaryHref: string;
		primaryExternal?: boolean;
		secondaryCta: string;
		secondaryHref: string;
	};
};
