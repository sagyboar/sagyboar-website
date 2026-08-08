import { FreeDeployPage } from "@/components/free-deploy/FreeDeployPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.freeDeploy);

export default function FreeDeployRoute() {
	return (
		<>
			<JsonLd
				data={{
					"@context": "https://schema.org",
					"@type": "WebPage",
					name: pageSeo.freeDeploy.title,
					description: pageSeo.freeDeploy.description,
					url: `https://sagyboar.space${pageSeo.freeDeploy.path}`,
				}}
			/>
			<FreeDeployPage />
		</>
	);
}
