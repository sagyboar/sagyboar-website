import { JobsAbout } from "@/components/jobs/JobsAbout";
import { JobsHero } from "@/components/jobs/JobsHero";
import { JobsOpenPositions } from "@/components/jobs/JobsOpenPositions";
import { JobsWhyWork } from "@/components/jobs/JobsWhyWork";
import { FinalCTA, PageShell } from "@/components/ui/sagy";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.jobs);

export default function JobsPage() {
	return (
		<PageShell>
			<JobsHero />
			<JobsAbout />
			<JobsWhyWork />
			<JobsOpenPositions />
			<FinalCTA
				title="Don't see your role yet?"
				titleHighlight="your role"
				subline="We hire ahead of the roadmap. Tell us what you'd own at Sagyboar and we'll take a look."
				primaryCta={{ label: "Contact us", href: "/contact" }}
				secondaryCta={{ label: "See open positions", href: "#open-positions" }}
				className="pb-24"
			/>
		</PageShell>
	);
}
