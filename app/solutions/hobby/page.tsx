import { HobbySolution } from "@/components/solutions/HobbySolution";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sagyboar Hobby — Deploy Side Projects Without DevOps",
	description:
		"Managed hosting, AI monitoring, and community support for solo developers and MVPs. Sagyboar Hobby from $49/month.",
};

export default function HobbySolutionPage() {
	return <HobbySolution />;
}
