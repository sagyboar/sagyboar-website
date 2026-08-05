"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import type { MouseEvent, ReactNode, RefObject } from "react";
import { useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

type GlowButtonProps = {
	children: ReactNode;
	href?: string;
	onClick?: () => void;
	className?: string;
	variant?: "primary" | "ghost";
	external?: boolean;
};

/** Magnetic indigo primary CTA */
export function GlowButton({
	children,
	href,
	onClick,
	className,
	variant = "primary",
	external,
}: GlowButtonProps) {
	const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const reducedMotion = useReducedMotion();

	function handleMouseMove(e: MouseEvent) {
		if (!ref.current || reducedMotion) return;
		const rect = ref.current.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		setOffset({ x: x * 0.15, y: y * 0.15 });
	}

	function handleMouseLeave() {
		setOffset({ x: 0, y: 0 });
	}

	const baseClass = cn(
		"relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-mono text-xs uppercase tracking-wider transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent",
		variant === "primary" &&
			"bg-sagy-accent text-white shadow-sagy-glow hover:brightness-110",
		variant === "ghost" &&
			"border border-white/[0.08] bg-white/[0.04] text-white hover:border-white/[0.15] hover:bg-white/[0.06]",
		className,
	);

	const style = reducedMotion
		? undefined
		: { transform: `translate(${offset.x}px, ${offset.y}px)` };

	if (href) {
		return (
			<Link
				ref={ref as RefObject<HTMLAnchorElement>}
				href={href}
				target={external ? "_blank" : undefined}
				rel={external ? "noopener noreferrer" : undefined}
				className={baseClass}
				style={style}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
			>
				{children}
			</Link>
		);
	}

	return (
		<button
			ref={ref as RefObject<HTMLButtonElement>}
			type="button"
			onClick={onClick}
			className={baseClass}
			style={style}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</button>
	);
}
