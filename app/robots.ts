import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/seo-data";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: ["/", "/api/og"],
				disallow: ["/api/"],
			},
		],
		sitemap: `${SITE_URL}/sitemap.xml`,
		host: SITE_URL,
	};
}
