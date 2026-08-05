import { cn } from "@/lib/utils";

/** Fine film grain overlay — opacity driven by --sagy-grain-opacity */
export function Grain({ className }: { className?: string }) {
	return (
		<div aria-hidden="true" className={cn("sagy-grain-overlay", className)} />
	);
}
