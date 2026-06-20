"use client";

import { cn } from "@/lib/utils";
import { SAGYBOAR_BRAND_NAME, SAGYBOAR_PORTAL_URL } from "@/constants/branding";
import {
	featureLinks,
	resourceLinks,
	solutionLinks,
	type NavLinkItem,
} from "@/constants/navigation";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { trackGAEvent } from "./analitycs";
import { Logo } from "./shared/Logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const SCROLL_THRESHOLD = 15;

type MegaMenuKey = "features" | "solutions" | "resources";

const megaMenus: Record<
	MegaMenuKey,
	{ label: string; items: NavLinkItem[] }
> = {
	features: {
		label: "Features",
		items: featureLinks,
	},
	solutions: {
		label: "Solutions",
		items: solutionLinks,
	},
	resources: {
		label: "Resources",
		items: resourceLinks,
	},
};

function trackNavClick(href: string) {
	trackGAEvent({
		action: "Nav Link Clicked",
		category: "Navigation",
		label: href,
	});
}

function MegaMenuLink({ item }: { item: NavLinkItem }) {
	const Icon = item.icon;

	return (
		<Link
			href={item.href}
			target={item.target}
			onClick={() => trackNavClick(item.href)}
			className="group flex flex-col justify-between h-full items-start min-w-[15rem] min-h-64 gap-3 p-3 transition-colors hover:bg-accent/60 rounded-2xl border"
		>
			<div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-accent/30 text-foreground transition-colors group-hover:bg-accent/60">
				<Icon className="size-4" strokeWidth={1.75} />
			</div>
			<div className="min-w-0 flex-1 max-h-24">
				<div className="text-sm font-medium text-foreground">{item.title}</div>
				<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
					{item.description}
				</p>
			</div>
		</Link>
	);
}

function MegaMenuPanel({
	menuKey,
	onMouseEnter,
	onMouseLeave,
}: {
	menuKey: MegaMenuKey;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}) {
	const menu = megaMenus[menuKey];

	return (
		<div
			className="absolute inset-x-0 top-full z-50 pt-6"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div
				className={cn(
					"overflow-hidden rounded-3xl border border-border/60 bg-background p-4 shadow-xl",
				)}
			>
				<div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] gap-2">
					{menu.items.map((item) => (
						<MegaMenuLink key={item.href} item={item} />
					))}
				</div>
			</div>
		</div>
	);
}

function DesktopNavItem({
	menuKey,
	isOpen,
	onOpen,
}: {
	menuKey: MegaMenuKey;
	isOpen: boolean;
	onOpen: () => void;
}) {
	return (
		<div onMouseEnter={onOpen}>
			<button
				type="button"
				className={cn(
					"inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
					isOpen ? "text-foreground" : "text-muted-foreground",
				)}
				aria-expanded={isOpen}
			>
				{megaMenus[menuKey].label}
				<ChevronDown
					className={cn(
						"size-3.5 transition-transform duration-200",
						isOpen && "rotate-180",
					)}
				/>
			</button>
		</div>
	);
}

function MobileNavLink({
	href,
	children,
	target,
	icon: Icon,
}: {
	href: string;
	children: React.ReactNode;
	target?: string;
	icon?: NavLinkItem["icon"];
}) {
	return (
		<Popover.Button
			onClick={() => trackNavClick(href)}
			as={Link}
			href={href}
			target={target}
			className="flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left text-sm"
		>
			{Icon && (
				<div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-accent/30">
					<Icon className="size-3.5" strokeWidth={1.75} />
				</div>
			)}
			{children}
		</Popover.Button>
	);
}

function MobileNavIcon({ open }: { open: boolean }) {
	return (
		<svg
			aria-hidden="true"
			className="h-3.5 w-3.5 overflow-visible stroke-current"
			fill="none"
			strokeWidth={2}
			strokeLinecap="round"
		>
			<path
				d="M0 1H14M0 7H14M0 13H14"
				className={cn("origin-center transition", open && "scale-90 opacity-0")}
			/>
			<path
				d="M2 2L12 12M12 2L2 12"
				className={cn(
					"origin-center transition",
					!open && "scale-90 opacity-0",
				)}
			/>
		</svg>
	);
}

function BodyScrollLock({ lock }: { lock: boolean }) {
	useEffect(() => {
		document.body.style.overflow = lock ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [lock]);
	return null;
}

function MobileNavigation() {
	return (
		<Popover>
			{({ open, close }) => (
				<>
					<BodyScrollLock lock={open} />
					<Popover.Button
						className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border/40"
						aria-label="Toggle Navigation"
					>
						<MobileNavIcon open={open} />
					</Popover.Button>
					{open &&
						createPortal(
							<div
								className="fixed inset-0 z-40 bg-background/50"
								onClick={() => close()}
							/>,
							document.body,
						)}
					<Transition.Root>
						<Transition.Child
							as={Fragment as any}
							enter="duration-150 ease-out"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="duration-100 ease-in"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Popover.Panel className="absolute left-1/2 top-[calc(100%+0.75rem)] z-50 max-h-[80vh] w-[min(100vw-2rem,24rem)] -translate-x-1/2 overflow-y-auto rounded-3xl border border-border/60 bg-background p-4 shadow-xl">
								{(Object.keys(megaMenus) as MegaMenuKey[]).map((key) => (
									<div key={key} className="mb-4">
										<p className="px-2 py-1 text-xs font-semibold uppercase text-muted-foreground">
											{megaMenus[key].label}
										</p>
										{megaMenus[key].items.map((item) => (
											<MobileNavLink
												key={item.href}
												href={item.href}
												target={item.target}
												icon={item.icon}
											>
												{item.title}
											</MobileNavLink>
										))}
									</div>
								))}
								<hr className="my-2 border-border" />
								<MobileNavLink href="/pricing">Pricing</MobileNavLink>
								<hr className="my-2 border-border" />
								<MobileNavLink
									href={SAGYBOAR_PORTAL_URL}
									target="_blank"
								>
									<Button className="mt-2 w-full rounded-full">Sign In</Button>
								</MobileNavLink>
							</Popover.Panel>
						</Transition.Child>
					</Transition.Root>
				</>
			)}
		</Popover>
	);
}

export function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [openMenu, setOpenMenu] = useState<MegaMenuKey | null>(null);
	const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleScroll = useCallback(() => {
		setScrolled(window.scrollY > SCROLL_THRESHOLD);
	}, []);

	const openMegaMenu = (key: MegaMenuKey) => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		setOpenMenu(key);
	};

	const closeMegaMenu = () => {
		closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
	};

	const keepMegaMenuOpen = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
	};

	useEffect(() => {
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	useEffect(() => {
		if (scrolled) setOpenMenu(null);
	}, [scrolled]);

	useEffect(() => {
		return () => {
			if (closeTimer.current) clearTimeout(closeTimer.current);
		};
	}, []);

	return (
		<header className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-transparent px-4 pt-6 sm:px-6">
			<div
				className={cn(
					"pointer-events-auto relative mx-auto transition-all duration-300 ease-out",
					scrolled ? "w-full max-w-5xl" : "w-full max-w-7xl",
				)}
				onMouseLeave={closeMegaMenu}
			>
				<div
					className={cn(
						"relative rounded-3xl border px-4 py-3 transition-all duration-300 ease-out sm:px-5",
						scrolled
							? "border-border/60 bg-background shadow-md"
							: "border-transparent bg-transparent shadow-none",
					)}
				>
					<nav className="flex items-center justify-between gap-4 lg:gap-6">
						<div className="flex min-w-0 items-center gap-3 lg:gap-6">
							<Link
								href="/"
								aria-label={`${SAGYBOAR_BRAND_NAME} home`}
								className="flex shrink-0 items-center gap-2.5"
							>
								<Logo className="h-8 w-auto sm:h-9" />
								<span className="font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
									{SAGYBOAR_BRAND_NAME}
								</span>
							</Link>

							<div className="hidden items-center gap-0.5 lg:flex">
								{(["features", "solutions", "resources"] as MegaMenuKey[]).map(
									(key) => (
										<DesktopNavItem
											key={key}
											menuKey={key}
											isOpen={openMenu === key}
											onOpen={() => openMegaMenu(key)}
										/>
									),
								)}
								<Link
									href="/pricing"
									onClick={() => trackNavClick("/pricing")}
									className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
								>
									Pricing
								</Link>
							</div>
						</div>

						<div className="flex items-center gap-2 sm:gap-3">
							<Button className="hidden rounded-full lg:inline-flex" asChild>
								<Link
									href={SAGYBOAR_PORTAL_URL}
									target="_blank"
									aria-label="Sign In"
									onClick={() =>
										trackNavClick(SAGYBOAR_PORTAL_URL)
									}
								>
									<span className="group inline-flex items-center text-sm font-medium">
										Dashboard
										<ChevronRight className="ml-1 size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
									</span>
								</Link>
							</Button>

							<ThemeToggle />

							<div className="lg:hidden">
								<MobileNavigation />
							</div>
						</div>
					</nav>

					{openMenu && (
						<MegaMenuPanel
							menuKey={openMenu}
							onMouseEnter={keepMegaMenuOpen}
							onMouseLeave={closeMegaMenu}
						/>
					)}
				</div>
			</div>
		</header>
	);
}
