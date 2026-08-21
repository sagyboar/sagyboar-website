"use client";

import { useReducedMotion } from "@/components/design-system/useReducedMotion";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

const LERP = 0.08;
const TRAIL_PX = 42;
const ANGLE_LERP = 0.12;
const MOVE_EPS = 0.35;
const REAR_OFFSET = 18;
const SILK_SAMPLE_PX = 2.5;
const SILK_MAX_POINTS = 380;
const SPIDER_SIZE = 48;

/** Hub of the half-web — `circle at 50% 0%` in `.sagy-spiderweb-overlay` */
function webHub() {
	return {
		x: window.innerWidth / 2,
		y: SPIDER_SIZE / 2,
	};
}

function lerpAngle(current: number, next: number, amount: number) {
	let diff = next - current;
	while (diff > 180) diff -= 360;
	while (diff < -180) diff += 360;
	return current + diff * amount;
}

function SpiderMark({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 64 64"
			className={className}
			fill="none"
			aria-hidden="true"
		>
			<path
				d="M28 26C18 22 12 14 8 8M26 30C16 28 8 24 4 20M26 34C16 36 8 40 4 44M28 38C18 42 12 50 8 56M36 26C46 22 52 14 56 8M38 30C48 28 56 24 60 20M38 34C48 36 56 40 60 44M36 38C46 42 52 50 56 56"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
			/>
			<path
				d="M29 22C28 17 26 15 23 13M35 22C36 17 38 15 41 13"
				stroke="currentColor"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<ellipse cx="32" cy="42" rx="8" ry="10" fill="currentColor" />
			<ellipse cx="32" cy="28" rx="7.2" ry="8" fill="currentColor" />
			<circle
				cx="29.4"
				cy="26"
				r="1.35"
				className="fill-[rgb(var(--sagy-accent-foreground))]"
			/>
			<circle
				cx="34.6"
				cy="26"
				r="1.35"
				className="fill-[rgb(var(--sagy-accent-foreground))]"
			/>
		</svg>
	);
}

/** Spider trails the cursor and unspools silk from its abdomen. Dark mode only. */
export function SpiderwebLight() {
	const reducedMotion = useReducedMotion();
	const { resolvedTheme } = useTheme();
	const spiderRef = useRef<HTMLDivElement>(null);
	const silkRef = useRef<SVGPathElement>(null);
	const isDark = resolvedTheme === "dark";

	useEffect(() => {
		if (reducedMotion || !isDark) return;

		const hub = webHub();
		const pos = { ...hub };
		const cursor = { ...hub };
		let angle = 180;
		let frame = 0;
		let revealed = false;
		const silk: { x: number; y: number }[] = [];
		let lastSilk = { x: Number.NaN, y: Number.NaN };

		const el = spiderRef.current;
		if (el) {
			el.style.transform = `translate(${hub.x}px, ${hub.y}px) translate(-50%, -50%) rotate(180deg)`;
		}

		const paintSilk = (rearX: number, rearY: number) => {
			if (Number.isNaN(lastSilk.x)) {
				silk.push({ x: rearX, y: rearY });
				lastSilk = { x: rearX, y: rearY };
				return;
			}

			const gap = Math.hypot(rearX - lastSilk.x, rearY - lastSilk.y);
			if (gap >= SILK_SAMPLE_PX) {
				silk.push({ x: rearX, y: rearY });
				if (silk.length > SILK_MAX_POINTS) silk.shift();
				lastSilk = { x: rearX, y: rearY };
			} else if (silk.length > 0) {
				silk[silk.length - 1] = { x: rearX, y: rearY };
			}

			const path = silkRef.current;
			if (!path || silk.length < 2) return;
			path.setAttribute(
				"d",
				silk
					.map(
						(point, index) =>
							`${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`,
					)
					.join(" "),
			);
		};

		const onPointerMove = (event: PointerEvent) => {
			cursor.x = event.clientX;
			cursor.y = event.clientY;

			if (!revealed) {
				revealed = true;
				const node = spiderRef.current;
				if (node) {
					node.style.opacity = "0.9";
					node.style.transform = `translate(${hub.x}px, ${hub.y}px) translate(-50%, -50%) rotate(180deg)`;
				}
				frame = requestAnimationFrame(tick);
			}
		};

		const tick = () => {
			const node = spiderRef.current;
			if (!node) {
				frame = requestAnimationFrame(tick);
				return;
			}

			const dx = cursor.x - pos.x;
			const dy = cursor.y - pos.y;
			const dist = Math.hypot(dx, dy) || 1;
			const behindX = cursor.x - (dx / dist) * TRAIL_PX;
			const behindY = cursor.y - (dy / dist) * TRAIL_PX;

			const nextX = pos.x + (behindX - pos.x) * LERP;
			const nextY = pos.y + (behindY - pos.y) * LERP;
			const moveX = nextX - pos.x;
			const moveY = nextY - pos.y;

			if (moveX * moveX + moveY * moveY > MOVE_EPS) {
				const heading = (Math.atan2(moveX, -moveY) * 180) / Math.PI;
				angle = lerpAngle(angle, heading, ANGLE_LERP);
			}

			pos.x = nextX;
			pos.y = nextY;
			node.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) rotate(${angle.toFixed(2)}deg)`;

			const headingRad = (angle * Math.PI) / 180;
			const rearX = pos.x - Math.sin(headingRad) * REAR_OFFSET;
			const rearY = pos.y + Math.cos(headingRad) * REAR_OFFSET;
			paintSilk(rearX, rearY);

			frame = requestAnimationFrame(tick);
		};

		window.addEventListener("pointermove", onPointerMove, { passive: true });

		return () => {
			window.removeEventListener("pointermove", onPointerMove);
			cancelAnimationFrame(frame);
		};
	}, [reducedMotion, isDark]);

	return (
		<div
			className="pointer-events-none fixed inset-0 z-[60] hidden dark:block"
			aria-hidden="true"
		>
			<svg className="sagy-web-silk" aria-hidden="true">
				<path
					ref={silkRef}
					className="sagy-web-silk-strand"
					fill="none"
					d=""
				/>
			</svg>
			<div
				ref={spiderRef}
				className={
					reducedMotion
						? "sagy-web-spider sagy-web-spider-static"
						: "sagy-web-spider"
				}
			>
				<SpiderMark className="size-full" />
			</div>
		</div>
	);
}
