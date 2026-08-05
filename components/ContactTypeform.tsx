import { ScrollReveal, ScrollRevealItem } from "@/components/design-system";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageShell, SectionHeading, StatusDot } from "@/components/ui/sagy";
import {
	Sagyboar_CONTACT_EMAIL,
	Sagyboar_CONTACT_PHONE,
} from "@/constants/branding";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { Clock, Globe2, Mail, Phone } from "lucide-react";

const channels = [
	{
		icon: Mail,
		label: "Email",
		value: Sagyboar_CONTACT_EMAIL,
		href: `mailto:${Sagyboar_CONTACT_EMAIL}`,
		note: "Best for pricing, onboarding, and partnerships.",
	},
	{
		icon: Phone,
		label: "Phone",
		value: Sagyboar_CONTACT_PHONE,
		href: `tel:${Sagyboar_CONTACT_PHONE}`,
		note: "Call us if it's urgent or you'd rather talk it through.",
	},
] as const;

const facts = [
	{
		icon: Clock,
		label: "Response time",
		value: "Within one business day",
	},
	{
		icon: Globe2,
		label: "Coverage",
		value: "Remote team, worldwide",
	},
] as const;

export function ContactTypeform() {
	return (
		<PageShell>
			<ScrollReveal
				as="section"
				className={cn("border-b border-white/[0.08]", spacing.sectionYLarge)}
				aria-label="Contact us"
				stagger
			>
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<ScrollRevealItem>
						<SectionHeading
							eyebrow="Contact"
							title="Talk to the team behind the platform"
							titleHighlight="the platform"
							subline="Questions about pricing, enterprise onboarding, or partnerships? Send a message and a human on the team will reply — usually within one business day."
							align="center"
							className="mx-auto"
							as="h1"
							size="hero"
						/>
					</ScrollRevealItem>

					<div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-12">
						<div className="flex flex-col gap-4">
							{channels.map((channel) => (
								<ScrollRevealItem key={channel.label}>
									<a
										href={channel.href}
										className="group block sagy-spotlight rounded-xl border border-white/[0.08] bg-sagy-surface p-5 shadow-sagy-card transition-colors duration-300 hover:border-sagy-accent/30"
									>
										<span className="flex size-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
											<channel.icon
												className="size-5 text-sagy-accent"
												strokeWidth={1.75}
												aria-hidden="true"
											/>
										</span>
										<p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-sagy-muted">
											{channel.label}
										</p>
										<p className="mt-1 break-all font-sans text-sm text-white group-hover:text-sagy-accent">
											{channel.value}
										</p>
										<p className="mt-2 font-sans text-sm leading-relaxed text-sagy-body">
											{channel.note}
										</p>
									</a>
								</ScrollRevealItem>
							))}

							<ScrollRevealItem>
								<div className="sagy-spotlight rounded-xl border border-white/[0.08] bg-sagy-surface p-5 shadow-sagy-card">
									<div className="flex items-center gap-2">
										<StatusDot status="running" />
										<p className="font-mono text-[10px] uppercase tracking-wider text-sagy-body">
											Accepting new projects
										</p>
									</div>
									<dl className="mt-5 flex flex-col gap-4">
										{facts.map((fact) => (
											<div key={fact.label} className="flex gap-3">
												<fact.icon
													className="mt-0.5 size-4 shrink-0 text-sagy-accent"
													strokeWidth={1.75}
													aria-hidden="true"
												/>
												<div>
													<dt className="font-mono text-[10px] uppercase tracking-wider text-sagy-muted">
														{fact.label}
													</dt>
													<dd className="mt-1 font-sans text-sm text-white">
														{fact.value}
													</dd>
												</div>
											</div>
										))}
									</dl>
								</div>
							</ScrollRevealItem>
						</div>

						<ScrollRevealItem>
							<div className="sagy-spotlight rounded-xl border border-white/[0.08] bg-sagy-surface p-6 shadow-sagy-card sm:p-8">
								<h2 className="font-display text-xl uppercase tracking-tight text-white">
									Send us a message
								</h2>
								<p className="mt-2 font-sans text-sm leading-relaxed text-sagy-body">
									Fields marked with an asterisk are required.
								</p>
								<div className="mt-8">
									<ContactForm />
								</div>
							</div>
						</ScrollRevealItem>
					</div>
				</div>
			</ScrollReveal>
		</PageShell>
	);
}
