import { ScaleUpsSolution } from "@/components/solutions/ScaleUpsSolution";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.solutionsScaleUps);

export default function ScaleUpsSolutionPage() {
	return <ScaleUpsSolution />;
}
