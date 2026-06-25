import type { ReactNode } from "react";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.contact);

export default function ContactLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
