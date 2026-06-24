import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with the Sagyboar team for pricing, enterprise onboarding, partnerships, and support.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
