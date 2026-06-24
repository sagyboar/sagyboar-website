"use client";

import { SAGYBOAR_BRAND_NAME } from "@/constants/branding";
import { footerSections } from "@/constants/navigation";
import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./shared/Logo";

function FooterBrandWordmark() {
	const characters = SAGYBOAR_BRAND_NAME.split("");

	return (
		<div
			className="pointer-events-auto mt-6 w-full overflow-hidden pb-2 pt-4 sm:mt-8 sm:pt-6"
			aria-hidden
		>
			<div className="flex w-full items-end justify-center gap-[0.04em] sm:gap-[0.06em]">
				{characters.map((char, index) => (
					<span
						key={`${char}-${index}`}
						className="footer-brand-char font-display text-[clamp(2.75rem,16vw,9.5rem)] font-semibold leading-[0.85] tracking-tighter"
					>
						{char}
					</span>
				))}
			</div>
			<span className="sr-only">{SAGYBOAR_BRAND_NAME}</span>
		</div>
	);
}

export function Footer() {
	return (
		<footer
			className="border-t border-border bg-background"
			role="contentinfo"
		>
			<Container>
				<div className="py-12 md:py-16">
					<div className="flex flex-col items-center gap-2 text-center md:items-start">
						<Link
							href="/"
							aria-label="Sagyboar - Home"
							className="flex items-center gap-2 rounded focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
						>
							<Logo className="h-10 w-auto" />
							<span className="text-xl font-semibold text-foreground">
								{SAGYBOAR_BRAND_NAME}
							</span>
						</Link>
						<span className="text-sm font-medium text-muted-foreground">
							Deploy your applications with ease
						</span>
					</div>

					<div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{footerSections.map((section) => (
							<nav
								key={section.title}
								aria-label={section.ariaLabel}
								className="flex flex-col"
							>
								<h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
									{section.title}
								</h3>
								{section.groups ? (
									<div className="mt-4 space-y-5">
										{section.groups.map((group) => (
											<div key={group.label}>
												<p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/80">
													{group.label}
												</p>
												<ul className="mt-2 space-y-2">
													{group.links.map((item) => (
														<li key={item.href + item.label}>
															<Link
																href={item.href}
																className="text-sm text-muted-foreground transition-colors hover:text-foreground"
															>
																{item.label}
															</Link>
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								) : (
									<ul className="mt-4 space-y-3">
										{section.links?.map((item) => (
											<li key={item.href + item.label}>
												<Link
													href={item.href}
													className="text-sm text-muted-foreground transition-colors hover:text-foreground"
												>
													{item.label}
												</Link>
											</li>
										))}
									</ul>
								)}
							</nav>
						))}
					</div>
				</div>

				<div className="border-t border-border py-8">
					<p className="text-center text-sm text-muted-foreground sm:text-left">
						© {new Date().getFullYear()} {SAGYBOAR_BRAND_NAME}. All rights
						reserved.
					</p>
				</div>

				<FooterBrandWordmark />
			</Container>
		</footer>
	);
}
