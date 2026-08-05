/**
 * Sagyboar Design System — single source of truth
 * Every page imports from here. No inline colors/fonts.
 */

export const paletteDark = {
	bg: "#08080A",
	surface: "#0F0F12",
	surfaceElevated: "#141418",
	accent: "#6D5EF8",
	accentGlow: "rgba(109, 94, 248, 0.35)",
	body: "#A0A0A8",
	muted: "#6B6B75",
	border: "rgba(255, 255, 255, 0.08)",
	success: "#22C55E",
	error: "#EF4444",
	idle: "#52525B",
	heading: "#FFFFFF",
	brandBrown: "#8B6914",
} as const;

export const paletteLight = {
	bg: "#FAFAFA",
	surface: "#FFFFFF",
	surfaceElevated: "#F4F4F5",
	accent: "#6D5EF8",
	accentGlow: "rgba(109, 94, 248, 0.25)",
	body: "#52525B",
	muted: "#71717A",
	border: "rgba(0, 0, 0, 0.08)",
	success: "#16A34A",
	error: "#DC2626",
	idle: "#A1A1AA",
	heading: "#09090B",
	brandBrown: "#8B6914",
} as const;

export const cssVars = {
	bg: "--sagy-bg",
	surface: "--sagy-surface",
	surfaceElevated: "--sagy-surface-elevated",
	accent: "--sagy-accent",
	accentGlow: "--sagy-accent-glow",
	body: "--sagy-body",
	muted: "--sagy-muted",
	border: "--sagy-border",
	success: "--sagy-success",
	error: "--sagy-error",
	idle: "--sagy-idle",
	heading: "--sagy-heading",
	grainOpacity: "--sagy-grain-opacity",
	gridDot: "--sagy-grid-dot",
	glowStrength: "--sagy-glow-strength",
} as const;

/**
 * Mirrors lib/tailwind-theme.js. Solid colors read RGB channels from the CSS
 * vars so Tailwind opacity modifiers resolve (bg-sagy-accent/25); `border` and
 * `accent-glow` are stored as rgba() and take no alpha modifier.
 */
export const semanticColors = {
	bg: `rgb(var(${cssVars.bg}) / <alpha-value>)`,
	surface: `rgb(var(${cssVars.surface}) / <alpha-value>)`,
	"surface-elevated": `rgb(var(${cssVars.surfaceElevated}) / <alpha-value>)`,
	accent: `rgb(var(${cssVars.accent}) / <alpha-value>)`,
	"accent-glow": `var(${cssVars.accentGlow})`,
	body: `rgb(var(${cssVars.body}) / <alpha-value>)`,
	muted: `rgb(var(${cssVars.muted}) / <alpha-value>)`,
	border: `var(${cssVars.border})`,
	success: `rgb(var(${cssVars.success}) / <alpha-value>)`,
	error: `rgb(var(${cssVars.error}) / <alpha-value>)`,
	idle: `rgb(var(${cssVars.idle}) / <alpha-value>)`,
	heading: `rgb(var(${cssVars.heading}) / <alpha-value>)`,
} as const;

export const typography = {
	display: "var(--font-display)",
	sans: "var(--font-geist-sans)",
	mono: "var(--font-geist-mono)",
	/** Wordmark-only — SiteFooter / Footer mascot. Do not use on page UI. */
	serif: "var(--font-serif)",
} as const;

export const spacing = {
	sectionY: "py-24 sm:py-28",
	sectionYLarge: "py-24 sm:py-32 lg:py-36",
	containerX: "px-4 sm:px-6",
	maxWidth: "max-w-6xl",
} as const;

export const radii = {
	card: "rounded-xl",
	button: "rounded-xl",
	pill: "rounded-full",
	panel: "rounded-2xl",
	nav: "rounded-full",
} as const;

export const shadows = {
	soft: "0 8px 32px rgba(0, 0, 0, 0.4)",
	softLight: "0 8px 32px rgba(0, 0, 0, 0.08)",
	glow: "0 0 40px rgba(109, 94, 248, 0.25)",
	card: "0 4px 24px rgba(0, 0, 0, 0.3)",
	cardLight: "0 4px 24px rgba(0, 0, 0, 0.06)",
} as const;

export const motion = {
	ease: [0.22, 1, 0.36, 1] as const,
	duration: 0.55,
	stagger: 0.08,
	revealOffset: 24,
} as const;

export const overlays = {
	grainOpacity: 0.04,
	gridSize: "24px",
} as const;

export const badgeVariants = {
	CORE: "border-sagy-border bg-black/[0.04] text-sagy-muted dark:bg-white/[0.04]",
	AI: "border-sagy-accent/30 bg-sagy-accent/10 text-sagy-accent",
	NEW: "border-sagy-accent/30 bg-sagy-accent/10 text-sagy-accent",
	MANAGED: "border-sagy-success/30 bg-sagy-success/10 text-sagy-success",
} as const;

export type BadgeVariant = keyof typeof badgeVariants;

export const tailwindThemeExtension = {
	colors: { sagy: semanticColors },
	boxShadow: {
		"sagy-soft": shadows.soft,
		"sagy-soft-light": shadows.softLight,
		"sagy-glow": shadows.glow,
		"sagy-card": shadows.card,
		"sagy-card-light": shadows.cardLight,
	},
	backgroundImage: {
		"sagy-grain":
			"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
		"sagy-grid":
			"radial-gradient(circle, var(--sagy-grid-dot) 1px, transparent 1px)",
		"sagy-radial-glow":
			"radial-gradient(ellipse 55% 45% at 50% -5%, var(--sagy-glow-strength), transparent 65%)",
		"sagy-mesh":
			"radial-gradient(at 40% 20%, rgba(109, 94, 248, 0.08) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(109, 94, 248, 0.04) 0px, transparent 50%)",
		"sagy-cta-glow":
			"radial-gradient(ellipse 80% 60% at 50% 50%, rgba(109, 94, 248, 0.35), rgba(109, 94, 248, 0.08) 50%, transparent 80%)",
	},
	backgroundSize: {
		"sagy-grid": "24px 24px",
		"sagy-grain": "180px 180px",
	},
} as const;

export const colors = paletteDark;
export const tailwindTheme = tailwindThemeExtension;
