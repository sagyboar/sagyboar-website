import { sanityClient, sanityClientNoCdn } from "./client";
import { sanityProjectId, sanityReadToken } from "./env";
import type { BlogPost, BlogPostListItem } from "./types";

export type { BlogAuthor, BlogPost, BlogPostListItem } from "./types";

const postFields = /* groq */ `
	_id,
	title,
	"slug": slug.current,
	excerpt,
	publishedAt,
	mainImage,
	author->{
		name,
		bio,
		image
	}
`;

export const postsQuery = /* groq */ `
	*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
		${postFields}
	}
`;

export const postBySlugQuery = /* groq */ `
	*[_type == "post" && slug.current == $slug][0] {
		${postFields},
		body
	}
`;

export const postSlugsQuery = /* groq */ `
	*[_type == "post" && defined(slug.current)][].slug.current
`;

function client() {
	return sanityReadToken ? sanityClientNoCdn : sanityClient;
}

export async function getPosts(): Promise<BlogPostListItem[]> {
	if (!sanityProjectId) return [];
	return client().fetch<BlogPostListItem[]>(postsQuery);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
	if (!sanityProjectId) return null;
	return client().fetch<BlogPost | null>(postBySlugQuery, { slug });
}

export async function getPostSlugs(): Promise<string[]> {
	if (!sanityProjectId) return [];
	return client().fetch<string[]>(postSlugsQuery);
}
