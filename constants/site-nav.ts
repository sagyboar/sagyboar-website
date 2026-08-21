/** Shared site navigation — used on homepage, features, and all marketing pages */

/** Tabs that reveal a dropdown of sub-pages on hover / focus */
export type SiteNavMenuKey = "features" | "solutions" | "company";

export type SiteNavLink = {
	label: string;
	href: string;
	/** Pathname prefixes that mark this tab active */
	matchPrefixes?: string[];
	external?: boolean;
	menu?: SiteNavMenuKey;
};

export const siteNavLinks: SiteNavLink[] = [
	{
		label: "Features",
		href: "/features",
		matchPrefixes: ["/features"],
		menu: "features",
	},
	{
		label: "Solutions",
		href: "/solutions/side-projects",
		matchPrefixes: ["/solutions"],
		menu: "solutions",
	},
	{
		label: "Pricing",
		href: "/pricing",
		matchPrefixes: ["/pricing"],
	},
	{
		label: "Company",
		href: "/about",
		matchPrefixes: [
			"/about",
			"/blog",
			"/jobs",
			"/contact",
			"/terms-of-service",
			"/privacy",
			"/sla",
		],
		menu: "company",
	},
];

export type FeaturesSubTab = {
	id: string;
	label: string;
	href: string;
};

/** Secondary tabs shown on /features — jump to Platform / AI & Operations sections */
export const featuresSubTabs: FeaturesSubTab[] = [
	{ id: "platform", label: "Platform", href: "/features#platform" },
	{
		id: "ai-operations",
		label: "AI & Operations",
		href: "/features#ai-operations",
	},
];

export function isNavLinkActive(
	link: SiteNavLink,
	pathname: string,
	hash = "",
): boolean {
	if (link.matchPrefixes?.length) {
		return link.matchPrefixes.some((prefix) => pathname.startsWith(prefix));
	}
	if (link.href.includes("#")) {
		const [path, anchor] = link.href.split("#");
		return pathname === path && hash === `#${anchor}`;
	}
	return pathname === link.href;
}
