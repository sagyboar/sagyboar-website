"use client";
import { featurePages } from "@/components/features/features-data";
import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function FirstFeaturesSection() {
	const total = featurePages.length + 1;

	return (
		<div className="mt-16 flex flex-col items-center justify-center px-4 sm:mt-20">
			<h2 className="text-center font-display text-2xl tracking-tight text-foreground sm:text-3xl lg:text-4xl">
				Engineering Freedom Meets{" "}
				<span className="text-blue-400 border-b-2 border-blue-400">
					AI Intelligence
				</span>
			</h2>
			<p className="mt-4 max-w-2xl text-center text-base tracking-tight text-muted-foreground sm:text-lg">
				Get the flexibility of self-hosting with the frictionless experience of
				a fully managed platform.
			</p>
			<div className="relative z-10 mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 py-6 sm:mt-10 sm:grid-cols-2 sm:py-10 lg:grid-cols-3 xl:grid-cols-4">
				{featurePages.map((feature, index) => (
					<Feature
						key={feature.slug}
						title={feature.navTitle}
						description={feature.navDescription}
						icon={feature.icon}
						href={`/features/${feature.slug}`}
						index={index}
						total={total}
					/>
				))}
				<CustomFeature index={featurePages.length} total={total} />
			</div>
		</div>
	);
}

const CustomFeature = ({
	index,
	total,
}: {
	index: number;
	total: number;
}) => {
	const isBottomRow = index >= total - (total % 4 === 0 ? 4 : total % 4);

	return (
		<Link
			href={Sagyboar_PORTAL_URL}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				"group/feature relative flex flex-col overflow-hidden border-border py-8 sm:py-10 lg:border-r",
				index % 4 === 0 && "lg:border-l",
				!isBottomRow && "lg:border-b",
			)}
		>
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-400/15 via-blue-400/5 to-transparent opacity-100 transition duration-200 group-hover/feature:from-blue-400/25 dark:from-blue-600/20 dark:group-hover/feature:from-blue-600/30" />
			<div className="relative z-10 mb-4 px-6 text-blue-500 sm:px-10 dark:text-blue-400">
				<Sparkles className="size-6" />
			</div>
			<div className="relative z-10 mb-2 px-6 text-base font-bold sm:px-10 sm:text-lg">
				<div className="absolute inset-y-0 left-0 h-8 w-1 origin-center rounded-br-full rounded-tr-full bg-blue-400 transition-all duration-200 group-hover/feature:h-10 dark:bg-blue-600" />
				<span className="inline-flex items-center gap-1 text-foreground transition duration-200 group-hover/feature:translate-x-2">
					Need something custom?
					<ArrowUpRight className="size-4 opacity-0 transition-opacity duration-200 group-hover/feature:opacity-100" />
				</span>
			</div>
			<p className="relative z-10 px-6 text-sm text-muted-foreground sm:px-10 lg:max-w-xs">
				We build custom code and deployment for you too — tell us what you need
				and our team ships it.
			</p>
		</Link>
	);
};

const Feature = ({
	title,
	description,
	icon: Icon,
	href,
	index,
	total,
}: {
	title: string;
	description: string;
	icon: React.ComponentType<{ className?: string }>;
	href: string;
	index: number;
	total: number;
}) => {
	const isTopRow = index < 4;
	const isBottomRow = index >= total - (total % 4 === 0 ? 4 : total % 4);

	return (
		<Link
			href={href}
			className={cn(
				"group/feature relative flex flex-col border-border py-8 sm:py-10 lg:border-r",
				index % 4 === 0 && "lg:border-l",
				!isBottomRow && "lg:border-b",
			)}
		>
			{isTopRow ? (
				<div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-muted/80 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
			) : (
				<div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-muted/80 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
			)}
			<div className="relative z-10 mb-4 px-6 text-muted-foreground sm:px-10">
				<Icon className="size-6" />
			</div>
			<div className="relative z-10 mb-2 px-6 text-base font-bold sm:px-10 sm:text-lg">
				<div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-border transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-400 dark:bg-neutral-700 dark:group-hover/feature:bg-blue-700" />
				<span className="inline-flex items-center gap-1 text-foreground transition duration-200 group-hover/feature:translate-x-2">
					{title}
					<ArrowUpRight className="size-4 opacity-0 transition-opacity duration-200 group-hover/feature:opacity-100" />
				</span>
			</div>
			<p className="relative z-10 px-6 text-sm text-muted-foreground sm:px-10 lg:max-w-xs">
				{description}
			</p>
		</Link>
	);
};
