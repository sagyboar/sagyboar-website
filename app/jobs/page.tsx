import { Container } from "@/components/Container";
import { HeroParticleWave } from "@/components/hero/hero-particle-wave";
import { HeroParticleField } from "@/components/hero/hero-particle-field";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sagyboar Jobs & Open Positions",
	description:
		"Join Sagyboar and help developers and teams ship faster with open-source and scalable deployment tools built for the modern web.",
};

const OPEN_POSITIONS = [
	{
		title: "Founding Engineer",
		region: "Remote — Americas",
		description:
			"Own core platform features end to end: deployments, monitoring, and developer experience.",
		href: "/contact",
	},
	{
		title: "Developer Advocate",
		region: "Remote — Global",
		description:
			"Create tutorials, demos, and community content that help teams adopt self-hosted PaaS workflows.",
		href: "/contact",
	},
	{
		title: "Solutions Engineer",
		region: "Remote — EU / UK",
		description:
			"Work with enterprise prospects on security reviews, pilots, and production rollouts.",
		href: "/contact",
	},
];

const PERKS = [
	"Small team with high ownership",
	"Open-source first culture",
	"Remote-friendly async workflow",
	"Competitive salary + equity",
];

export default function JobsPage() {
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
							Join our company and help redefine how the world deploys software
						</h1>
						<p className="mt-6 text-lg text-muted-foreground">
							We&apos;re a small, focused team building tools that developers
							actually love. If you care about open source, developer experience,
							and shipping things that matter — you&apos;ll fit right in.
						</p>
						<Button asChild size="lg" className="mt-10 rounded-full">
							<Link href="#open-positions">See open positions</Link>
						</Button>
					</div>
				</Container>
			</section>

			<section className="border-b border-border py-20 sm:py-32">
				<Container>
					<div className="mx-auto max-w-5xl">
						<h2 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
							Why work at Sagyboar
						</h2>
						<ul className="mt-8 grid gap-4 sm:grid-cols-2">
							{PERKS.map((perk) => (
								<li
									key={perk}
									className="rounded-xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground"
								>
									{perk}
								</li>
							))}
						</ul>
					</div>
				</Container>
			</section>

			<section
				id="open-positions"
				className="relative overflow-hidden border-b border-border bg-background pb-16 pt-20 sm:pb-20 sm:pt-32"
			>
				<HeroParticleField />
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[42%] bg-gradient-to-b from-background via-background/85 to-transparent"
				/>
				<Container className="relative z-10">
					<h2 className="mb-8 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
						Open positions
					</h2>

					<div className="mx-auto flex max-w-5xl flex-col gap-4">
						{OPEN_POSITIONS.map((position) => (
							<div
								key={position.title}
								className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between"
							>
								<div className="flex flex-col gap-1">
									<div className="flex flex-wrap items-center gap-3">
										<h3 className="text-base font-semibold text-foreground">
											{position.title}
										</h3>
										<Badge
											variant="secondary"
											className="flex items-center gap-1 text-xs"
										>
											<MapPin className="h-3 w-3" />
											{position.region}
										</Badge>
									</div>
									<p className="text-sm text-muted-foreground">
										{position.description}
									</p>
								</div>
								<Button asChild variant="outline" className="shrink-0 rounded-full">
									<Link href={position.href}>
										Apply
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						))}
					</div>
				</Container>
			</section>
		</div>
	);
}
