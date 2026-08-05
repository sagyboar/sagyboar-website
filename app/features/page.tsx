import { FeaturesIndexPage } from "@/components/features/FeaturesIndexPage";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.features);

export default function FeaturesPage() {
	return <FeaturesIndexPage />;
}
