import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: ["https://Sagyboar.com/sitemap.xml", "https://Sagyboar.com/llms.txt"],
	};
}
