"use client";

import {
	ANNOUNCEMENT_BAR_TEXT,
	FREE_DEPLOY_LANDING_PATH,
} from "@/constants/free-deploy";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	ANNOUNCEMENT_BAR_HEIGHT_PX,
	useAnnouncementBar,
} from "./AnnouncementBarContext";

export function AnnouncementBar() {
	const pathname = usePathname();
	const { visible, dismiss } = useAnnouncementBar();

	if (!visible || pathname === FREE_DEPLOY_LANDING_PATH) {
		return null;
	}

	return (
		<div
			className="fixed inset-x-0 top-0 z-[60] flex items-center justify-center border-b border-white/10 bg-gradient-to-r from-blue-600/95 via-indigo-600/95 to-purple-600/95 px-10 backdrop-blur-sm"
			style={{ height: ANNOUNCEMENT_BAR_HEIGHT_PX }}
			role="region"
			aria-label="Promotional announcement"
		>
			<Link
				href={FREE_DEPLOY_LANDING_PATH}
				className={cn(
					"absolute inset-0 flex items-center justify-center px-10 text-center",
					"text-[11px] font-medium leading-tight text-white/95 transition-opacity hover:text-white sm:text-xs",
				)}
			>
				<span className="truncate">{ANNOUNCEMENT_BAR_TEXT}</span>
			</Link>

			<button
				type="button"
				onClick={(event) => {
					event.preventDefault();
					event.stopPropagation();
					dismiss();
				}}
				className={cn(
					"absolute right-2 top-1/2 z-10 -translate-y-1/2",
					"inline-flex size-7 items-center justify-center rounded-md",
					"text-white/80 transition-colors hover:bg-white/10 hover:text-white",
					"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
				)}
				aria-label="Dismiss announcement"
			>
				<X className="size-3.5" aria-hidden="true" />
			</button>
		</div>
	);
}
