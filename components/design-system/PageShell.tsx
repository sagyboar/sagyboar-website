import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { PageBackground } from "./PageBackground";

/** Dark page wrapper with shared background layers */
export function PageShell({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div className={cn("sagy-page relative min-h-screen", className)}>
			<PageBackground />
			<div className="relative z-10">{children}</div>
		</div>
	);
}
