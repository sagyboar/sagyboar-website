import type { FeatureBadge as FeatureBadgeType } from "./features-data";

const BADGE_STYLES: Record<FeatureBadgeType, string> = {
	CORE: "border-border bg-muted/40 text-muted-foreground",
	AI: "border-blue-400/40 bg-blue-400/10 text-blue-500 dark:text-blue-300",
	MANAGED:
		"border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
	NEW: "border-violet-500/40 bg-violet-500/10 text-violet-600 dark:text-violet-300",
};

const BADGE_LABELS: Record<FeatureBadgeType, string> = {
	CORE: "Core",
	AI: "AI",
	MANAGED: "Managed",
	NEW: "New",
};

export function FeatureBadge({ badge }: { badge: FeatureBadgeType }) {
	return (
		<span
			className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${BADGE_STYLES[badge]}`}
		>
			{BADGE_LABELS[badge]}
		</span>
	);
}
