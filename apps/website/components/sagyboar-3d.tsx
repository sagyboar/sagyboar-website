"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Sagyboar3DScene = dynamic(
	() =>
		import("./sagyboar-3d-scene").then((module) => module.Sagyboar3DScene),
	{
		ssr: false,
		loading: () => (
			<div className="flex h-full w-full items-center justify-center">
				<Image
					src="/home/SAGYBOAR.png"
					alt="Sagyboar"
					width={320}
					height={320}
					className="h-auto w-56 animate-pulse opacity-70 sm:w-72"
					priority
				/>
			</div>
		),
	},
);

export function Sagyboar3D({ className }: { className?: string }) {
	return <Sagyboar3DScene className={cn("h-full w-full", className)} />;
}
