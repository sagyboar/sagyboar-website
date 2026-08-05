import { Pricing } from "@/components/pricing";
import { pricingFaqs } from "@/components/pricing/pricing-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageSeo } from "@/constants/seo-data";
import { buildFaqJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.pricing);

const pricingFaqJsonLd = buildFaqJsonLd(pricingFaqs);

export default function PricingPage() {
	return (
		<div className="relative w-full">
			<JsonLd data={pricingFaqJsonLd} />
			<Pricing />
		</div>
	);
}
