import { Container } from "@/components/Container";
import { HeroParticleWave } from "@/components/hero/hero-particle-wave";
import { HeroParticleField } from "@/components/hero/hero-particle-field";
import { PartnerForm } from "@/components/PartnerForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Partners",
	description:
		"Join the Sagyboar partner program. Agency plan, referral program, and reseller options.",
};

const PROGRAMS = [
	{
		title: "Agency Plan",
		badge: "Available",
		badgeVariant: "default" as const,
		description:
			"Premium licensing tier designed for agencies managing multiple clients.",
		features: [
			"White-label capabilities",
			"Unlimited servers",
			"Unlimited projects",
			"Unlimited organizations",
		],
		cta: "Get started",
		href: "#get-started",
	},
	{
		title: "Referral Program",
		badge: "Available",
		badgeVariant: "default" as const,
		description:
			"Earn 20% commission on every customer you refer to Sagyboar.",
		features: [
			"Co-marketing opportunities",
			"Partner dashboard",
			"Unique referral links",
			"20% of first-year revenue",
		],
		cta: "Get started",
		href: "#get-started",
	},
	{
		title: "Reseller Program",
		badge: "Coming Soon",
		badgeVariant: "secondary" as const,
		description:
			"Sell Sagyboar directly in your market with local presence and relationships.",
		features: [
			"Strategic market access",
			"Cultural advantage",
			"Leverage local expertise",
			"Market expansion opportunity",
		],
		cta: "Express interest",
		href: "#get-started",
	},
];

export default function PartnersPage() {
	return (
		<div className="min-h-screen bg-background">
			<section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-32">
				<HeroParticleWave />
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[58%] bg-gradient-to-b from-background via-background/95 to-transparent"
				/>
				<Container className="relative z-10">
					<div className="mx-auto max-w-5xl text-center">
						<h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
							Partner with Sagyboar
						</h1>
						<p className="mt-6 text-lg text-muted-foreground">
							Join our partner program to unlock premium features, earn revenue
							through referrals, and scale your agency operations.
						</p>
						<Button asChild size="lg" className="mt-10 rounded-full">
							<Link href="#get-started">Become a Partner</Link>
						</Button>
					</div>
				</Container>
			</section>

			<section className="relative overflow-hidden border-b border-border bg-background pb-16 pt-20 sm:pb-20 sm:pt-32">
				<HeroParticleField />
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[42%] bg-gradient-to-b from-background via-background/85 to-transparent"
				/>
				<Container className="relative z-10">
					<div className="grid gap-8 md:grid-cols-3">
						{PROGRAMS.map((program) => (
							<div
								key={program.title}
								className="flex flex-col rounded-2xl border border-border bg-card p-6"
							>
								<Badge variant={program.badgeVariant} className="mb-4 w-fit">
									{program.badge}
								</Badge>
								<h2 className="text-xl font-semibold text-foreground">
									{program.title}
								</h2>
								<p className="mt-2 text-sm text-muted-foreground">
									{program.description}
								</p>
								<ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
									{program.features.map((f) => (
										<li key={f} className="flex items-center gap-2">
											<Check className="h-4 w-4 shrink-0 text-primary" />
											{f}
										</li>
									))}
								</ul>
								<div className="mt-auto pt-6">
									<Button asChild variant="outline" className="w-full rounded-full">
										<Link href={program.href}>{program.cta}</Link>
									</Button>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>

			<section id="get-started" className="border-b border-border py-20 sm:py-32">
				<Container>
					<div className="mx-auto max-w-5xl">
						<h2 className="text-center font-display text-2xl tracking-tight text-foreground sm:text-3xl">
							Get Started
						</h2>
						<p className="mt-3 text-center text-muted-foreground">
							Join our partner program and start growing with Sagyboar.
						</p>
						<div className="mt-10 rounded-xl border border-border bg-card p-6 sm:p-8">
							<PartnerForm />
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}
