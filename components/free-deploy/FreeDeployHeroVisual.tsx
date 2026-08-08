"use client";

import { Terminal, type TerminalLine } from "@/components/ui/sagy";

const DEPLOY_LINES: TerminalLine[] = [
	{ text: "› Connecting repository…", type: "info" },
	{ text: "› Running build pipeline…", type: "default" },
	{ text: "› Deploying to edge…", type: "default" },
	{ text: "✓ Build complete — 12.4s", type: "success" },
	{ text: "✓ SSL certificate issued", type: "success" },
	{ text: "✓ Live at yoursite.sagyboar.app", type: "success" },
];

export function FreeDeployHeroVisual() {
	return (
		<Terminal
			title="Sagyboar Deploy // Live"
			lines={DEPLOY_LINES}
			loop
			minHeight="280px"
			className="shadow-sagy-card"
		/>
	);
}
