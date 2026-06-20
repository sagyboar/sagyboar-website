"use client";

import { SAGYBOAR_LOGO_SRC } from "@/constants/branding";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type Blob = {
	anchorX: number;
	anchorY: number;
	x: number;
	y: number;
	radius: number;
	phaseX: number;
	phaseY: number;
	waveSpeed: number;
	waveX: number;
	waveY: number;
	alpha: number;
	color: string;
};

type NormalizedPoint = { nx: number; ny: number };

type ShapeLayout = {
	x: number;
	y: number;
	size: number;
};

const BLUES = [
	"rgba(147, 197, 253,",
	"rgba(96, 165, 250,",
	"rgba(116, 155, 255,",
	"rgba(191, 219, 254,",
	"rgba(59, 130, 246,",
];

const SAMPLE_SIZE = 512;
const BLOB_COUNT = 95;

function pickSamples(candidates: NormalizedPoint[], count: number) {
	if (candidates.length <= count) return candidates;

	const picked: NormalizedPoint[] = [];
	const step = candidates.length / count;

	for (let i = 0; i < count; i++) {
		picked.push(candidates[Math.floor(i * step + step * 0.5)]);
	}

	return picked;
}

async function loadBoarSilhouette(src: string) {
	const image = new Image();
	image.decoding = "async";
	image.src = src;

	await new Promise<void>((resolve, reject) => {
		image.onload = () => resolve();
		image.onerror = () => reject(new Error("Failed to load boar silhouette"));
	});

	const maskCanvas = document.createElement("canvas");
	maskCanvas.width = SAMPLE_SIZE;
	maskCanvas.height = SAMPLE_SIZE;
	const maskCtx = maskCanvas.getContext("2d");

	if (!maskCtx) {
		return { maskCanvas, samples: [] as NormalizedPoint[] };
	}

	maskCtx.clearRect(0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
	maskCtx.drawImage(image, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE);

	const { data } = maskCtx.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
	const candidates: NormalizedPoint[] = [];

	for (let y = 0; y < SAMPLE_SIZE; y += 3) {
		for (let x = 0; x < SAMPLE_SIZE; x += 3) {
			const index = (y * SAMPLE_SIZE + x) * 4;
			if (data[index + 3] > 36) {
				candidates.push({
					nx: x / SAMPLE_SIZE,
					ny: y / SAMPLE_SIZE,
				});
			}
		}
	}

	return {
		maskCanvas,
		samples: pickSamples(candidates, BLOB_COUNT),
	};
}

function getShapeLayout(width: number, height: number): ShapeLayout {
	const size = Math.min(width, height) * 0.65;

	return {
		x: (width - size) / 2,
		y: (height - size) / 2,
		size,
	};
}

function createBlobs(samples: NormalizedPoint[], layout: ShapeLayout): Blob[] {
	return samples.map((sample, index) => {
		const anchorX = layout.x + sample.nx * layout.size;
		const anchorY = layout.y + sample.ny * layout.size;

		return {
			anchorX,
			anchorY,
			x: anchorX,
			y: anchorY,
			radius: 10 + (index % 5) * 4 + Math.random() * 6,
			phaseX: Math.random() * Math.PI * 2,
			phaseY: Math.random() * Math.PI * 2,
			waveSpeed: 0.35 + Math.random() * 0.45,
			waveX: 5 + Math.random() * 10,
			waveY: 5 + Math.random() * 10,
			alpha: 0.35 + Math.random() * 0.35,
			color: BLUES[index % BLUES.length],
		};
	});
}

export function BoarAntigravity({ className }: { className?: string }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const blobsRef = useRef<Blob[]>([]);
	const samplesRef = useRef<NormalizedPoint[]>([]);
	const maskCanvasRef = useRef<HTMLCanvasElement | null>(null);
	const layoutRef = useRef<ShapeLayout>({ x: 0, y: 0, size: 0 });
	const mouseRef = useRef({ x: 0, y: 0, active: false });
	const frameRef = useRef(0);
	const reducedMotionRef = useRef(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		reducedMotionRef.current = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		let disposed = false;

		const rebuildBlobs = (width: number, height: number) => {
			const layout = getShapeLayout(width, height);
			layoutRef.current = layout;
			blobsRef.current = createBlobs(samplesRef.current, layout);
		};

		const resize = () => {
			const parent = canvas.parentElement;
			if (!parent) return;

			const rect = parent.getBoundingClientRect();
			const dpr = Math.min(window.devicePixelRatio || 1, 2);

			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;
			canvas.style.width = `${rect.width}px`;
			canvas.style.height = `${rect.height}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

			if (samplesRef.current.length > 0) {
				rebuildBlobs(rect.width, rect.height);
			}
		};

		const init = async () => {
			try {
				const { maskCanvas, samples } = await loadBoarSilhouette(SAGYBOAR_LOGO_SRC);
				if (disposed) return;

				maskCanvasRef.current = maskCanvas;
				samplesRef.current = samples;
				resize();
			} catch {
				maskCanvasRef.current = null;
				samplesRef.current = [];
			}
		};

		const onPointerMove = (event: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouseRef.current = {
				x: event.clientX - rect.left,
				y: event.clientY - rect.top,
				active: true,
			};
		};

		const onPointerLeave = () => {
			mouseRef.current.active = false;
		};

		const draw = (time: number) => {
			const rect = canvas.getBoundingClientRect();
			const width = rect.width;
			const height = rect.height;
			const t = time * 0.001;
			const reduced = reducedMotionRef.current;
			const mouse = mouseRef.current;
			const layout = layoutRef.current;
			const maskCanvas = maskCanvasRef.current;

			ctx.clearRect(0, 0, width, height);

			const blobs = blobsRef.current;
			if (blobs.length === 0 || !maskCanvas) {
				frameRef.current = requestAnimationFrame(draw);
				return;
			}

			for (const blob of blobs) {
				const waveOffsetX = reduced
					? 0
					: Math.sin(t * blob.waveSpeed + blob.phaseX) * blob.waveX +
						Math.cos(t * blob.waveSpeed * 0.65 + blob.phaseY) * blob.waveX * 0.4;
				const waveOffsetY = reduced
					? 0
					: Math.cos(t * blob.waveSpeed * 0.9 + blob.phaseY) * blob.waveY +
						Math.sin(t * blob.waveSpeed * 0.55 + blob.phaseX) * blob.waveY * 0.45;

				let targetX = blob.anchorX + waveOffsetX;
				let targetY = blob.anchorY + waveOffsetY;

				if (!reduced && mouse.active) {
					const dx = mouse.x - targetX;
					const dy = mouse.y - targetY;
					const distance = Math.hypot(dx, dy) || 1;
					const influence = Math.max(0, 1 - distance / 200);
					const push = influence * 22;

					targetX -= (dx / distance) * push;
					targetY -= (dy / distance) * push;
				}

				const ease = reduced ? 1 : 0.08;
				blob.x += (targetX - blob.x) * ease;
				blob.y += (targetY - blob.y) * ease;

				const glowRadius = blob.radius * 2.6;
				const gradient = ctx.createRadialGradient(
					blob.x,
					blob.y,
					0,
					blob.x,
					blob.y,
					glowRadius,
				);

				gradient.addColorStop(0, `${blob.color} ${blob.alpha})`);
				gradient.addColorStop(0.4, `${blob.color} ${blob.alpha * 0.6})`);
				gradient.addColorStop(1, `${blob.color} 0)`);

				ctx.beginPath();
				ctx.fillStyle = gradient;
				ctx.arc(blob.x, blob.y, glowRadius, 0, Math.PI * 2);
				ctx.fill();
			}

			ctx.globalCompositeOperation = "lighter";

			for (const blob of blobs) {
				const inner = ctx.createRadialGradient(
					blob.x,
					blob.y,
					0,
					blob.x,
					blob.y,
					blob.radius * 1.4,
				);
				inner.addColorStop(0, `rgba(219, 234, 254, ${blob.alpha * 0.9})`);
				inner.addColorStop(0.5, `rgba(59, 130, 246, ${blob.alpha * 0.45})`);
				inner.addColorStop(1, "rgba(37, 99, 235, 0)");

				ctx.beginPath();
				ctx.fillStyle = inner;
				ctx.arc(blob.x, blob.y, blob.radius * 1.4, 0, Math.PI * 2);
				ctx.fill();
			}

			ctx.globalCompositeOperation = "destination-in";
			ctx.drawImage(maskCanvas, layout.x, layout.y, layout.size, layout.size);

			ctx.globalCompositeOperation = "source-over";

			frameRef.current = requestAnimationFrame(draw);
		};

		resize();
		init();
		window.addEventListener("resize", resize);
		window.addEventListener("pointermove", onPointerMove);
		window.addEventListener("pointerleave", onPointerLeave);
		frameRef.current = requestAnimationFrame(draw);

		return () => {
			disposed = true;
			cancelAnimationFrame(frameRef.current);
			window.removeEventListener("resize", resize);
			window.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("pointerleave", onPointerLeave);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden
			className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
		/>
	);
}
