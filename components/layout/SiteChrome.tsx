"use client";

import { AnnouncementBar } from "@/components/design-system/AnnouncementBar";
import { AnnouncementBarProvider } from "@/components/design-system/AnnouncementBarContext";
import { CardMotionLayer } from "@/components/design-system/CardMotionLayer";
import { SiteNav } from "@/components/design-system/SiteNav";
import { RouteAwareFooter } from "@/components/layout/RouteAwareFooter";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Global chrome — shared nav + footer; skipped on /studio */
export function SiteChrome({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const isStudio = pathname.startsWith("/studio");

	if (isStudio) {
		return <>{children}</>;
	}

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
