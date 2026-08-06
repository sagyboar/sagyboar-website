import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import {
	GlowButton,
	PageShell,
	SectionHeading,
	Terminal,
} from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { ArrowLeft, Briefcase, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import type { JobPosting } from "./jobs-data";

const detailSections = [
	{ id: "responsibilities", title: "Responsibilities" },
	{ id: "required-skills", title: "Required skills" },
	{ id: "preferred-experience", title: "Preferred experience" },
	{ id: "compensation", title: "Compensation" },
	{ id: "why-join", title: "Why join Sagyboar?" },
] as const;

function JobSection({
	id,
	index,
	title,
	items,
}: {
	id: string;
	index: number;
	title: string;
	items: string[];
}) {
	return (
		<ScrollRevealItem>
			<div
				id={id}
				className="scroll-mt-28 sagy-spotlight rounded-xl border border-sagy-border bg-sagy-surface p-6 shadow-sagy-card sm:p-8"
			>
				<div className="flex items-center gap-3">
					<span
						className="font-display text-2xl leading-none text-sagy-heading/[0.14]"
						aria-hidden="true"
					>
						{String(index + 1).padStart(2, "0")}
					</span>
					<span
						className="h-px w-8 bg-gradient-to-r from-sagy-accent/50 to-transparent"
						aria-hidden="true"
					/>
				</div>
				<h2 className="mt-4 font-display text-xl uppercase tracking-tight text-sagy-heading sm:text-2xl">
					{title}
				</h2>
				<ul className="mt-5 flex flex-col gap-3 font-sans text-sm leading-relaxed text-sagy-body sm:text-base">
					{items.map((item) => (
						<li key={item} className="flex gap-3">
							<span
								className="mt-2 size-1.5 shrink-0 rounded-full bg-sagy-accent"
								aria-hidden="true"
							/>
							{item}
						</li>
					))}
				</ul>
			</div>
		</ScrollRevealItem>
	);
}

export function JobDetail({ job }: { job: JobPosting }) {
	const sectionItems: Record<string, string[]> = {
		responsibilities: job.responsibilities,
		"required-skills": job.requiredSkills,
		"preferred-experience": job.preferredExperience,
		compensation: job.compensation,
		"why-join": job.whyJoin,
	};

	const terminalLines = [
		{ text: `$ sagyboar careers open ${job.id}`, type: "default" as const },
		{ text: `role: ${job.title}`, type: "info" as const },
		{ text: `location: ${job.location}`, type: "default" as const },
		{ text: `type: ${job.badge}`, type: "default" as const },
		{ text: "status: accepting applications", type: "success" as const },
	];

	return (
		<PageShell>
			<ScrollReveal
				as="section"
				className={cn("border-b border-sagy-border", spacing.sectionYLarge)}
				aria-label="Role overview"
				stagger
			>
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<div>
							<ScrollRevealItem>
								<p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-sagy-muted">
									<Link href="/jobs" className="hover:text-sagy-body">
										Careers
									</Link>
									<ChevronRight className="size-3" aria-hidden="true" />
									<span className="text-sagy-body">Open position</span>
								</p>

								<div className="mt-5 inline-flex items-center gap-2 rounded-full border border-sagy-border bg-sagy-heading/[0.04] px-3 py-1.5">
									<Briefcase
										className="size-4 text-sagy-accent"
										strokeWidth={1.75}
										aria-hidden="true"
									/>
									<span className="font-mono text-[11px] uppercase tracking-wider text-sagy-body">
										{job.badge}
									</span>
								</div>
							</ScrollRevealItem>

							<ScrollRevealItem>
								<SectionHeading
									title={job.title}
									subline={job.overview}
									as="h1"
									size="hero"
									className="mt-6"
								/>
							</ScrollRevealItem>

							<ScrollRevealItem>
								<div className="mt-8 flex flex-wrap gap-2">
									<span className="inline-flex items-center gap-1 rounded-full border border-sagy-border bg-sagy-heading/[0.04] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-sagy-body">
										<MapPin className="size-3" aria-hidden="true" />
										{job.location}
									</span>
									<span className="inline-flex items-center rounded-full border border-sagy-accent/30 bg-sagy-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-sagy-accent">
										{job.badge}
									</span>
								</div>

								<div className="mt-8 flex flex-wrap items-center gap-3">
									<GlowButton href="#apply">Apply for this role</GlowButton>
									<GlowButton href="/jobs" variant="ghost">
										<ArrowLeft className="size-3.5" aria-hidden="true" />
										All roles
									</GlowButton>
								</div>
							</ScrollRevealItem>
						</div>

						<ScrollRevealItem>
							<Terminal
								title={`SAGYBOAR CAREERS // ${job.id.toUpperCase()}`}
								lines={terminalLines}
								minHeight="260px"
							/>
						</ScrollRevealItem>
					</div>
				</div>
			</ScrollReveal>

			<ScrollReveal
				as="section"
				className={cn("border-b border-sagy-border", spacing.sectionY)}
				aria-label="Role details"
				stagger
			>
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<ScrollRevealItem>
						<nav
							aria-label="Jump to section"
							className="flex flex-wrap gap-2 border-b border-sagy-border pb-8"
						>
							{detailSections.map((section) => (
								<a
									key={section.id}
									href={`#${section.id}`}
									className="rounded-full border border-sagy-border bg-sagy-heading/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-sagy-body transition-colors hover:border-sagy-accent/30 hover:text-sagy-heading"
								>
									{section.title}
								</a>
							))}
						</nav>
					</ScrollRevealItem>

					<div className="mt-10 flex flex-col gap-6">
						{detailSections.map((section, index) => (
							<JobSection
								key={section.id}
								id={section.id}
								index={index}
								title={section.title}
								items={sectionItems[section.id] ?? []}
							/>
						))}
					</div>
				</div>
			</ScrollReveal>

			<ScrollReveal
				as="section"
				id="apply"
				className={cn("scroll-mt-24", spacing.sectionY, "pb-24")}
				aria-label="Apply for this role"
				stagger
			>
				<div className="mx-auto max-w-4xl px-4 sm:px-6">
					<ScrollRevealItem>
						<SectionHeading
							eyebrow="Application"
							title="Apply for this role"
							titleHighlight="this role"
							subline="Fill in the form and attach your resume. You'll get a confirmation by email once it's submitted."
							align="center"
							className="mx-auto"
						/>
					</ScrollRevealItem>

					<ScrollRevealItem>
						<div className="mt-12 sagy-spotlight rounded-xl border border-sagy-border bg-sagy-surface p-6 shadow-sagy-card sm:p-8">
							<div className="rounded-xl border border-sagy-accent/20 bg-sagy-accent/[0.06] p-5">
								<h3 className="font-mono text-[11px] uppercase tracking-wider text-sagy-accent">
									What to include
								</h3>
								<ul className="mt-3 grid gap-2 font-sans text-sm text-sagy-body sm:grid-cols-2">
									{job.applicationRequirements.map((item) => (
										<li key={item} className="flex gap-3">
											<span
												className="mt-2 size-1.5 shrink-0 rounded-full bg-sagy-accent"
												aria-hidden="true"
											/>
											{item}
										</li>
									))}
								</ul>
							</div>

							<div className="mt-8">
								<JobApplicationForm jobId={job.id} jobTitle={job.title} />
							</div>
						</div>
					</ScrollRevealItem>

					<ScrollRevealItem>
						<p className="mt-8 font-sans text-sm leading-relaxed text-sagy-muted">
							{job.closingNote}
						</p>
					</ScrollRevealItem>
				</div>
			</ScrollReveal>
		</PageShell>
	);
}
