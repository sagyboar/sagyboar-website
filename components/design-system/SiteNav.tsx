"use client";

import { GlowButton } from "@/components/design-system/GlowButton";
import { NavMegaMenu } from "@/components/design-system/NavMegaMenu";
import { ThemeToggle } from "@/components/ui/sagy/theme-toggle";
import { Sagyboar_LOGO_SRC, Sagyboar_PORTAL_URL } from "@/constants/branding";
import { navMenuSections } from "@/constants/navigation";
import {
	type SiteNavMenuKey,
	featuresSubTabs,
	isNavLinkActive,
	siteNavLinks,
} from "@/constants/site-nav";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const CLOSE_DELAY_MS = 140;

/** Unified floating pill nav — homepage + features + all pages */
export function SiteNav() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [hash, setHash] = useState("");
	const [openMenu, setOpenMenu] = useState<SiteNavMenuKey | null>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState<SiteNavMenuKey | null>(
		null,
	);
	const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
	const isFeaturesPage = pathname === "/features";

	const cancelClose = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		closeTimer.current = null;
	};

	const openMenuNow = (menu: SiteNavMenuKey) => {
		cancelClose();
		setOpenMenu(menu);
	};

	/** Small grace period so the pointer can travel from tab to panel */
	const scheduleClose = () => {
		cancelClose();
		closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY_MS);
	};

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const updateHash = () => setHash(window.location.hash);
		updateHash();
		window.addEventListener("hashchange", updateHash);
		return () => window.removeEventListener("hashchange", updateHash);
	}, []);

	useEffect(() => {
		setMobileOpen(false);
		setMobileMenuOpen(null);
		setOpenMenu(null);
	}, [pathname]);

	useEffect(() => {
		if (!openMenu) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setOpenMenu(null);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [openMenu]);

	useEffect(() => cancelClose, []);

	return (
		<header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
			<div className="mx-auto max-w-6xl space-y-2">
				{/*
				 * `backdrop-blur` makes the nav its own stacking context, so the
				 * dropdown panel inside it can only outrank the sub-tab strip and
				 * mobile menu below if the nav itself sits on a higher layer.
				 */}
				<nav
					aria-label="Main navigation"
					className={cn(
						"relative z-20 flex items-center justify-between gap-4 rounded-full border border-sagy-border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-5",
						scrolled ? "bg-sagy-bg/80 shadow-sagy-soft" : "bg-sagy-bg/50",
					)}
				>
					{/* Brand */}
					<Link
						href="/"
						className="flex shrink-0 items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent"
						aria-label="Sagyboar home"
					>
						<Image
							src={Sagyboar_LOGO_SRC}
							alt=""
							width={32}
							height={32}
							className="size-8 object-contain"
							aria-hidden="true"
						/>
						<span className="hidden font-display text-sm uppercase tracking-wide text-sagy-heading sm:inline">
							Sagyboar
						</span>
						<span className="rounded-md border border-sagy-border bg-sagy-heading/[0.04] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-sagy-muted">
							AI-DevOps
						</span>
					</Link>

					{/* Center tabs — desktop */}
					<ul className="hidden items-center gap-0.5 lg:flex">
						{siteNavLinks.map((link) => {
							const active = isNavLinkActive(link, pathname, hash);
							const expanded = link.menu ? openMenu === link.menu : false;
							const panelId = link.menu ? `nav-menu-${link.menu}` : undefined;

							return (
								<li
									key={link.label}
									className="relative"
									onMouseEnter={
										link.menu ? () => openMenuNow(link.menu!) : undefined
									}
									onMouseLeave={link.menu ? scheduleClose : undefined}
									onFocus={
										link.menu ? () => openMenuNow(link.menu!) : undefined
									}
									onBlur={link.menu ? scheduleClose : undefined}
								>
									<Link
										href={link.href}
										target={link.external ? "_blank" : undefined}
										rel={link.external ? "noopener noreferrer" : undefined}
										className={cn(
											"flex items-center gap-1 rounded-lg px-3 py-1.5 font-sans text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent",
											active || expanded
												? "bg-sagy-accent/15 text-sagy-heading"
												: "text-sagy-body hover:text-sagy-heading",
										)}
										aria-current={active ? "page" : undefined}
										aria-expanded={link.menu ? expanded : undefined}
										aria-controls={expanded ? panelId : undefined}
									>
										{link.label}
										{link.menu && (
											<ChevronDown
												className={cn(
													"size-3.5 text-sagy-muted transition-transform duration-200",
													expanded && "rotate-180 text-sagy-accent",
												)}
												aria-hidden="true"
											/>
										)}
									</Link>

									{link.menu && expanded && (
										<NavMegaMenu
											menu={link.menu}
											id={`nav-menu-${link.menu}`}
											onNavigate={() => setOpenMenu(null)}
										/>
									)}
								</li>
							);
						})}
					</ul>

					{/* Right actions */}
					<div className="flex items-center gap-2 sm:gap-3">
						<ThemeToggle />
						<GlowButton
							href={Sagyboar_PORTAL_URL}
							external
							className="hidden !px-4 !py-2 sm:inline-flex"
						>
							Launch App
						</GlowButton>
						<button
							type="button"
							className="inline-flex size-9 items-center justify-center rounded-lg border border-sagy-border bg-sagy-heading/[0.04] text-sagy-body lg:hidden"
							onClick={() => setMobileOpen((o) => !o)}
							aria-expanded={mobileOpen}
							aria-label={mobileOpen ? "Close menu" : "Open menu"}
						>
							{mobileOpen ? (
								<X className="size-4" />
							) : (
								<Menu className="size-4" />
							)}
						</button>
					</div>
				</nav>

				{/* Features sub-tabs — Platform | AI & Operations */}
				{isFeaturesPage && (
					<div
						className="relative z-10 flex justify-center"
						role="tablist"
						aria-label="Feature categories"
					>
						<div className="inline-flex rounded-full border border-sagy-border bg-sagy-bg/60 p-1 backdrop-blur-xl">
							{featuresSubTabs.map((tab) => {
								const active =
									hash === `#${tab.id}` || (!hash && tab.id === "platform");
								return (
									<Link
										key={tab.id}
										href={tab.href}
										role="tab"
										aria-selected={active}
										className={cn(
											"rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent",
											active
												? "bg-sagy-accent text-sagy-accent-foreground"
												: "text-sagy-muted hover:text-sagy-body",
										)}
									>
										{tab.label}
									</Link>
								);
							})}
						</div>
					</div>
				)}

				{/* Mobile menu */}
				{mobileOpen && (
					<div className="relative z-10 rounded-xl border border-sagy-border bg-sagy-surface p-3 shadow-sagy-soft lg:hidden">
						<ul className="space-y-1">
							{siteNavLinks.map((link) => {
								const active = isNavLinkActive(link, pathname, hash);
								const expanded = link.menu
									? mobileMenuOpen === link.menu
									: false;

								return (
									<li key={link.label}>
										<div className="flex items-center gap-1">
											<Link
												href={link.href}
												target={link.external ? "_blank" : undefined}
												rel={link.external ? "noopener noreferrer" : undefined}
												className={cn(
													"flex-1 rounded-lg px-3 py-2.5 font-sans text-sm transition-colors",
													active
														? "bg-sagy-accent/15 text-sagy-heading"
														: "text-sagy-body hover:text-sagy-heading",
												)}
											>
												{link.label}
											</Link>
											{link.menu && (
												<button
													type="button"
													onClick={() =>
														setMobileMenuOpen(expanded ? null : link.menu!)
													}
													aria-expanded={expanded}
													aria-label={`${expanded ? "Hide" : "Show"} ${link.label} pages`}
													className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-sagy-border bg-sagy-heading/[0.04] text-sagy-body transition-colors hover:text-sagy-heading"
												>
													<ChevronDown
														className={cn(
															"size-4 transition-transform duration-200",
															expanded && "rotate-180 text-sagy-accent",
														)}
														aria-hidden="true"
													/>
												</button>
											)}
										</div>

										{link.menu && expanded && (
											<div className="mt-1 mb-2 ml-3 space-y-3 border-l border-sagy-border pl-3">
												{navMenuSections[link.menu].map((section) => (
													<div key={section.label}>
														<p className="px-2 font-mono text-[10px] uppercase tracking-[0.2em] text-sagy-muted">
															{section.label}
														</p>
														<ul className="mt-1 space-y-0.5">
															{section.items.map((item) => (
																<li key={item.href}>
																	<Link
																		href={item.href}
																		className="flex items-center gap-2.5 rounded-lg px-2 py-2 font-sans text-sm text-sagy-body transition-colors hover:bg-sagy-heading/[0.04] hover:text-sagy-heading"
																	>
																		<item.icon
																			className="size-4 shrink-0 text-sagy-accent"
																			strokeWidth={1.75}
																			aria-hidden="true"
																		/>
																		{item.title}
																		{item.badge && (
																			<span className="ml-auto shrink-0 font-mono text-[9px] uppercase tracking-wider text-sagy-muted">
																				{item.badge}
																			</span>
																		)}
																	</Link>
																</li>
															))}
														</ul>
													</div>
												))}
											</div>
										)}
									</li>
								);
							})}
						</ul>
						<div className="mt-3 border-t border-sagy-border pt-3">
							<GlowButton
								href={Sagyboar_PORTAL_URL}
								external
								className="w-full"
							>
								Launch App
							</GlowButton>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
