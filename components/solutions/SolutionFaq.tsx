"use client";

import { Container } from "@/components/Container";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import type { SolutionPageData } from "./solution-types";

type SolutionFaqProps = {
	data: SolutionPageData["faq"];
};

export function SolutionFaq({ data }: SolutionFaqProps) {
	return (
		<section className="border-b border-border py-16 sm:py-24">
			<Container>
				<h2 className="text-center font-display text-2xl font-semibold text-foreground sm:text-3xl">
					{data.title}
				</h2>
				<p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
					{data.subtitle}
				</p>
				<Accordion
					type="single"
					collapsible
					className="mx-auto mt-10 w-full max-w-3xl rounded-2xl border border-border bg-card/50 px-6 shadow-sm backdrop-blur-sm dark:bg-card/30"
				>
					{data.items.map((faq, index) => (
						<AccordionItem
							value={`${index}`}
							key={faq.question}
							className="border-border"
						>
							<AccordionTrigger className="text-left text-foreground hover:text-foreground">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-muted-foreground">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</Container>
		</section>
	);
}
