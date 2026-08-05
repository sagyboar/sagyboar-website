export const FLAGSHIP_HERO_SLUG = "autonomous-self-healing";
export const FLAGSHIP_WIDE_SLUG = "ai-error-diagnosis";

export function getFeatureCardSize(slug: string): "hero" | "wide" | "default" {
	if (slug === FLAGSHIP_HERO_SLUG) return "hero";
	if (slug === FLAGSHIP_WIDE_SLUG) return "wide";
	return "default";
}

export function sortFeaturesForBento<T extends { slug: string }>(
	features: T[],
): T[] {
	return [...features].sort((a, b) => {
		const order = (slug: string) => {
			if (slug === FLAGSHIP_HERO_SLUG) return 0;
			if (slug === FLAGSHIP_WIDE_SLUG) return 1;
			return 2;
		};
		return order(a.slug) - order(b.slug);
	});
}
