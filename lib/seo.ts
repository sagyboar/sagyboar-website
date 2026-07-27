import {
	type PageSeoEntry,
	SITE_KEYWORDS,
	SITE_NAME,
	SITE_URL,
} from "@/constants/seo-data";
import type { Metadata } from "next";

type BuildMetadataOptions = PageSeoEntry & {
	ogImage?: string;
};

type FaqItem = {
	question: string;
	answer: string;
};

/** Build the dynamic OG image URL for a given on-image label */
export function ogImageUrl(label: string): string {
	return `/api/og?title=${encodeURIComponent(label)}`;
}

/** Build FAQPage JSON-LD from question/answer pairs */
export function buildFaqJsonLd(faqs: readonly FaqItem[]) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};
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
	const pageUrl = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
	const resolvedOgImage = ogImage ?? ogImageUrl(ogLabel ?? title);
	const mergedKeywords = keywords?.length
		? [...new Set([...keywords, ...SITE_KEYWORDS])]
		: SITE_KEYWORDS;

	return {
		title: absoluteTitle ? { absolute: title } : title,
		description,
		keywords: mergedKeywords,
		alternates: { canonical: pageUrl },
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
			title,
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
			title,
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
