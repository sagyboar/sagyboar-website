import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { Boxes, BrainCircuit, LifeBuoy, Rocket } from "lucide-react";
import { Sagyboar_ABOUT } from "./jobs-data";

const pillars = [
	{
		icon: Rocket,
		title: "One-click deploys",
		description:
			"Containerized apps, databases, and complex workloads from a single dashboard.",
	},
	{
		icon: BrainCircuit,
		title: "AI infra insights",
		description:
			"Infrastructure recommendations and intelligent monitoring built into the platform.",
	},
	{
		icon: Boxes,
		title: "Automated incidents",
		description:
			"Incident management that triages and routes before anyone gets paged.",
	},
	{
		icon: LifeBuoy,
		title: "Managed maintenance",
		description:
			"Frontend, backend, QA, and DevOps handled by dedicated technical resources.",
	},
] as const;

export function JobsAbout() {
	const paragraphs = Sagyboar_ABOUT.split("\n\n");

	return (
		<ScrollReveal
			as="section"
			id="about-sagyboar"
			className={cn(
				"border-b border-white/[0.08] bg-sagy-surface/40",
				spacing.sectionY,
			)}
			aria-label="About Sagyboar"
			stagger
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
					<div>
						<ScrollRevealItem>
							<SectionHeading
								eyebrow="Who you'd join"
								title="About Sagyboar"
								titleHighlight="Sagyboar"
							/>
						</ScrollRevealItem>
						<ScrollRevealItem>
							<div className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-sagy-body sm:text-base">
								{paragraphs.map((paragraph) => (
									<p key={paragraph.slice(0, 48)}>{paragraph}</p>
								))}
							</div>
						</ScrollRevealItem>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{pillars.map((pillar) => (
							<ScrollRevealItem key={pillar.title}>
								<div className="sagy-spotlight sagy-tilt group h-full rounded-xl border border-white/[0.08] bg-sagy-surface p-5 shadow-sagy-card transition-colors duration-300 hover:border-sagy-accent/30">
									<span className="flex size-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
										<pillar.icon
											className="size-5 text-sagy-accent"
											strokeWidth={1.75}
											aria-hidden="true"
										/>
									</span>
									<h3 className="mt-4 font-display text-base uppercase tracking-tight text-white">
										{pillar.title}
									</h3>
									<p className="mt-2 font-sans text-sm leading-relaxed text-sagy-body">
										{pillar.description}
									</p>
								</div>
							</ScrollRevealItem>
						))}
					</div>
				</div>
			</div>
		</ScrollReveal>
	);
}
