import { PricingSectionHeading } from "./PricingSectionHeading";
import { whyChooseSagyboar } from "./pricing-data";

export function PricingWhyChoose() {
	return (
		<div className="mx-auto max-w-7xl">
			<PricingSectionHeading before="Why choose" highlight="Sagyboar?" />
			<p className="mx-auto mt-4 max-w-2xl text-center font-sans text-sagy-body">
				Deploy faster, monitor smarter, and get a real team behind your stack —
				all without hiring a full DevOps department.
			</p>

			<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{whyChooseSagyboar.map((entry) => {
					const Icon = entry.icon;

					return (
						<article
							key={entry.title}
							className="sagy-spotlight sagy-tilt flex flex-col rounded-xl border border-white/[0.08] bg-sagy-surface p-6 shadow-sagy-card transition-colors hover:border-sagy-accent/25"
						>
							<div className="flex size-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
								<Icon className="size-4 text-sagy-body" strokeWidth={1.5} />
							</div>
							<h3 className="mt-4 font-sans text-base font-medium leading-snug text-white">
								{entry.title}
							</h3>
							<p className="mt-3 font-sans text-sm leading-relaxed text-sagy-body">
								{entry.description}
							</p>
						</article>
					);
				})}
			</div>
		</div>
	);
}
