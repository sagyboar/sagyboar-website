"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { PricingShaderWave } from "./pricing/PricingShaderWave";
import { ContactFormModal } from "./ContactFormModal";
import { MarketComparisonTable } from "./pricing/MarketComparisonTable";
import { PricingCta } from "./pricing/PricingCta";
import { PricingFaq } from "./pricing/PricingFaq";
import { PricingGeneralTerms } from "./pricing/PricingGeneralTerms";
import { PricingHeroGraphic } from "./pricing/PricingHeroGraphic";
import { PricingHeroStats } from "./pricing/PricingHeroStats";
import { PricingIdealCustomers } from "./pricing/PricingIdealCustomers";
import { PricingModel } from "./pricing/PricingModel";
import { PricingPlanFitGuide } from "./pricing/PricingPlanFitGuide";
import { PricingPlansGrid } from "./pricing/PricingPlansGrid";
import { PricingSectionHeading } from "./pricing/PricingSectionHeading";
import { PricingWhyChoose } from "./pricing/PricingWhyChoose";
import { businessModelTagline } from "./pricing/pricing-data";

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
								Automate with AI, scale with a shared DevOps team, and run on
								your own cloud. You pay for the platform and the people — not
								our infrastructure.
							</p>

							<PricingHeroStats />
						</div>

						<div className="relative mx-auto w-full max-w-lg lg:max-w-none">
							<div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card/60 shadow-sm backdrop-blur-sm">
								<PricingHeroGraphic className="absolute inset-0 p-4 sm:p-6" />
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Core business model — one line */}
			<section aria-label="Business model" className="border-b border-border bg-muted/20">
				<Container>
					<p className="mx-auto max-w-4xl py-10 text-center font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
						&ldquo;{businessModelTagline}&rdquo;
					</p>
				</Container>
			</section>

			{/* BYOC + shared DevOps model */}
			<section aria-label="How our model works" className="py-16 sm:py-24">
				<Container>
					<PricingModel />
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

			{/* Ideal customer profile */}
			<section className="py-16 sm:py-24">
				<Container>
					<PricingIdealCustomers />
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
