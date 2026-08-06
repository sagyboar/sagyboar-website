"use client";

import {
	type NavMenuItem,
	navMenuFooters,
	navMenuSections,
} from "@/constants/navigation";
import type { SiteNavMenuKey } from "@/constants/site-nav";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "./useReducedMotion";

const panelWidths: Record<SiteNavMenuKey, string> = {
	features: "w-[44rem]",
	solutions: "w-[26rem]",
	company: "w-[24rem]",
};

const panelLayouts: Record<SiteNavMenuKey, string> = {
	features: "grid grid-cols-2 gap-x-4 gap-y-2",
	solutions: "flex flex-col gap-1",
	company: "flex flex-col gap-4",
};

export function NavMenuRow({
	item,
	onNavigate,
}: {
	item: NavMenuItem;
	onNavigate: () => void;
}) {
	const Icon = item.icon;

	return (
		<Link
			href={item.href}
			onClick={onNavigate}
			className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-colors duration-200 hover:border-sagy-accent/25 hover:bg-sagy-heading/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent"
		>
			<span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-sagy-border bg-sagy-heading/[0.04] transition-colors duration-200 group-hover:border-sagy-accent/30 group-hover:bg-sagy-accent/10">
				<Icon
					className="size-4 text-sagy-accent"
					strokeWidth={1.75}
					aria-hidden="true"
				/>
			</span>
			<span className="min-w-0 flex-1">
				<span className="flex flex-wrap items-center gap-2">
					<span className="font-sans text-sm text-sagy-heading">{item.title}</span>
					{item.badge && (
						<span className="shrink-0 rounded-full border border-sagy-accent/25 bg-sagy-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-sagy-accent">
							{item.badge}
						</span>
					)}
				</span>
				{item.description && (
					<span className="mt-0.5 block font-sans text-xs leading-relaxed text-sagy-muted">
						{item.description}
					</span>
				)}
			</span>
			<ArrowUpRight
				className="mt-1 size-3.5 shrink-0 text-sagy-muted opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-sagy-accent group-hover:opacity-100"
				aria-hidden="true"
			/>
		</Link>
	);
}

type NavMegaMenuProps = {
	menu: SiteNavMenuKey;
	id: string;
	onNavigate: () => void;
};

/** Hover/focus dropdown listing the sub-pages of a primary nav tab */
export function NavMegaMenu({ menu, id, onNavigate }: NavMegaMenuProps) {
	const reducedMotion = useReducedMotion();
	const footer = navMenuFooters[menu];

	return (
		<div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
			<motion.div
				id={id}
				initial={reducedMotion ? undefined : { opacity: 0, y: -8 }}
				animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
				transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
				className={cn(
					// Opaque on purpose — a translucent panel ghosts the page copy behind it
					"relative overflow-hidden rounded-2xl border border-sagy-border bg-sagy-surface p-4 shadow-sagy-soft",
					"max-w-[calc(100vw-2rem)]",
					panelWidths[menu],
				)}
			>
				<div
					className="pointer-events-none absolute inset-0 bg-sagy-grain opacity-[0.05]"
					aria-hidden="true"
				/>
				<div
					className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-sagy-radial-glow opacity-70"
					aria-hidden="true"
				/>

				<div className="relative z-10">
					<div className={panelLayouts[menu]}>
						{navMenuSections[menu].map((section) => (
							<div key={section.label} className="flex flex-col gap-1">
								<p className="px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-sagy-muted">
									{section.label}
								</p>
								{section.items.map((item) => (
									<NavMenuRow
										key={item.href}
										item={item}
										onNavigate={onNavigate}
									/>
								))}
							</div>
						))}
					</div>

					<div className="mt-3 border-t border-sagy-border pt-3">
						<Link
							href={footer.href}
							onClick={onNavigate}
							className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-sagy-heading/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent"
						>
							<span className="font-mono text-[11px] uppercase tracking-wider text-sagy-body group-hover:text-sagy-heading">
								{footer.label}
							</span>
							<span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-sagy-muted">
								{footer.hint}
								<ArrowRight
									className="size-3.5 text-sagy-accent transition-transform duration-200 group-hover:translate-x-0.5"
									aria-hidden="true"
								/>
							</span>
						</Link>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
