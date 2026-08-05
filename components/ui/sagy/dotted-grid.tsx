import { cn } from "@/lib/utils";

/** Faint dotted grid overlay — dot color driven by --sagy-grid-dot */
export function DottedGrid({ className }: { className?: string }) {
	return (
		<div aria-hidden="true" className={cn("sagy-grid-overlay", className)} />
	);
}
