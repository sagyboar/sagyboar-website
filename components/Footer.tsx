"use client";

import { Sagyboar_BRAND_NAME } from "@/constants/branding";
import {
	footerSections,
	type FooterLink,
} from "@/constants/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./shared/Logo";

function FooterLinkItem({ href, label, icon: Icon }: FooterLink) {
	return (
		<Link
			href={href}
			className="group flex items-center gap-3 rounded-lg py-1.5 transition-colors"
		>
			<div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-accent/30 text-foreground transition-colors group-hover:bg-accent/60">
				<Icon className="size-3.5" strokeWidth={1.75} />
			</div>
			<span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
				{label}
			</span>
		</Link>
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
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{footerSections.map((section) => (
							<nav
								key={section.title}
								aria-label={section.ariaLabel}
								className={cn(
									"flex flex-col",
									section.groups && "sm:col-span-2 lg:col-span-2",
								)}
							>
								<h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
									{section.title}
								</h3>
								{section.groups ? (
									<div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
										{section.groups.map((group) => (
											<div key={group.label}>
												<p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/80">
													{group.label}
												</p>
												<ul className="mt-2 space-y-1">
													{group.links.map((item) => (
														<li key={item.href + item.label}>
															<FooterLinkItem {...item} />
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								) : (
									<ul className="mt-4 space-y-1">
										{section.links?.map((item) => (
											<li key={item.href + item.label}>
												<FooterLinkItem {...item} />
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
						© {new Date().getFullYear()} {Sagyboar_BRAND_NAME}. All rights
						reserved.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-6 border-t border-border py-8 sm:flex-row sm:items-end sm:justify-center">
					<Logo className="h-auto w-full max-w-48 sm:max-w-64" />
					<div className="flex flex-col items-center justify-center pb-4 text-center sm:pb-8">
						<span className="font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
							Sagyboar
						</span>
						<span className="mt-1 text-sm text-muted-foreground sm:text-base">
							Deploy your applications with ease
						</span>
					</div>
				</div>
			</Container>
		</footer>
	);
}
