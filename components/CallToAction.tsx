import { FinalCTA } from "@/components/ui/sagy";
import { Sagyboar_PORTAL_URL } from "@/constants/branding";

export function CallToAction() {
	return (
		<FinalCTA
			title="Stop managing infrastructure. Start shipping."
			titleHighlight="Start shipping."
			subline="Let our embedded AI handle the configurations, monitoring, and ticketing. Deploy to our fully managed servers in minutes, and let our dedicated engineering squad maintain the engine while your team focuses purely on building the product."
			primaryCta={{
				label: "Deploy Your First App",
				href: Sagyboar_PORTAL_URL,
				external: true,
			}}
			id="get-started-today"
			className="scroll-mt-24"
		/>
	);
}
