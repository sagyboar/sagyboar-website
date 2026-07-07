"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";
import { timelineMilestones } from "./about-data";

export function AboutTimeline() {
	return (
		<section className="border-b border-border bg-muted/20 py-16 dark:bg-muted/10 sm:py-24">
			<Container>
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
						Our{" "}
						<span className="border-b-2 border-blue-400 text-blue-400">
							journey
						</span>
					</h2>
					<p className="mt-4 text-sm text-muted-foreground sm:text-base">
						From an idea to a platform teams rely on for deployment and
						infrastructure.
					</p>
				</div>

				<div className="relative mx-auto mt-14 max-w-4xl sm:mt-20">
					<div
						aria-hidden
						className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
					/>

					<ol className="space-y-10 sm:space-y-14">
						{timelineMilestones.map((milestone, index) => {
							const Icon = milestone.icon;
							const alignRight = index % 2 === 1;

							return (
								<motion.li
									key={milestone.title}
									initial={{ opacity: 0, y: 24 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-80px" }}
									transition={{ duration: 0.5, delay: 0.05 }}
									className="relative pl-12 sm:pl-0"
								>
									<div
										className={cn(
											"sm:grid sm:grid-cols-2 sm:items-center sm:gap-10",
										)}
									>
										<div
											className={cn(
												"sm:col-start-1",
												alignRight && "sm:col-start-2",
											)}
										>
											<div
												className={cn(
													"rounded-2xl border border-border bg-card p-6 shadow-sm",
													alignRight ? "sm:text-left" : "sm:text-right",
												)}
											>
												<p className="text-xs font-semibold uppercase tracking-wider text-primary">
													{milestone.year}
												</p>
												<h3 className="mt-2 font-display text-lg font-semibold text-foreground sm:text-xl">
													{milestone.title}
												</h3>
												<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
													{milestone.description}
												</p>
											</div>
										</div>
										<div
											className={cn(
												"hidden sm:block",
												alignRight ? "sm:col-start-1 sm:row-start-1" : "sm:col-start-2",
											)}
										/>
									</div>

									<div className="absolute left-4 top-6 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background shadow-sm sm:left-1/2">
										<Icon className="size-4 text-blue-400" strokeWidth={1.75} />
									</div>
								</motion.li>
							);
						})}
					</ol>
				</div>
			</Container>
		</section>
	);
}
