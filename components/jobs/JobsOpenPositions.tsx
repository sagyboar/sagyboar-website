import { Container } from "@/components/Container";
import { JobListings } from "@/components/jobs/JobListingCard";
import { jobPostings } from "@/components/jobs/jobs-data";
import { Briefcase } from "lucide-react";

export function JobsOpenPositions() {
	return (
		<section id="open-positions" className="py-16 sm:py-24">
			<Container>
				<div className="mx-auto max-w-5xl">
					<div className="rounded-3xl border border-border bg-card/50 p-8 shadow-sm backdrop-blur-sm sm:p-10">
						<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<div className="flex items-center gap-2 text-primary">
									<Briefcase className="h-5 w-5" aria-hidden />
									<p className="text-sm font-medium uppercase tracking-wider">
										Open positions
									</p>
								</div>
								<h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
									Find your role
								</h2>
								<p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
									{jobPostings.length} open role
									{jobPostings.length === 1 ? "" : "s"} right now. Expand a
									listing for the full description, then apply by email.
								</p>
							</div>
							<div className="rounded-2xl border border-border bg-background px-4 py-3 text-center sm:min-w-[7rem]">
								<p className="text-2xl font-semibold text-foreground">
									{jobPostings.length}
								</p>
								<p className="text-xs text-muted-foreground">Active roles</p>
							</div>
						</div>

						<div className="mt-8 border-t border-border pt-8">
							<JobListings jobs={jobPostings} />
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
