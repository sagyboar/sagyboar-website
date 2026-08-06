"use client";

import { SectionHeading } from "@/components/ui/sagy";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { timelineMilestones } from "./about-data";

export function AboutTimeline() {
	return (
		<section
			className={cn(
				"border-b border-sagy-border bg-sagy-surface/40",
				spacing.sectionY,
			)}
			aria-label="Our journey"
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<SectionHeading
					title="Our journey"
					titleHighlight="journey"
					subline="From an idea to a platform teams rely on for deployment and infrastructure."
					align="center"
					className="mx-auto"
				/>

				<div className="relative mx-auto mt-14 max-w-4xl sm:mt-20">
					{/* rail — flat base line with an accent glow that fades at both ends */}
					<div
						aria-hidden
						className="absolute left-4 top-0 h-full w-px bg-sagy-heading/[0.06] sm:left-1/2 sm:-translate-x-1/2"
					/>
					<div
						aria-hidden
						className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-sagy-accent/40 to-transparent blur-[1px] sm:left-1/2 sm:-translate-x-1/2"
					/>

					<ol className="space-y-8 sm:space-y-6">
						{timelineMilestones.map((milestone, index) => {
							const Icon = milestone.icon;
							const alignRight = index % 2 === 1;
							const isLast = index === timelineMilestones.length - 1;

							return (
								<motion.li
									key={milestone.title}
									initial={{ opacity: 0, x: alignRight ? 24 : -24 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: "-80px" }}
									transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
									className="relative pl-12 sm:pl-0"
								>
									<div className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-16">
										<div
											className={cn(
												"sm:col-start-1",
												alignRight && "sm:col-start-2",
											)}
										>
											<article
												className={cn(
													"sagy-spotlight group relative overflow-hidden rounded-xl border bg-sagy-surface p-6 shadow-sagy-card transition-all duration-300 hover:-translate-y-1",
													isLast
														? "border-sagy-accent/30"
														: "border-sagy-border hover:border-sagy-accent/30",
													alignRight ? "sm:text-left" : "sm:text-right",
												)}
											>
												<div
													aria-hidden
													className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sagy-accent/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
												/>
												<span
													aria-hidden
													className={cn(
														"pointer-events-none absolute top-3 font-display text-5xl leading-none text-sagy-heading/[0.04]",
														alignRight
															? "right-4"
															: "right-4 sm:right-auto sm:left-4",
													)}
												>
													{`0${index + 1}`}
												</span>

												<div className="relative z-10">
													<div
														className={cn(
															"flex items-center gap-2",
															alignRight
																? "sm:justify-start"
																: "sm:justify-end",
														)}
													>
														<span
															className={cn(
																"inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em]",
																isLast
																	? "border-sagy-success/30 bg-sagy-success/10 text-sagy-success"
																	: "border-sagy-accent/25 bg-sagy-accent/10 text-sagy-accent",
															)}
														>
															{isLast && (
																<span className="size-1.5 rounded-full bg-sagy-success motion-safe:animate-pulse" />
															)}
															{milestone.year}
														</span>
													</div>
													<h3 className="mt-3 font-display text-lg uppercase tracking-tight text-sagy-heading sm:text-xl">
														{milestone.title}
													</h3>
													<p className="mt-2 font-sans text-sm leading-relaxed text-sagy-body">
														{milestone.description}
													</p>
												</div>
											</article>
										</div>
										<div
											className={cn(
												"hidden sm:block",
												alignRight
													? "sm:col-start-1 sm:row-start-1"
													: "sm:col-start-2",
											)}
										/>
									</div>

									<div className="absolute left-4 top-7 -translate-x-1/2 sm:left-1/2">
										<div
											className={cn(
												"flex size-9 items-center justify-center rounded-full border",
												isLast
													? "border-sagy-accent/50 bg-sagy-accent shadow-sagy-glow"
													: "border-sagy-accent/25 bg-sagy-surface-elevated",
											)}
										>
											<Icon
												className={cn(
													"size-4",
													isLast ? "text-sagy-heading" : "text-sagy-accent",
												)}
												strokeWidth={1.5}
											/>
										</div>
										<span
											aria-hidden
											className={cn(
												"absolute top-1/2 h-px w-3 -translate-y-1/2 bg-gradient-to-r from-sagy-accent/50 to-transparent",
												alignRight
													? "left-full"
													: "left-full sm:left-auto sm:right-full sm:bg-gradient-to-l",
											)}
										/>
									</div>
								</motion.li>
							);
						})}
					</ol>
				</div>
			</div>
		</section>
	);
}
