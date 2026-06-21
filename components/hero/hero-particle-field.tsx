"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

type Particle = {
	x: number;
	y: number;
	size: number;
	opacity: number;
	depth: number;
	warm: boolean;
	vx: number;
	vy: number;
	phase: number;
};

export function HeroParticleField() {
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

		const initParticles = () => {
			if (width <= 0 || height <= 0) return;

			const count = Math.min(3200, Math.floor((width * height) / 380));
			particles = [];

			for (let i = 0; i < count; i++) {
				const depth = Math.random();
				particles.push({
					x: Math.random() * width,
					y: Math.random() * height,
					size: 0.5 + depth * depth * 3.2,
					opacity: 0.12 + depth * 0.65,
					depth,
					warm: Math.random() < 0.1 + depth * 0.06,
					vx: (Math.random() - 0.5) * 0.18,
					vy: -0.08 - depth * 0.22,
					phase: Math.random() * Math.PI * 2,
				});
			}
		};

		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			if (width <= 0 || height <= 0) return;
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			initParticles();
		};

		const particleColor = (
			warm: boolean,
			depth: number,
			alpha: number,
			isDark: boolean,
		) => {
			if (warm) {
				return isDark
					? `rgba(251,191,120,${alpha})`
					: `rgba(230,138,53,${alpha})`;
			}
			if (depth > 0.7) {
				return isDark
					? `rgba(147,197,253,${alpha * 0.9})`
					: `rgba(59,130,246,${alpha * 0.55})`;
			}
			const tone = isDark ? 175 + depth * 70 : 100 + depth * 80;
			return isDark
				? `rgba(${tone},${tone},${tone},${alpha})`
				: `rgba(${tone},${tone},${tone},${alpha * 0.75})`;
		};

		const drawMist = (isDark: boolean) => {
			const mist = ctx.createLinearGradient(0, 0, 0, height);
			if (isDark) {
				mist.addColorStop(0, "rgba(0,0,0,0)");
				mist.addColorStop(0.5, "rgba(15,23,42,0.08)");
				mist.addColorStop(1, "rgba(15,23,42,0.45)");
			} else {
				mist.addColorStop(0, "rgba(255,255,255,0)");
				mist.addColorStop(0.5, "rgba(248,250,252,0.2)");
				mist.addColorStop(1, "rgba(203,213,225,0.55)");
			}
			ctx.fillStyle = mist;
			ctx.fillRect(0, 0, width, height);
		};

		const draw = (timestamp: number) => {
			const isDark = readTheme();
			const time = timestamp * 0.001;

			if (width <= 0 || height <= 0) {
				animationId = requestAnimationFrame(draw);
				return;
			}

			ctx.clearRect(0, 0, width, height);
			drawMist(isDark);

			const sorted = [...particles].sort((a, b) => a.depth - b.depth);

			for (const particle of sorted) {
				particle.x +=
					particle.vx + Math.sin(time * 1.4 + particle.phase) * 0.12;
				particle.y +=
					particle.vy + Math.cos(time * 1.1 + particle.phase) * 0.06;

				if (particle.x < -12) particle.x = width + 12;
				if (particle.x > width + 12) particle.x = -12;
				if (particle.y < -12) particle.y = height + 12;
				if (particle.y > height + 12) particle.y = -12;

				const edgeFade = Math.min(
					1,
					particle.x / 40,
					(width - particle.x) / 40,
					particle.y / 40,
					(height - particle.y) / 40,
				);
				const alpha = particle.opacity * Math.max(0.15, edgeFade);
				const glow = particle.size * (2 + (1 - particle.depth) * 2.8);

				const gradient = ctx.createRadialGradient(
					particle.x,
					particle.y,
					0,
					particle.x,
					particle.y,
					glow,
				);
				gradient.addColorStop(
					0,
					particleColor(particle.warm, particle.depth, alpha, isDark),
				);
				gradient.addColorStop(
					1,
					particleColor(particle.warm, particle.depth, 0, isDark),
				);

				ctx.fillStyle = gradient;
				ctx.beginPath();
				ctx.arc(particle.x, particle.y, glow, 0, Math.PI * 2);
				ctx.fill();
			}

			animationId = requestAnimationFrame(draw);
		};

		resize();
		const observer = new ResizeObserver(resize);
		observer.observe(canvas);
		window.addEventListener("resize", resize);
		animationId = requestAnimationFrame(draw);

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener("resize", resize);
			observer.disconnect();
		};
	}, [resolvedTheme]);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden
			className="pointer-events-none absolute inset-0 z-0 h-full w-full"
		/>
	);
}
