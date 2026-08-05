import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BrowserFrameProps = {
	title: string;
	children: ReactNode;
	className?: string;
	contentClassName?: string;
};

/** macOS-style browser window with traffic-light dots */
export function BrowserFrame({
	title,
	children,
	className,
	contentClassName,
}: BrowserFrameProps) {
	return (
		<div
			className={cn(
				"overflow-hidden rounded-xl border border-white/[0.08] bg-sagy-surface shadow-sagy-soft",
				className,
			)}
		>
			<div className="flex items-center gap-3 border-b border-white/[0.08] bg-sagy-surface-elevated px-4 py-3">
				<div className="flex items-center gap-1.5" aria-hidden="true">
					<span className="size-2.5 rounded-full bg-[#FF5F57]" />
					<span className="size-2.5 rounded-full bg-[#FEBC2E]" />
					<span className="size-2.5 rounded-full bg-[#28C840]" />
				</div>
				<p className="flex-1 truncate text-center font-mono text-[11px] uppercase tracking-wider text-sagy-muted">
					{title}
				</p>
				<div className="w-12" aria-hidden="true" />
			</div>
			<div className={cn("relative", contentClassName)}>{children}</div>
		</div>
	);
}
