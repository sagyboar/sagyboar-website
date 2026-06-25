"use client";

import { ImageIcon } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/Container";
import { PricingShaderWave } from "./pricing/PricingShaderWave";
import { ContactFormModal } from "./ContactFormModal";
import { MarketComparisonTable } from "./pricing/MarketComparisonTable";
import { PricingCta } from "./pricing/PricingCta";
import { PricingFaq } from "./pricing/PricingFaq";
import { PricingGeneralTerms } from "./pricing/PricingGeneralTerms";
import { PricingHeroStats } from "./pricing/PricingHeroStats";
import { PricingPlanFitGuide } from "./pricing/PricingPlanFitGuide";
import { PricingPlansGrid } from "./pricing/PricingPlansGrid";
import { PricingSectionHeading } from "./pricing/PricingSectionHeading";
import { PricingWhyChoose } from "./pricing/PricingWhyChoose";

export function Pricing() {
	const [openSalesModal, setOpenSalesModal] = useState(false);
	const [openHelpModal, setOpenHelpModal] = useState(false);

	return (
		<div className="min-h-screen bg-background">
			{/* Hero */}
			<section className="relative overflow-hidden border-b border-border bg-background pt-28 pb-16 sm:pt-32 sm:pb-24">
				<PricingShaderWave />
				<div
					aria-hidden
					className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-2/3 bg-gradient-to-r from-background via-background/90 to-transparent"
				/>

				<Container className="relative z-10">
					<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<div className="text-left">
							<p className="text-sm font-medium uppercase tracking-wider text-primary">
								Pricing
							</p>
							<h1 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
								One platform. <span className="border-b-2 border-blue-400 text-blue-400">Zero DevOps headaches.</span>
							</h1>
							<p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
								Deploy, monitor, and maintain your entire stack — with AI doing
								the heavy lifting and a real team backing you up.
							</p>

							<PricingHeroStats />
						</div>

						<div className="relative mx-auto w-full max-w-lg lg:max-w-none">
							<div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card/60 shadow-sm backdrop-blur-sm">
								<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-muted/20">
									<div className="flex size-14 items-center justify-center rounded-2xl border border-dashed border-border bg-background/80">
										<ImageIcon
											className="size-6 text-muted-foreground"
											aria-hidden
										/>
									</div>
									<p className="text-sm font-medium text-muted-foreground">
										Hero image placeholder
									</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Pricing plans */}
			<section
				id="pricing"
				aria-label="Pricing plans"
				className="py-16 sm:py-24"
			>
				<Container>
					<PricingSectionHeading
						before="Choose your"
						highlight="plan"
					/>

					<PricingPlansGrid onTalkToSales={() => setOpenSalesModal(true)} />

					<PricingGeneralTerms />
				</Container>
			</section>

			{/* Which plan is right for you */}
			<section className="py-16 sm:py-24">
				<Container>
					<PricingSectionHeading
						before="Which plan is right for"
						highlight="you?"
					/>
					<PricingPlanFitGuide />
				</Container>
			</section>

			{/* Market comparison */}
			<section className="py-16 sm:py-24">
				<Container>
					<PricingSectionHeading
						before="How we compare to the"
						highlight="market"
					/>
					<div className="mx-auto mt-10 max-w-7xl">
						<MarketComparisonTable />
					</div>
				</Container>
			</section>

			{/* Why choose Sagyboar */}
			<section className="overflow-hidden py-16 sm:py-24">
				<Container>
					<PricingWhyChoose />
				</Container>
			</section>

			<PricingFaq />

			<PricingCta
				onHelp={() => setOpenHelpModal(true)}
				onSales={() => setOpenSalesModal(true)}
			/>

			<ContactFormModal
				open={openSalesModal}
				onOpenChange={setOpenSalesModal}
				defaultInquiryType="sales"
			/>
			<ContactFormModal
				open={openHelpModal}
				onOpenChange={setOpenHelpModal}
				defaultInquiryType="other"
			/>
		</div>
	);
}
