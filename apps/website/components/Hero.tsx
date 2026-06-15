"use client";
import { AuthWaveFooter } from "@/components/auth-wave-footer";
import { Sagyboar3D } from "@/components/sagyboar-3d";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./ui/animated-grid-pattern";

export function Hero() {
	return (
		<div className="bg-black pt-20 lg:pt-32">
			<div className="relative bottom-0 flex min-h-[560px] w-full items-center justify-center overflow-hidden rounded-lg bg-background md:min-h-[620px] md:shadow-xl">
				<AnimatedGridPattern
					numSquares={30}
					maxOpacity={0.1}
					height={40}
					width={40}
					duration={3}
					repeatDelay={1}
					className={cn(
						"[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
						"absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
					)}
				/>
				<div className="relative z-10 flex w-full max-w-3xl items-center justify-center px-4">
					<Sagyboar3D />
				</div>
				<AuthWaveFooter />
			</div>
		</div>
	);
}
