"use client";

import dynamic from "next/dynamic";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
	Sagyboar_CONTACT_EMAIL,
	Sagyboar_CONTACT_FORM_URL,
	Sagyboar_CONTACT_PHONE,
} from "@/constants/branding";

const Prism = dynamic(() => import("@/components/ui/prism"), {
	ssr: false,
});

export function ContactTypeform() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-background">
			<div aria-hidden className="absolute inset-0">
				<Prism
					animationType="rotate"
					timeScale={0.5}
					height={3.5}
					baseWidth={5.5}
					scale={3.6}
					hueShift={0}
					colorFrequency={1}
					noise={0.5}
					glow={1}
					className="h-full w-full"
				/>
			</div>

			<section className="relative z-10 pt-28 pb-16 sm:pt-32 sm:pb-24">
				<Container>
					<div className="mx-auto max-w-5xl">
						<div className="text-center">
							<h1 className="font-serif text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
								Contact <span className="text-blue-400 border-b border-blue-400">us</span>
							</h1>
							<p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-black/80 dark:text-white/90">
								Have a question about pricing, enterprise onboarding, or
								partnerships? Send us a message and we&apos;ll get back to you
								soon.
							</p>

							<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
								<Button asChild variant="outline" className="gap-2 rounded-full">
									<a href={`tel:${Sagyboar_CONTACT_PHONE}`}>
										<Phone className="h-4 w-4" aria-hidden />
										{Sagyboar_CONTACT_PHONE}
									</a>
								</Button>
								<Button asChild className="gap-2 rounded-full">
									<a href={`mailto:${Sagyboar_CONTACT_EMAIL}`}>
										<Mail className="h-4 w-4" aria-hidden />
										{Sagyboar_CONTACT_EMAIL}
									</a>
								</Button>
							</div>
						</div>

						<div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card/90 shadow-lg backdrop-blur-md">
							<iframe
								title="Sagyboar contact form"
								src={Sagyboar_CONTACT_FORM_URL}
								className="block  w-full border-0 aspect-video max-w-6xl"
								allow="camera; microphone; autoplay; encrypted-media; fullscreen"
								loading="lazy"
							/>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}
