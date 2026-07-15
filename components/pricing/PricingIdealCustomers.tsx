"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PricingSectionHeading } from "./PricingSectionHeading";
import {
	audienceIdealCustomers,
	type PricingAudience,
} from "./pricing-data";

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
									className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/50 p-6 text-center shadow-sm transition-colors hover:border-primary/40"
								>
									<div className="flex size-11 items-center justify-center rounded-xl border border-border/50 bg-primary/10 text-primary">
										<Icon className="size-5" strokeWidth={1.75} />
									</div>
									<span className="text-sm font-medium text-foreground">
										{customer.title}
									</span>
								</motion.div>
							);
						})}
					</div>

					<p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-muted/20 px-6 py-5 text-center text-muted-foreground">
						{thread}
					</p>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
