/** Webpack-safe Tailwind bridge — mirrors lib/tokens.ts semantic colors */

/**
 * Solid colors read RGB channels so opacity modifiers work (bg-sagy-accent/25).
 * `border` and `accent-glow` are already rgba() and take no alpha modifier.
 */
const semanticColors = {
	bg: "rgb(var(--sagy-bg) / <alpha-value>)",
	surface: "rgb(var(--sagy-surface) / <alpha-value>)",
	"surface-elevated": "rgb(var(--sagy-surface-elevated) / <alpha-value>)",
	accent: "rgb(var(--sagy-accent) / <alpha-value>)",
	"accent-glow": "var(--sagy-accent-glow)",
	body: "rgb(var(--sagy-body) / <alpha-value>)",
	muted: "rgb(var(--sagy-muted) / <alpha-value>)",
	border: "var(--sagy-border)",
	success: "rgb(var(--sagy-success) / <alpha-value>)",
	error: "rgb(var(--sagy-error) / <alpha-value>)",
	idle: "rgb(var(--sagy-idle) / <alpha-value>)",
	heading: "rgb(var(--sagy-heading) / <alpha-value>)",
};

const tailwindTheme = {
	colors: { sagy: semanticColors },
	boxShadow: {
		"sagy-soft": "0 8px 32px rgba(0, 0, 0, 0.4)",
		"sagy-soft-light": "0 8px 32px rgba(0, 0, 0, 0.08)",
		"sagy-glow": "0 0 40px rgba(109, 94, 248, 0.25)",
		"sagy-card": "0 4px 24px rgba(0, 0, 0, 0.3)",
		"sagy-card-light": "0 4px 24px rgba(0, 0, 0, 0.06)",
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
};

module.exports = { tailwindTheme, semanticColors };
