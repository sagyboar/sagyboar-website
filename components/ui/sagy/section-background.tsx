import { cn } from "@/lib/utils";
import { DottedGrid } from "./dotted-grid";
import { Grain } from "./grain";

type SectionBackgroundProps = {
	className?: string;
	/** fixed = viewport-attached (page shell), absolute = per-section */
	variant?: "fixed" | "absolute";
};

/** Grain + dotted grid + one restrained radial glow */
export function SectionBackground({
	className,
	variant = "absolute",
}: SectionBackgroundProps) {
	return (
		<div
			aria-hidden="true"
			className={cn(
				"pointer-events-none inset-0 z-0 overflow-hidden",
				variant === "fixed" ? "fixed" : "absolute",
				className,
			)}
		>
			<DottedGrid />
			<div className="sagy-radial-glow" />
			<Grain />
		</div>
	);
}
