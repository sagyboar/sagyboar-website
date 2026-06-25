"use client";

import { Container } from "@/components/Container";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { pricingFaqs } from "./pricing-data";
import { PricingSectionHeading } from "./PricingSectionHeading";

export function PricingFaq() {
	return (
		<section className="py-16 sm:py-24">
			<Container>
				<PricingSectionHeading
					before="Frequently asked"
					highlight="questions"
				/>
				<Accordion
					type="single"
					collapsible
					className="mx-auto mt-10 w-full max-w-3xl rounded-2xl border border-border bg-card/50 px-6 shadow-sm backdrop-blur-sm dark:bg-card/30"
				>
					{pricingFaqs.map((faq, index) => (
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
