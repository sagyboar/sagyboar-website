import { ArrowLeft, Briefcase, MapPin } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { JobPosting } from "./jobs-data";

function JobSection({ title, items }: { title: string; items: string[] }) {
	return (
		<div>
			<h2 className="font-display text-xl tracking-tight text-foreground sm:text-2xl">
				{title}
			</h2>
			<ul className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
				{items.map((item) => (
					<li key={item} className="flex gap-3">
						<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export function JobDetail({ job }: { job: JobPosting }) {
	return (
		<div className="min-h-screen bg-background">
			<section className="border-b border-border bg-muted/20 py-14 dark:bg-muted/10 sm:py-20">
				<Container>
					<div className="mx-auto max-w-3xl">
						<Link
							href="/jobs"
							className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
						>
							<ArrowLeft className="h-4 w-4" />
							Back to all roles
						</Link>

						<div className="mt-6 flex items-center gap-2 text-primary">
							<Briefcase className="h-5 w-5" aria-hidden />
							<p className="text-sm font-medium uppercase tracking-wider">
								Open position
							</p>
						</div>

						<h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
							{job.title}
						</h1>

						<div className="mt-5 flex flex-wrap gap-2">
							<Badge variant="secondary">{job.badge}</Badge>
							<Badge variant="outline" className="gap-1">
								<MapPin className="h-3 w-3" aria-hidden />
								{job.location}
							</Badge>
						</div>

						<p className="mt-6 text-base leading-relaxed text-muted-foreground">
							{job.overview}
						</p>

						<Button asChild size="lg" className="mt-8 rounded-full">
							<a href="#apply">Apply for this role</a>
						</Button>
					</div>
				</Container>
			</section>

			<section className="py-14 sm:py-20">
				<Container>
					<div className="mx-auto flex max-w-3xl flex-col gap-10">
						<JobSection
							title="Responsibilities"
							items={job.responsibilities}
						/>
						<JobSection title="Required skills" items={job.requiredSkills} />
						<JobSection
							title="Preferred experience"
							items={job.preferredExperience}
						/>
						<JobSection title="Compensation" items={job.compensation} />
						<JobSection title="Why join Sagyboar?" items={job.whyJoin} />

						<div
							id="apply"
							className="scroll-mt-28 rounded-3xl border border-border bg-card/50 p-6 shadow-sm backdrop-blur-sm sm:p-8"
						>
							<h2 className="font-display text-xl tracking-tight text-foreground sm:text-2xl">
								Apply for this role
							</h2>
							<p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
								Fill in the form below and attach your resume. You&apos;ll get a
								confirmation by email once it&apos;s submitted.
							</p>

							<div className="mt-4 rounded-2xl border border-border/60 bg-muted/20 p-4">
								<h3 className="text-sm font-semibold text-foreground">
									What to include
								</h3>
								<ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
									{job.applicationRequirements.map((item) => (
										<li key={item} className="flex gap-3">
											<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
											{item}
										</li>
									))}
								</ul>
							</div>

							<div className="mt-6">
								<JobApplicationForm jobId={job.id} jobTitle={job.title} />
							</div>

							<p className="mt-6 text-sm leading-relaxed text-muted-foreground">
								{job.closingNote}
							</p>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}
