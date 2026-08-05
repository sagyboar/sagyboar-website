import { FinalCTA } from "@/components/ui/sagy";

export function AboutCta() {
	return (
		<FinalCTA
			title="Want to be part of the next chapter?"
			titleHighlight="next chapter?"
			subline="Explore open roles or get in touch — we're always happy to talk about where Sagyboar is headed."
			primaryCta={{ label: "See open positions", href: "/jobs" }}
			secondaryCta={{ label: "Contact us", href: "/contact" }}
		/>
	);
}
