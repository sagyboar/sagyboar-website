"use client";

import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";
import {
	JobsWhyWorkGraphic,
	type JobsGraphicName,
} from "./JobsWhyWorkGraphic";
import { whyWorkAtSagyboar } from "./jobs-data";

export function JobsWhyWork() {
	return (
		<section className="border-b border-border bg-muted/20 py-16 dark:bg-muted/10 sm:py-24">
			<Container>
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
						Why work at{" "}
						<span className="border-b-2 border-blue-400 text-blue-400">
							Sagyboar
						</span>
					</h2>
					<p className="mt-4 text-sm text-muted-foreground sm:text-base">
						Scroll to explore what makes building your career here different.
					</p>
				</div>

				<div className="mx-auto mt-10 max-w-5xl sm:mt-14">
					{whyWorkAtSagyboar.map((card, index) => {
						const imageOnRight = index % 2 === 1;

						return (
							<div
								key={card.title}
								className="sticky pb-6 sm:pb-8"
								style={{ top: `calc(5.5rem + ${index * 0.75}rem)` }}
							>
								<div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
									<div className="grid sm:grid-cols-2">
										<div
											className={cn(
												"relative aspect-[16/10] bg-muted/40 sm:aspect-auto sm:min-h-[19rem]",
												imageOnRight ? "sm:order-2" : "sm:order-1",
											)}
										>
											<JobsWhyWorkGraphic
												name={card.graphic as JobsGraphicName}
												label={card.imageAlt}
											/>
										</div>

										<div
											className={cn(
												"flex flex-col justify-center p-6 sm:p-10",
												imageOnRight ? "sm:order-1" : "sm:order-2",
											)}
										>
											<p className="text-xs font-medium uppercase tracking-wider text-primary">
												0{index + 1}
											</p>
											<h3 className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl">
												{card.title}
											</h3>
											<p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
												{card.description}
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
