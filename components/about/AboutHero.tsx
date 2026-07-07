"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";

const SoftAurora = dynamic(() => import("@/components/ui/soft-aurora"), {
	ssr: false,
});

const AURORA_THEMES = {
	light: {
		color1: "#dbeafe",
		color2: "#a855f7",
		brightness: 0.85,
	},
	dark: {
		color1: "#1d4ed8",
		color2: "#e100ff",
		brightness: 1.0,
	},
} as const;

export function AboutHero() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const theme =
		mounted && resolvedTheme === "dark"
			? AURORA_THEMES.dark
			: AURORA_THEMES.light;

	return (
		<section className="relative overflow-hidden border-b border-border bg-background">
			<div aria-hidden className="absolute inset-0">
				{mounted ? (
					<SoftAurora
						speed={0.6}
						scale={1.5}
						brightness={theme.brightness}
						color1={theme.color1}
						color2={theme.color2}
						noiseFrequency={2.5}
						noiseAmplitude={1.0}
						bandHeight={0.5}
						bandSpread={1.0}
						octaveDecay={0.1}
						layerOffset={0}
						colorSpeed={1.0}
						enableMouseInteraction
						mouseInfluence={0.25}
						className="h-full w-full"
					/>
				) : null}

				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(255,255,255,0.45)_55%,rgba(255,255,255,0.9)_100%)] dark:hidden" />
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/15 to-white/75 dark:hidden" />
				<div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/90 to-transparent dark:hidden" />

				<div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_at_center,transparent_5%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.88)_100%)] dark:block" />
				<div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-b from-black/65 via-transparent to-black/70 dark:block" />
				<div className="pointer-events-none absolute inset-x-0 top-0 hidden h-36 bg-gradient-to-b from-black/80 to-transparent dark:block" />
			</div>

			<Container className="relative z-10 pt-28 pb-24 sm:pt-32 sm:pb-32 lg:pb-36">
				<div className="mx-auto max-w-4xl text-center">
					<p className="text-sm font-medium uppercase tracking-wider text-primary">
						About Sagyboar
					</p>
					<h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
						Helping teams <span className="border-b border-blue-400 text-blue-400">deploy without the DevOps overhead</span>
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/90 dark:text-white/90 sm:text-lg">
						We&apos;re an AI-native DevOps platform built to make deployment,
						monitoring, and infrastructure management simple for engineering
						teams of every size. Here&apos;s our story so far.
					</p>
				</div>
			</Container>
		</section>
	);
}
