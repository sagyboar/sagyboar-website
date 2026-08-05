import { PageShell } from "@/components/design-system/PageShell";
import { DashboardShowcase } from "@/components/home/sections/DashboardShowcase";
import { FaqSection } from "@/components/home/sections/FaqSection";
import { FeaturesBento } from "@/components/home/sections/FeaturesBento";
import { FinalCta } from "@/components/home/sections/FinalCta";
import { HeroSection } from "@/components/home/sections/HeroSection";
import { HomeTestimonials } from "@/components/home/sections/HomeTestimonials";
import { PerformanceStats } from "@/components/home/sections/PerformanceStats";
import { PipelineSection } from "@/components/home/sections/PipelineSection";
import { TrustStrip } from "@/components/home/sections/TrustStrip";

/** Full redesigned Sagyboar homepage */
export function HomePage() {
	return (
		<PageShell>
			<HeroSection />
			<PipelineSection />
			<TrustStrip />
			<FeaturesBento />
			<DashboardShowcase />
			<PerformanceStats />
			<HomeTestimonials />
			<FaqSection />
			<FinalCta />
		</PageShell>
	);
}
