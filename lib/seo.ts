import type { Metadata } from "next";
import {
	DEFAULT_OG_IMAGE,
	SITE_NAME,
	SITE_URL,
	type PageSeoEntry,
} from "@/constants/seo-data";

type BuildMetadataOptions = PageSeoEntry & {
	ogImage?: string;
	keywords?: string[];
};

/** Build consistent Next.js Metadata from a page SEO entry */
export function buildMetadata({
	title,
	description,
	path,
	absoluteTitle,
	noIndex,
	ogImage = DEFAULT_OG_IMAGE,
	keywords,
}: BuildMetadataOptions): Metadata {
	const canonicalPath = path.startsWith("/") ? path : `/${path}`;
	const pageUrl = `${SITE_URL}${canonicalPath}`;
	const ogTitle = absoluteTitle ? title : title;

	return {
		title: absoluteTitle ? { absolute: title } : title,
		description,
		keywords,
		alternates: { canonical: canonicalPath },
		manifest: "/site.webmanifest",
		robots: noIndex
			? { index: false, follow: false }
			: { index: true, follow: true },
		openGraph: {
			title: ogTitle,
			description,
			url: pageUrl,
			siteName: SITE_NAME,
			type: "website",
			locale: "en_US",
			images: [
				{
					url: ogImage,
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
			images: [ogImage],
		},
	};
}

/** Metadata for dynamic feature pages */
export function buildFeatureMetadata(feature: {
	title: string;
	summary: string;
	slug: string;
}): Metadata {
	return buildMetadata({
		title: feature.title,
		description: feature.summary,
		path: `/features/${feature.slug}`,
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
	});
}
