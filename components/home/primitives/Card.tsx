"use client";

import { cn } from "@/lib/utils";
import type { MouseEvent, ReactNode } from "react";
import { useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

type CardProps = {
	children: ReactNode;
	className?: string;
	spotlight?: boolean;
	accent?: boolean;
};

/** Card with optional cursor-following spotlight glow */
export function Card({
	children,
	className,
	spotlight = true,
	accent = false,
}: CardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);
	const reducedMotion = useReducedMotion();

	function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
		if (!ref.current || reducedMotion) return;
		const rect = ref.current.getBoundingClientRect();
		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	}

	return (
		<div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={cn(
				"relative overflow-hidden rounded-xl border border-sagy-border bg-sagy-surface p-6 shadow-sagy-card transition-colors duration-300",
				accent && "border-sagy-accent/30",
				className,
			)}
		>
			{spotlight && !reducedMotion && (
				<div
					className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
					style={{ opacity: isHovered ? 1 : 0 }}
					aria-hidden="true"
				>
					<div
						className="absolute size-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full"
						style={{
							left: position.x,
							top: position.y,
							background:
								"radial-gradient(circle, rgba(61, 38, 26, 0.12) 0%, transparent 70%)",
						}}
					/>
				</div>
			)}
			<div className="relative z-10">{children}</div>
		</div>
	);
}
