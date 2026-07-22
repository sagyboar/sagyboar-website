"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { pricingModels, type PricingAudience } from "./pricing-data";

const AUDIENCE_OPTIONS: {
	id: PricingAudience;
	label: string;
}[] = [
	{ id: pricingModels.indie.audience, label: pricingModels.indie.name },
	{ id: pricingModels.team.audience, label: pricingModels.team.name },
];

type PricingAudienceToggleProps = {
	value: PricingAudience;
	onChange: (value: PricingAudience) => void;
	className?: string;
};

export function PricingAudienceToggle({
	value,
	onChange,
	className,
}: PricingAudienceToggleProps) {
	return (
		<div
			role="tablist"
			aria-label="Pricing audience"
			className={cn(
				"mx-auto flex w-fit items-center gap-1 rounded-full border border-border bg-muted/40 p-1",
				className,
			)}
		>
			{AUDIENCE_OPTIONS.map((option) => {
				const selected = value === option.id;

				return (
					<button
						key={option.id}
						type="button"
						role="tab"
						aria-selected={selected}
						onClick={() => onChange(option.id)}
						className={cn(
							"relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
							selected
								? "text-background"
								: "text-muted-foreground hover:text-foreground",
						)}
					>
						{selected ? (
							<motion.span
								layoutId="pricing-audience-pill"
								className="absolute inset-0 rounded-full bg-foreground shadow-sm"
								transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
							/>
						) : null}
						<span className="relative z-10">{option.label}</span>
					</button>
				);
			})}
		</div>
	);
}
