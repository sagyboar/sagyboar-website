export const AUTH_WAVE_COLOR = "#4F8FF7";

export const AUTH_WAVE_PATH =
	"M0,96 C240,160 480,32 720,80 C960,128 1200,48 1440,96 L1440,160 L0,160 Z";

export const AUTH_WAVE_LAYERS = [
	{ duration: "22s", delay: "0s", opacity: 0.28 },
	{ duration: "16s", delay: "-4s", opacity: 0.55, reverse: true },
	{ duration: "12s", delay: "-2s", opacity: 1 },
] as const;
