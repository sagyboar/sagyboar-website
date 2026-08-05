import { CtaPanel } from "@/components/design-system/CtaPanel";
import { finalCta } from "@/components/home/data/home-content";
import { Sagyboar_PORTAL_URL } from "@/constants/branding";

export function FinalCta() {
	return (
		<CtaPanel
			title={finalCta.headline.split("SHIPPING.")[0] + "SHIPPING."}
			titleHighlight="SHIPPING."
			subline={finalCta.subline}
			primaryCta={{
				label: finalCta.cta,
				href: Sagyboar_PORTAL_URL,
				external: true,
			}}
		/>
	);
}
