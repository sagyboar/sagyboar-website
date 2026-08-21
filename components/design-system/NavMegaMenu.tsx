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
import { usePathname } from "next/navigation";
import { useReducedMotion } from "./useReducedMotion";

function isMenuItemActive(href: string, pathname: string): boolean {
	if (href.includes("#")) {
		const [path] = href.split("#");
		return pathname === path;
	}
	return pathname === href || pathname.startsWith(`${href}/`);
}

type NavMenuRowVariant = "row" | "tile";

export function NavMenuRow({
	item,
	onNavigate,
	variant = "row",
}: {
	item: NavMenuItem;
	onNavigate: () => void;
	variant?: NavMenuRowVariant;
}) {
	const pathname = usePathname();
	const Icon = item.icon;
	const active = isMenuItemActive(item.href, pathname);
	const isTile = variant === "tile";

	return (
		<Link
			href={item.href}
			onClick={onNavigate}
			aria-current={active ? "page" : undefined}
			className={cn(
				"group rounded-xl border transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent",
				isTile
					? "relative flex h-full min-h-[6.5rem] flex-col items-center justify-center gap-2.5 px-3 py-4 text-center"
					: "flex items-center gap-2.5 px-2.5 py-2",
				active
					? "border-sagy-accent/30 bg-sagy-accent/10"
					: "border-transparent hover:border-sagy-accent/25 hover:bg-sagy-heading/[0.04]",
			)}
		>
			<span
				className={cn(
					"flex shrink-0 items-center justify-center rounded-lg border transition-colors duration-200",
					isTile ? "size-10" : "size-8",
					active
						? "border-sagy-accent/40 bg-sagy-accent/15"
						: "border-sagy-border bg-sagy-heading/[0.04] group-hover:border-sagy-accent/30 group-hover:bg-sagy-accent/10",
				)}
			>
				<Icon
					className={cn("text-sagy-accent", isTile ? "size-4" : "size-3.5")}
					strokeWidth={1.75}
					aria-hidden="true"
				/>
			</span>
			<span
				className={cn(
					"min-w-0",
					isTile ? "flex flex-col items-center gap-1" : "flex-1",
				)}
			>
				<span
					className={cn(
						"flex flex-wrap items-center gap-2",
						isTile && "justify-center",
					)}
				>
					<span
						className={cn(
							"font-sans text-sm",
							active ? "font-medium text-sagy-heading" : "text-sagy-heading",
						)}
					>
						{item.title}
					</span>
					{item.badge && (
						<span className="shrink-0 rounded-full border border-sagy-accent/25 bg-sagy-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-sagy-accent">
							{item.badge}
						</span>
					)}
				</span>
				{item.description && (
					<span
						className={cn(
							"font-sans text-xs leading-relaxed text-sagy-muted",
							isTile ? "line-clamp-2 text-center" : "mt-0.5 block",
						)}
					>
						{item.description}
					</span>
				)}
			</span>
			{!isTile && (
				<ArrowUpRight
					className={cn(
						"size-3.5 shrink-0 transition-all duration-200",
						active
							? "translate-x-0.5 text-sagy-accent opacity-100"
							: "text-sagy-muted opacity-0 group-hover:translate-x-0.5 group-hover:text-sagy-accent group-hover:opacity-100",
					)}
					aria-hidden="true"
				/>
			)}
			{isTile && (
				<ArrowUpRight
					className={cn(
						"absolute right-3 top-3 size-3.5 transition-all duration-200",
						active
							? "text-sagy-accent opacity-100"
							: "text-sagy-muted opacity-0 group-hover:text-sagy-accent group-hover:opacity-100",
					)}
					aria-hidden="true"
				/>
			)}
		</Link>
	);
}

type NavMegaMenuProps = {
	menu: SiteNavMenuKey;
	id: string;
	onNavigate: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
};

/** Full-width dropdown aligned to the navbar, opens from the top */
export function NavMegaMenu({
	menu,
	id,
	onNavigate,
	onMouseEnter,
	onMouseLeave,
}: NavMegaMenuProps) {
	const reducedMotion = useReducedMotion();
	const footer = navMenuFooters[menu];
	const sections = navMenuSections[menu];

	return (
		<div
			className="absolute inset-x-0 top-full z-50 pt-3"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<motion.div
				id={id}
				initial={
					reducedMotion ? undefined : { opacity: 0, y: -16, scaleY: 0.96 }
				}
				animate={reducedMotion ? undefined : { opacity: 1, y: 0, scaleY: 1 }}
				transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
				style={{ transformOrigin: "top center" }}
				className="relative flex min-h-80 w-full flex-col overflow-hidden rounded-2xl border border-sagy-border bg-sagy-surface p-5 shadow-sagy-soft sm:p-6"
			>
				<div
					className="pointer-events-none absolute inset-0 bg-sagy-grain opacity-[0.05]"
					aria-hidden="true"
				/>
				<div
					className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-sagy-radial-glow opacity-70"
					aria-hidden="true"
				/>

				<div className="relative z-10 flex min-h-0 flex-1 flex-col">
					{menu === "company" ? (
						<div className="grid flex-1 grid-cols-1 gap-6 py-2 lg:grid-cols-3 lg:py-3">
							{/* Company — 2/3, horizontal tiles */}
							<div className="flex flex-col gap-2 lg:col-span-2">
								{sections
									.filter((section) => section.label === "Company")
									.map((section) => (
										<div key={section.label} className="flex h-full flex-col gap-2">
											<p className="px-1 font-mono text-[10px] uppercase tracking-[0.2em] text-sagy-muted">
												{section.label}
											</p>
											<div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3">
												{section.items.map((item) => (
													<NavMenuRow
														key={item.href}
														item={item}
														onNavigate={onNavigate}
														variant="tile"
													/>
												))}
											</div>
										</div>
									))}
							</div>

							{/* Legal — 1/3, vertical list */}
							<div className="flex flex-col gap-2 lg:col-span-1">
								{sections
									.filter((section) => section.label === "Legal")
									.map((section) => (
										<div key={section.label} className="flex h-full flex-col gap-2">
											<p className="px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-sagy-muted">
												{section.label}
											</p>
											<div className="flex flex-1 flex-col gap-1">
												{section.items.map((item) => (
													<NavMenuRow
														key={item.href}
														item={item}
														onNavigate={onNavigate}
														variant="row"
													/>
												))}
											</div>
										</div>
									))}
							</div>
						</div>
					) : menu === "solutions" ? (
						<div className="flex flex-1 flex-col gap-2 py-2 lg:py-3">
							{sections.map((section) => (
								<div key={section.label} className="flex flex-1 flex-col gap-2">
									<p className="px-1 font-mono text-[10px] uppercase tracking-[0.2em] text-sagy-muted">
										{section.label}
									</p>
									<div className="grid flex-1 grid-cols-3 gap-4 pb-1">
										{section.items.map((item) => (
											<NavMenuRow
												key={item.href}
												item={item}
												onNavigate={onNavigate}
												variant="tile"
											/>
										))}
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-2 py-2 lg:py-3">
							{sections.map((section) => (
								<div
									key={section.label}
									className="flex h-full min-h-0 flex-col gap-1.5"
								>
									<p className="px-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-sagy-muted">
										{section.label}
									</p>
									<div className="flex flex-1 flex-col gap-0.5">
										{section.items.map((item) => (
											<NavMenuRow
												key={item.href}
												item={item}
												onNavigate={onNavigate}
												variant="row"
											/>
										))}
									</div>
								</div>
							))}
						</div>
					)}

					<div className="mt-auto border-t border-sagy-border pt-4">
						<Link
							href={footer.href}
							onClick={onNavigate}
							className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-sagy-heading/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent"
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
