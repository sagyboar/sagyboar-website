import { EnterpriseSolution } from "@/components/solutions/EnterpriseSolution";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sagyboar Enterprise — Dedicated Infrastructure & Platform Team",
	description:
		"SLA-backed uptime, dedicated cloud infrastructure, and a fully managed DevOps team. Sagyboar Enterprise from $1,499/month.",
};

export default function EnterpriseSolutionPage() {
	return <EnterpriseSolution />;
}
