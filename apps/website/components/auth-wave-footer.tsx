"use client";

import type { CSSProperties } from "react";
import {
	AUTH_WAVE_COLOR,
	AUTH_WAVE_LAYERS,
	AUTH_WAVE_PATH,
} from "@/constants/auth/wave-footer";
import { cn } from "@/lib/utils";
import type { AuthWaveFooterProps, AuthWaveLayerProps } from "@/types/auth/wave-footer";

function WaveLayer({ duration, delay = "0s", opacity = 1, reverse = false }: AuthWaveLayerProps) {
	return (
		<div
			className={cn(
				"auth-wave-track absolute bottom-0 left-0 flex h-full w-[200%]",
				reverse ? "auth-wave-track-reverse" : "auth-wave-track-forward",
			)}
			style={
				{
					"--auth-wave-duration": duration,
					"--auth-wave-delay": delay,
				} as CSSProperties
			}
		>
			<svg
				viewBox="0 0 1440 160"
				preserveAspectRatio="none"
				className="h-full w-1/2 shrink-0"
				aria-hidden
			>
				<path fill={AUTH_WAVE_COLOR} fillOpacity={opacity} d={AUTH_WAVE_PATH} />
			</svg>
			<svg
				viewBox="0 0 1440 160"
				preserveAspectRatio="none"
				className="h-full w-1/2 shrink-0"
				aria-hidden
			>
				<path fill={AUTH_WAVE_COLOR} fillOpacity={opacity} d={AUTH_WAVE_PATH} />
			</svg>
		</div>
	);
}

export function AuthWaveFooter({ className }: AuthWaveFooterProps) {
	return (
		<div
			className={cn(
				"auth-wave-footer-shell pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[120px] overflow-hidden sm:h-[140px]",
				className,
			)}
			aria-hidden
		>
			{AUTH_WAVE_LAYERS.map((layer) => (
				<WaveLayer key={`${layer.duration}-${layer.delay ?? "0s"}`} {...layer} />
			))}
		</div>
	);
}
