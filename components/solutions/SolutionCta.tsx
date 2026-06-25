"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { SolutionPageData } from "./solution-types";

const Silk = dynamic(() => import("@/components/ui/silk"), { ssr: false });

const SILK_COLORS = {
	light: "#60a5fa",
	dark: "#1d4ed8",
} as const;

type SolutionCtaProps = {
	data: SolutionPageData["cta"];
};

export function SolutionCta({ data }: SolutionCtaProps) {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const isDark = mounted && resolvedTheme === "dark";
	const silkColor = isDark ? SILK_COLORS.dark : SILK_COLORS.light;

	return (
		<section className="py-16 sm:py-24">
			<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<div className="relative min-h-[18rem] overflow-hidden rounded-3xl border border-border shadow-lg sm:min-h-[20rem]">
					<div
						aria-hidden
						className="absolute inset-0 bg-blue-400 dark:bg-blue-700"
					>
						{mounted ? (
							<Silk
								speed={6}
								scale={1.15}
								color={silkColor}
								noiseIntensity={1.5}
								rotation={0.12}
								className="h-full w-full"
							/>
						) : null}
					</div>

					<div className="relative z-10 px-6 py-14 text-center sm:px-10 sm:py-16">
						<h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
							{data.title}
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-white/80">
							{data.description}
						</p>
						<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
							<Button
								asChild
								variant="outline"
								className="gap-2 rounded-full bg-background/80 backdrop-blur-sm"
							>
								<Link href={data.secondaryHref}>
									{data.secondaryCta}
									<ArrowUpRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button asChild className="gap-2 rounded-full">
								<Link
									href={data.primaryHref}
									{...(data.primaryExternal ? { target: "_blank" } : {})}
								>
									{data.primaryCta}
									<ArrowUpRight className="h-4 w-4" />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
