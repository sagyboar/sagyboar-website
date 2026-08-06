"use client";

import {
	ScrollReveal,
	ScrollRevealItem,
} from "@/components/design-system/ScrollReveal";
import { SectionHeading } from "@/components/design-system/SectionHeading";
import { useReducedMotion } from "@/components/design-system/useReducedMotion";
import { homeFaqItems } from "@/components/home/data/home-content";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function FaqItem({
	question,
	answer,
	isOpen,
	onToggle,
}: {
	question: string;
	answer: string;
	isOpen: boolean;
	onToggle: () => void;
}) {
	const reducedMotion = useReducedMotion();

	return (
		<div className="border-b border-sagy-border last:border-b-0">
			<button
				type="button"
				onClick={onToggle}
				className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent"
				aria-expanded={isOpen}
			>
				<span className="font-sans text-sm font-medium text-sagy-heading sm:text-base">
					{question}
				</span>
				<span
					className={cn(
						"flex size-6 shrink-0 items-center justify-center font-mono text-lg text-sagy-muted transition-transform duration-300",
						isOpen && "rotate-45",
					)}
					aria-hidden="true"
				>
					+
				</span>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={reducedMotion ? false : { height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
						className="overflow-hidden"
					>
						<p className="pb-5 font-sans text-sm leading-relaxed text-sagy-body">
							{answer}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export function FaqSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<ScrollReveal
			as="section"
			className="relative z-10 px-4 py-24 sm:px-6 sm:py-28"
			aria-label="FAQ"
			stagger
		>
			<div className="mx-auto max-w-3xl">
				<ScrollRevealItem>
					<SectionHeading
						eyebrow="FAQ"
						title="Frequently asked questions"
						titleHighlight="questions"
						align="center"
						className="mx-auto mb-12"
					/>
				</ScrollRevealItem>

				<ScrollRevealItem>
					<div className="sagy-spotlight rounded-xl border border-sagy-border bg-sagy-surface px-5 sm:px-6">
						{homeFaqItems.map((item, i) => (
							<FaqItem
								key={item.question}
								question={item.question}
								answer={item.answer}
								isOpen={openIndex === i}
								onToggle={() => setOpenIndex(openIndex === i ? null : i)}
							/>
						))}
					</div>
				</ScrollRevealItem>
			</div>
		</ScrollReveal>
	);
}
