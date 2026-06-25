"use client";

import { cn } from "@/lib/utils";
import { Sagyboar_BRAND_NAME, Sagyboar_PORTAL_URL } from "@/constants/branding";
import {
	companyLinks,
	featureMenuGroups,
	solutionLinks,
	topNavLinks,
	type NavLinkItem,
} from "@/constants/navigation";
import { Popover, Transition } from "@headlessui/react";
import { ArrowRight, ArrowRightCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { trackGAEvent } from "./analitycs";
import { Logo } from "./shared/Logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const SCROLL_THRESHOLD = 15;

type MegaMenuKey = "features" | "solutions";

const megaMenus: Record<
	MegaMenuKey,
	{ label: string; items: NavLinkItem[] }
> = {
	features: {
		label: "Features",
		items: featureMenuGroups.flatMap((group) => group.items),
	},
	solutions: {
		label: "Solutions",
		items: solutionLinks,
	},
};

function MegaMenuListItem({ item }: { item: NavLinkItem }) {
	const Icon = item.icon;

	return (
		<Link
			href={item.href}
			target={item.target}
			onClick={() => trackNavClick(item.href)}
			className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-accent/60"
		>
			<div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-accent/30 text-foreground transition-colors group-hover:bg-accent/60">
				<Icon className="size-3.5" strokeWidth={1.75} />
			</div>
			<div className="min-w-0">
				<div className="text-sm font-medium text-foreground">{item.title}</div>
				<p className="truncate text-xs text-muted-foreground">
					{item.description}
				</p>
			</div>
		</Link>
	);
}

function trackNavClick(href: string) {
	trackGAEvent({
		action: "Nav Link Clicked",
		category: "Navigation",
		label: href,
	});
}

function MegaMenuLink({ item }: { item: NavLinkItem }) {
	const Icon = item.icon;
	const hasBackground = Boolean(item.backgroundImage);

	return (
		<Link
			href={item.href}
			target={item.target}
			onClick={() => trackNavClick(item.href)}
			className={cn(
				"group relative flex min-h-64 min-w-[15rem] flex-col justify-between overflow-hidden rounded-2xl border border-border/60 p-4 transition-all hover:border-border hover:shadow-md",
				hasBackground
					? "bg-muted/30"
					: "items-start gap-3 hover:bg-accent/60",
			)}
		>
			{hasBackground ? (
				<>
					<div
						aria-hidden
						className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
						style={{ backgroundImage: `url(${item.backgroundImage})` }}
					/>
					<div
						aria-hidden
						className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20"
					/>
					<div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-background/70 text-foreground shadow-sm backdrop-blur-sm transition-colors group-hover:bg-background/90">
						<Icon className="size-4" strokeWidth={1.75} />
					</div>
					<div className="relative z-10">
						<div className="text-base font-semibold text-foreground">
							{item.title}
						</div>
						<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
							{item.description}
						</p>
					</div>
				</>
			) : (
				<>
					<div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-accent/30 text-foreground transition-colors group-hover:bg-accent/60">
						<Icon className="size-4" strokeWidth={1.75} />
					</div>
					<div className="min-w-0 flex-1 max-h-24">
						<div className="text-sm font-medium text-foreground">
							{item.title}
						</div>
						<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
							{item.description}
						</p>
					</div>
				</>
			)}
		</Link>
	);
}

function FeaturesMegaMenuPanel({
	onMouseEnter,
	onMouseLeave,
}: {
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}) {
	return (
		<div
			className="absolute inset-x-0 top-full z-50 pt-6"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className="overflow-hidden rounded-3xl border border-border/60 bg-background p-4 shadow-xl">
				<div className="grid gap-6 sm:grid-cols-2">
					{featureMenuGroups.map((group) => (
						<div key={group.label}>
							<p className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
								{group.label}
							</p>
							<ul className="mt-1 space-y-0.5">
								{group.items.map((item) => (
									<li key={item.href}>
										<MegaMenuListItem item={item} />
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
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
	if (menuKey === "features") {
		return (
			<FeaturesMegaMenuPanel
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			/>
		);
	}

	const menu = megaMenus[menuKey];

	return (
		<div
			className="absolute inset-x-0 top-full z-50 pt-6"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className="overflow-hidden rounded-3xl border border-border/60 bg-background p-4 shadow-xl">
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
								<div className="mb-4">
									<p className="px-2 py-1 text-xs font-semibold uppercase text-muted-foreground">
										Features
									</p>
									{featureMenuGroups.map((group) => (
										<div key={group.label} className="mt-2">
											<p className="px-2 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/80">
												{group.label}
											</p>
											{group.items.map((item) => (
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
								</div>
								<div className="mb-4">
									<p className="px-2 py-1 text-xs font-semibold uppercase text-muted-foreground">
										{megaMenus.solutions.label}
									</p>
									{megaMenus.solutions.items.map((item) => (
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
								<hr className="my-2 border-border" />
								{topNavLinks.map((link) => (
									<MobileNavLink
										key={link.href}
										href={link.href}
										icon={link.icon}
									>
										{link.label}
									</MobileNavLink>
								))}
								<div className="mt-4">
									<p className="px-2 py-1 text-xs font-semibold uppercase text-muted-foreground">
										Company
									</p>
									{companyLinks
										.filter((link) => !topNavLinks.some((t) => t.href === link.href))
										.map((link) => (
											<MobileNavLink
												key={link.href}
												href={link.href}
												icon={link.icon}
											>
												{link.label}
											</MobileNavLink>
										))}
								</div>
								<hr className="my-2 border-border" />
								<MobileNavLink
									href={Sagyboar_PORTAL_URL}
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
		<header className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-transparent px-4 pt-2 sm:px-6">
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
								aria-label={`${Sagyboar_BRAND_NAME} home`}
								className="flex shrink-0 items-center gap-2.5"
							>
								<Logo className="h-8 w-auto sm:h-9" />
								<span className="font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
									{Sagyboar_BRAND_NAME}
								</span>
							</Link>

							<div className="hidden items-center gap-0.5 lg:flex">
								{(["features", "solutions"] as MegaMenuKey[]).map(
									(key) => (
										<DesktopNavItem
											key={key}
											menuKey={key}
											isOpen={openMenu === key}
											onOpen={() => openMegaMenu(key)}
										/>
									),
								)}
								{topNavLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										onClick={() => trackNavClick(link.href)}
										className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
									>
										{link.label}
									</Link>
								))}
							</div>
						</div>

						<div className="flex items-center gap-2 sm:gap-3">
							<Button className="hidden rounded-full lg:inline-flex ps-4 pe-0 py-0" asChild>
								<Link
									href={'/contact'}
									aria-label="Contact Us"
								>
									<span className="group inline-flex items-center text-sm font-medium">
										Contact Us
										<span className="ml-3 p-2.5 bg-white text-black dark:bg-black/90 dark:text-white rounded-full transition-transform -rotate-45 duration-300 group-hover:rotate-0">
										<ArrowRight className="size-5" />
										</span>
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
