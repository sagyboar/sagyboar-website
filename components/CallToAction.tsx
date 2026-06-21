import { SAGYBOAR_PORTAL_URL } from "@/constants/branding";
import { Container } from "@/components/Container";
import { HeroParticleWave } from "@/components/hero/hero-particle-wave";
import Link from "next/link";
import { Button } from "./ui/button";

export function CallToAction() {
	return (
		<section
			id="get-started-today"
			className="relative overflow-hidden bg-background py-16 sm:py-20"
		>
			<HeroParticleWave />

			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[58%] bg-gradient-to-b from-background via-background/95 to-transparent"
			/>

			<Container className="relative z-10">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
						Unlock Your Deployment Potential with Sagyboar Cloud
					</h2>
					<p className="mt-4 text-lg tracking-tight text-muted-foreground">
						Say goodbye to infrastructure hassles—Sagyboar Cloud handles it all.
						Effortlessly deploy, manage Docker containers, and secure your
						traffic with Traefik. Focus on building, we'll handle the rest.
					</p>

					<Button className="mt-10 rounded-full" asChild>
						<Link
							href={SAGYBOAR_PORTAL_URL}
							aria-label="Create a Sagyboar account"
							target="_blank"
							className="flex flex-row items-center gap-2"
						>
							Create an account
						</Link>
					</Button>
				</div>
			</Container>
		</section>
	);
}
