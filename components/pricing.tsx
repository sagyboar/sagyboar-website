"use client";

import clsx from "clsx";
import { ArrowUpRight, Check, Circle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container";
import { HeroParticleWave } from "@/components/hero/hero-particle-wave";
import { ContactFormModal } from "./ContactFormModal";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import { MarketComparisonTable } from "./pricing/MarketComparisonTable";
import {
	generalTerms,
	planFitGuide,
	pricingFaqs,
	pricingPlans,
	pricingStats,
	whyChooseSagyboar,
} from "./pricing/pricing-data";
import { SAGYBOAR_PORTAL_URL } from "@/constants/branding";

export function Pricing() {
	const [openSalesModal, setOpenSalesModal] = useState(false);
	const [openHelpModal, setOpenHelpModal] = useState(false);

	return (
		<div className="min-h-screen bg-background">
			{/* Hero */}
			<section className="relative overflow-hidden border-b border-border pt-28 pb-16 sm:pt-32 sm:pb-20">
				<HeroParticleWave />
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[58%] bg-gradient-to-b from-background via-background/95 to-transparent"
				/>
				<Container className="relative z-10">
					<div className="mx-auto max-w-4xl text-center">
						<h1 className="font-display text-3xl tracking-tight text-foreground sm:text-5xl">
							One platform. Zero DevOps headaches.
						</h1>
						<p className="mt-6 text-lg text-muted-foreground sm:text-xl">
							Deploy, monitor, and maintain your entire stack — with AI doing
							the heavy lifting and a real team backing you up.
						</p>
					</div>

					<div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
						{pricingStats.map((stat) => (
							<div
								key={stat.label}
								className="rounded-2xl border border-border bg-card/50 px-6 py-5 text-center shadow-sm backdrop-blur-sm"
							>
								<p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
									{stat.value}
								</p>
								<p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* Pricing plans */}
			<section
				id="pricing"
				aria-label="Pricing plans"
				className="border-b border-border py-16 sm:py-24"
			>
				<Container>
					<h2 className="text-center font-display text-2xl font-semibold text-foreground sm:text-3xl">
						Pricing plans
					</h2>

					<div className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-3">
						{pricingPlans.map((plan) => (
							<section
								key={plan.id}
								className={clsx(
									"relative flex flex-col rounded-3xl border-2 bg-card px-6 py-8",
									plan.recommended
										? "border-primary/50 shadow-md"
										: "border-dashed border-border",
								)}
							>
								{plan.recommended ? (
									<Badge className="absolute -top-2.5 left-6">
										Most popular
									</Badge>
								) : null}

								<h3 className="text-lg font-medium text-foreground">
									{plan.name}
								</h3>
								<p className="mt-1 text-sm text-muted-foreground">
									{plan.tagline}
								</p>

								<div className="mt-6">
									<span className="text-3xl font-semibold text-primary">
										${plan.price.toLocaleString()}
									</span>
									<span className="text-lg text-muted-foreground">/month</span>
								</div>

								<div className="mt-6">
									<p className="text-xs font-semibold uppercase tracking-wider text-foreground">
										Includes
									</p>
									<ul className="mt-3 flex flex-col gap-2.5 text-sm text-muted-foreground">
										{plan.includes.map((item) => (
											<li key={item} className="flex gap-2">
												<Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
												{item}
											</li>
										))}
									</ul>
								</div>

								{plan.fairUsage.length > 0 ? (
									<div className="mt-6 rounded-xl border border-border/70 bg-muted/20 p-4 dark:bg-muted/10">
										<p className="text-xs font-semibold uppercase tracking-wider text-foreground">
											Fair usage
										</p>
										<ul className="mt-3 flex flex-col gap-2 text-xs leading-relaxed text-muted-foreground">
											{plan.fairUsage.map((item) => (
												<li key={item} className="flex gap-2">
													<Circle className="mt-1.5 h-1.5 w-1.5 shrink-0 fill-muted-foreground text-muted-foreground" />
													{item}
												</li>
											))}
										</ul>
									</div>
								) : null}

								{"infrastructureBilling" in plan &&
								plan.infrastructureBilling.length > 0 ? (
									<div className="mt-4 rounded-xl border border-border/70 bg-muted/20 p-4 dark:bg-muted/10">
										<p className="text-xs font-semibold uppercase tracking-wider text-foreground">
											Infrastructure & billing
										</p>
										<ul className="mt-3 flex flex-col gap-2 text-xs leading-relaxed text-muted-foreground">
											{plan.infrastructureBilling.map((item) => (
												<li key={item} className="flex gap-2">
													<Circle className="mt-1.5 h-1.5 w-1.5 shrink-0 fill-muted-foreground text-muted-foreground" />
													{item}
												</li>
											))}
										</ul>
									</div>
								) : null}

								<div className="mt-auto pt-8">
									{plan.ctaHref ? (
										<Link
											href={SAGYBOAR_PORTAL_URL}
											target="_blank"
											className={buttonVariants({
												variant: plan.recommended ? "default" : "outline",
												className: "w-full gap-2",
											})}
										>
											{plan.cta}
											<ArrowUpRight className="h-4 w-4" />
										</Link>
									) : (
										<Button
											onClick={() => setOpenSalesModal(true)}
											className="w-full gap-2"
										>
											{plan.cta}
											<ArrowUpRight className="h-4 w-4" />
										</Button>
									)}
								</div>
							</section>
						))}
					</div>

					<div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
						<h3 className="text-center text-lg font-semibold text-foreground">
							General terms
						</h3>
						<ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
							{generalTerms.map((term) => (
								<li key={term} className="flex gap-2">
									<Circle className="mt-2 h-1.5 w-1.5 shrink-0 fill-primary text-primary" />
									{term}
								</li>
							))}
						</ul>
					</div>
				</Container>
			</section>

			{/* Which plan is right for you */}
			<section className="border-b border-border bg-muted/30 py-16 dark:bg-muted/10 sm:py-24">
				<Container>
					<h2 className="text-center font-display text-2xl font-semibold text-foreground sm:text-3xl">
						Which plan is right for you?
					</h2>

					<div className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-3">
						{planFitGuide.map((guide) => (
							<div
								key={guide.plan}
								className="rounded-2xl border border-border bg-card p-6 shadow-sm"
							>
								<h3 className="text-lg font-semibold text-foreground">
									{guide.plan}{" "}
									<span className="text-primary">{guide.price}</span>
								</h3>
								<p className="mt-4 text-sm font-medium text-foreground">
									{guide.audience}
								</p>
								<ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
									{guide.points.map((point) => (
										<li key={point} className="flex gap-2">
											<Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
											{point}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* Market comparison */}
			<section className="border-b border-border py-16 sm:py-24">
				<Container>
					<h2 className="text-center font-display text-2xl font-semibold text-foreground sm:text-3xl">
						How we compare to the market
					</h2>
					<div className="mx-auto mt-10 max-w-7xl">
						<MarketComparisonTable />
					</div>
				</Container>
			</section>

			{/* Why choose SAGYBOAR */}
			<section className="border-b border-border bg-muted/30 py-16 dark:bg-muted/10 sm:py-24">
				<Container>
					<h2 className="text-center font-display text-2xl font-semibold text-foreground sm:text-3xl">
						Why choose SAGYBOAR?
					</h2>

					<div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{whyChooseSagyboar.map((item) => (
							<div
								key={item.title}
								className="rounded-2xl border border-border bg-card p-6 shadow-sm"
							>
								<h3 className="text-base font-semibold text-foreground">
									{item.title}
								</h3>
								<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* FAQ */}
			<section className="py-16 sm:py-24">
				<Container>
					<h2 className="text-center font-display text-2xl font-semibold text-foreground sm:text-3xl">
						Frequently asked questions
					</h2>
					<Accordion
						type="single"
						collapsible
						className="mx-auto mt-10 w-full max-w-3xl rounded-2xl border border-border bg-card/50 px-6 shadow-sm backdrop-blur-sm dark:bg-card/30"
					>
						{pricingFaqs.map((faq, index) => (
							<AccordionItem
								value={`${index}`}
								key={faq.question}
								className="border-border"
							>
								<AccordionTrigger className="text-left text-foreground hover:text-foreground">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</Container>
			</section>

			{/* Bottom CTA */}
			<section className="border-t border-border bg-muted/30 py-16 dark:bg-muted/10 sm:py-20">
				<Container>
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
							Not sure which plan fits you?
						</h2>
						<p className="mt-4 text-muted-foreground">
							Talk to us. We&apos;ll look at your project and tell you exactly
							what you need — no upselling, no pressure.
						</p>
						<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
							<Button
								variant="outline"
								className="gap-2 rounded-full"
								onClick={() => setOpenHelpModal(true)}
							>
								Help me choose
								<ArrowUpRight className="h-4 w-4" />
							</Button>
							<Button
								className="gap-2 rounded-full"
								onClick={() => setOpenSalesModal(true)}
							>
								Talk to sales
								<ArrowUpRight className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</Container>
			</section>

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
