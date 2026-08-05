"use client";

import { CommandKChip } from "@/components/design-system/CommandKChip";
import { GlowButton } from "@/components/design-system/GlowButton";
import {
	ScrollReveal,
	ScrollRevealItem,
} from "@/components/design-system/ScrollReveal";
import { useReducedMotion } from "@/components/design-system/useReducedMotion";
import { heroContent } from "@/components/home/data/home-content";
import { AgentTerminal } from "@/components/home/sections/AgentTerminal";
import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import { motion } from "framer-motion";

export function HeroSection() {
	const reducedMotion = useReducedMotion();
	const headlineParts = heroContent.headline.split(
		heroContent.headlineHighlight,
	);

	return (
		<ScrollReveal
			as="section"
			className="relative z-10 px-4 py-16 sm:px-6 sm:py-24 lg:py-28"
			aria-label="Hero"
			stagger
		>
			<div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
				{/* Left */}
				<div className="flex flex-col gap-6">
					<ScrollRevealItem>
						<p className="font-mono text-xs uppercase tracking-[0.2em] text-sagy-muted">
							{heroContent.eyebrow}
						</p>
					</ScrollRevealItem>

					<ScrollRevealItem>
						<h1 className="font-display text-4xl uppercase leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
							{headlineParts[0]}
							<span className="text-sagy-accent">
								{heroContent.headlineHighlight}
							</span>
							{headlineParts[1]}
							<span
								className="ml-1 inline-block h-[0.85em] w-[0.12em] translate-y-[0.05em] bg-sagy-accent motion-safe:animate-cursor-blink"
								aria-hidden="true"
							/>
						</h1>
					</ScrollRevealItem>

					<ScrollRevealItem>
						<p className="max-w-lg font-sans text-base leading-relaxed text-sagy-body sm:text-lg">
							{heroContent.subline}
						</p>
					</ScrollRevealItem>

					<ScrollRevealItem>
						<div className="flex flex-wrap items-center gap-3">
							<GlowButton href={Sagyboar_PORTAL_URL} external>
								{heroContent.cta}
							</GlowButton>
							<CommandKChip />
						</div>
					</ScrollRevealItem>

					<ScrollRevealItem>
						<div className="flex flex-wrap gap-2 pt-2">
							{heroContent.badges.map((badge) => (
								<span
									key={badge}
									className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-sagy-muted"
								>
									<span
										className="size-1.5 rounded-full bg-sagy-accent"
										aria-hidden="true"
									/>
									{badge}
								</span>
							))}
						</div>
					</ScrollRevealItem>
				</div>

				{/* Right — live terminal */}
				<motion.div
					{...(reducedMotion
						? {}
						: {
								initial: { opacity: 0, y: 32 },
								whileInView: { opacity: 1, y: 0 },
								viewport: { once: true },
								transition: {
									duration: 0.65,
									delay: 0.2,
									ease: [0.22, 1, 0.36, 1],
								},
							})}
				>
					<AgentTerminal />
				</motion.div>
			</div>
		</ScrollReveal>
	);
}
