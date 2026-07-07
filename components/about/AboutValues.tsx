import { Container } from "@/components/Container";
import { aboutValues } from "./about-data";

export function AboutValues() {
	return (
		<section className="border-b border-border py-16 sm:py-24">
			<Container>
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
						How we{" "}
						<span className="border-b-2 border-blue-400 text-blue-400">
							operate
						</span>
					</h2>
					<p className="mt-4 text-sm text-muted-foreground sm:text-base">
						The principles that shape the platform and the team behind it.
					</p>
				</div>

				<div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 sm:mt-16">
					{aboutValues.map((value) => {
						const Icon = value.icon;

						return (
							<div
								key={value.title}
								className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
							>
								<div className="flex size-10 items-center justify-center rounded-xl border border-border/50 bg-accent/30 text-foreground">
									<Icon className="size-4.5" strokeWidth={1.75} />
								</div>
								<h3 className="mt-4 font-display text-lg font-semibold text-foreground sm:text-xl">
									{value.title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									{value.description}
								</p>
							</div>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
