import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { GlowButton, SectionHeading, Terminal } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { ChevronRight, Users } from "lucide-react";
import { jobPostings } from "./jobs-data";

const heroStats = [
	{ label: "Open roles", value: String(jobPostings.length) },
	{ label: "Location", value: "Remote" },
	{ label: "Hours", value: "Flexible" },
] as const;

const terminalLines = [
	{ text: "$ sagyboar careers --list", type: "default" as const },
	{ text: "fetching open roles from sagyboar.space…", type: "info" as const },
	...jobPostings.map((job) => ({
		text: `${job.id} · ${job.location.toLowerCase()} · ${job.badge.toLowerCase()}`,
		type: "success" as const,
	})),
	{
		text: "apply → attach resume, we reply to every applicant",
		type: "default" as const,
	},
];

export function JobsHero() {
	return (
		<ScrollReveal
			as="section"
			className={cn(
				"relative border-b border-sagy-border",
				spacing.sectionYLarge,
			)}
			aria-label="Careers hero"
			stagger
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
					<div>
						<ScrollRevealItem>
							<p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-sagy-muted">
								Company
								<ChevronRight className="size-3" aria-hidden="true" />
								<span className="text-sagy-body">Careers</span>
							</p>

							<div className="mt-5 inline-flex items-center gap-2 rounded-full border border-sagy-border bg-sagy-heading/[0.04] px-3 py-1.5">
								<Users
									className="size-4 text-sagy-accent"
									strokeWidth={1.75}
									aria-hidden="true"
								/>
								<span className="font-mono text-[11px] uppercase tracking-wider text-sagy-body">
									Hiring worldwide
								</span>
							</div>
						</ScrollRevealItem>

						<ScrollRevealItem>
							<SectionHeading
								title="Help teams ship without a DevOps team"
								titleHighlight="without a DevOps team"
								subline="We're building an AI-native platform for deployment, monitoring, and managed services. Small team, remote by default, work that ships the week you build it."
								as="h1"
								size="hero"
								className="mt-6"
							/>
						</ScrollRevealItem>

						<ScrollRevealItem>
							<dl className="mt-10 grid max-w-md grid-cols-3 gap-3">
								{heroStats.map((stat) => (
									<div
										key={stat.label}
										className="sagy-spotlight rounded-xl border border-sagy-border bg-sagy-surface px-4 py-3 shadow-sagy-card"
									>
										<dt className="font-mono text-[10px] uppercase tracking-wider text-sagy-muted">
											{stat.label}
										</dt>
										<dd className="mt-1 font-display text-xl uppercase tracking-tight text-sagy-heading">
											{stat.value}
										</dd>
									</div>
								))}
							</dl>

							<div className="mt-8 flex flex-wrap items-center gap-3">
								<GlowButton href="#open-positions">
									See open positions
								</GlowButton>
								<GlowButton href="#about-sagyboar" variant="ghost">
									What we build
								</GlowButton>
							</div>
						</ScrollRevealItem>
					</div>

					<ScrollRevealItem>
						<Terminal
							title="SAGYBOAR CAREERS // OPEN ROLES"
							lines={terminalLines}
							minHeight="280px"
						/>
					</ScrollRevealItem>
				</div>
			</div>
		</ScrollReveal>
	);
}
