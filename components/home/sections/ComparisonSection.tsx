import {
	ScrollReveal,
	ScrollRevealItem,
} from "@/components/design-system/ScrollReveal";
import { SectionHeading } from "@/components/design-system/SectionHeading";
import {
	homeComparisonIntro,
	homeComparisonRows,
} from "@/components/home/data/home-content";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

const columns = [
	{ key: "sagyboar" as const, label: "Sagyboar", highlight: true },
	{ key: "heroku" as const, label: "Heroku", highlight: false },
	{ key: "renderRailway" as const, label: "Render / Railway", highlight: false },
];

function cellKind(value: string): "yes" | "no" | "text" {
	const normalized = value.trim().toLowerCase();
	if (normalized === "no") return "no";
	if (normalized.startsWith("yes") || normalized === "included") return "yes";
	return "text";
}

function CellContent({ value }: { value: string }) {
	const kind = cellKind(value);

	if (kind === "yes") {
		return (
			<span className="inline-flex items-center justify-center gap-1.5 font-sans text-sm font-medium text-emerald-600 dark:text-emerald-400">
				<Check className="size-4 shrink-0" strokeWidth={2} aria-hidden="true" />
				<span className="sr-only">Yes</span>
				{value}
			</span>
		);
	}

	if (kind === "no") {
		return (
			<span className="inline-flex items-center justify-center gap-1.5 font-sans text-sm text-sagy-muted">
				<X className="size-4 shrink-0" strokeWidth={2} aria-hidden="true" />
				<span className="sr-only">No</span>
				{value}
			</span>
		);
	}

	return (
		<span className="font-sans text-sm font-medium text-sagy-heading">{value}</span>
	);
}

/** GEO comparison table — Sagyboar vs Heroku vs Render/Railway */
export function ComparisonSection() {
	return (
		<ScrollReveal
			as="section"
			className="relative z-10 px-4 py-24 sm:px-6 sm:py-28"
			aria-label="How Sagyboar Compares"
			stagger
		>
			<div className="mx-auto max-w-6xl">
				<ScrollRevealItem>
					<SectionHeading
						eyebrow="COMPARE"
						title="How Sagyboar Compares"
						titleHighlight="Compares"
						align="center"
						className="mx-auto"
					/>
				</ScrollRevealItem>

				<ScrollRevealItem>
					<p className="mx-auto mt-6 max-w-3xl text-center font-sans text-base leading-relaxed text-sagy-body">
						{homeComparisonIntro}
					</p>
				</ScrollRevealItem>

				<ScrollRevealItem>
					<div className="sagy-spotlight mt-12 overflow-x-auto rounded-xl border border-sagy-border bg-sagy-surface shadow-sagy-card">
						<div className="min-w-[720px]">
							<div className="grid grid-cols-4 border-b border-sagy-border bg-sagy-heading/[0.02]">
								<div className="p-3 font-sans text-sm font-medium text-sagy-body sm:p-4">
									Feature
								</div>
								{columns.map((col) => (
									<div
										key={col.key}
										className={cn(
											"p-3 text-center font-sans text-sm font-semibold sm:p-4",
											col.highlight
												? "bg-sagy-accent/15 text-sagy-heading"
												: "text-sagy-heading",
										)}
									>
										{col.label}
									</div>
								))}
							</div>

							{homeComparisonRows.map((row) => (
								<div
									key={row.feature}
									className="grid grid-cols-4 border-b border-sagy-border last:border-b-0"
								>
									<div className="flex items-center p-3 font-sans text-sm font-medium text-sagy-heading sm:p-4">
										{row.feature}
									</div>
									{columns.map((col) => (
										<div
											key={col.key}
											className={cn(
												"flex items-center justify-center p-3 text-center sm:p-4",
												col.highlight && "bg-sagy-accent/10",
											)}
										>
											<CellContent value={row[col.key]} />
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</ScrollRevealItem>
			</div>
		</ScrollReveal>
	);
}
