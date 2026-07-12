import { Sagyboar_PORTAL_URL } from "@/constants/branding";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "./Container";
import { HeroParticleWave } from "./hero/hero-particle-wave";
import { Button } from "./ui/button";

export function Hero() {
	return (
		<section className="relative flex min-h-[85vh] flex-col overflow-hidden bg-background pb-2 sm:min-h-[80vh] sm:pb-4">
			<HeroParticleWave />

			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-[58%] bg-gradient-to-b from-background via-background/95 to-transparent"
			/>

			<Container className="relative z-10 flex flex-1 flex-col justify-center pt-28 sm:pt-32 lg:pt-36">
				<div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
					<div className="hero-fade-up inline-flex max-w-xl items-center rounded-full border border-border/80 bg-muted/60 px-4 py-1.5 text-xs leading-snug text-muted-foreground backdrop-blur-sm sm:text-sm">
						<span className="font-medium text-foreground/80">New:</span>
						<span className="ml-1.5">
							The AI-Native DevOps Platform for Engineering Teams
						</span>
					</div>

					<h1 className="hero-fade-up hero-fade-up-delayed mt-8 font-serif text-4xl font-normal leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
						Deploy, monitor, and scale <br />
						applications on{" "}
						<span className="text-blue-400 border-b-2 border-blue-400">
							your terms.
						</span>
					</h1>

					<p className="hero-fade-up hero-fade-up-delayed-2 mt-6 mb-10 text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8">
						An AI-powered control plane that auto-generates configurations,
						detects anomalies, handles ticketing. Deploy to our managed servers
						in minutes with zero infrastructure hassle and zero cloud lock-in.
					</p>

					<div className="hero-fade-up hero-fade-up-delayed-3 bg-blue-500 p-1.5 rounded-full">
						<Button
							size="lg"
							className="rounded-full px-4 text-base shadow-sm"
							asChild
						>
							<Link
								href={Sagyboar_PORTAL_URL}
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="group inline-flex items-center gap-2">
									Get started free
									<ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
								</span>
							</Link>
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
}
