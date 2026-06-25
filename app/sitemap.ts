import { featurePages as featurePagesData } from "@/components/features/features-data";
import { jobPostings } from "@/components/jobs/jobs-data";
import { LLMS_FULL_PATH, LLMS_TXT_PATH, SITE_URL } from "@/constants/seo-data";
import type { MetadataRoute } from "next";

const corePages: { path: string; priority: number }[] = [
	{ path: "/pricing", priority: 0.9 },
	{ path: "/solutions/hobby", priority: 0.85 },
	{ path: "/solutions/startup", priority: 0.85 },
	{ path: "/solutions/enterprise", priority: 0.9 },
	{ path: "/contact", priority: 0.7 },
	{ path: "/jobs", priority: 0.7 },
];

const featurePaths = featurePagesData.map(
	(feature) => `/features/${feature.slug}`,
);

const legalPages = ["/terms-of-service", "/privacy"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const now = new Date();

	return [
		{
			url: SITE_URL,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${SITE_URL}${LLMS_TXT_PATH}`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${SITE_URL}${LLMS_FULL_PATH}`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.5,
		},
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
