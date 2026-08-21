import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Studio",
	robots: {
		index: false,
		follow: false,
	},
};

export default function StudioLayout({ children }: { children: ReactNode }) {
	return (
		<div className="fixed inset-0 z-[100] h-dvh w-screen overflow-hidden bg-white">
			{children}
		</div>
	);
}
