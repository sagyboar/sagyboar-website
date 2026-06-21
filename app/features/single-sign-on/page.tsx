import { Container } from "@/components/Container";
import { HeroParticleWave } from "@/components/hero/hero-particle-wave";
import { HeroParticleField } from "@/components/hero/hero-particle-field";
import { Button } from "@/components/ui/button";
import {
	KeyRound,
	Link2,
	Users,
	ShieldCheck,
	UserMinus,
	Shield,
	ScrollText,
	Paintbrush,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Single Sign-On for Businesses and Enterprise Teams",
	description:
		"Connect Sagyboar to your existing identity provider with SSO. Centralize access control and keep your organization secure at scale.",
};

const coreFeatures = [
	{
		icon: Link2,
		title: "Connect your existing identity provider",
		description:
			"Sagyboar supports SSO via OpenID Connect (OIDC) and SAML, with native integrations for Okta, Azure AD (Microsoft Entra ID), Auth0, and Keycloak. If you use a different provider, you can configure it manually using standard OIDC or SAML endpoints.",
	},
	{
		icon: Users,
		title: "Remove friction for your team",
		description:
			"With SSO enabled, your team signs in to Sagyboar using the same credentials they use across the rest of your organization\u2014no extra passwords, no separate accounts to keep in sync.",
	},
	{
		icon: ShieldCheck,
		title: "Enforce centralized access policies",
		description:
			"Authentication flows through your identity provider, so you can apply your existing security policies\u2014MFA requirements, conditional access rules, session timeouts\u2014without configuring them separately in Sagyboar.",
	},
	{
		icon: UserMinus,
		title: "Deprovision access instantly",
		description:
			"When a team member leaves or changes a role, revoking their access in your identity provider immediately removes their access to Sagyboar\u2014no manual cleanup across multiple tools.",
	},
];

const relatedFeatures = [
	{
		icon: Shield,
		title: "RBAC",
		description:
			"Define exactly what each user can do once they\u2019re in Sagyboar, with granular role and permission controls across projects, services, and features.",
		href: "/features/role-based-access-control",
	},
	{
		icon: ScrollText,
		title: "Audit logs",
		description:
			"Keep a full record of every login, logout, and action taken across your Sagyboar environment for compliance and accountability.",
		href: "/features/audit-logs",
	},
	{
		icon: Paintbrush,
		title: "White labeling",
		description:
			"Present Sagyboar as your own product, with custom branding for your clients or organization.",
		href: "/features/white-labeling",
	},
];

export default function SingleSignOnPage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-32">
				<HeroParticleWave />
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[58%] bg-gradient-to-b from-background via-background/95 to-transparent"
				/>
				<Container className="relative z-10">
					<div className="mx-auto max-w-5xl text-center">
						<h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
							One login for your entire organization
						</h1>
						<p className="mt-6 text-lg text-muted-foreground">
							Connect Sagyboar to your identity provider and manage access from a
							single place. Available to Enterprise plan users and as a one-off
							additional feature.
						</p>
						<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
							<Button className="rounded-full" asChild>
								<Link href="/contact">Contact sales</Link>
							</Button>
						</div>
					</div>
				</Container>
			</section>

			{/* Authentication that scales with you */}
			<section className="border-b border-border py-20 sm:py-32">
				<Container>
					<div className="mx-auto max-w-5xl text-center">
						<h2 className="font-display text-3xl tracking-tight sm:text-4xl">
							Authentication that scales with you
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Sagyboar&apos;s SSO support means your team logs in through the
							identity provider you already trust, so there are no separate
							credentials to manage.
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
						{coreFeatures.map((feature) => (
							<div
								key={feature.title}
								className="rounded-xl border border-border bg-card p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
									<feature.icon className="h-6 w-6" />
								</div>
								<h3 className="text-xl font-semibold">{feature.title}</h3>
								<p className="mt-3 text-sm text-muted-foreground">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* Powerful features for growing teams */}
			<section className="relative overflow-hidden border-b border-border bg-background pb-16 pt-20 sm:pb-20 sm:pt-32">
				<HeroParticleField />
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[42%] bg-gradient-to-b from-background via-background/85 to-transparent"
				/>
				<Container className="relative z-10">
					<div className="mx-auto max-w-5xl text-center">
						<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
							Powerful features for growing teams
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Sagyboar scales with your team, with features and plans for when
							you&apos;re ready to take the next step.
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-3">
						{relatedFeatures.map((feature) => (
							<Link
								key={feature.title}
								href={feature.href}
								className="rounded-xl border border-border bg-card p-6 transition hover:border-primary/50"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
									<feature.icon className="h-6 w-6" />
								</div>
								<h3 className="text-lg font-semibold text-foreground">
									{feature.title}
								</h3>
								<p className="mt-3 text-sm text-muted-foreground">
									{feature.description}
								</p>
							</Link>
						))}
					</div>
				</Container>
			</section>

			{/* CTA */}
			<section className="border-b border-border py-20 sm:py-32">
				<Container>
					<div className="mx-auto max-w-5xl text-center">
						<h2 className="font-display text-3xl tracking-tight sm:text-4xl">
							Ready to simplify access for your team?
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Talk to us about SSO and the rest of Sagyboar&apos;s security
							features.
						</p>
						<div className="mt-10">
							<Button className="rounded-full" asChild>
								<Link href="/contact">Schedule a call</Link>
							</Button>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}
