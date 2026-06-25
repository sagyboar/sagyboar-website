"use client";

import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BorderGlow from "@/components/ui/border-glow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { JobPosting } from "./jobs-data";

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
				<div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between">
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

					<div className="flex shrink-0 flex-col gap-2 sm:items-end">
						<Button asChild className="rounded-full">
							<Link href={`/jobs/${job.id}`}>
								View role
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button asChild variant="outline" className="rounded-full">
							<Link href={`/jobs/${job.id}#apply`}>Apply now</Link>
						</Button>
					</div>
				</div>
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
