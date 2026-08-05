import headlessuiPlugin from "@headlessui/tailwindcss";
import { tailwindTheme } from "./lib/tailwind-theme.js";
import type { Config } from "tailwindcss";
const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		fontSize: {
			xs: ["0.75rem", { lineHeight: "1rem" }],
			sm: ["0.875rem", { lineHeight: "1.5rem" }],
			base: ["1rem", { lineHeight: "1.75rem" }],
			lg: ["1.125rem", { lineHeight: "2rem" }],
			xl: ["1.25rem", { lineHeight: "2rem" }],
			"2xl": ["1.5rem", { lineHeight: "2rem" }],
			"3xl": ["2rem", { lineHeight: "2.5rem" }],
			"4xl": ["2.5rem", { lineHeight: "3.5rem" }],
			"5xl": ["3rem", { lineHeight: "3.5rem" }],
			"6xl": ["3.75rem", { lineHeight: "1" }],
			"7xl": ["4.5rem", { lineHeight: "1.1" }],
			"8xl": ["6rem", { lineHeight: "1" }],
			"9xl": ["8rem", { lineHeight: "1" }],
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				...tailwindTheme.colors,
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
				"4xl": "2rem",
			},
			fontFamily: {
				sans: [
					"var(--font-geist-sans)",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
				],
				display: "var(--font-display)",
				mono: [
					"var(--font-geist-mono)",
					"ui-monospace",
					"monospace",
				],
				// Wordmark-only (SiteFooter + Footer). Do not use on page UI.
				serif: "var(--font-serif), ui-serif, Georgia, serif",
			},
			boxShadow: {
				...tailwindTheme.boxShadow,
			},
			backgroundImage: {
				...tailwindTheme.backgroundImage,
			},
			backgroundSize: {
				...tailwindTheme.backgroundSize,
			},
			keyframes: {
				marquee: {
					from: {
						transform: "translateX(0)",
					},
					to: {
						transform: "translateX(calc(-100% - var(--gap)))",
					},
				},
				"marquee-vertical": {
					from: {
						transform: "translateY(0)",
					},
					to: {
						transform: "translateY(calc(-100% - var(--gap)))",
					},
				},
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				"shiny-text": {
					"0%, 90%, 100%": {
						"background-position": "calc(-100% - var(--shiny-width)) 0",
					},
					"30%, 60%": {
						"background-position": "calc(100% + var(--shiny-width)) 0",
					},
				},
				gradient: {
					to: {
						backgroundPosition: "var(--bg-size) 0",
					},
				},
				ripple: {
					"0%, 100%": {
						transform: "translate(-50%, -50%) scale(1)",
					},
					"50%": {
						transform: "translate(-50%, -50%) scale(0.9)",
					},
				},
				"cursor-blink": {
					"0%, 49%": { opacity: "1" },
					"50%, 100%": { opacity: "0" },
				},
				"pulse-travel": {
					"0%": { left: "0%", opacity: "0" },
					"10%": { opacity: "1" },
					"90%": { opacity: "1" },
					"100%": { left: "100%", opacity: "0" },
				},
				"agent-pulse": {
					"0%, 100%": { boxShadow: "0 0 0 0 rgba(109, 94, 248, 0.4)" },
					"50%": { boxShadow: "0 0 12px 2px rgba(109, 94, 248, 0.25)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"shiny-text": "shiny-text 8s infinite",
				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
				gradient: "gradient 8s linear infinite",
				ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
				"cursor-blink": "cursor-blink 1s step-end infinite",
				"pulse-travel": "pulse-travel 4s ease-in-out infinite",
				"agent-pulse": "agent-pulse 2.5s ease-in-out infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), headlessuiPlugin],
} satisfies Config;

export default config;
