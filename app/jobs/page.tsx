import { JobsAbout } from "@/components/jobs/JobsAbout";
import { JobsHero } from "@/components/jobs/JobsHero";
import { JobsOpenPositions } from "@/components/jobs/JobsOpenPositions";
import { JobsWhyWork } from "@/components/jobs/JobsWhyWork";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sagyboar Jobs & Open Positions",
	description:
		"Join Sagyboar and help teams deploy faster with our AI-native DevOps platform. View open roles including Sales Executive (Commission-Based).",
};

export default function JobsPage() {
	return (
		<div className="min-h-screen bg-background">
			<JobsHero />
			<JobsAbout />
			<JobsWhyWork />
			<JobsOpenPositions />
		</div>
	);
}
