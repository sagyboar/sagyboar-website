"use client";

import { FinalCTA } from "@/components/ui/sagy";

type PricingCtaProps = {
	onHelp: () => void;
	onSales: () => void;
};

export function PricingCta({ onHelp, onSales }: PricingCtaProps) {
	return (
		<FinalCTA
			title="Not sure which plan fits you?"
			titleHighlight="fits you?"
			subline="Talk to us. We'll look at your project and tell you exactly what you need — no upselling, no pressure."
			primaryCta={{ label: "Talk to sales", onClick: onSales }}
			secondaryCta={{ label: "Help me choose", onClick: onHelp }}
		/>
	);
}
