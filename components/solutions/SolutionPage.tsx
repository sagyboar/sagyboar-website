import { JsonLd } from "@/components/seo/JsonLd";
import { PageShell } from "@/components/ui/sagy";
import { buildFaqJsonLd } from "@/lib/seo";
import { SolutionCta } from "./SolutionCta";
import { SolutionFaq } from "./SolutionFaq";
import { SolutionHero } from "./SolutionHero";
import { SolutionSpotlight } from "./SolutionSpotlight";
import { SolutionStack } from "./SolutionStack";
import type { SolutionPageData } from "./solution-types";

type SolutionPageProps = {
	data: SolutionPageData;
};

export function SolutionPage({ data }: SolutionPageProps) {
	const faqJsonLd = buildFaqJsonLd(data.faq.items);

	return (
		<PageShell>
			<JsonLd data={faqJsonLd} />
			<SolutionHero data={data.hero} />
			<SolutionStack data={data.stack} />
			<SolutionSpotlight data={data.spotlight} />
			<SolutionFaq data={data.faq} />
			<SolutionCta data={data.cta} className="pb-24" />
		</PageShell>
	);
}
