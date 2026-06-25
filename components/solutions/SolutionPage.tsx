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
	return (
		<div className="min-h-screen bg-background">
			<SolutionHero data={data.hero} />
			<SolutionStack data={data.stack} />
			<SolutionSpotlight data={data.spotlight} />
			<SolutionFaq data={data.faq} />
			<SolutionCta data={data.cta} />
		</div>
	);
}
