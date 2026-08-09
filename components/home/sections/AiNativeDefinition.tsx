import {
	ScrollReveal,
	ScrollRevealItem,
} from "@/components/design-system/ScrollReveal";
import { aiNativeDefinition } from "@/components/home/data/home-content";

/** Quotable GEO block — DefinedTerm + persona line */
export function AiNativeDefinition() {
	return (
		<ScrollReveal
			as="section"
			className="relative z-10 px-4 py-16 sm:px-6 sm:py-20"
			aria-label="What is Sagyboar"
			stagger
		>
			<div className="mx-auto max-w-3xl">
				<ScrollRevealItem>
					<div
						itemScope
						itemType="https://schema.org/DefinedTerm"
						className="sagy-spotlight rounded-xl border border-sagy-border bg-sagy-surface px-6 py-8 text-center shadow-sagy-card sm:px-10 sm:py-10"
					>
						<meta itemProp="name" content="AI-native DevOps platform" />
						<p
							itemProp="description"
							className="font-sans text-base leading-relaxed text-sagy-body sm:text-lg"
						>
							{aiNativeDefinition.term}
						</p>
						<p className="mt-5 font-sans text-sm leading-relaxed text-sagy-muted sm:text-base">
							{aiNativeDefinition.persona}
						</p>
					</div>
				</ScrollRevealItem>
			</div>
		</ScrollReveal>
	);
}
