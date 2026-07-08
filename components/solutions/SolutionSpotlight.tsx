import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { HeadingHighlight } from "./HeadingHighlight";
import { SolutionStackGraphic } from "./SolutionStackGraphic";
import type { SolutionPageData } from "./solution-types";

type SolutionSpotlightProps = {
	data: SolutionPageData["spotlight"];
};

export function SolutionSpotlight({ data }: SolutionSpotlightProps) {
	return (
		<section className="border-y border-border bg-slate-100 py-16 sm:py-24 dark:bg-muted/25">
			<Container>
				<div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
					<div>
						<p className="text-sm font-medium uppercase tracking-wider text-primary">
							{data.eyebrow}
						</p>
						<h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
							<HeadingHighlight
								text={data.title}
								highlight={data.titleHighlight}
							/>
						</h2>
						<p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
							{data.description}
						</p>
						<Button asChild size="lg" className="mt-8 gap-2 rounded-full">
							<Link
								href={data.ctaHref}
								{...(data.ctaExternal ? { target: "_blank" } : {})}
							>
								{data.cta}
								<ArrowUpRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-muted/30 shadow-sm">
						{data.graphic ? (
							<SolutionStackGraphic
								name={data.graphic}
								label={data.imageAlt}
							/>
						) : (
							<Image
								src={data.image}
								alt={data.imageAlt}
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
						)}
					</div>
				</div>
			</Container>
		</section>
	);
}
