import { featurePages as featurePagesData } from "@/components/features/features-data";
import { jobPostings } from "@/components/jobs/jobs-data";
import {
	LLMS_FULL_PATH,
	LLMS_LEGACY_FULL_PATH,
	LLMS_TXT_PATH,
	SAGYBOAR_SPACE_MD_PATH,
	SITE_URL,
} from "@/constants/seo-data";
import type { MetadataRoute } from "next";

const corePages: { path: string; priority: number }[] = [
	{ path: "/about", priority: 0.8 },
	{ path: "/features", priority: 0.85 },
	{ path: "/pricing", priority: 0.9 },
	{ path: "/watch/intro", priority: 0.75 },
	{ path: "/solutions/side-projects", priority: 0.85 },
	{ path: "/solutions/scale-ups", priority: 0.85 },
	{ path: "/solutions/organizations", priority: 0.9 },
	{ path: "/contact", priority: 0.7 },
	{ path: "/jobs", priority: 0.7 },
];

const featurePaths = featurePagesData.map(
	(feature) => `/features/${feature.slug}`,
);

const legalPages = ["/terms-of-service", "/sla", "/privacy"];

const agentPaths = [
	LLMS_TXT_PATH,
	LLMS_FULL_PATH,
	SAGYBOAR_SPACE_MD_PATH,
	LLMS_LEGACY_FULL_PATH,
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const now = new Date();

	return [
		{
			url: SITE_URL,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 1,
		},
		...agentPaths.map((path) => ({
			url: `${SITE_URL}${path}`,
			lastModified: now,
			changeFrequency: "monthly" as const,
			priority: 0.5,
		})),
		...corePages.map(({ path, priority }) => ({
			url: `${SITE_URL}${path}`,
			lastModified: now,
			changeFrequency: "monthly" as const,
			priority,
		})),
		...featurePaths.map((path) => ({
			url: `${SITE_URL}${path}`,
			lastModified: now,
			changeFrequency: "monthly" as const,
			priority: 0.7,
		})),
		...legalPages.map((path) => ({
			url: `${SITE_URL}${path}`,
			lastModified: now,
			changeFrequency: "yearly" as const,
			priority: 0.3,
		})),
		...jobPostings.map((job) => ({
			url: `${SITE_URL}/jobs/${job.id}`,
			lastModified: now,
			changeFrequency: "monthly" as const,
			priority: 0.6,
		})),
	];
}
