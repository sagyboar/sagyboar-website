import type { PortableTextBlock } from "@portabletext/types";

export type SanityImageAsset = {
	_type: "image";
	asset?: {
		_ref: string;
		_type: "reference";
	};
	alt?: string;
};

export type BlogAuthor = {
	name: string;
	bio?: string;
	image?: SanityImageAsset;
};

export type BlogPostListItem = {
	_id: string;
	title: string;
	slug: string;
	excerpt?: string;
	publishedAt: string;
	mainImage?: SanityImageAsset;
	author?: BlogAuthor | null;
};

export type BlogPost = BlogPostListItem & {
	body?: PortableTextBlock[];
};
