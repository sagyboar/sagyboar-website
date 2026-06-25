"use client";

import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BorderGlow from "@/components/ui/border-glow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import type { JobPosting } from "./jobs-data";

function buildApplyMailto(job: JobPosting) {
	const body = [
		"Hi Sagyboar Team,",
		"",
		`I would like to apply for the ${job.title} position.`,
		"",
		"Please find my details below:",
		"- Full Name:",
		"- Contact Number:",
		"- Email Address:",
		"- Current Location:",
		"- Relevant Experience:",
		"- LinkedIn Profile:",
		"",
		"Thank you,",
	].join("\n");

	return `mailto:${job.applyEmail}?subject=${encodeURIComponent(job.applySubject)}&body=${encodeURIComponent(body)}`;
}

function JobSections({
	title,
	items,
}: {
	title: string;
	items: string[];
}) {
	return (
		<div>
			<h4 className="text-sm font-semibold text-foreground">{title}</h4>
			<ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
				{items.map((item) => (
					<li key={item} className="flex gap-2">
						<span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export function JobListingCard({ job }: { job: JobPosting }) {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const isDark = mounted && resolvedTheme === "dark";

	return (
		<article>
			<BorderGlow
				animated
				borderRadius={16}
				glowRadius={32}
				glowIntensity={1.1}
				edgeSensitivity={28}
				coneSpread={22}
				backgroundColor="hsl(var(--card))"
				glowColor={isDark ? "280 85 72" : "250 75 62"}
				colors={["#c084fc", "#f472b6", "#38bdf8"]}
				className="w-full overflow-hidden"
			>
				<div className="flex flex-col gap-4 border-b border-border p-6 sm:flex-row sm:items-start sm:justify-between">
				<div className="flex flex-col gap-3">
					<div className="flex flex-wrap items-center gap-2">
						<Briefcase className="h-4 w-4 text-primary" aria-hidden />
						<h3 className="text-lg font-semibold text-foreground">
							{job.title}
						</h3>
					</div>
					<div className="flex flex-wrap gap-2">
						<Badge variant="secondary" className="gap-1">
							{job.badge}
						</Badge>
						<Badge variant="outline" className="gap-1">
							<MapPin className="h-3 w-3" aria-hidden />
							{job.location}
						</Badge>
					</div>
					<p className="text-sm leading-relaxed text-muted-foreground">
						{job.overview}
					</p>
				</div>
				<Button asChild className="shrink-0 rounded-full">
					<a href={buildApplyMailto(job)}>
						Apply now
						<ArrowRight className="ml-2 h-4 w-4" />
					</a>
				</Button>
			</div>

			<Accordion type="single" collapsible className="px-6">
				<AccordionItem value="details" className="border-border">
					<AccordionTrigger className="text-sm font-medium text-foreground hover:text-foreground">
						View full job description
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-6 pb-4">
							<JobSections title="Responsibilities" items={job.responsibilities} />
							<JobSections title="Required skills" items={job.requiredSkills} />
							<JobSections
								title="Preferred experience"
								items={job.preferredExperience}
							/>
							<JobSections title="Compensation" items={job.compensation} />
							<JobSections title="Why join Sagyboar?" items={job.whyJoin} />
							<div>
								<h4 className="text-sm font-semibold text-foreground">
									How to apply
								</h4>
								<p className="mt-2 text-sm text-muted-foreground">
									Send your application to{" "}
									<a
										href={`mailto:${job.applyEmail}?subject=${encodeURIComponent(job.applySubject)}`}
										className="text-primary underline-offset-4 hover:underline"
									>
										{job.applyEmail}
									</a>{" "}
									with the subject line:{" "}
									<span className="font-medium text-foreground">
										{job.applySubject}
									</span>
								</p>
								<JobSections
									title="Application requirements"
									items={job.applicationRequirements}
								/>
								<p className="mt-4 text-sm leading-relaxed text-muted-foreground">
									{job.closingNote}
								</p>
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			</BorderGlow>
		</article>
	);
}

export function JobListings({ jobs }: { jobs: JobPosting[] }) {
	return (
		<div className="flex flex-col gap-6">
			{jobs.map((job) => (
				<JobListingCard key={job.id} job={job} />
			))}
		</div>
	);
}
