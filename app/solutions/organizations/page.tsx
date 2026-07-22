import { OrganizationsSolution } from "@/components/solutions/OrganizationsSolution";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.solutionsOrganizations);

export default function OrganizationsSolutionPage() {
	return <OrganizationsSolution />;
}
