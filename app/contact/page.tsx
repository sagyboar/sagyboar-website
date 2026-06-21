"use client";

import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { HeroParticleWave } from "@/components/hero/hero-particle-wave";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	if (isSubmitted) {
		return (
			<div className="min-h-screen bg-background">
				<section className="relative overflow-hidden border-b border-border pt-28 pb-16 sm:pt-32 sm:pb-20">
					<HeroParticleWave />
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[58%] bg-gradient-to-b from-background via-background/95 to-transparent"
					/>
					<Container className="relative z-10">
						<div className="mx-auto max-w-5xl text-center">
							<h1 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
								Thank you for contacting us!
							</h1>
							<p className="mt-6 text-lg text-muted-foreground">
								We&apos;ve received your message and will get back to you as soon
								as possible.
							</p>
							<div className="mt-10">
								<Button
									type="button"
									variant="outline"
									className="rounded-full"
									onClick={() => setIsSubmitted(false)}
								>
									Send another message
								</Button>
							</div>
						</div>
					</Container>
				</section>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-background">
			<section className="relative overflow-hidden border-b border-border pt-28 pb-16 sm:pt-32 sm:pb-20">
				<HeroParticleWave />
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[58%] bg-gradient-to-b from-background via-background/95 to-transparent"
				/>
				<Container className="relative z-10">
					<div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
						<div className="text-center">
							<h1 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
								Contact Us
							</h1>
							<p className="mt-6 text-lg text-muted-foreground">
								Get in touch with our team. We&apos;re here to help with any
								questions about Sagyboar.
							</p>
						</div>

						<div className="mt-12">
							<ContactForm onSuccess={() => setIsSubmitted(true)} />
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}
