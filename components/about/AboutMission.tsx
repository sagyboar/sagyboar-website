import { Sagyboar_ABOUT } from "@/components/jobs/jobs-data";
import { SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function AboutMission() {
	return (
		<section
			className={cn("border-b border-sagy-border", spacing.sectionY)}
			aria-label="What we're building"
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
					<div>
						<SectionHeading
							title="What we're building"
							titleHighlight="building"
						/>
						<div className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-sagy-body sm:text-base">
							{Sagyboar_ABOUT.split("\n\n").map((paragraph) => (
								<p key={paragraph.slice(0, 48)}>{paragraph}</p>
							))}
						</div>
					</div>

					<div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-sagy-border bg-sagy-surface shadow-sagy-card">
						<Image
							src="/Sagyboar-logo.png"
							alt="Sagyboar logo — AI-native DevOps platform for deployment and monitoring"
							fill
							className="object-contain"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
