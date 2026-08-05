import { AboutCta } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { AboutValues } from "@/components/about/AboutValues";
import { PageShell } from "@/components/ui/sagy";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.about);

export default function AboutPage() {
	return (
		<PageShell>
			<AboutHero />
			<AboutMission />
			<AboutTimeline />
			<AboutValues />
			<AboutCta />
		</PageShell>
	);
}
