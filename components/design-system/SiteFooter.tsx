import { footerTagline } from "@/components/home/data/home-content";
import { Sagyboar_LOGO_SRC } from "@/constants/branding";
import {
	companyLinks,
	featureMenuGroups,
	solutionLinks,
} from "@/constants/navigation";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function FooterColumn({
	title,
	links,
}: {
	title: string;
	links: { href: string; label: string; icon: LucideIcon }[];
}) {
	return (
		<div>
			<h3 className="mb-4 font-mono text-[11px] uppercase tracking-wider text-sagy-muted">
				{title}
			</h3>
			<ul className="space-y-2.5">
				{links.map((link) => {
					const Icon = link.icon;
					return (
						<li key={link.href + link.label}>
							<Link
								href={link.href}
								className="group inline-flex items-center gap-2 font-mono text-xs text-sagy-body transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent"
							>
								<Icon
									className="size-3.5 text-sagy-muted transition-colors group-hover:text-sagy-accent"
									strokeWidth={1.5}
								/>
								{link.label}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

/** Unified dark footer — homepage, features, and all redesigned pages */
export function SiteFooter() {
	const platformLinks = featureMenuGroups[0].items.map((item) => ({
		href: item.href,
		label: item.footerLabel ?? item.title,
		icon: item.icon,
	}));

	const aiOpsLinks = featureMenuGroups[1].items.map((item) => ({
		href: item.href,
		label: item.footerLabel ?? item.title,
		icon: item.icon,
	}));

	const solutionFooterLinks = solutionLinks.map((item) => ({
		href: item.href,
		label: item.footerLabel ?? item.title,
		icon: item.icon,
	}));

	return (
		<footer
			className="relative z-10 border-t border-white/[0.08] px-4 pb-8 pt-16 sm:px-6 sm:pt-20"
			role="contentinfo"
		>
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
					<FooterColumn title="Features" links={platformLinks.slice(0, 6)} />
					<FooterColumn
						title="AI & Operations"
						links={aiOpsLinks.slice(0, 6)}
					/>
					<FooterColumn title="Solutions" links={solutionFooterLinks} />
					<FooterColumn title="Company" links={companyLinks.slice(0, 6)} />
				</div>

				<div className="my-12 h-px bg-white/[0.08]" />

				<p className="text-center font-mono text-xs text-sagy-muted">
					© 2026 Sagyboar
				</p>

				<div className="mt-12 flex flex-col items-center gap-3 text-center">
					<Image
						src={Sagyboar_LOGO_SRC}
						alt="Sagyboar mascot"
						width={64}
						height={64}
						className="size-16 object-contain"
					/>
					<p className="font-serif text-2xl text-[#8B6914]">Sagyboar</p>
					<p className="font-sans text-sm text-sagy-muted">{footerTagline}</p>
				</div>
			</div>
		</footer>
	);
}
