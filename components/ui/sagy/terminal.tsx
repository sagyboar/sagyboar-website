"use client";

import { BrowserFrame } from "@/components/design-system/BrowserFrame";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./use-reduced-motion";

export type TerminalLine = {
	text: string;
	type?: "default" | "success" | "error" | "info";
};

type TerminalProps = {
	title?: string;
	lines: TerminalLine[];
	loop?: boolean;
	className?: string;
	minHeight?: string;
};

function formatTimestamp() {
	return new Date().toTimeString().slice(0, 8);
}

function lineColor(type: TerminalLine["type"]) {
	switch (type) {
		case "success":
			return "text-sagy-success";
		case "error":
			return "text-sagy-error";
		case "info":
			return "text-sagy-accent";
		default:
			return "text-sagy-body";
	}
}

/** Reusable streaming typewriter terminal with timestamps + green/red coding */
export function Terminal({
	title = "SAGYBOAR AGENT // LIVE",
	lines,
	loop = true,
	className,
	minHeight = "320px",
}: TerminalProps) {
	const [displayedLines, setDisplayedLines] = useState<
		{ line: TerminalLine; ts: string; charCount: number }[]
	>([]);
	const [lineIndex, setLineIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const reducedMotion = useReducedMotion();
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (reducedMotion) {
			setDisplayedLines(
				lines.map((line) => ({
					line,
					ts: formatTimestamp(),
					charCount: line.text.length,
				})),
			);
			return;
		}

		const currentLine = lines[lineIndex];
		if (!currentLine) {
			if (!loop) return;
			const resetTimer = setTimeout(() => {
				setDisplayedLines([]);
				setLineIndex(0);
				setCharIndex(0);
			}, 2500);
			return () => clearTimeout(resetTimer);
		}

		if (charIndex === 0) {
			setDisplayedLines((prev) => [
				...prev,
				{ line: currentLine, ts: formatTimestamp(), charCount: 0 },
			]);
		}

		if (charIndex < currentLine.text.length) {
			const speed = currentLine.type === "error" ? 18 : 28;
			const timer = setTimeout(() => {
				setCharIndex((c) => c + 1);
				setDisplayedLines((prev) => {
					const next = [...prev];
					const last = next[next.length - 1];
					if (last) last.charCount = charIndex + 1;
					return next;
				});
			}, speed);
			return () => clearTimeout(timer);
		}

		const pause =
			currentLine.type === "error"
				? 1200
				: currentLine.type === "success"
					? 600
					: 400;
		const timer = setTimeout(() => {
			setLineIndex((i) => i + 1);
			setCharIndex(0);
		}, pause);
		return () => clearTimeout(timer);
	}, [lineIndex, charIndex, reducedMotion, lines, loop]);

	useEffect(() => {
		containerRef.current?.scrollTo({
			top: containerRef.current.scrollHeight,
			behavior: reducedMotion ? "auto" : "smooth",
		});
	}, [displayedLines, reducedMotion]);

	return (
		<BrowserFrame
			title={title}
			className={className}
			contentClassName={cn("font-mono text-xs sm:text-[13px]")}
		>
			<div
				ref={containerRef}
				className="overflow-y-auto p-4 sm:p-5 leading-relaxed"
				style={{ minHeight }}
				role="log"
				aria-live="polite"
				aria-label="Terminal output"
			>
				{displayedLines.map((entry, i) => (
					<div key={`${entry.ts}-${i}`} className="mb-1.5 flex gap-2">
						<span className="shrink-0 text-sagy-muted">[{entry.ts}]</span>
						<span className={cn("break-all", lineColor(entry.line.type))}>
							{entry.line.text.slice(0, entry.charCount)}
						</span>
					</div>
				))}
				<span
					className="inline-block h-4 w-2 bg-sagy-accent motion-safe:animate-cursor-blink"
					aria-hidden="true"
				/>
			</div>
		</BrowserFrame>
	);
}
