import { StartupSolution } from "@/components/solutions/StartupSolution";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sagyboar Startup — Scale Without a Full DevOps Team",
	description:
		"Up to five apps, advanced AI monitoring, and AI-assisted engineering for growing startups. Sagyboar Startup from $249/month.",
};

export default function StartupSolutionPage() {
	return <StartupSolution />;
}
