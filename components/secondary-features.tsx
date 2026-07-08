"use client";

import { Tab } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const features = [
    {
        title: "AI-Setup",
        description:
            "We connect your repository and configure an AI-native workflow from day one — intelligent monitoring, smart defaults, and automated diagnosis so your app is production-ready without the manual grind.",
        image: "https://ik.imagekit.io/sagyboar/AI_Setup.png?updatedAt=1783488816090",
    },
    {
        title: "Docker Setup",
        description:
            "We containerize your application with optimized, production-grade Docker images — consistent builds across every environment and reliable deployments with none of the configuration headaches.",
        image: "https://ik.imagekit.io/sagyboar/Docker.png?updatedAt=1783488818358",
    },
    {
        title: "CI/CD Pipeline Management",
        description:
            "We build and fine-tune your continuous integration and deployment pipelines so every push ships safely — automated tests, builds, and zero-downtime releases that accelerate your time-to-market.",
        image: "https://ik.imagekit.io/sagyboar/CI_CD.png?updatedAt=1783488818385",
    },
    {
        title: "Remote Server Setup",
        description:
            "We provision, secure, and scale your remote servers — networking, SSL, and 24/7 health handled by our team so your infrastructure just works, without waking up your core engineers.",
        image: "https://ik.imagekit.io/sagyboar/Remote-server.png?updatedAt=1783488818038",
    },
];

export function SecondaryFeaturesSections() {
    const [tabOrientation, setTabOrientation] = useState<
        "horizontal" | "vertical"
    >("horizontal");

    useEffect(() => {
        const lgMediaQuery = window.matchMedia("(min-width: 1024px)");

        function onMediaQueryChange({ matches }: { matches: boolean }) {
            setTabOrientation(matches ? "vertical" : "horizontal");
        }

        onMediaQueryChange(lgMediaQuery);
        lgMediaQuery.addEventListener("change", onMediaQueryChange);

        return () => {
            lgMediaQuery.removeEventListener("change", onMediaQueryChange);
        };
    }, []);

    const [isMounted, setIsMounted] = useState(false);

    // Cambiar isMounted a true después del primer render
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
                    Fully <span className="text-blue-400 border-b-2 border-blue-400">Managed </span>Setup
                    </h2>
                    <p className="mt-6 text-lg tracking-tight text-muted-foreground">
                    From first commit to production, our team handles the setup so you can stay focused on building your product.
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
                                    <Tab.Panel key={`panel-${index}`}>
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
                                            className="mx-auto relative mt-10 flex w-full  aspect-video flex-col overflow-hidden rounded-xl border border-stone-200/80 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-800 lg:mt-0"
                                        >
                                            <div className="flex h-9 w-full shrink-0 items-center justify-start space-x-1.5 bg-stone-100 px-3 dark:bg-neutral-900 sm:h-11">
                                                <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
                                            </div>
                                            <div className="aspect-[16/10] w-full bg-stone-100 dark:bg-neutral-950 lg:aspect-[16/11]">
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    fill
                                                    className="h-full w-full object-cover object-left-top"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </div>
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