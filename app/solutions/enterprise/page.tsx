import { EnterpriseSolution } from "@/components/solutions/EnterpriseSolution";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.solutionsEnterprise);

export default function EnterpriseSolutionPage() {
	return <EnterpriseSolution />;
}
