"use client";

import { Card } from "@/components/design-system/Card";
import {
	ScrollReveal,
	ScrollRevealItem,
} from "@/components/design-system/ScrollReveal";
import { useReducedMotion } from "@/components/design-system/useReducedMotion";
import { pipelineStages } from "@/components/home/data/home-content";
import { cn } from "@/lib/utils";

export function PipelineSection() {
	const reducedMotion = useReducedMotion();

	return (
		<ScrollReveal
			as="section"
			className="relative z-10 px-4 py-12 sm:px-6 sm:py-16"
			aria-label="Deployment pipeline"
			stagger
		>
			<div className="mx-auto max-w-6xl">
				{/* Desktop horizontal pipeline */}
				<div className="relative hidden md:block">
					<div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-sagy-heading/[0.08]" />
					{!reducedMotion && (
						<div className="absolute left-0 top-1/2 h-1 w-3 -translate-y-1/2 rounded-full bg-sagy-accent shadow-[0_0_12px_rgba(61, 38, 26,0.8)] motion-safe:animate-pulse-travel" />
					)}
					<div className="relative grid grid-cols-5 gap-4">
						{pipelineStages.map((stage) => {
							const Icon = stage.icon;
							const isAgent = stage.id === "agent";
							return (
								<ScrollRevealItem key={stage.id}>
									<Card spotlight className="!p-4 text-center" accent={isAgent}>
										<div
											className={cn(
												"mx-auto mb-3 flex size-10 items-center justify-center rounded-lg border border-sagy-border bg-sagy-heading/[0.04]",
												isAgent &&
													"motion-safe:animate-agent-pulse border-sagy-accent/40",
											)}
										>
											<Icon
												className="size-4 text-sagy-body"
												strokeWidth={1.5}
											/>
										</div>
										<p className="font-mono text-[10px] uppercase tracking-wider text-sagy-heading">
											{stage.label}
										</p>
										<p className="mt-1 font-mono text-[10px] text-sagy-muted">
											{stage.meta}
										</p>
									</Card>
								</ScrollRevealItem>
							);
						})}
					</div>
				</div>

				{/* Mobile vertical pipeline */}
				<div className="relative flex flex-col gap-3 md:hidden">
					{pipelineStages.map((stage, i) => {
						const Icon = stage.icon;
						const isAgent = stage.id === "agent";
						return (
							<ScrollRevealItem key={stage.id}>
								<div className="relative flex items-stretch gap-4">
									{i < pipelineStages.length - 1 && (
										<div
											className="absolute left-5 top-12 bottom-0 w-px bg-sagy-heading/[0.08]"
											aria-hidden="true"
										/>
									)}
									<Card
										spotlight
										className="flex flex-1 items-center gap-4 !p-4"
										accent={isAgent}
									>
										<div
											className={cn(
												"flex size-10 shrink-0 items-center justify-center rounded-lg border border-sagy-border bg-sagy-heading/[0.04]",
												isAgent &&
													"motion-safe:animate-agent-pulse border-sagy-accent/40",
											)}
										>
											<Icon
												className="size-4 text-sagy-body"
												strokeWidth={1.5}
											/>
										</div>
										<div>
											<p className="font-mono text-[10px] uppercase tracking-wider text-sagy-heading">
												{stage.label}
											</p>
											<p className="font-mono text-[10px] text-sagy-muted">
												{stage.meta}
											</p>
										</div>
									</Card>
								</div>
							</ScrollRevealItem>
						);
					})}
				</div>
			</div>
		</ScrollReveal>
	);
}
