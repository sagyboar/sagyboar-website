import { FinalCTA } from "@/components/ui/sagy";
import type { SolutionPageData } from "./solution-types";

type SolutionCtaProps = {
	data: SolutionPageData["cta"];
	className?: string;
};

export function SolutionCta({ data, className }: SolutionCtaProps) {
	return (
		<FinalCTA
			title={data.title}
			titleHighlight={data.titleHighlight}
			subline={data.description}
			primaryCta={{
				label: data.primaryCta,
				href: data.primaryHref,
				external: data.primaryExternal,
			}}
			secondaryCta={{
				label: data.secondaryCta,
				href: data.secondaryHref,
			}}
			className={className}
		/>
	);
}
