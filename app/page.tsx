import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Hero } from "@/components/Hero";
import { ProductDemoSection } from "@/components/ProductDemoSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { FirstFeaturesSection } from "@/components/first-features";
import { HeroTrustedBy } from "@/components/hero/hero-trusted-by";
import { SecondaryFeaturesSections } from "@/components/secondary-features";
import { StatsSection } from "@/components/stats";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { homeFaqJsonLd, pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.home);

export default function Home() {
	return (
		<div>
			<JsonLd data={homeFaqJsonLd} />
			<Hero />
			<ProductDemoSection />
			<HeroTrustedBy />
			<FirstFeaturesSection />
			<SecondaryFeaturesSections />
			<StatsSection />
			<TestimonialsSection />
			<Faqs />
			<CallToAction />
		</div>
	);
}
