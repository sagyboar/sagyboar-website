"use client";

import { cn } from "@/lib/utils";
import { marketComparison } from "./pricing-data";

const columns = [
	{ key: "Sagyboar" as const, label: "Sagyboar", highlight: true },
	{ key: "others" as const, label: "Others", highlight: false },
	{ key: "hiringTeam" as const, label: "Hiring team", highlight: false },
];

const SagyboarHeaderClass =
	"bg-sagy-accent/15 text-sagy-heading dark:bg-sagy-accent/25";

const SagyboarCellClass =
	"bg-sagy-accent/10 text-sagy-heading dark:bg-sagy-accent/15 dark:text-sagy-heading";

function isPositiveValue(value: string) {
	const normalized = value.trim().toLowerCase();
	return (
		normalized === "yes" ||
		normalized === "✓" ||
		normalized.startsWith("✓") ||
		normalized.includes("included")
	);
}

export function MarketComparisonTable() {
	return (
		<div className="overflow-x-auto sagy-spotlight rounded-xl border border-sagy-border bg-sagy-surface shadow-sagy-card">
			<div className="min-w-[560px]">
				<div className="grid grid-cols-4 border-b border-sagy-border bg-sagy-heading/[0.02]">
					<div className="p-3 font-sans text-sm font-medium text-sagy-body">
						Feature
					</div>
					{columns.map((col) => (
						<div
							key={col.key}
							className={cn(
								"p-3 text-center font-sans text-sm font-semibold",
								col.highlight ? SagyboarHeaderClass : "text-foreground",
							)}
						>
							{col.label}
						</div>
					))}
				</div>
				{marketComparison.map((row, rowIndex) => (
					<div
						key={row.feature}
						className="grid grid-cols-4 border-b border-sagy-heading/6 last:border-b-0"
					>
						<div className="flex items-center p-3 font-sans text-sm font-medium text-sagy-heading transition-colors hover:bg-sagy-heading/[0.02]">
							{row.feature}
						</div>
						{columns.map((col) => {
							const value = row[col.key];
							const positive = isPositiveValue(value);

							return (
								<div
									key={col.key}
									className={cn(
										"flex items-center justify-center p-3 text-center font-sans text-sm transition-colors",
										col.highlight
											? cn(
													SagyboarCellClass,
													"font-medium",
													rowIndex === marketComparison.length - 1 &&
														"rounded-b-xl",
												)
											: "text-sagy-body hover:bg-sagy-heading/[0.02]",
										positive && "text-emerald-500 dark:text-emerald-400",
									)}
								>
									{value}
								</div>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
}
