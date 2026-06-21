"use client";

import { SAGYBOAR_BRAND_NAME } from "@/constants/branding";
import { footerSections, socialLinks } from "@/constants/navigation";
import { Instagram, Linkedin, Youtube } from "lucide-react";
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

function SocialIcon({ network }: { network: SocialLink["network"] }) {
	switch (network) {
		case "x":
			return (
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 512 512"
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					aria-hidden
				>
					<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
				</svg>
			);
		case "github":
			return (
				<svg
					aria-hidden
					className="h-5 w-5 fill-current"
					viewBox="0 0 24 24"
				>
					<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
				</svg>
			);
		case "instagram":
			return <Instagram className="h-5 w-5" aria-hidden />;
		case "linkedin":
			return <Linkedin className="h-5 w-5" aria-hidden />;
		case "youtube":
			return <Youtube className="h-5 w-5" aria-hidden />;
	}
}

type SocialLink = (typeof socialLinks)[number];

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

				<div className="flex flex-col items-center gap-6 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between">
					<p className="order-2 text-sm text-muted-foreground sm:order-1">
						© {new Date().getFullYear()} {SAGYBOAR_BRAND_NAME}. All rights
						reserved.
					</p>
					<div
						className="order-1 flex flex-wrap items-center justify-center gap-5 sm:order-2"
						aria-label="Social links"
					>
						{socialLinks.map((link) => (
							<Link
								key={link.network}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
								aria-label={link.label}
							>
								<SocialIcon network={link.network} />
							</Link>
						))}
					</div>
				</div>

				<FooterBrandWordmark />
			</Container>
		</footer>
	);
}
