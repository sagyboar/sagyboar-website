import { getDummyPosts } from "@/constants/blog-posts";
import { NextResponse } from "next/server";

function escapeXml(unsafe: string): string {
	return unsafe.replace(/[<>&'"]/g, (c) => {
		switch (c) {
			case "<":
				return "&lt;";
			case ">":
				return "&gt;";
			case "&":
				return "&amp;";
			case "'":
				return "&apos;";
			case '"':
				return "&quot;";
			default:
				return c;
		}
	});
}

export async function GET() {
	const posts = getDummyPosts();

	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
	<channel>
		<title>Sagyboar Blog</title>
		<link>https://Sagyboar.com/blog</link>
		<description>${escapeXml("Sagyboar Latest News & Updates")}</description>
		<language>en</language>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		${posts
			.map(
				(post) => `
		<item>
			<title><![CDATA[${post.title}]]></title>
			<link>https://Sagyboar.com/blog/${escapeXml(post.slug)}</link>
			<guid>https://Sagyboar.com/blog/${escapeXml(post.slug)}</guid>
			<description><![CDATA[${post.excerpt}]]></description>
			<content:encoded><![CDATA[${post.html}]]></content:encoded>
			<pubDate>${new Date(post.published_at).toUTCString()}</pubDate>
			${
				post.feature_image
					? `<enclosure url="${escapeXml(post.feature_image)}" type="image/jpeg" />`
					: ""
			}
			${
				post.primary_author
					? `<dc:creator><![CDATA[${post.primary_author.name}]]></dc:creator>`
					: ""
			}
		</item>`,
			)
			.join("\n")}
	</channel>
</rss>`;

	return new NextResponse(rss, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "s-maxage=3600, stale-while-revalidate",
		},
	});
}
