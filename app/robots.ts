import {
	LLMS_FULL_PATH,
	LLMS_LEGACY_FULL_PATH,
	LLMS_TXT_PATH,
	SAGYBOAR_SPACE_MD_PATH,
	SITE_URL,
} from "@/constants/seo-data";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: [
					"/",
					"/api/og",
					LLMS_TXT_PATH,
					LLMS_FULL_PATH,
					SAGYBOAR_SPACE_MD_PATH,
					LLMS_LEGACY_FULL_PATH,
					"/watch/intro",
					"/videos/",
				],
				disallow: ["/api/"],
			},
		],
		sitemap: `${SITE_URL}/sitemap.xml`,
		host: SITE_URL,
	};
}
