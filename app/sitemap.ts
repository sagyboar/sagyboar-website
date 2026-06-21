import { getDummyPosts } from "@/constants/blog-posts";
import type { MetadataRoute } from "next";

const BASE_URL = "https://Sagyboar.com";

const corePages: { path: string; priority: number }[] = [
	{ path: "/pricing", priority: 0.9 },
	{ path: "/enterprise", priority: 0.9 },
	{ path: "/deploy-ai", priority: 0.8 },
	{ path: "/self-hosted-paas", priority: 0.8 },
	{ path: "/contact", priority: 0.7 },
	{ path: "/partners", priority: 0.6 },
	{ path: "/changelog", priority: 0.6 },
	{ path: "/jobs", priority: 0.7 },
	{ path: "/blog", priority: 0.7 },
];

const featurePages = [
	"/features/application-deployment-platform",
	"/features/application-management-software",
	"/features/database-management-tool",
	"/features/role-based-access-control",
	"/features/single-sign-on",
	"/features/audit-logs",
	"/features/white-labeling",
	"/features/container-server-monitoring",
];

const legalPages = ["/terms-of-service", "/terms", "/privacy"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = getDummyPosts();
	const now = new Date();

	return [
		{
			url: BASE_URL,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 1,
		},
		...corePages.map(({ path, priority }) => ({
			url: `${BASE_URL}${path}`,
			lastModified: now,
			changeFrequency: "monthly" as const,
			priority,
		})),
		...featurePages.map((path) => ({
			url: `${BASE_URL}${path}`,
			lastModified: now,
			changeFrequency: "monthly" as const,
			priority: 0.7,
		})),
		...legalPages.map((path) => ({
			url: `${BASE_URL}${path}`,
			lastModified: now,
			changeFrequency: "yearly" as const,
			priority: 0.3,
		})),
		...posts.map((post) => ({
			url: `${BASE_URL}/blog/${post.slug}`,
			lastModified: new Date(post.published_at),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		})),
	];
}
