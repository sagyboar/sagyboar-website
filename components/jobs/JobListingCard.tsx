import { ScrollRevealItem } from "@/components/design-system";
import { GlowButton } from "@/components/ui/sagy";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import type { JobPosting } from "./jobs-data";

export function JobListingCard({ job }: { job: JobPosting }) {
	return (
		<article className="group relative overflow-hidden sagy-spotlight rounded-xl border border-sagy-border bg-sagy-surface p-6 shadow-sagy-card transition-colors duration-300 hover:border-sagy-accent/30 sm:p-8">
			<div
				className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sagy-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				aria-hidden="true"
			/>

			<div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
				<div className="min-w-0">
					<div className="flex items-center gap-3">
						<span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-sagy-border bg-sagy-heading/[0.04]">
							<Briefcase
								className="size-4 text-sagy-accent"
								strokeWidth={1.75}
								aria-hidden="true"
							/>
						</span>
						<h3 className="font-display text-lg uppercase leading-tight tracking-tight text-sagy-heading sm:text-xl">
							{job.title}
						</h3>
					</div>

					<div className="mt-4 flex flex-wrap gap-2">
						<span className="inline-flex items-center rounded-full border border-sagy-accent/30 bg-sagy-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-sagy-accent">
							{job.badge}
						</span>
						<span className="inline-flex items-center gap-1 rounded-full border border-sagy-border bg-sagy-heading/[0.04] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-sagy-body">
							<MapPin className="size-3" aria-hidden="true" />
							{job.location}
						</span>
					</div>

					<p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-sagy-body">
						{job.overview}
					</p>
				</div>

				<div className="flex shrink-0 flex-wrap items-center gap-3 lg:flex-col lg:items-stretch">
					<GlowButton href={`/jobs/${job.id}`}>
						View role
						<ArrowRight className="size-3.5" aria-hidden="true" />
					</GlowButton>
					<GlowButton href={`/jobs/${job.id}#apply`} variant="ghost">
						Apply now
					</GlowButton>
				</div>
			</div>
		</article>
	);
}

export function JobListings({ jobs }: { jobs: JobPosting[] }) {
	return (
		<div className="flex flex-col gap-6">
			{jobs.map((job) => (
				<ScrollRevealItem key={job.id}>
					<JobListingCard job={job} />
				</ScrollRevealItem>
			))}
		</div>
	);
}
