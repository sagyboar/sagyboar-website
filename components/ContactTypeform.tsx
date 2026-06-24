import {
	SAGYBOAR_CONTACT_FORM_URL,
	SAGYBOAR_SUPPORT_EMAIL,
} from "@/constants/branding";
import { Container } from "@/components/Container";
import { HeroParticleWave } from "@/components/hero/hero-particle-wave";
import { Clock, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

const contactHighlights = [
	{
		icon: MessageSquare,
		title: "Tell us about your project",
		description:
			"Share your stack, team size, and goals — we'll route you to the right person.",
	},
	{
		icon: Clock,
		title: "Fast follow-up",
		description:
			"Most inquiries get a reply within 24–48 hours on business days.",
	},
	{
		icon: Mail,
		title: "Prefer email?",
		description: `Reach us directly at ${SAGYBOAR_SUPPORT_EMAIL} for anything urgent.`,
	},
];

export function ContactTypeform() {
	return (
		<div className="min-h-screen bg-background">
			<section className="relative overflow-hidden border-b border-border pt-28 pb-16 sm:pt-32 sm:pb-24">
				<HeroParticleWave />
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[42%] bg-gradient-to-b from-background via-background/95 to-transparent"
				/>

				<Container className="relative z-10">
					<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-14 xl:grid-cols-[minmax(0,26rem)_1fr]">
						{/* Left panel */}
						<div className="lg:sticky lg:top-32 lg:self-start">
							<p className="text-sm font-medium uppercase tracking-wider text-primary">
								Contact
							</p>
							<h1 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
								Let&apos;s talk about your next deployment
							</h1>
							<p className="mt-4 text-base leading-relaxed text-muted-foreground">
								Whether you need pricing guidance, enterprise onboarding, or
								partner info — fill out the form and our team will get back to
								you.
							</p>

							<ul className="mt-8 flex flex-col gap-4">
								{contactHighlights.map((item) => (
									<li
										key={item.title}
										className="flex gap-4 rounded-2xl border border-border bg-card/60 p-4 shadow-sm backdrop-blur-sm"
									>
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
											<item.icon className="h-5 w-5" aria-hidden />
										</div>
										<div>
											<p className="text-sm font-medium text-foreground">
												{item.title}
											</p>
											<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
												{item.description.includes(SAGYBOAR_SUPPORT_EMAIL) ? (
													<>
														Reach us directly at{" "}
														<Link
															href={`mailto:${SAGYBOAR_SUPPORT_EMAIL}`}
															className="text-primary underline-offset-4 hover:underline"
														>
															{SAGYBOAR_SUPPORT_EMAIL}
														</Link>{" "}
														for anything urgent.
													</>
												) : (
													item.description
												)}
											</p>
										</div>
									</li>
								))}
							</ul>
						</div>

						{/* Typeform embed */}
						<div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
							<div className="border-b border-border bg-muted/30 px-5 py-4 dark:bg-muted/10 sm:px-6">
								<p className="text-sm font-medium text-foreground">
									Contact form
								</p>
								<p className="mt-0.5 text-xs text-muted-foreground">
									Powered by Typeform — your answers are sent securely to our
									team.
								</p>
							</div>
							<div className="relative bg-background">
								<iframe
									title="Sagyboar contact form"
									src={SAGYBOAR_CONTACT_FORM_URL}
									className="block h-[min(78vh,760px)] w-full border-0"
									allow="camera; microphone; autoplay; encrypted-media; fullscreen"
									loading="lazy"
								/>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}
