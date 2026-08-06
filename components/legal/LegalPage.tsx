import { PageShell, SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Shared shell for long-form legal documents. Body copy keeps its own semantic
 * markup — everything below is styled from here via descendant selectors so the
 * documents themselves stay free of presentation classes.
 */
const proseTokens = [
	"font-sans text-sagy-body",
	"[&_h2]:scroll-mt-28 [&_h2]:font-display [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:text-sagy-heading",
	"[&_h3]:font-sans [&_h3]:text-sagy-heading",
	"[&_h4]:font-sans [&_h4]:text-sagy-heading",
	"[&_p]:leading-relaxed",
	"[&_li]:leading-relaxed [&_li]:marker:text-sagy-muted",
	"[&_strong]:font-medium [&_strong]:text-sagy-heading",
	"[&_a]:text-sagy-accent [&_a]:underline-offset-4 [&_a:hover]:underline",
	"[&_table]:w-full [&_th]:px-4 [&_th]:py-3 [&_th]:text-sagy-heading [&_td]:px-4 [&_td]:py-3",
];

type LegalPageProps = {
	eyebrow?: string;
	title: string;
	titleHighlight?: string;
	updated?: string;
	children: ReactNode;
};

export function LegalPage({
	eyebrow = "Legal",
	title,
	titleHighlight,
	updated,
	children,
}: LegalPageProps) {
	return (
		<PageShell>
			<section
				className="border-b border-sagy-border pt-20 pb-12 sm:pt-24 sm:pb-16"
				aria-label="Document header"
			>
				<div className="mx-auto max-w-4xl px-4 sm:px-6">
					<SectionHeading
						eyebrow={eyebrow}
						title={title}
						titleHighlight={titleHighlight}
						align="center"
						as="h1"
						className="mx-auto"
					/>
					{updated && (
						<p className="mt-6 text-center font-mono text-[11px] uppercase tracking-wider text-sagy-muted">
							{updated}
						</p>
					)}
				</div>
			</section>

			<section className={cn(spacing.sectionY, "pb-24")}>
				<div className="mx-auto max-w-4xl px-4 sm:px-6">
					<article
						className={cn(
							"flex w-full flex-col gap-6 rounded-xl border border-sagy-border bg-sagy-surface p-6 shadow-sagy-card sm:p-10",
							proseTokens,
						)}
					>
						{children}
					</article>
				</div>
			</section>
		</PageShell>
	);
}
