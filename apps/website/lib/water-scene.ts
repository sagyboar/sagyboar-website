export function getSeaLevel(viewportHeight: number) {
	return -viewportHeight / 2 + 0.8;
}

export function easeOutBack(t: number, overshoot = 1.2) {
	const c1 = overshoot;
	const c3 = c1 + 1;
	return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2;
}
