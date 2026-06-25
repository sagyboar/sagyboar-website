"use client";

import CardSwap, { Card } from "@/components/ui/card-swap";
import { PricingSectionHeading } from "./PricingSectionHeading";
import { whyChooseSagyboar } from "./pricing-data";

export function PricingWhyChoose() {
	return (
		<div className="mx-auto mt-12 grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<div className="text-center lg:text-left">
				<PricingSectionHeading
					before="Why choose"
					highlight="Sagyboar?"
					centered={false}
					className="lg:text-left"
				/>
				<p className="mt-4 max-w-lg text-muted-foreground lg:mx-0 mx-auto">
					Deploy faster, monitor smarter, and get a real team behind your stack —
					all without hiring a full DevOps department.
				</p>
				<p className="mt-6 hidden text-sm text-muted-foreground lg:block">
					Hover to pause · click any card to bring it to the front
				</p>
			</div>

			<div className="relative mx-auto h-[28rem] w-full max-w-xl sm:h-[32rem] lg:mx-0 lg:ml-auto">
				<CardSwap
					width={380}
					height={300}
					cardDistance={50}
					verticalDistance={60}
					delay={4500}
					pauseOnHover
					skewAmount={5}
					easing="elastic"
				>
					{whyChooseSagyboar.map((entry) => {
						const Icon = entry.icon;
						return (
							<Card
								key={entry.title}
								className="flex cursor-pointer flex-col p-6"
							>
								<div className="flex size-11 items-center justify-center rounded-xl border border-border/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
									<Icon className="size-5" strokeWidth={1.75} />
								</div>
								<h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
									{entry.title}
								</h3>
								<p className="mt-3 line-clamp-5 text-sm leading-relaxed text-muted-foreground">
									{entry.description}
								</p>
							</Card>
						);
					})}
				</CardSwap>
			</div>
		</div>
	);
}
