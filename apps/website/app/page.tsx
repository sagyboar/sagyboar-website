import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { FirstFeaturesSection } from "@/components/first-features";
import { SecondaryFeaturesSections } from "@/components/secondary-features";
import { Sponsors } from "@/components/sponsors";
import { StatsSection } from "@/components/stats";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		absolute: "Sagyboar - One stop solution for your deployment",
	},
	description:
		"Deploy applications, manage databases, and monitor your infrastructure from a single platform.",
};

export default function Home() {
	return (
		<div>
			<main>
				<Hero />
				<FirstFeaturesSection />
				<SecondaryFeaturesSections />
				<StatsSection />
				<Testimonials />
				<Faqs />
				{/* <Sponsors /> */}
				<CallToAction />
			</main>
		</div>
	);
}
