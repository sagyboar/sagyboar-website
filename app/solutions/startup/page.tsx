import { StartupSolution } from "@/components/solutions/StartupSolution";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.solutionsStartup);

export default function StartupSolutionPage() {
	return <StartupSolution />;
}
