"use client";

import { marketComparison } from "./pricing-data";

const columns = [
	{ key: "sagyboar", label: "SAGYBOAR", highlight: true },
	{ key: "render", label: "Render", highlight: false },
	{ key: "railway", label: "Railway", highlight: false },
	{ key: "coolify", label: "Coolify", highlight: false },
	{ key: "hiringTeam", label: "Hiring team", highlight: false },
	{ key: "heroku", label: "Heroku", highlight: false },
] as const;

export function MarketComparisonTable() {
	return (
		<div className="overflow-x-auto rounded-2xl border border-border bg-card/50 shadow-sm">
			<div className="min-w-[900px]">
				<div className="grid grid-cols-7 border-b border-border bg-muted/20">
					<div className="p-3 text-sm font-medium text-muted-foreground">
						Feature
					</div>
					{columns.map((col) => (
						<div
							key={col.key}
							className={`p-3 text-center text-sm font-semibold ${
								col.highlight ? "text-primary" : "text-foreground"
							}`}
						>
							{col.label}
						</div>
					))}
				</div>
				{marketComparison.map((row) => (
					<div
						key={row.feature}
						className="grid grid-cols-7 border-b border-border/50 last:border-b-0 hover:bg-muted/5"
					>
						<div className="flex items-center p-3 text-sm font-medium text-foreground">
							{row.feature}
						</div>
						{columns.map((col) => (
							<div
								key={col.key}
								className={`flex items-center justify-center p-3 text-center text-sm ${
									col.highlight
										? "font-medium text-primary"
										: "text-muted-foreground"
								}`}
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
