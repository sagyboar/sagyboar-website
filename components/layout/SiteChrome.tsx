import { Footer } from "@/components/Footer";
import { CardMotionLayer } from "@/components/design-system/CardMotionLayer";
import { SiteNav } from "@/components/design-system/SiteNav";
import type { ReactNode } from "react";

/** Global chrome — shared nav + footer on every page */
export function SiteChrome({ children }: { children: ReactNode }) {
	return (
		<>
			<CardMotionLayer />
			<SiteNav />
			<main className="flex-1">{children}</main>
			<Footer />
		</>
	);
}
