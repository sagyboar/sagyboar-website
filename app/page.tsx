import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Hero } from "@/components/Hero";
import { FirstFeaturesSection } from "@/components/first-features";
import { SecondaryFeaturesSections } from "@/components/secondary-features";
import { StatsSection } from "@/components/stats";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.home);

export default function Home() {
	return (
		<div>
			<Hero />
			<FirstFeaturesSection />
			<SecondaryFeaturesSections />
			<StatsSection />
			<Faqs />
			<CallToAction />
		</div>
	);
}
