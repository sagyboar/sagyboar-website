"use client";
import { Sagyboar3D } from "@/components/sagyboar-3d";

export function Hero() {
	return (
		<div className="bg-black">
			<div className="relative bottom-0 flex min-h-[560px] w-full items-center justify-center overflow-hidden rounded-lg bg-background md:min-h-[620px] md:shadow-xl">
				<Sagyboar3D className="absolute inset-0 z-0 h-full w-full" />
			</div>
		</div>
	);
}
