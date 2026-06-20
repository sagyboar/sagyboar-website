"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return (
			<div
				className={cn("size-9 rounded-full border border-border/40", className)}
				aria-hidden
			/>
		);
	}

	const isDark = resolvedTheme === "dark";

	return (
		<button
			type="button"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className={cn(
				"inline-flex size-9 items-center justify-center rounded-full border border-border/40 text-foreground transition-colors hover:bg-accent/60",
				className,
			)}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
		>
			{isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
		</button>
	);
}
