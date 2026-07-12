"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

type Particle = {
	x: number;
	yRatio: number;
	size: number;
	opacity: number;
	depth: number;
	warm: boolean;
	phase: number;
	speed: number;
};

type HeroParticleWaveProps = {
	/** Match hero (page bg) or elevated section bands (stone / neutral). */
	surface?: "default" | "elevated";
};

export function HeroParticleWave({
	surface = "default",
}: HeroParticleWaveProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationId = 0;
		let particles: Particle[] = [];
		let width = 0;
		let height = 0;

		const readTheme = () => {
			if (resolvedTheme === "light" || resolvedTheme === "dark") {
				return resolvedTheme === "dark";
			}
			return document.documentElement.classList.contains("dark");
		};

		let isDark = readTheme();

		const observer = new MutationObserver(() => {
			isDark = readTheme();
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		const waveHorizon = () => height * 0.56;

		const waveOffset = (x: number, time: number) => {
			const amp = height * 0.07;
			return (
				Math.sin(x * 0.0035 + time * 0.7) * amp * 0.55 +
				Math.sin(x * 0.007 + time * 0.45 + 1.2) * amp * 0.3 +
				Math.sin(x * 0.0015 + time * 0.25) * amp * 0.25
			);
		};

		const initParticles = () => {
			const waveArea = height * 0.44;
			const density = Math.min(2800, Math.floor((width * waveArea) / 420));
			particles = [];

			for (let i = 0; i < density; i++) {
				const depth = Math.random();
				particles.push({
					x: Math.random() * width,
					yRatio: Math.random() ** 0.85,
					size: 0.4 + depth * depth * 4.5,
					opacity: 0.08 + depth * 0.72,
					depth,
					warm: Math.random() < 0.12 + depth * 0.08,
					phase: Math.random() * Math.PI * 2,
					speed: 0.0004 + Math.random() * 0.001,
				});
			}
		};

		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			initParticles();
		};

		const particleColor = (warm: boolean, depth: number, alpha: number) => {
			if (warm) {
				return isDark
					? `rgba(251,191,120,${alpha})`
					: `rgba(230,138,53,${alpha})`;
			}
			if (depth > 0.65) {
				return isDark
					? surface === "elevated"
						? `rgba(115,115,115,${alpha * 0.85})`
						: `rgba(147,197,253,${alpha})`
					: surface === "elevated"
						? `rgba(120,113,108,${alpha * 0.45})`
						: `rgba(59,130,246,${alpha * 0.55})`;
			}
			if (isDark) {
				const tone =
					surface === "elevated" ? 120 + depth * 55 : 210 + depth * 45;
				return `rgba(${tone},${tone},${tone},${alpha})`;
			}
			const tone = surface === "elevated" ? 168 + depth * 12 : 245 + depth * 10;
			return `rgba(${tone},${tone},${tone},${alpha})`;
		};

		const drawMist = (horizon: number) => {
			const mist = ctx.createLinearGradient(
				0,
				horizon - height * 0.08,
				0,
				height,
			);

			if (isDark) {
				if (surface === "elevated") {
					mist.addColorStop(0, "rgba(23,23,23,0)");
					mist.addColorStop(0.35, "rgba(38,38,38,0.35)");
					mist.addColorStop(1, "rgba(23,23,23,0.92)");
				} else {
					mist.addColorStop(0, "rgba(0,0,0,0)");
					mist.addColorStop(0.35, "rgba(15,23,42,0.25)");
					mist.addColorStop(1, "rgba(15,23,42,0.85)");
				}
			} else if (surface === "elevated") {
				mist.addColorStop(0, "rgba(250,250,249,0)");
				mist.addColorStop(0.35, "rgba(250,250,249,0.55)");
				mist.addColorStop(1, "rgba(231,229,228,0.85)");
			} else {
				mist.addColorStop(0, "rgba(255,255,255,0)");
				mist.addColorStop(0.35, "rgba(248,250,252,0.45)");
				mist.addColorStop(1, "rgba(203,213,225,0.75)");
			}

			ctx.fillStyle = mist;
			ctx.fillRect(
				0,
				horizon - height * 0.08,
				width,
				height - horizon + height * 0.08,
			);
		};

		const draw = (timestamp: number) => {
			isDark = readTheme();
			const time = timestamp * 0.001;
			const horizon = waveHorizon();

			ctx.clearRect(0, 0, width, height);
			drawMist(horizon);

			const sorted = [...particles].sort((a, b) => a.depth - b.depth);

			for (const particle of sorted) {
				const ridge = horizon + waveOffset(particle.x, time);
				const spread = height - ridge;
				const y =
					ridge +
					particle.yRatio * spread +
					Math.sin(time * 1.8 + particle.phase) * (2 + particle.depth * 4);

				const ridgeFocus =
					1 -
					Math.min(1, Math.abs(y - ridge - spread * 0.15) / (spread * 0.35));
				const fadeTop = Math.min(1, (y - ridge + 12) / 48);
				const fadeBottom = Math.min(1, (height - y) / 60);
				const alpha =
					particle.opacity * fadeTop * fadeBottom * (0.35 + ridgeFocus * 0.65);

				if (alpha <= 0.01) continue;

				const radius = particle.size * (0.6 + ridgeFocus * 0.8);
				const glow = radius * (2.2 + (1 - particle.depth) * 3.5);

				const gradient = ctx.createRadialGradient(
					particle.x,
					y,
					0,
					particle.x,
					y,
					glow,
				);
				gradient.addColorStop(
					0,
					particleColor(particle.warm, particle.depth, alpha),
				);
				gradient.addColorStop(
					1,
					particleColor(particle.warm, particle.depth, 0),
				);

				ctx.fillStyle = gradient;
				ctx.beginPath();
				ctx.arc(particle.x, y, glow, 0, Math.PI * 2);
				ctx.fill();
			}

			animationId = requestAnimationFrame(draw);
		};

		resize();
		window.addEventListener("resize", resize);
		animationId = requestAnimationFrame(draw);

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener("resize", resize);
			observer.disconnect();
		};
	}, [resolvedTheme, surface]);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden
			className="pointer-events-none absolute inset-0 h-full w-full"
		/>
	);
}
