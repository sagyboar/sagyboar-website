import { JobsAbout } from "@/components/jobs/JobsAbout";
import { JobsHero } from "@/components/jobs/JobsHero";
import { JobsOpenPositions } from "@/components/jobs/JobsOpenPositions";
import { JobsWhyWork } from "@/components/jobs/JobsWhyWork";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.jobs);

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
