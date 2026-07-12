"use client";

import BorderGlow from "@/components/ui/border-glow";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { type ReactNode, useEffect, useState } from "react";

interface RelatedFeatureCardProps {
	slug: string;
	title: string;
	description: string;
	icon: ReactNode;
}

export function RelatedFeatureCard({
	slug,
	title,
	description,
	icon,
}: RelatedFeatureCardProps) {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const isDark = mounted && resolvedTheme === "dark";

	return (
		<Link href={`/features/${slug}`} className="group block h-full">
			<BorderGlow
				animated
				borderRadius={16}
				glowRadius={32}
				glowIntensity={1.1}
				edgeSensitivity={28}
				coneSpread={22}
				backgroundColor="hsl(var(--card))"
				glowColor={isDark ? "280 85 72" : "250 75 62"}
				colors={["#c084fc", "#f472b6", "#38bdf8"]}
				className="h-full w-full overflow-hidden"
			>
				<div className="flex h-full flex-col p-6">
					<div className="flex size-11 items-center justify-center rounded-xl border border-border/50 bg-accent/30 text-primary">
						{icon}
					</div>
					<h3 className="mt-4 text-base font-semibold text-foreground">
						{title}
					</h3>
					<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
						{description}
					</p>
					<span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
						Learn more
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
					</span>
				</div>
			</BorderGlow>
		</Link>
	);
}
