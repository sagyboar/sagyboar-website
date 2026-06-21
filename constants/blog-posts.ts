import type { Post } from "@/lib/ghost";

const defaultAuthor = {
	id: "author-sagyboar",
	name: "Sagyboar Team",
	slug: "sagyboar-team",
	profile_image: "/apple-touch-icon.png",
	bio: "Updates from the Sagyboar team.",
	twitter: null,
};

function makePost(
	overrides: Pick<Post, "id" | "title" | "slug" | "html" | "excerpt"> & {
		custom_excerpt?: string;
		feature_image?: string | null;
		reading_time?: number;
		published_at?: string;
		tag?: { name: string; slug: string };
	},
): Post {
	const publishedAt = overrides.published_at ?? "2025-11-15T10:00:00.000Z";
	const tag = overrides.tag ?? { name: "Product", slug: "product" };

	return {
		id: overrides.id,
		uuid: overrides.id,
		title: overrides.title,
		slug: overrides.slug,
		html: overrides.html,
		feature_image: overrides.feature_image ?? "/dashboard.png",
		featured: false,
		visibility: "public",
		created_at: publishedAt,
		updated_at: publishedAt,
		published_at: publishedAt,
		custom_excerpt: overrides.custom_excerpt ?? null,
		excerpt: overrides.excerpt,
		reading_time: overrides.reading_time ?? 5,
		primary_tag: { id: `tag-${tag.slug}`, ...tag },
		tags: [{ id: `tag-${tag.slug}`, ...tag }],
		primary_author: defaultAuthor,
		authors: [defaultAuthor],
		url: `/blog/${overrides.slug}`,
	};
}

export const dummyBlogPosts: Post[] = [
	makePost({
		id: "post-1",
		title: "Introducing Sagyboar Cloud: managed control plane, your servers",
		slug: "introducing-sagyboar-cloud",
		excerpt:
			"Deploy faster with a managed Sagyboar control plane while your applications keep running on infrastructure you own.",
		custom_excerpt:
			"Deploy faster with a managed Sagyboar control plane while your applications keep running on infrastructure you own.",
		feature_image: "/dashboard.png",
		reading_time: 6,
		published_at: "2025-12-01T09:00:00.000Z",
		tag: { name: "Product", slug: "product" },
		html: `<p>Sagyboar Cloud is for teams that want Heroku-like simplicity without giving up their servers. The control plane is managed for you; workloads still run where you choose.</p>
<h2>What stays the same</h2>
<p>Every feature in self-hosted Sagyboar is available in Cloud. Git deploys, Docker Compose, databases, monitoring, and rollbacks work identically.</p>
<h2>What changes</h2>
<p>Sagyboar manages the UI layer, PostgreSQL, and Redis that power the dashboard. You focus on shipping applications, not maintaining the platform itself.</p>`,
	}),
	makePost({
		id: "post-2",
		title: "Deploy AI-built apps safely with sandboxed environments",
		slug: "deploy-ai-apps-safely",
		excerpt:
			"Give non-technical teams a governed path from AI-generated code to a running URL without risking production.",
		feature_image: "/primary/compose.png",
		reading_time: 5,
		published_at: "2025-11-20T14:00:00.000Z",
		tag: { name: "AI", slug: "ai" },
		html: `<p>AI coding tools are changing who writes software. Sagyboar handles the deployment side with isolated environments, audit logs, and rollback built in.</p>
<h2>Sandbox by default</h2>
<p>Teams can experiment in environments separated from production infrastructure. Multitenancy keeps every workspace apart.</p>
<h2>Governance without gatekeepers</h2>
<p>SSO, RBAC, and audit trails mean security teams stay in control while builders move quickly.</p>`,
	}),
	makePost({
		id: "post-3",
		title: "Self-hosted PaaS in one command: what we optimized in the installer",
		slug: "self-hosted-paas-one-command",
		excerpt:
			"A look at how we reduced setup friction for teams running Sagyboar on their own VPS or bare metal.",
		feature_image: "/primary/servers.png",
		reading_time: 4,
		published_at: "2025-11-05T11:00:00.000Z",
		tag: { name: "Engineering", slug: "engineering" },
		html: `<p>Self-hosting should not feel like a infrastructure project. The Sagyboar installer provisions Docker Swarm, Traefik, and the dashboard with a single script.</p>
<h2>Minimal prerequisites</h2>
<p>Any modern Linux server with Docker is enough to get started. No Kubernetes cluster required.</p>
<h2>Production-ready defaults</h2>
<p>SSL, routing, and service discovery are configured out of the box so your first deploy is minutes away.</p>`,
	}),
	makePost({
		id: "post-4",
		title: "Enterprise RBAC: assign servers and Git providers per user",
		slug: "enterprise-rbac-granular-access",
		excerpt:
			"Fine-grained permissions now extend to individual remote servers and Git provider connections.",
		feature_image: "/enterprise/custom-roles.png",
		reading_time: 7,
		published_at: "2025-10-18T08:30:00.000Z",
		tag: { name: "Enterprise", slug: "enterprise" },
		html: `<p>Enterprise teams asked for visibility controls that mirror how they actually work. RBAC in Sagyboar now scopes access down to specific servers and Git integrations.</p>
<h2>Custom roles</h2>
<p>Start from templates or build roles from scratch with per-resource permission toggles.</p>
<h2>Audit everything</h2>
<p>Every permission change and deployment action is recorded for compliance and incident response.</p>`,
	}),
];

export function getDummyPosts(): Post[] {
	return dummyBlogPosts;
}

export function getDummyPost(slug: string): Post | null {
	return dummyBlogPosts.find((post) => post.slug === slug) ?? null;
}

export function getDummyTags() {
	const tagMap = new Map<string, { id: string; name: string; slug: string }>();
	for (const post of dummyBlogPosts) {
		for (const tag of post.tags ?? []) {
			tagMap.set(tag.slug, tag);
		}
	}
	return Array.from(tagMap.values());
}

export function getDummyPostsByTag(tagSlug: string): Post[] {
	return dummyBlogPosts.filter((post) =>
		post.tags?.some((tag) => tag.slug === tagSlug),
	);
}
