import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { JobListings } from "@/components/jobs/JobListingCard";
import { jobPostings } from "@/components/jobs/jobs-data";
import { SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export function JobsOpenPositions() {
	const count = jobPostings.length;

	return (
		<ScrollReveal
			as="section"
			id="open-positions"
			className={cn("border-b border-white/[0.08]", spacing.sectionY)}
			aria-label="Open positions"
			stagger
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<ScrollRevealItem>
					<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
						<SectionHeading
							eyebrow="Open positions"
							title="Find your role"
							titleHighlight="role"
							subline={`${count} open role${count === 1 ? "" : "s"} right now. Open a listing for the full description, then apply with your resume.`}
						/>
						<div className="shrink-0 sagy-spotlight rounded-xl border border-white/[0.08] bg-sagy-surface px-5 py-4 text-center shadow-sagy-card">
							<p className="font-display text-3xl uppercase tracking-tight text-white">
								{count}
							</p>
							<p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-sagy-muted">
								Active roles
							</p>
						</div>
					</div>
				</ScrollRevealItem>

				<div className="mt-12">
					<JobListings jobs={jobPostings} />
				</div>
			</div>
		</ScrollReveal>
	);
}
