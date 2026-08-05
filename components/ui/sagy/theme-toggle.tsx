"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/** Dark/light toggle — switches CSS variables site-wide */
export function ThemeToggle({ className }: { className?: string }) {
	const { theme, setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return (
			<span
				className={cn(
					"inline-flex size-9 items-center justify-center rounded-lg border border-sagy-border bg-black/[0.04] dark:bg-white/[0.04]",
					className,
				)}
				aria-hidden="true"
			/>
		);
	}

	const isDark = (resolvedTheme ?? theme) === "dark";

	return (
		<button
			type="button"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className={cn(
				"inline-flex size-9 items-center justify-center rounded-lg border border-sagy-border bg-black/[0.04] text-sagy-body transition-colors hover:text-sagy-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent dark:bg-white/[0.04]",
				className,
			)}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
		>
			{isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
		</button>
	);
}
