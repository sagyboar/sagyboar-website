"use client";

import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "@/components/ui/scroll-stack";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";
import type { SolutionPageData } from "./solution-types";

type SolutionStackProps = {
	data: SolutionPageData["stack"];
};

export function SolutionStack({ data }: SolutionStackProps) {
	return (
		<section className="border-b border-border bg-muted/20 py-16 dark:bg-muted/10 sm:py-24">
			<Container>
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
						{data.title}
					</h2>
					<p className="mt-4 text-sm text-muted-foreground sm:text-base">
						{data.subtitle}
					</p>
				</div>
			</Container>

			<div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
				<ScrollStack
					useWindowScroll
					itemDistance={80}
					itemScale={0.04}
					itemStackDistance={24}
					stackPosition="22%"
					scaleEndPosition="12%"
					baseScale={0.88}
					blurAmount={1.5}
					rotationAmount={0}
				>
					{data.sections.map((card, index) => {
						const imageOnRight = index % 2 === 1;

						return (
							<ScrollStackItem
								key={card.title}
								itemClassName="h-auto min-h-[22rem] overflow-hidden p-0 sm:min-h-[16rem]"
							>
								<div className="grid h-full min-h-[22rem] sm:min-h-[16rem] sm:grid-cols-2">
									<div
										className={cn(
											"relative min-h-[12rem] bg-muted/40 sm:min-h-full",
											imageOnRight ? "order-1 sm:order-2" : "order-1",
										)}
									>
										<Image
											src={card.image}
											alt={card.imageAlt}
											fill
											className="object-cover"
											sizes="(max-width: 640px) 100vw, 50vw"
										/>
									</div>

									<div
										className={cn(
											"order-2 flex flex-col justify-center p-6 sm:p-8",
											imageOnRight && "sm:order-1",
										)}
									>
										<p className="text-xs font-medium uppercase tracking-wider text-primary">
											0{index + 1}
										</p>
										<h3 className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl">
											{card.title}
										</h3>
										<p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
											{card.description}
										</p>
									</div>
								</div>
							</ScrollStackItem>
						);
					})}
				</ScrollStack>
			</div>
		</section>
	);
}
