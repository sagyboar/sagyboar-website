import Image from "next/image";
import { Container } from "@/components/Container";
import { Sagyboar_ABOUT } from "@/components/jobs/jobs-data";

export function AboutMission() {
	return (
		<section className="border-b border-border py-16 sm:py-24">
			<Container>
				<div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
					<div>
						<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
							What we&apos;re{" "}
							<span className="border-b-2 border-blue-400 text-blue-400">
								building
							</span>
						</h2>
						<div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
							{Sagyboar_ABOUT.split("\n\n").map((paragraph) => (
								<p key={paragraph.slice(0, 48)}>{paragraph}</p>
							))}
						</div>
					</div>

					<div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-muted/30 shadow-sm">
						<Image
							src="/Sagyboar-logo.png"
							alt="Sagyboar platform"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
