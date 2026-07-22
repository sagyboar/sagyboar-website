import { SideProjectsSolution } from "@/components/solutions/SideProjectsSolution";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.solutionsSideProjects);

export default function SideProjectsSolutionPage() {
	return <SideProjectsSolution />;
}
