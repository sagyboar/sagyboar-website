"use client";

import { Card } from "@/components/design-system/Card";
import { useReducedMotion } from "@/components/design-system/useReducedMotion";
import { FeatureBadge } from "@/components/features/FeatureBadge";
import { FLAGSHIP_HERO_SLUG } from "@/components/features/feature-bento-config";
import type { FeatureBadge as FeatureBadgeType } from "@/components/features/features-data";
import { featurePages } from "@/components/features/features-data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function isAiBadge(badge: FeatureBadgeType) {
	return badge === "AI" || badge === "NEW";
}

function AiMicroAnimation({ variant }: { variant: "default" | "hero" }) {
	const [line, setLine] = useState(0);
	const reducedMotion = useReducedMotion();
	const lines =
		variant === "hero"
			? [
					"Scanning production metrics…",
					"Anomaly detected — memory leak",
					"Generating remediation patch…",
					"✓ Auto-heal deployed",
				]
			: ["Analyzing stack trace…", "Root cause identified", "✓ Fix suggested"];

	useEffect(() => {
		if (reducedMotion) return;
		const id = setInterval(() => setLine((l) => (l + 1) % lines.length), 2200);
		return () => clearInterval(id);
	}, [reducedMotion, lines.length]);

	const current = reducedMotion ? lines[lines.length - 1] : lines[line];
	const isSuccess = current.startsWith("✓");

	return (
		<div className="mt-4 rounded-lg border border-sagy-border bg-sagy-bg/60 p-2.5 font-mono text-[10px]">
			<div className="flex items-center gap-2 text-sagy-muted">
				<span className="size-1.5 shrink-0 rounded-full bg-sagy-accent motion-safe:animate-agent-pulse" />
				<span>AGENT // live</span>
			</div>
			<p
				className={cn(
					"mt-1.5 transition-opacity duration-300",
					isSuccess ? "text-sagy-success" : "text-sagy-body",
				)}
			>
				{current}
			</p>
		</div>
	);
}

type FeatureBentoCardProps = {
	slug: string;
	size: "hero" | "wide" | "default";
	tilt?: boolean;
};

export function FeatureBentoCard({
	slug,
	size,
	tilt = false,
}: FeatureBentoCardProps) {
	const feature = featurePages.find((f) => f.slug === slug);
	if (!feature) return null;

	const Icon = feature.icon;
	const badge = feature.items[0]?.badge ?? "CORE";
	const showAiDemo = isAiBadge(badge) || feature.slug === FLAGSHIP_HERO_SLUG;

	return (
		<Link
			href={`/features/${feature.slug}`}
			className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent"
		>
			<Card
				spotlight
				tilt={tilt}
				accent={size !== "default"}
				className="flex h-full flex-col transition-colors group-hover:border-sagy-accent/25"
			>
				<div className="flex items-start justify-between gap-3">
					<div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-sagy-border bg-sagy-heading/[0.04]">
						<Icon className="size-4 text-sagy-body" strokeWidth={1.5} />
					</div>
					<FeatureBadge badge={badge} />
				</div>
				<h3 className="mt-4 font-sans text-base font-medium text-sagy-heading">
					{feature.title}
				</h3>
				<p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-sagy-body">
					{feature.summary}
				</p>
				{showAiDemo && (
					<AiMicroAnimation variant={size === "hero" ? "hero" : "default"} />
				)}
				<span className="mt-4 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-sagy-accent transition-colors group-hover:text-sagy-heading">
					Explore
					<ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
				</span>
			</Card>
		</Link>
	);
}
