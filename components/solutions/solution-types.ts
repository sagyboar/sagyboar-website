export type SolutionIconName = "sparkles" | "rocket" | "building2";

export type SolutionFaq = {
	question: string;
	answer: string;
};

export type SolutionStackCard = {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
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
