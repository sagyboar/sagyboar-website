"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

const THEME_CYCLE = ["system", "light", "dark"] as const;
type ThemeOption = (typeof THEME_CYCLE)[number];

const THEME_LABELS: Record<ThemeOption, string> = {
	system: "System theme",
	light: "Light mode",
	dark: "Dark mode",
};

function getNextTheme(current: string | undefined): ThemeOption {
	const index = THEME_CYCLE.indexOf((current ?? "system") as ThemeOption);
	const safeIndex = index === -1 ? 0 : index;
	return THEME_CYCLE[(safeIndex + 1) % THEME_CYCLE.length];
}

function ThemeIcon({ theme }: { theme: ThemeOption }) {
	if (theme === "dark") return <Moon className="size-4" aria-hidden />;
	if (theme === "light") return <Sun className="size-4" aria-hidden />;
	return <Monitor className="size-4" aria-hidden />;
}

function isTypingTarget(target: EventTarget | null) {
	if (!(target instanceof HTMLElement)) return false;
	const tag = target.tagName;
	return (
		tag === "INPUT" ||
		tag === "TEXTAREA" ||
		tag === "SELECT" ||
		target.isContentEditable
	);
}

export function ThemeToggle({ className }: { className?: string }) {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const activeTheme = (
		THEME_CYCLE.includes((theme ?? "system") as ThemeOption)
			? theme
			: "system"
	) as ThemeOption;

	const cycleTheme = useCallback(() => {
		setTheme(getNextTheme(theme));
	}, [setTheme, theme]);

	useEffect(() => setMounted(true), []);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (
				!event.shiftKey ||
				event.key.toLowerCase() !== "n" ||
				event.metaKey ||
				event.ctrlKey ||
				event.altKey
			) {
				return;
			}

			if (isTypingTarget(event.target)) return;

			event.preventDefault();
			cycleTheme();
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [cycleTheme]);

	if (!mounted) {
		return (
			<div
				className={cn("size-9 rounded-full border border-border/40", className)}
				aria-hidden
			/>
		);
	}

	const nextTheme = getNextTheme(activeTheme);

	return (
		<TooltipProvider delayDuration={150}>
			<Tooltip>
				<TooltipTrigger asChild>
					<button
						type="button"
						onClick={cycleTheme}
						className={cn(
							"inline-flex size-9 items-center justify-center rounded-full border border-border/40 text-foreground transition-colors hover:bg-accent/60",
							className,
						)}
						aria-label={`${THEME_LABELS[activeTheme]}. Press Shift+N to switch to ${THEME_LABELS[nextTheme].toLowerCase()}.`}
					>
						<ThemeIcon theme={activeTheme} />
					</button>
				</TooltipTrigger>
				<TooltipContent side="bottom" align="center">
					<p className="text-sm font-medium">{THEME_LABELS[activeTheme]}</p>
					<p className="mt-0.5 text-xs text-muted-foreground">
						Shift+N · Next: {THEME_LABELS[nextTheme]}
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
