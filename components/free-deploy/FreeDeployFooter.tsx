import {
	Sagyboar_BRAND_NAME,
	Sagyboar_LOGO_SRC,
	Sagyboar_PORTAL_URL,
} from "@/constants/branding";
import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/pricing", label: "Pricing" },
	{ href: Sagyboar_PORTAL_URL, label: "Dashboard", external: true },
	{ href: "/contact", label: "Contact" },
] as const;

export function FreeDeployFooter() {
	return (
		<footer
			className="relative z-10 border-t border-sagy-border py-12 sm:py-14"
			role="contentinfo"
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
					<div className="max-w-xs">
						<Link
							href="/"
							className="inline-flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent"
							aria-label="Sagyboar home"
						>
							<Image
								src={Sagyboar_LOGO_SRC}
								alt=""
								width={28}
								height={28}
								className="size-7 object-contain"
								aria-hidden="true"
							/>
							<span className="font-display text-sm uppercase tracking-wide text-sagy-heading">
								{Sagyboar_BRAND_NAME}
							</span>
						</Link>
						<p className="mt-3 font-sans text-sm leading-relaxed text-sagy-muted">
							AI-native DevOps — deploy, monitor, and heal without the hassle.
						</p>
					</div>

					<nav aria-label="Footer navigation">
						<ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end">
							{FOOTER_LINKS.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										target={
											"external" in link && link.external ? "_blank" : undefined
										}
										rel={
											"external" in link && link.external
												? "noopener noreferrer"
												: undefined
										}
										className="font-mono text-xs uppercase tracking-wider text-sagy-body transition-colors hover:text-sagy-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>

				<p className="mt-10 border-t border-sagy-border pt-6 text-center font-sans text-xs text-sagy-muted sm:text-left">
					© {new Date().getFullYear()} {Sagyboar_BRAND_NAME}. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
