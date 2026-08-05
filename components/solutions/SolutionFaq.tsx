"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import type { SolutionPageData } from "./solution-types";

type SolutionFaqProps = {
	data: SolutionPageData["faq"];
};

export function SolutionFaq({ data }: SolutionFaqProps) {
	return (
		<section
			className={cn("border-b border-white/[0.08]", spacing.sectionY)}
			aria-label="FAQ"
		>
			<div className="mx-auto max-w-3xl px-4 sm:px-6">
				<SectionHeading
					title={data.title}
					titleHighlight={data.titleHighlight}
					subline={data.subtitle}
					align="center"
					className="mx-auto"
				/>

				<Accordion
					type="single"
					collapsible
					className="mt-10 sagy-spotlight rounded-xl border border-white/[0.08] bg-sagy-surface px-5 shadow-sagy-card sm:px-6"
				>
					{data.items.map((faq, index) => (
						<AccordionItem
							key={faq.question}
							value={`${index}`}
							className="border-white/[0.08]"
						>
							<AccordionTrigger className="text-left font-sans text-sm text-white hover:no-underline sm:text-base">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="font-sans text-sm leading-relaxed text-sagy-body">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
