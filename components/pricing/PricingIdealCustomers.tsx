"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PricingSectionHeading } from "./PricingSectionHeading";
import { type PricingAudience, audienceIdealCustomers } from "./pricing-data";

type PricingIdealCustomersProps = {
	audience: PricingAudience;
};

export function PricingIdealCustomers({
	audience,
}: PricingIdealCustomersProps) {
	const { customers, thread } = audienceIdealCustomers[audience];

	return (
		<div className="mx-auto max-w-7xl">
			<PricingSectionHeading before="Ideal customer" highlight="profile" />

			<AnimatePresence mode="wait">
				<motion.div
					key={audience}
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -8 }}
					transition={{ duration: 0.2 }}
				>
					<div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3">
						{customers.map((customer, index) => {
							const Icon = customer.icon;
							return (
								<motion.div
									key={customer.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-40px" }}
									transition={{
										duration: 0.45,
										delay: index * 0.08,
										ease: [0.22, 1, 0.36, 1],
									}}
									className="flex flex-col items-center gap-3 sagy-spotlight rounded-xl border border-white/[0.08] bg-sagy-surface p-6 text-center shadow-sagy-card transition-colors hover:border-sagy-accent/25"
								>
									<div className="flex size-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
										<Icon className="size-4 text-sagy-body" strokeWidth={1.5} />
									</div>
									<span className="font-sans text-sm font-medium text-white">
										{customer.title}
									</span>
								</motion.div>
							);
						})}
					</div>

					<p className="mx-auto mt-8 max-w-3xl sagy-spotlight rounded-xl border border-white/[0.08] bg-sagy-surface px-6 py-5 text-center font-sans text-sagy-body shadow-sagy-card">
						{thread}
					</p>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
