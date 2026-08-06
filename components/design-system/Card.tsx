import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CardProps = {
	children: ReactNode;
	className?: string;
	spotlight?: boolean;
	tilt?: boolean;
	accent?: boolean;
};

/**
 * Card with the shared cursor-following spotlight glow and optional lean toward
 * the cursor. Both effects are driven by classes plus the global CardMotionLayer
 * listener, so this stays a server component.
 */
export function Card({
	children,
	className,
	spotlight = true,
	tilt = false,
	accent = false,
}: CardProps) {
	return (
		<div
			className={cn(
				"relative overflow-hidden rounded-xl border border-sagy-border bg-sagy-surface p-6 shadow-sagy-card transition-colors duration-300",
				spotlight && "sagy-spotlight",
				tilt && "sagy-tilt",
				accent && "border-sagy-accent/30",
				className,
			)}
		>
			<div className="relative z-10">{children}</div>
		</div>
	);
}
