"use client";

import { type Variants, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "./useReducedMotion";

const containerVariants: Variants = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.08, delayChildren: 0.05 },
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
	},
};

type ScrollRevealProps = {
	children: ReactNode;
	className?: string;
	as?: "section" | "div";
	id?: string;
	"aria-label"?: string;
	stagger?: boolean;
};

export function ScrollReveal({
	children,
	className,
	as = "section",
	id,
	"aria-label": ariaLabel,
	stagger = false,
}: ScrollRevealProps) {
	const reducedMotion = useReducedMotion();
	const Component = motion[as];

	if (reducedMotion) {
		const Tag = as;
		return (
			<Tag id={id} aria-label={ariaLabel} className={className}>
				{children}
			</Tag>
		);
	}

	return (
		<Component
			id={id}
			aria-label={ariaLabel}
			className={className}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-80px" }}
			variants={stagger ? containerVariants : itemVariants}
		>
			{stagger ? children : children}
		</Component>
	);
}

export function ScrollRevealItem({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	const reducedMotion = useReducedMotion();

	if (reducedMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div className={className} variants={itemVariants}>
			{children}
		</motion.div>
	);
}
