import { Pricing } from "@/components/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sagyboar Pricing — One Platform, Zero DevOps Headaches",
	description:
		"Compare Sagyboar Hobby, Startup, and Enterprise plans. AI-powered deployment, monitoring, and a real team — from $49/month.",
};

export default function PricingPage() {
	return (
		<div className="relative w-full">
			<Pricing />
		</div>
	);
}
