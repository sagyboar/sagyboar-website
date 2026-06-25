import { Pricing } from "@/components/pricing";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.pricing);

export default function PricingPage() {
	return (
		<div className="relative w-full">
			<Pricing />
		</div>
	);
}
