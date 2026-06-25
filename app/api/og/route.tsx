import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";

const WIDTH = 1200;
const HEIGHT = 630;
const MAX_LABEL = 60;

const publicDir = join(process.cwd(), "public");
const fontsDir = join(publicDir, "fonts");

// Cache file reads across requests in the same server process.
let assets: {
	bg: string;
	display: Buffer;
	serif: Buffer;
} | null = null;

async function loadAssets() {
	if (assets) return assets;
	const [bgBuf, display, serif] = await Promise.all([
		readFile(join(publicDir, "OG-Image.png")),
		readFile(join(fontsDir, "Lexend-600.woff")),
		readFile(join(fontsDir, "InstrumentSerif-Regular.ttf")),
	]);
	assets = {
		bg: `data:image/png;base64,${bgBuf.toString("base64")}`,
		display,
		serif,
	};
	return assets;
}

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const rawLabel = (searchParams.get("title") ?? "").trim();
	const label =
		(rawLabel.length > MAX_LABEL
			? `${rawLabel.slice(0, MAX_LABEL).trimEnd()}…`
			: rawLabel) || "Deploy with ease";

	const { bg, display, serif } = await loadAssets();

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				padding: 72,
				backgroundColor: "#0a0a0a",
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Contrast scrim so text stays readable on the bright gradient */}
			<div
				style={{
					position: "absolute",
					inset: 0,
					display: "flex",
					background:
						"linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.7) 100%)",
				}}
			/>

			{/* Brand row */}
			<div
				style={{
					position: "relative",
					display: "flex",
					alignItems: "center",
					gap: 16,
				}}
			>
				<div
					style={{
						width: 28,
						height: 28,
						borderRadius: 8,
						background:
							"linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #f472b6 100%)",
						display: "flex",
					}}
				/>
				<div
					style={{
						fontFamily: "Instrument Serif",
						fontSize: 40,
						color: "#ffffff",
						display: "flex",
					}}
				>
					Sagyboar
				</div>
			</div>

			{/* Headline: "<label> | Sagyboar" */}
			<div
				style={{
					position: "relative",
					display: "flex",
					alignItems: "flex-end",
					flexWrap: "wrap",
				}}
			>
				<span
					style={{
						fontFamily: "Lexend",
						fontSize: 88,
						fontWeight: 600,
						lineHeight: 1.05,
						color: "#ffffff",
						letterSpacing: "-0.02em",
					}}
				>
					{label}
				</span>
				<span
					style={{
						fontFamily: "Lexend",
						fontSize: 72,
						color: "rgba(255,255,255,0.55)",
						padding: "0 24px",
					}}
				>
					|
				</span>
				<span
					style={{
						fontFamily: "Instrument Serif",
						fontSize: 84,
						color: "#ffffff",
					}}
				>
					Sagyboar
				</span>
			</div>
		</div>,
		{
			width: WIDTH,
			height: HEIGHT,
			fonts: [
				{ name: "Lexend", data: display, weight: 600, style: "normal" },
				{
					name: "Instrument Serif",
					data: serif,
					weight: 400,
					style: "normal",
				},
			],
			headers: {
				"Cache-Control":
					"public, immutable, no-transform, max-age=86400, s-maxage=604800",
			},
		},
	);
}
