import type { Metadata } from "next";
import {
	SITE_KEYWORDS,
	SITE_NAME,
	SITE_URL,
	type PageSeoEntry,
} from "@/constants/seo-data";

type BuildMetadataOptions = PageSeoEntry & {
	ogImage?: string;
	keywords?: string[];
};

/** Build the dynamic OG image URL for a given on-image label */
export function ogImageUrl(label: string): string {
	return `/api/og?title=${encodeURIComponent(label)}`;
}

/** Build consistent Next.js Metadata from a page SEO entry */
export function buildMetadata({
	title,
	description,
	path,
	absoluteTitle,
	noIndex,
	ogLabel,
	ogImage,
	keywords,
}: BuildMetadataOptions): Metadata {
	const canonicalPath = path.startsWith("/") ? path : `/${path}`;
	const pageUrl = `${SITE_URL}${canonicalPath}`;
	const ogTitle = absoluteTitle ? title : title;
	const resolvedOgImage = ogImage ?? ogImageUrl(ogLabel ?? title);
	const mergedKeywords = keywords
		? [...new Set([...keywords, ...SITE_KEYWORDS])]
		: SITE_KEYWORDS;

	return {
		title: absoluteTitle ? { absolute: title } : title,
		description,
		keywords: mergedKeywords,
		alternates: { canonical: canonicalPath },
		manifest: "/site.webmanifest",
		robots: noIndex
			? { index: false, follow: false }
			: {
					index: true,
					follow: true,
					googleBot: {
						index: true,
						follow: true,
						"max-image-preview": "large",
						"max-snippet": -1,
						"max-video-preview": -1,
					},
				},
		openGraph: {
			title: ogTitle,
			description,
			url: pageUrl,
			siteName: SITE_NAME,
			type: "website",
			locale: "en_US",
			images: [
				{
					url: resolvedOgImage,
					width: 1200,
					height: 630,
					alt: `${SITE_NAME} — ${title}`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: ogTitle,
			description,
			images: [resolvedOgImage],
		},
	};
}

/** Metadata for dynamic feature pages */
export function buildFeatureMetadata(feature: {
	title: string;
	navTitle?: string;
	summary: string;
	slug: string;
}): Metadata {
	return buildMetadata({
		title: feature.title,
		description: feature.summary,
		path: `/features/${feature.slug}`,
		ogLabel: feature.navTitle ?? feature.title,
	});
}

/** Metadata for dynamic job pages */
export function buildJobMetadata(job: {
	title: string;
	overview: string;
	id: string;
}): Metadata {
	return buildMetadata({
		title: `${job.title} — Careers`,
		description: job.overview,
		path: `/jobs/${job.id}`,
		ogLabel: job.title,
	});
}
