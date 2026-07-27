import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { homeFaqs } from "@/constants/home-faqs";
import { Container } from "./Container";

export function Faqs() {
	return (
		<section
			id="faqs"
			aria-labelledby="faq-title"
			className="bg-background py-16 sm:py-20"
		>
			<Container className="flex flex-col gap-10">
				<div className="mx-auto w-full justify-center lg:mx-0">
					<h2
						id="faq-title"
						className="text-center font-display text-3xl tracking-tight text-foreground sm:text-4xl"
					>
						Frequently asked{" "}
						<span className="text-blue-400 border-b-2 border-blue-400">
							questions
						</span>
					</h2>
					<p className="mt-4 text-center text-lg tracking-tight text-muted-foreground">
						If you can't find what you're looking for, please submit an issue
						through our GitHub repository or ask questions on our Discord.
					</p>
				</div>

				<Accordion
					type="single"
					collapsible
					className="mx-auto w-full max-w-3xl rounded-2xl border border-border bg-card/50 px-6 shadow-sm backdrop-blur-sm dark:bg-card/30"
				>
					{homeFaqs.map((faq, columnIndex) => (
						<AccordionItem
							value={`${columnIndex}`}
							key={faq.question}
							className="border-border"
						>
							<AccordionTrigger className="text-left text-foreground hover:text-foreground">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</Container>
		</section>
	);
}
