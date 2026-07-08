import { AboutCta } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { AboutValues } from "@/components/about/AboutValues";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.about);

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-background">
			<AboutHero />
			<AboutMission />
			<AboutTimeline />
			<AboutValues />
			<AboutCta />
		</div>
	);
}
