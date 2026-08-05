"use client";

import { useEffect } from "react";

/** Degrees the card leans at the far edges */
const MAX_TILT = 6;

/**
 * Feeds cursor position to every `.sagy-spotlight` glow and `.sagy-tilt` card on
 * the page through one delegated listener, so cards stay server components
 * instead of each carrying their own mousemove state. The glow, the lean and the
 * sheen are all CSS (see tailwind.css).
 */
export function CardMotionLayer() {
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		let queued = false;
		let pending: { x: number; y: number; target: HTMLElement } | null = null;

		const flush = () => {
			queued = false;
			if (!pending) return;
			const { x, y, target } = pending;

			const glow = target.closest<HTMLElement>(".sagy-spotlight");
			if (glow) {
				const rect = glow.getBoundingClientRect();
				glow.style.setProperty("--spot-x", `${x - rect.left}px`);
				glow.style.setProperty("--spot-y", `${y - rect.top}px`);
			}

			const tilt = target.closest<HTMLElement>(".sagy-tilt");
			if (tilt) {
				const rect = tilt.getBoundingClientRect();
				const px = (x - rect.left) / rect.width - 0.5;
				const py = (y - rect.top) / rect.height - 0.5;
				tilt.style.setProperty("--tilt-x", `${-py * MAX_TILT}deg`);
				tilt.style.setProperty("--tilt-y", `${px * MAX_TILT}deg`);
				tilt.style.setProperty("--tilt-sheen", `${120 + px * 60}deg`);
			}
		};

		const onPointerMove = (event: PointerEvent) => {
			const target = event.target as HTMLElement | null;
			if (!target?.closest(".sagy-spotlight, .sagy-tilt")) return;

			pending = { x: event.clientX, y: event.clientY, target };
			if (queued) return;
			queued = true;
			requestAnimationFrame(flush);
		};

		document.addEventListener("pointermove", onPointerMove, { passive: true });
		return () => document.removeEventListener("pointermove", onPointerMove);
	}, []);

	return null;
}
