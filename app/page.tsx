import { HomePage } from "@/components/home/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { homePageJsonLd, pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.home);

export default function Home() {
	return (
		<>
			<JsonLd data={homePageJsonLd} />
			<HomePage />
		</>
	);
}
