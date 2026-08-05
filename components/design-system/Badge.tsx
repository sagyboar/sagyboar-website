import { type BadgeVariant, badgeVariants } from "@/lib/tokens";
import { cn } from "@/lib/utils";

const BADGE_LABELS: Record<BadgeVariant, string> = {
	CORE: "Core",
	AI: "AI",
	MANAGED: "Managed",
	NEW: "New",
};

type BadgeProps = {
	variant: BadgeVariant;
	className?: string;
};

/** Feature badge — CORE neutral, AI/NEW indigo, MANAGED green */
export function Badge({ variant, className }: BadgeProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
				badgeVariants[variant],
				className,
			)}
		>
			{BADGE_LABELS[variant]}
		</span>
	);
}
