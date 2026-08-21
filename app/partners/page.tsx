import { PartnersAudience } from "@/components/partners/PartnersAudience";
import { PartnersBenefits } from "@/components/partners/PartnersBenefits";
import { PartnersHero } from "@/components/partners/PartnersHero";
import { PartnersModels } from "@/components/partners/PartnersModels";
import { PartnersStats } from "@/components/partners/PartnersStats";
import { partnerCta } from "@/components/partners/partners-data";
import { FinalCTA, PageShell } from "@/components/ui/sagy";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.partners);

export default function PartnersPage() {
	return (
		<PageShell>
			<PartnersHero />
			<PartnersStats />
			<PartnersAudience />
			<PartnersModels />
			<PartnersBenefits />
			<FinalCTA
				id="apply"
				title={partnerCta.title}
				titleHighlight={partnerCta.titleHighlight}
				subline={partnerCta.subline}
				primaryCta={partnerCta.primaryCta}
				secondaryCta={partnerCta.secondaryCta}
				className="scroll-mt-28 pb-24"
			/>
		</PageShell>
	);
}
