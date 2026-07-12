/**
 * Extract poster candidate frames from the intro video.
 *
 * Requires ffmpeg on PATH. On macOS: brew install ffmpeg
 *
 * Usage (from sagyboar-website root):
 *   node scripts/generate-poster-candidates.mjs
 */

import { spawn } from "node:child_process";
import { access, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const VIDEO = path.join(ROOT, "public/videos/intro.mp4");
const OUT_DIR = path.join(ROOT, "public/videos/candidates");

/** @type {readonly number[]} */
const TIMESTAMPS_SEC = [2, 2.5, 3, 3.5, 4];

/** JPEG quality ~90 → ffmpeg -q:v 2 (1=best, 31=worst for mjpeg) */
const JPEG_QSCALE = "2";

function run(cmd, args) {
	return new Promise((resolve, reject) => {
		const child = spawn(cmd, args, { stdio: ["ignore", "pipe", "pipe"] });
		let stderr = "";
		child.stderr.on("data", (chunk) => {
			stderr += chunk.toString();
		});
		child.on("error", (err) => {
			if (err.code === "ENOENT") {
				reject(
					new Error(
						`"${cmd}" not found. Install ffmpeg first:\n  brew install ffmpeg`,
					),
				);
				return;
			}
			reject(err);
		});
		child.on("close", (code) => {
			if (code === 0) resolve();
			else reject(new Error(`ffmpeg exited ${code}\n${stderr}`));
		});
	});
}

async function extractFrame(timestampSec, index) {
	const outFile = path.join(OUT_DIR, `intro-poster-${index}.jpg`);
	await run("ffmpeg", [
		"-y",
		"-ss",
		String(timestampSec),
		"-i",
		VIDEO,
		"-frames:v",
		"1",
		"-q:v",
		JPEG_QSCALE,
		outFile,
	]);
	return outFile;
}

async function main() {
	try {
		await access(VIDEO);
	} catch {
		console.error(`Video not found: ${VIDEO}`);
		process.exit(1);
	}

	await mkdir(OUT_DIR, { recursive: true });

	console.log(`Source: ${VIDEO}`);
	console.log(`Output: ${OUT_DIR}`);
	console.log(`Extracting ${TIMESTAMPS_SEC.length} frames…\n`);

	for (let i = 0; i < TIMESTAMPS_SEC.length; i++) {
		const t = TIMESTAMPS_SEC[i];
		const file = await extractFrame(t, i + 1);
		console.log(`✓ ${path.basename(file)}  @ ${t}s`);
	}

	console.log(`
Done. Review the candidates, then copy your favorite:

  cp public/videos/candidates/intro-poster-N.jpg public/videos/intro-poster.jpg
`);
}

main().catch((err) => {
	console.error(err.message || err);
	process.exit(1);
});
