"use client";

import { Container } from "@/components/Container";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { PricingSectionHeading } from "./PricingSectionHeading";
import { pricingFaqs } from "./pricing-data";

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
					className="mx-auto mt-10 w-full max-w-3xl sagy-spotlight rounded-xl border border-white/[0.08] bg-sagy-surface px-6 shadow-sagy-card"
				>
					{pricingFaqs.map((faq, index) => (
						<AccordionItem
							value={`${index}`}
							key={faq.question}
							className="border-white/[0.08]"
						>
							<AccordionTrigger className="text-left font-sans text-white hover:text-white hover:no-underline">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="font-sans text-sagy-body">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</Container>
		</section>
	);
}
