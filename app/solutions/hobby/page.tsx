import { HobbySolution } from "@/components/solutions/HobbySolution";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.solutionsHobby);

export default function HobbySolutionPage() {
	return <HobbySolution />;
}
