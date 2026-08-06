"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Circle } from "lucide-react";
import { PricingSectionHeading } from "./PricingSectionHeading";
import {
	type PricingAudience,
	audienceGeneralTerms,
	audiencePlanLimitations,
} from "./pricing-data";

type PricingGeneralTermsProps = {
	audience: PricingAudience;
};

export function PricingGeneralTerms({ audience }: PricingGeneralTermsProps) {
	const planLimitations = audiencePlanLimitations[audience];
	const generalTerms = audienceGeneralTerms[audience];
	const columns =
		planLimitations.length >= 4
			? "sm:grid-cols-2 lg:grid-cols-4"
			: "sm:grid-cols-2 lg:grid-cols-3";

	return (
		<div className="mx-auto mt-12 max-w-7xl">
			<PricingSectionHeading before="General" highlight="terms" />
			<p className="mx-auto mt-3 max-w-2xl text-center font-sans text-sm text-sagy-body">
				{audience === "user"
					? "Limits and policies for Indie plans (hosted on our infra, billed monthly or annually in USD)."
					: "Limits and policies for Team BYOC plans (your cloud, billed monthly in USD)."}
			</p>

			<AnimatePresence mode="wait">
				<motion.div
					key={audience}
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -8 }}
					transition={{ duration: 0.2 }}
				>
					<div className={`mt-10 grid gap-4 ${columns}`}>
						{planLimitations.map((plan) => (
							<article
								key={plan.id}
								className="flex flex-col sagy-spotlight rounded-xl border border-sagy-border bg-sagy-surface p-5 shadow-sagy-card"
							>
								<div className="border-b border-sagy-border pb-3">
									<h3 className="font-display text-base uppercase tracking-tight text-sagy-heading">
										{plan.name}
									</h3>
									<p className="mt-0.5 font-sans text-xs text-sagy-body">
										{plan.price}
									</p>
								</div>
								<p className="mt-3 text-xs font-semibold uppercase tracking-wider text-sagy-heading">
									Limitations
								</p>
								<ul className="mt-3 flex flex-col gap-2 font-sans text-xs leading-relaxed text-sagy-body">
									{plan.items.map((item) => (
										<li key={item} className="flex gap-2">
											<Circle className="mt-1.5 h-1.5 w-1.5 shrink-0 fill-sagy-muted text-sagy-muted" />
											{item}
										</li>
									))}
								</ul>
							</article>
						))}
					</div>

					<div className="mt-6 flex max-w-4xl flex-col gap-2.5 font-sans text-sm text-sagy-body">
						{generalTerms.map((term) => (
							<p key={term} className="flex gap-2">
								<Circle className="mt-2 h-1.5 w-1.5 shrink-0 fill-sagy-accent text-sagy-accent" />
								{term}
							</p>
						))}
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
