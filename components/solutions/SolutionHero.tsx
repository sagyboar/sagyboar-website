"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { DARK_VEIL_PRESET } from "@/components/ui/dark-veil";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Building2, Rocket, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HeadingHighlight } from "./HeadingHighlight";
import { SolutionStackGraphic } from "./SolutionStackGraphic";
import type { SolutionIconName, SolutionPageData } from "./solution-types";

const SOLUTION_ICONS = {
	sparkles: Sparkles,
	rocket: Rocket,
	building2: Building2,
} satisfies Record<SolutionIconName, typeof Sparkles>;

const DarkVeil = dynamic(() => import("@/components/ui/dark-veil"), {
	ssr: false,
});

type SolutionHeroProps = {
	data: SolutionPageData["hero"];
};

export function SolutionHero({ data }: SolutionHeroProps) {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const Icon = SOLUTION_ICONS[data.icon];

	useEffect(() => setMounted(true), []);

	const isDark = mounted && resolvedTheme === "dark";

	return (
		<section className="relative overflow-hidden border-b border-border bg-background">
			<div aria-hidden className="absolute inset-0">
				<div
					className={cn(
						"absolute inset-0",
						isDark ? "bg-[#0a0a12]" : "bg-slate-50",
					)}
				>
					{mounted ? (
						<DarkVeil
							variant={isDark ? "dark" : "light"}
							speed={DARK_VEIL_PRESET.speed}
							hueShift={DARK_VEIL_PRESET.hueShift}
							noiseIntensity={DARK_VEIL_PRESET.noiseIntensity}
							warpAmount={DARK_VEIL_PRESET.warpAmount}
							className="h-full w-full"
						/>
					) : null}
				</div>

				{isDark ? (
					<>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/50" />
					</>
				) : (
					<>
						<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(255,255,255,0.35)_55%,rgba(255,255,255,0.88)_100%)]" />
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/65 via-white/10 to-white/70" />
						<div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/85 to-transparent" />
					</>
				)}
			</div>

			<Container className="relative z-10 pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pb-32">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
					<div className="text-left">
						<div
							className={cn(
								"inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm backdrop-blur-sm",
								"border-border bg-background/85 text-foreground",
								"dark:border-white/15 dark:bg-white/10 dark:text-white/90",
							)}
						>
							<Icon className="size-4" aria-hidden />
							<span>{data.title}</span>
							<span className="text-muted-foreground dark:text-white/60">
								·
							</span>
							<span className="text-muted-foreground dark:text-white/80">
								{data.price}
							</span>
						</div>

						<h1 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl lg:text-5xl">
							<HeadingHighlight
								text={data.headline}
								highlight={data.headlineHighlight}
							/>
						</h1>
						<p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground dark:text-white/75 sm:text-lg">
							{data.description}
						</p>

						<Button asChild size="lg" className="mt-10 gap-2 rounded-full">
							<Link
								href={data.ctaHref}
								{...(data.ctaExternal ? { target: "_blank" } : {})}
							>
								{data.cta}
								<ArrowUpRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="relative mx-auto w-full max-w-lg lg:max-w-none">
						<div
							className={cn(
								"relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-sm",
								"border-border bg-card/80",
								"dark:border-white/15 dark:bg-white/5",
							)}
						>
							{data.heroGraphic ? (
								<SolutionStackGraphic
									name={data.heroGraphic}
									label={data.heroImageAlt}
								/>
							) : (
								<Image
									src={data.heroImage}
									alt={data.heroImageAlt}
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 50vw"
									priority
								/>
							)}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
