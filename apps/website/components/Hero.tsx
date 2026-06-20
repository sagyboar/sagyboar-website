import {
	SAGYBOAR_G2_REVIEWS_URL,
	SAGYBOAR_PORTAL_URL,
} from "@/constants/branding";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "./Container";
import { HeroParticleWave } from "./hero/hero-particle-wave";
import { HeroTrustedBy } from "./hero/hero-trusted-by";
import { Button } from "./ui/button";

export function Hero() {
	return (
		<section className="relative flex min-h-screen flex-col overflow-hidden bg-background">
			<HeroParticleWave />

			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-[58%] bg-gradient-to-b from-background via-background/95 to-transparent"
			/>

			<Container className="relative z-10 flex flex-1 flex-col pt-28 sm:pt-32 lg:pt-36">
				<div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
					<div className="hero-fade-up inline-flex max-w-xl items-center rounded-full border border-border/80 bg-muted/60 px-4 py-1.5 text-xs leading-snug text-muted-foreground backdrop-blur-sm sm:text-sm">
						<span className="font-medium text-foreground/80">New:</span>
						<span className="ml-1.5">
							One-click deployments with built-in monitoring and rollbacks
						</span>
					</div>

					<h1 className="hero-fade-up hero-fade-up-delayed mt-8 font-serif text-4xl font-normal leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
						You ship features, we will take care of the deployment.
					</h1>

					<p className="hero-fade-up hero-fade-up-delayed-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8">
						Deploy apps, manage databases, and monitor your stack from one
						platform. We handle the infrastructure—you focus on shipping.
					</p>

					<div className="hero-fade-up hero-fade-up-delayed-3 mt-10 flex flex-col items-center gap-4 sm:flex-row">
						<Button
							size="lg"
							className="h-12 rounded-full px-8 text-base shadow-sm"
							asChild
						>
							<Link
								href={SAGYBOAR_PORTAL_URL}
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="group inline-flex items-center gap-2">
									Get started free
									<ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
								</span>
							</Link>
						</Button>
						<Button
							size="lg"
							variant="ghost"
							className="h-12 rounded-full px-6 text-base text-muted-foreground"
							asChild
						>
							<Link
								href={SAGYBOAR_G2_REVIEWS_URL}
								target="_blank"
								rel="noopener noreferrer"
							>
								See G2 reviews
							</Link>
						</Button>
					</div>
				</div>

				<HeroTrustedBy />
			</Container>
		</section>
	);
}
