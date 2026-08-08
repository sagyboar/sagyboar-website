import { Card } from "@/components/design-system/Card";
import {
	ScrollReveal,
	ScrollRevealItem,
} from "@/components/design-system/ScrollReveal";
import { FreeDeployFooter } from "@/components/free-deploy/FreeDeployFooter";
import { FreeDeployHeroVisual } from "@/components/free-deploy/FreeDeployHeroVisual";
import { FreeDeployLeadForm } from "@/components/free-deploy/FreeDeployLeadForm";
import { FreeDeploySocialProof } from "@/components/free-deploy/FreeDeploySocialProof";
import { GlowButton, PageShell, SectionHeading } from "@/components/ui/sagy";
import {
	FREE_DEPLOY_POST_OFFER_PRICE,
} from "@/constants/free-deploy";
import { cn } from "@/lib/utils";
import {
	Bot,
	Clock,
	MousePointerClick,
	Rocket,
	Sparkles,
	Wrench,
} from "lucide-react";

/** Consistent vertical rhythm across all free-deploy sections */
const SECTION_PY = "py-20 sm:py-24";
const HERO_PY = "py-16 sm:py-20";
const CARD_HOVER =
	"h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-sagy-soft";

const FEATURES = [
	{
		icon: MousePointerClick,
		title: "1-click deploy",
		description: "Static, SPA & WordPress supported.",
	},
	{
		icon: Bot,
		title: "AI monitoring included",
		description: "Logs, health checks, alerts.",
	},
	{
		icon: Clock,
		title: "3 months free",
		description: "Full managed hosting on us.",
	},
	{
		icon: Sparkles,
		title: "Zero setup",
		description: "Connect and go live in minutes.",
	},
] as const;

const STEPS = [
	{
		step: "01",
		title: "Claim your free slot",
		description: "Enter your email — no credit card required.",
	},
	{
		step: "02",
		title: "Connect your repo or upload your site",
		description: "Static, SPA, or WordPress — we handle the rest.",
	},
	{
		step: "03",
		title: "Go live — we monitor it 24/7",
		description: "AI monitoring, health checks, and alerts from day one.",
	},
] as const;

export function FreeDeployPage() {
	return (
		<PageShell>
			{/* Hero */}
			<ScrollReveal
				as="section"
				id="claim-slot"
				className={cn(
					"relative border-b border-sagy-border scroll-mt-28",
					HERO_PY,
				)}
				aria-label="Free deployment offer"
				stagger
			>
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
						<div className="text-center lg:text-left">
							<ScrollRevealItem>
								<p className="inline-flex items-center gap-2 rounded-full border border-sagy-border bg-sagy-heading/[0.04] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-sagy-body">
									<Rocket
										className="size-3.5 text-sagy-accent"
										strokeWidth={1.75}
										aria-hidden="true"
									/>
									Limited offer
								</p>
							</ScrollRevealItem>

							<ScrollRevealItem>
								<SectionHeading
									title="Deploy your site free — for 3 months"
									titleHighlight="free"
									subline="Static, SPA, or WordPress. One-click deploy with AI monitoring built in. Zero setup hassle."
									align="center"
									as="h1"
									size="hero"
									className="mx-auto mt-5 lg:mx-0 lg:text-left [&_p]:lg:mx-0"
								/>
							</ScrollRevealItem>

							<ScrollRevealItem>
								<FreeDeployLeadForm
									formId="hero-lead"
									showTrustLine
									align="left"
									className="mt-5"
								/>
							</ScrollRevealItem>
						</div>

						<ScrollRevealItem className="w-full">
							<FreeDeployHeroVisual />
						</ScrollRevealItem>
					</div>
				</div>
			</ScrollReveal>

			<FreeDeploySocialProof />

			{/* What's included */}
			<ScrollReveal
				as="section"
				className={cn("relative", SECTION_PY)}
				aria-label="What's included"
				stagger
			>
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<ScrollRevealItem>
						<SectionHeading
							eyebrow="What's included"
							title="Everything you need to go live"
							align="center"
							className="mx-auto"
						/>
					</ScrollRevealItem>

					<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{FEATURES.map((feature) => (
							<ScrollRevealItem key={feature.title}>
								<Card className={CARD_HOVER}>
									<feature.icon
										className="size-5 text-sagy-accent"
										strokeWidth={1.75}
										aria-hidden="true"
									/>
									<h3 className="mt-4 font-display text-lg uppercase tracking-tight text-sagy-heading">
										{feature.title}
									</h3>
									<p className="mt-2 font-sans text-sm leading-relaxed text-sagy-body">
										{feature.description}
									</p>
								</Card>
							</ScrollRevealItem>
						))}
					</div>
				</div>
			</ScrollReveal>

			{/* Need a site built */}
			<ScrollReveal
				as="section"
				className={cn("relative", SECTION_PY)}
				aria-label="Custom site build add-on"
			>
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<ScrollRevealItem>
						<div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-sagy-border bg-sagy-surface px-6 py-10 shadow-sagy-card sm:px-10 sm:py-12">
							<div
								className="pointer-events-none absolute inset-0 bg-sagy-grain opacity-[0.06]"
								aria-hidden="true"
							/>
							<div className="relative flex flex-col items-center text-center">
								<Wrench
									className="size-6 text-sagy-accent"
									strokeWidth={1.75}
									aria-hidden="true"
								/>
								<h2 className="mt-4 font-display text-2xl uppercase tracking-tight text-sagy-heading sm:text-3xl">
									Need a site built?
								</h2>
								<p className="mt-3 max-w-lg font-sans text-base leading-relaxed text-sagy-body">
									Don&apos;t have a site yet? We can build it for you —
									WordPress or SPA, up to a few pages. (Paid add-on — get a
									quick quote.)
								</p>
								<GlowButton
									href="/contact"
									variant="ghost"
									className="mt-5 transition-transform duration-200 hover:scale-[1.02]"
								>
									Request a build
								</GlowButton>
							</div>
						</div>
					</ScrollRevealItem>
				</div>
			</ScrollReveal>

			{/* How it works — dark contrast band */}
			<ScrollReveal
				as="section"
				className={cn("relative overflow-hidden bg-[#08080A]", SECTION_PY)}
				aria-label="How it works"
				stagger
			>
				<div
					className="pointer-events-none absolute inset-0 bg-sagy-grain opacity-[0.04]"
					aria-hidden="true"
				/>
				<div
					className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(166,123,91,0.12),transparent_70%)]"
					aria-hidden="true"
				/>

				<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
					<ScrollRevealItem>
						<SectionHeading
							eyebrow="How it works"
							title="Live in three steps"
							align="center"
							className="mx-auto [&_h2]:text-white [&_p:first-of-type]:text-white/50 [&_p:last-child]:text-white/65"
						/>
					</ScrollRevealItem>

					<ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
						{STEPS.map((item, index) => (
							<ScrollRevealItem key={item.step}>
								<li className="relative h-full list-none">
									<Card
										className={cn(
											CARD_HOVER,
											"border-white/10 bg-white/[0.04] shadow-none",
										)}
										spotlight={false}
									>
										<span className="font-mono text-xs uppercase tracking-[0.2em] text-sagy-accent">
											Step {item.step}
										</span>
										<h3 className="mt-3 font-display text-xl uppercase tracking-tight text-white">
											{item.title}
										</h3>
										<p className="mt-2 font-sans text-sm leading-relaxed text-white/65">
											{item.description}
										</p>
									</Card>
									{index < STEPS.length - 1 && (
										<div
											className="pointer-events-none absolute -bottom-4 left-1/2 flex size-6 -translate-x-1/2 items-center justify-center font-mono text-white/30 md:-right-3 md:bottom-auto md:left-auto md:top-1/2 md:translate-x-0 md:-translate-y-1/2 md:rotate-0"
											aria-hidden="true"
										>
											<span className="md:hidden">↓</span>
											<span className="hidden md:inline">→</span>
										</div>
									)}
								</li>
							</ScrollRevealItem>
						))}
					</ol>
				</div>
			</ScrollReveal>

			{/* Pricing transparency */}
			<section
				className="relative py-10"
				aria-label="Pricing after free period"
			>
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<p className="text-center font-sans text-sm text-sagy-muted">
						After 3 months, hosting continues at just{" "}
						<span className="text-sagy-body">
							{FREE_DEPLOY_POST_OFFER_PRICE}
						</span>
						. Cancel anytime.
					</p>
				</div>
			</section>

			{/* Final CTA — email capture */}
			<ScrollReveal
				as="section"
				className={cn("relative z-10", SECTION_PY)}
				aria-label="Claim your free slot"
				stagger
			>
				<div className="mx-auto max-w-5xl px-4 sm:px-6">
					<ScrollRevealItem>
						<div className="relative overflow-hidden rounded-2xl border border-sagy-accent/20 px-6 py-12 text-center shadow-sagy-card sm:px-12 sm:py-16">
							<div
								className="pointer-events-none absolute inset-0 bg-sagy-grain opacity-20"
								aria-hidden="true"
							/>
							<div
								className="pointer-events-none absolute inset-0 bg-sagy-cta-glow"
								aria-hidden="true"
							/>
							<div className="relative z-10">
								<SectionHeading
									title="Ready to deploy?"
									titleHighlight="deploy"
									subline="Limited free slots available."
									align="center"
									className="mx-auto"
								/>
								<FreeDeployLeadForm formId="final-lead" className="mt-6" />
							</div>
						</div>
					</ScrollRevealItem>
				</div>
			</ScrollReveal>

			<FreeDeployFooter />
		</PageShell>
	);
}
