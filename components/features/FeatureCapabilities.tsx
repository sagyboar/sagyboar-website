import { Container } from "@/components/Container";
import { HeadingHighlight } from "@/components/solutions/HeadingHighlight";
import { FeatureBadge } from "./FeatureBadge";
import { FeatureItemMedia } from "./FeatureItemMedia";
import type { FeatureItem } from "./features-data";

type FeatureCapabilitiesProps = {
	featureTitle: string;
	items: FeatureItem[];
};

export function FeatureCapabilities({
	featureTitle,
	items,
}: FeatureCapabilitiesProps) {
	return (
		<section className="py-20 sm:py-28">
			<Container>
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
						<HeadingHighlight text="What's included" highlight="included" />
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Everything {featureTitle} brings to your stack.
					</p>
				</div>

				<div className="mx-auto mt-14 flex max-w-6xl flex-col gap-16 sm:mt-16 sm:gap-20 lg:gap-24">
					{items.map((item, index) => (
						<article
							key={item.name}
							className="grid items-center gap-8 border-b border-border/60 pb-16 last:border-b-0 last:pb-0 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16"
						>
							{/* Text — always left on desktop */}
							<div className="min-w-0 lg:pr-4">
								<div className="flex flex-wrap items-center gap-3">
									<span className="text-xs font-medium uppercase tracking-wider text-primary">
										{String(index + 1).padStart(2, "0")}
									</span>
									<FeatureBadge badge={item.badge} />
								</div>
								<h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
									{item.name}
								</h3>
								<p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
									{item.description}
								</p>
							</div>

							{/* Image — always right on desktop, below text on mobile */}
							<div className="min-w-0 lg:pl-2">
								<FeatureItemMedia item={item} index={index} />
							</div>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
