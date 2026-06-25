import { SolutionPage } from "@/components/solutions/SolutionPage";
import { startupSolutionPage } from "@/components/solutions/startup-data";

export function StartupSolution() {
	return <SolutionPage data={startupSolutionPage} />;
}
