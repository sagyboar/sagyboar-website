"use client";

import dynamic from "next/dynamic";

// Lazy-load WebGL components so the ~1 MB ogl library is not part of the
// initial page bundle. They're purely decorative, so ssr: false is safe.
const Aurora = dynamic(() => import("@/components/ui/aurora"), { ssr: false });
const GradientBlinds = dynamic(
	() => import("@/components/ui/gradient-blinds"),
	{ ssr: false },
);
const Grainient = dynamic(() => import("@/components/ui/grainient"), {
	ssr: false,
});

/** Gradient blinds — used behind feature hero sections */
export function FeatureHeroBackground() {
	return (
		<>
			<div aria-hidden className="pointer-events-none absolute inset-0 z-0">
				<GradientBlinds
					gradientColors={["#FF9FFC", "#5227FF"]}
					angle={0}
					noise={0.3}
					blindCount={12}
					blindMinWidth={50}
					spotlightRadius={0.5}
					spotlightSoftness={1}
					spotlightOpacity={1}
					mouseDampening={0.15}
					distortAmount={0}
					shineDirection="left"
					mixBlendMode="lighten"
					className="h-full w-full opacity-50 dark:opacity-70"
				/>
			</div>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-3/4 bg-gradient-to-b from-transparent via-background/70 to-background"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-1/4 bg-gradient-to-b from-background/80 to-transparent"
			/>
		</>
	);
}

/** Grainient — used behind individual feature detail page hero sections */
export function FeatureDetailBackground() {
	return (
		<>
			<div aria-hidden className="pointer-events-none absolute inset-0 z-0">
				<Grainient
					color1="#FF9FFC"
					color2="#5227FF"
					color3="#B497CF"
					timeSpeed={0.25}
					warpStrength={1.0}
					grainAmount={0.1}
					contrast={1.5}
					zoom={0.9}
					className="opacity-60 dark:opacity-80"
				/>
			</div>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-3/4 bg-gradient-to-b from-transparent via-background/70 to-background"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-1/4 bg-gradient-to-b from-background/80 to-transparent"
			/>
		</>
	);
}

/** Aurora — used behind feature CTA sections */
export function FeatureCtaBackground() {
	return (
		<>
			<div aria-hidden className="pointer-events-none absolute inset-0 z-0">
				<Aurora
					colorStops={["#3A29FF", "#7cff67", "#5227FF"]}
					blend={0.6}
					amplitude={1.2}
					speed={0.5}
					className="h-full w-full opacity-90 dark:opacity-100"
				/>
			</div>
			{/* Subtle text-contrast scrim — light enough to keep the aurora visible in both themes */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 z-[1] bg-background/20 dark:bg-background/25"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-1/5 bg-gradient-to-b from-background/80 to-transparent"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/5 bg-gradient-to-t from-background/80 to-transparent"
			/>
		</>
	);
}
