import { SolutionPage } from "@/components/solutions/SolutionPage";
import { organizationsSolutionPage } from "@/components/solutions/organizations-data";

export function OrganizationsSolution() {
	return <SolutionPage data={organizationsSolutionPage} />;
}
