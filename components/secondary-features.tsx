"use client";

import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const features = [
	{
		title: "Sagyboar Dashboard",
		description:
			"One control plane for every project — deploy apps, watch live logs and metrics, manage databases, and track incidents from a single dashboard. See what’s running, what’s failing, and what needs attention without hopping between tools.",
		image: "/images/Dashboard.png",
		width: 1771,
		height: 888,
		showFullImage: true,
	},
	{
		title: "Sagy AI",
		description:
			"Ask anything related to your deployment — from configs and logs to incidents and rollbacks. Sagy AI understands your stack and answers in context, so you get clear next steps without digging through dashboards.",
		image: "/images/Dashboard.png",
		overlayImage: "/images/sagy_ai2.png",
		width: 1771,
		height: 888,
		showFullImage: true,
	},
] as const;

export function SecondaryFeaturesSections() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<section
			id="features"
			aria-label="Features for running your books"
			className="border-y border-stone-200/80 bg-stone-50 pb-28 pt-20 dark:border-neutral-800 dark:bg-neutral-900 sm:py-32"
		>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[58%] bg-gradient-to-b from-stone-50 via-stone-50/95 to-transparent dark:from-neutral-900 dark:via-neutral-900/95 dark:to-transparent"
			/>

			<div className="relative z-10 mx-auto max-w-7xl max-lg:px-4">
				<div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
					<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
						Fully{" "}
						<span className="text-blue-400 border-b-2 border-blue-400">
							Managed{" "}
						</span>
						Setup
					</h2>
					<p className="mt-6 text-lg tracking-tight text-muted-foreground">
						From first commit to production, our team handles the setup so you
						can stay focused on building your product.
					</p>
				</div>
				<Tab.Group
					as="div"
					className="mt-6 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-10"
					vertical={false}
				>
					{({ selectedIndex }) => (
						<>
							<div className="-mx-4 flex overflow-visible overflow-x-auto pb-4 sm:mx-0 sm:pb-0">
								<Tab.List
									aria-description="primary feature tabs"
									aria-roledescription="primary feature tabs"
									className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 "
								>
									{features.map((feature, featureIndex) => (
										<motion.div
											layout
											initial={false}
											key={`feature-${featureIndex}`}
											className="group relative rounded-full px-4 py-1 transition-colors"
										>
											<AnimatePresence>
												{selectedIndex === featureIndex && (
													<motion.span
														layoutId="tab"
														className="absolute inset-0 z-0 rounded-full bg-foreground shadow-sm"
														initial={{ opacity: 1 }}
														animate={{ opacity: 1 }}
														exit={{ opacity: 0 }}
														transition={{
															type: "spring",
															bounce: 0.2,
															duration: 0.5,
														}}
													/>
												)}
											</AnimatePresence>
											<h3>
												<Tab
													className={cn(
														"relative z-10 font-display text-lg transition-colors ui-not-focus-visible:outline-none",
														"text-muted-foreground hover:text-foreground",
														"ui-selected:font-medium ui-selected:text-background",
													)}
												>
													<span className="absolute inset-0 rounded-full" />
													<span className="relative">{feature.title}</span>
												</Tab>
											</h3>
											<p
												className={cn(
													"mt-2 hidden text-sm text-muted-foreground ",
												)}
											>
												{feature.description}
											</p>
										</motion.div>
									))}
								</Tab.List>
							</div>
							<Tab.Panels className="">
								{features.map((feature, index) => (
									<Tab.Panel
										key={`panel-${index}`}
										className={cn(
											"overlayImage" in feature &&
												feature.overlayImage &&
												"pb-10 sm:pb-14",
										)}
									>
										<div className="relative sm:px-6 ">
											<div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/80 ring-1 ring-inset ring-stone-200/80 dark:bg-neutral-800/80 dark:ring-neutral-700 sm:inset-x-0 sm:rounded-t-xl" />
											<p className="relative mx-auto mb-10 max-w-5xl text-base text-muted-foreground sm:text-center">
												{feature.description}
											</p>
										</div>

										<motion.div
											key={feature.title}
											initial={isMounted ? { opacity: 0.4 } : {}}
											animate={isMounted ? { opacity: 1 } : {}}
											exit={{ opacity: 0, x: -50 }}
											transition={{
												type: "spring",
												bounce: 0.2,
												duration: 0.8,
											}}
											className={cn(
												"relative mx-auto mt-10 w-full rounded-xl border border-stone-200/80 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-800 lg:mt-0",
												"overlayImage" in feature && feature.overlayImage
													? "overflow-visible"
													: "overflow-hidden",
											)}
										>
											<div
												className={cn(
													"relative w-full overflow-hidden rounded-xl bg-stone-100 dark:bg-neutral-950",
													"showFullImage" in feature && feature.showFullImage
														? "aspect-auto"
														: "aspect-[16/10] lg:aspect-[16/11]",
												)}
											>
												{"showFullImage" in feature && feature.showFullImage ? (
													<Image
														src={feature.image}
														alt={feature.title}
														width={feature.width}
														height={feature.height}
														className="h-auto w-full object-contain object-center"
														sizes="(max-width: 768px) 100vw, 960px"
														priority={index === 0}
													/>
												) : (
													<Image
														src={feature.image}
														alt={feature.title}
														fill
														className="object-cover object-left-top"
														sizes="(max-width: 768px) 100vw, 960px"
														priority={index === 0}
													/>
												)}
											</div>

											{"overlayImage" in feature && feature.overlayImage ? (
												<div className="absolute -bottom-4 right-1 z-20 w-[58%] max-w-[560px] sm:-bottom-6 sm:right-3 sm:w-[52%] sm:max-w-[620px] lg:right-5 lg:w-[48%] lg:max-w-[680px]">
													<div className="relative aspect-[1362/1155] w-full overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] ring-1 ring-black/5 dark:border-neutral-700 dark:bg-neutral-900 dark:ring-white/10">
														<Image
															src={feature.overlayImage}
															alt="Sagy AI assistant"
															fill
															className="object-contain object-center"
															sizes="(max-width: 640px) 58vw, 680px"
															priority={index === 0}
														/>
													</div>
												</div>
											) : null}
										</motion.div>
									</Tab.Panel>
								))}
							</Tab.Panels>
						</>
					)}
				</Tab.Group>
			</div>
		</section>
	);
}
