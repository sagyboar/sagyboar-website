/** Fixed background layers: dotted grid (light) / spider-web (dark) + glow + grain */
export function PageBackground() {
	return (
		<div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
			<div className="sagy-grid-overlay" />
			<div className="sagy-spiderweb-overlay" />
			<div className="sagy-radial-glow" />
			<div className="sagy-grain-overlay" />
		</div>
	);
}
