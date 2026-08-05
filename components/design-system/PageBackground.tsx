/** Fixed background: film grain + dotted grid + restrained radial glow */
export function PageBackground() {
	return (
		<div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
			<div className="sagy-grid-overlay" />
			<div className="sagy-radial-glow" />
			<div className="sagy-grain-overlay" />
		</div>
	);
}
