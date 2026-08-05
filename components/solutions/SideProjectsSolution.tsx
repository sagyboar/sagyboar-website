import { JsonLd } from "@/components/seo/JsonLd";
import { sideProjectsSolutionPage } from "@/components/solutions/side-projects-data";
import { PageShell } from "@/components/ui/sagy";
import { buildFaqJsonLd } from "@/lib/seo";
import { SolutionCta } from "./SolutionCta";
import { SolutionFaq } from "./SolutionFaq";
import { SolutionStack } from "./SolutionStack";
import { SideProjectsHero } from "./side-projects/SideProjectsHero";
import { SideProjectsIntro } from "./side-projects/SideProjectsIntro";

/**
 * Side Projects solution — same sections as the shared SolutionPage, but the
 * spotlight copy leads as the hero and the original hero copy is demoted to an
 * intro section.
 */
export function SideProjectsSolution() {
	const data = sideProjectsSolutionPage;

	return (
		<PageShell>
			<JsonLd data={buildFaqJsonLd(data.faq.items)} />
			<SideProjectsHero data={data.spotlight} />
			<SolutionStack data={data.stack} />
			<SideProjectsIntro data={data.hero} />
			<SolutionFaq data={data.faq} />
			<SolutionCta data={data.cta} className="pb-24" />
		</PageShell>
	);
}
