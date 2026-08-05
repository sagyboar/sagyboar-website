"use client";

import { Card } from "@/components/design-system/Card";
import {
	ScrollReveal,
	ScrollRevealItem,
} from "@/components/design-system/ScrollReveal";
import { SectionHeading } from "@/components/design-system/SectionHeading";
import { useReducedMotion } from "@/components/design-system/useReducedMotion";
import {
	customFeatureTile,
	featureTiles,
} from "@/components/home/data/home-content";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

function MiniMetricTicker() {
	const metrics = [
		{ label: "CPU", value: "12%", status: "ok" },
		{ label: "MEM", value: "34%", status: "ok" },
		{ label: "REQ/s", value: "1.2k", status: "ok" },
		{ label: "LAT", value: "42ms", status: "ok" },
	];
	const [tick, setTick] = useState(0);
	const reducedMotion = useReducedMotion();

	useEffect(() => {
		if (reducedMotion) return;
		const id = setInterval(() => setTick((t) => t + 1), 2000);
		return () => clearInterval(id);
	}, [reducedMotion]);

	return (
		<div className="mt-4 rounded-lg border border-white/[0.08] bg-sagy-bg/60 p-3 font-mono text-[10px]">
			<p className="mb-2 text-sagy-muted">LIVE METRICS // prod-api</p>
			<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
				{metrics.map((m, i) => (
					<div
						key={m.label}
						className="rounded border border-white/[0.06] bg-white/[0.02] p-2"
					>
						<p className="text-sagy-muted">{m.label}</p>
						<p
							className={cn(
								"text-sagy-success",
								tick % 4 === i && "text-sagy-accent",
							)}
						>
							{m.value}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export function FeaturesBento() {
	return (
		<ScrollReveal
			as="section"
			className="relative z-10 px-4 py-24 sm:px-6 sm:py-28"
			aria-label="Features"
			stagger
		>
			<div className="mx-auto max-w-6xl">
				<ScrollRevealItem>
					<SectionHeading
						eyebrow="CAPABILITIES"
						title="Everything your AI agent needs to ship"
						titleHighlight="AI agent"
						subline="From first commit to production healing — one platform, zero DevOps overhead."
						align="center"
						className="mx-auto mb-16"
					/>
				</ScrollRevealItem>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{featureTiles.map((tile) => {
						const Icon = tile.icon;
						const isHero = tile.size === "hero";
						const isWide = tile.size === "wide";

						return (
							<ScrollRevealItem
								key={tile.id}
								className={cn(
									isHero && "sm:col-span-2 lg:row-span-2",
									isWide && "sm:col-span-2",
								)}
							>
								<Card
									spotlight
									accent={tile.accent}
									className={cn(
										"h-full",
										isHero && "flex flex-col justify-between",
									)}
								>
									<div>
										<div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
											<Icon
												className="size-4 text-sagy-body"
												strokeWidth={1.5}
											/>
										</div>
										<h3 className="font-sans text-base font-medium text-white">
											{tile.title}
										</h3>
										<p className="mt-2 font-sans text-sm leading-relaxed text-sagy-body">
											{tile.description}
										</p>
									</div>
									{isHero && <MiniMetricTicker />}
								</Card>
							</ScrollRevealItem>
						);
					})}

					<ScrollRevealItem className="sm:col-span-2 lg:col-span-1">
						<Card
							spotlight
							className="flex h-full flex-col justify-between border-dashed"
						>
							<div>
								<h3 className="font-sans text-base font-medium text-white">
									{customFeatureTile.title}
								</h3>
								<p className="mt-2 font-sans text-sm text-sagy-body">
									{customFeatureTile.description}
								</p>
							</div>
							<Link
								href={customFeatureTile.href}
								className="mt-4 inline-flex font-mono text-xs uppercase tracking-wider text-sagy-accent transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent"
							>
								{customFeatureTile.cta} →
							</Link>
						</Card>
					</ScrollRevealItem>
				</div>
			</div>
		</ScrollReveal>
	);
}
