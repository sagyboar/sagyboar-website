import type { SolutionPageData } from "@/components/solutions/solution-types";
import { SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

type SideProjectsIntroProps = {
	data: SolutionPageData["hero"];
};

/** Demoted former hero — plain intro section, no competing mockup or aurora */
export function SideProjectsIntro({ data }: SideProjectsIntroProps) {
	return (
		<section
			className={cn(
				"border-b border-white/[0.08] bg-sagy-surface/40",
				spacing.sectionY,
			)}
			aria-label="Overview"
		>
			<div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
				<p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-sagy-muted">
					{data.title} · {data.price}
				</p>
				<SectionHeading
					title={data.headline}
					titleHighlight={data.headlineHighlight}
					subline={data.description}
					align="center"
					as="h2"
					className="mx-auto"
				/>
			</div>
		</section>
	);
}
