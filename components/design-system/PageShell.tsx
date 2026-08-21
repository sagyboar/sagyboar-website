import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Page wrapper — background layers live in SiteChrome so every route gets them */
export function PageShell({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div className={cn("sagy-page relative min-h-screen", className)}>
			{children}
		</div>
	);
}
