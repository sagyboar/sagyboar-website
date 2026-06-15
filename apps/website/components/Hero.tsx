"use client";
import { AuthWaveFooter } from "@/components/auth-wave-footer";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./ui/animated-grid-pattern";

export function Hero() {
	return (
		<div className="bg-black pt-20 lg:pt-32">
			<div className="relative bottom-0 flex min-h-[480px] w-full items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
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
				<AuthWaveFooter />
			</div>
		</div>
	);
}
