import { SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { aboutValues } from "./about-data";

export function AboutValues() {
	return (
		<section
			className={cn("border-b border-sagy-border", spacing.sectionY)}
			aria-label="How we operate"
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<SectionHeading
					title="How we operate"
					titleHighlight="operate"
					subline="The principles that shape the platform and the team behind it."
					align="center"
					className="mx-auto"
				/>

				<div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2">
					{aboutValues.map((value) => {
						const Icon = value.icon;

						return (
							<div
								key={value.title}
								className="sagy-spotlight sagy-tilt rounded-xl border border-white/[0.08] bg-sagy-surface p-6 shadow-sagy-card transition-colors hover:border-sagy-accent/25"
							>
								<div className="flex size-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
									<Icon className="size-4 text-sagy-body" strokeWidth={1.5} />
								</div>
								<h3 className="mt-4 font-sans text-base font-medium text-white">
									{value.title}
								</h3>
								<p className="mt-2 font-sans text-sm leading-relaxed text-sagy-body">
									{value.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
