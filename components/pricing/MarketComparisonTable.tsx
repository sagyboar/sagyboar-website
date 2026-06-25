"use client";

import { cn } from "@/lib/utils";
import { marketComparison } from "./pricing-data";

const columns = [
	{ key: "Sagyboar" as const, label: "Sagyboar", highlight: true },
	{ key: "others" as const, label: "Others", highlight: false },
	{ key: "hiringTeam" as const, label: "Hiring team", highlight: false },
];

const SagyboarHeaderClass =
	"bg-emerald-500/15 text-emerald-950 dark:bg-emerald-500/25 dark:text-emerald-50";

const SagyboarCellClass =
	"bg-emerald-500/10 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100";

export function MarketComparisonTable() {
	return (
		<div className="overflow-x-auto rounded-2xl border border-border bg-card/50 shadow-sm">
			<div className="min-w-[560px]">
				<div className="grid grid-cols-4 border-b border-border bg-muted/20">
					<div className="p-3 text-sm font-medium text-muted-foreground">
						Feature
					</div>
					{columns.map((col) => (
						<div
							key={col.key}
							className={cn(
								"p-3 text-center text-sm font-semibold",
								col.highlight
									? SagyboarHeaderClass
									: "text-foreground",
							)}
						>
							{col.label}
						</div>
					))}
				</div>
				{marketComparison.map((row, rowIndex) => (
					<div
						key={row.feature}
						className="grid grid-cols-4 border-b border-border/50 last:border-b-0"
					>
						<div className="flex items-center p-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/5">
							{row.feature}
						</div>
						{columns.map((col) => (
							<div
								key={col.key}
								className={cn(
									"flex items-center justify-center p-3 text-center text-sm transition-colors",
									col.highlight
										? cn(
												SagyboarCellClass,
												"font-medium",
												rowIndex === marketComparison.length - 1 &&
													"rounded-b-2xl",
											)
										: "text-muted-foreground hover:bg-muted/5",
								)}
							>
								{row[col.key]}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
