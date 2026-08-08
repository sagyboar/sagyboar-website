import { AnnouncementBar } from "@/components/design-system/AnnouncementBar";
import { AnnouncementBarProvider } from "@/components/design-system/AnnouncementBarContext";
import { CardMotionLayer } from "@/components/design-system/CardMotionLayer";
import { SiteNav } from "@/components/design-system/SiteNav";
import { RouteAwareFooter } from "@/components/layout/RouteAwareFooter";
import type { ReactNode } from "react";

/** Global chrome — shared nav + footer on every page */
export function SiteChrome({ children }: { children: ReactNode }) {
	return (
		<AnnouncementBarProvider>
			<CardMotionLayer />
			<AnnouncementBar />
			<SiteNav />
			<main className="flex-1">{children}</main>
			<RouteAwareFooter />
		</AnnouncementBarProvider>
	);
}
