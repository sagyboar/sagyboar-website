"use client";

import { Footer } from "@/components/Footer";
import { FREE_DEPLOY_LANDING_PATH } from "@/constants/free-deploy";
import { usePathname } from "next/navigation";

/** Hides the global footer on pages that render their own minimal footer. */
export function RouteAwareFooter() {
	const pathname = usePathname();
	if (pathname === FREE_DEPLOY_LANDING_PATH) return null;
	return <Footer />;
}
