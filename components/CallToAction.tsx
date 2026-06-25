import { Sagyboar_PORTAL_URL } from "@/constants/branding";
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
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
                        Stop managing infrastructure. Start shipping.
                    </h2>
                    <p className="mt-4 mb-10 text-lg tracking-tight text-muted-foreground">
                        Let our embedded AI handle the configurations, monitoring, and ticketing. 
                        Deploy to our fully managed servers in minutes, and let our dedicated engineering squad 
                        maintain the engine while your team focuses purely on building the product.
                    </p>
					<div className="p-1.5 bg-blue-400 rounded-full w-fit mx-auto">
                    <Button className="rounded-full" asChild>
                        <Link
                            href={Sagyboar_PORTAL_URL}
                            aria-label="Deploy your first app with Sagyboar"
                            target="_blank"
                            className="flex flex-row items-center gap-2"
                        >
                            Deploy Your First App
                        </Link>
                    </Button>
					</div>
                </div>
            </Container>
        </section>
    );
}