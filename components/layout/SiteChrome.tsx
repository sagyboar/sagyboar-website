"use client";

import { AnnouncementBar } from "@/components/design-system/AnnouncementBar";
import { AnnouncementBarProvider } from "@/components/design-system/AnnouncementBarContext";
import { CardMotionLayer } from "@/components/design-system/CardMotionLayer";
import { PageBackground } from "@/components/design-system/PageBackground";
import { SiteNav } from "@/components/design-system/SiteNav";
import { SpiderwebLight } from "@/components/design-system/SpiderwebLight";
import { RouteAwareFooter } from "@/components/layout/RouteAwareFooter";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Global chrome — shared nav + footer + background; skipped on /studio */
export function SiteChrome({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const isStudio = pathname.startsWith("/studio");

	if (isStudio) {
		return <>{children}</>;
	}

	return (
		<AnnouncementBarProvider>
			<div className="relative min-h-full bg-sagy-bg">
				<PageBackground />
				<div className="relative z-10 flex min-h-full flex-col">
					<CardMotionLayer />
					<AnnouncementBar />
					<SiteNav />
					<main className="flex-1">{children}</main>
					<RouteAwareFooter />
				</div>
				<SpiderwebLight />
			</div>
		</AnnouncementBarProvider>
	);
}
