"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import { Button } from "./ui/button";

const Silk = dynamic(() => import("@/components/ui/silk"), { ssr: false });

const SILK_COLORS = {
	light: "#60a5fa",
	dark: "#1d4ed8",
} as const;

export function CallToAction() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const isDark = mounted && resolvedTheme === "dark";
	const silkColor = isDark ? SILK_COLORS.dark : SILK_COLORS.light;

	return (
		<section
			id="get-started-today"
			className="bg-background py-16 sm:py-20"
		>
			<Container>
				<div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
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

					<div className="relative z-10 px-6 py-16 text-center sm:px-10 sm:py-20">
						<div className="mx-auto max-w-5xl">
							<h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
								Stop managing infrastructure. Start shipping.
							</h2>
							<p className="mx-auto mt-4 mb-10 max-w-3xl text-lg tracking-tight text-white/80">
								Let our embedded AI handle the configurations, monitoring, and
								ticketing. Deploy to our fully managed servers in minutes, and
								let our dedicated engineering squad maintain the engine while
								your team focuses purely on building the product.
							</p>
							<div className="mx-auto w-fit rounded-full bg-white/15 p-1.5 backdrop-blur-sm">
								<Button className="rounded-full" asChild>
									<Link
										href={Sagyboar_PORTAL_URL}
										aria-label="Deploy your first app with Sagyboar"
										target="_blank"
										className="flex flex-row items-center gap-2"
									>
										Deploy Your First App
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
