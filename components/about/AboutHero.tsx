import { SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export function AboutHero() {
	return (
		<section
			className={cn(
				"relative overflow-hidden border-b border-sagy-border",
				spacing.sectionYLarge,
			)}
			aria-label="Hero"
		>
			<div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
				<SectionHeading
					eyebrow="About Sagyboar"
					title="Helping teams deploy without the DevOps overhead"
					titleHighlight="deploy without the DevOps overhead"
					subline="We're an AI-native DevOps platform built to make deployment, monitoring, and infrastructure management simple for engineering teams of every size. Here's our story so far."
					align="center"
					as="h1"
					size="hero"
					className="mx-auto"
				/>
			</div>
		</section>
	);
}
