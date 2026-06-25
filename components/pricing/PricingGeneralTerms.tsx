import { Circle } from "lucide-react";
import { generalTerms, planLimitations } from "./pricing-data";
import { PricingSectionHeading } from "./PricingSectionHeading";

export function PricingGeneralTerms() {
	return (
		<div className="mx-auto mt-12 max-w-7xl">
			<PricingSectionHeading
				before="General"
				highlight="terms"
			/>

			<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{planLimitations.map((plan) => (
					<article
						key={plan.id}
						className="flex flex-col rounded-2xl border border-border bg-card/50 p-5 shadow-sm"
					>
						<div className="border-b border-border/60 pb-3">
							<h3 className="font-display text-base font-semibold tracking-tight text-foreground">
								{plan.name}
							</h3>
							<p className="mt-0.5 text-xs text-muted-foreground">{plan.price}</p>
						</div>
						<p className="mt-3 text-xs font-semibold uppercase tracking-wider text-foreground">
							Limitations
						</p>
						<ul className="mt-3 flex flex-col gap-2 text-xs leading-relaxed text-muted-foreground">
							{plan.items.map((item) => (
								<li key={item} className="flex gap-2">
									<Circle className="mt-1.5 h-1.5 w-1.5 shrink-0 fill-muted-foreground text-muted-foreground" />
									{item}
								</li>
							))}
						</ul>
					</article>
				))}
			</div>

			<div className="mt-6 flex max-w-4xl flex-col gap-2.5 text-sm text-muted-foreground">
				{generalTerms.map((term) => (
					<p key={term} className="flex gap-2">
						<Circle className="mt-2 h-1.5 w-1.5 shrink-0 fill-primary text-primary" />
						{term}
					</p>
				))}
			</div>
		</div>
	);
}
