import * as THREE from "three";

type ReliefOptions = {
	width?: number;
	depth?: number;
	segments?: number;
};

function getImageFromTexture(texture: THREE.Texture): HTMLImageElement {
	const image = texture.image as HTMLImageElement;

	if (!image?.width || !image?.height) {
		throw new Error("Texture image is not ready");
	}

	return image;
}

function getAlphaImageData(texture: THREE.Texture) {
	const image = getImageFromTexture(texture);
	const canvas = document.createElement("canvas");
	canvas.width = image.width;
	canvas.height = image.height;
	const ctx = canvas.getContext("2d");

	if (!ctx) {
		throw new Error("Could not create canvas context");
	}

	ctx.drawImage(image, 0, 0);
	return {
		image,
		imageData: ctx.getImageData(0, 0, image.width, image.height),
	};
}

export function createCutoutTexture(source: THREE.Texture) {
	const { image, imageData } = getAlphaImageData(source);
	const canvas = document.createElement("canvas");
	canvas.width = image.width;
	canvas.height = image.height;
	const ctx = canvas.getContext("2d");

	if (!ctx) {
		throw new Error("Could not create canvas context for cutout texture");
	}

	const cutout = new ImageData(image.width, image.height);

	for (let i = 0; i < imageData.data.length; i += 4) {
		const r = imageData.data[i];
		const g = imageData.data[i + 1];
		const b = imageData.data[i + 2];
		const alpha = imageData.data[i + 3];
		const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
		const isBackground = alpha < 20 || luminance < 0.14;

		cutout.data[i] = r;
		cutout.data[i + 1] = g;
		cutout.data[i + 2] = b;
		cutout.data[i + 3] = isBackground ? 0 : alpha;
	}

	ctx.putImageData(cutout, 0, 0);

	const texture = new THREE.CanvasTexture(canvas);
	texture.colorSpace = THREE.SRGBColorSpace;
	texture.anisotropy = 16;
	texture.needsUpdate = true;

	return texture;
}

export function createReliefGeometryFromTexture(
	texture: THREE.Texture,
	{ width = 3.2, depth = 0.45, segments = 160 }: ReliefOptions = {},
) {
	const { image, imageData } = getAlphaImageData(texture);
	const aspect = image.width / image.height;
	const height = width / aspect;

	const geometry = new THREE.PlaneGeometry(width, height, segments, segments);
	const positions = geometry.attributes.position;

	for (let i = 0; i < positions.count; i++) {
		const x = positions.getX(i);
		const y = positions.getY(i);
		const u = x / width + 0.5;
		const v = 0.5 - y / height;
		const px = Math.min(
			image.width - 1,
			Math.max(0, Math.floor(u * image.width)),
		);
		const py = Math.min(
			image.height - 1,
			Math.max(0, Math.floor(v * image.height)),
		);
		const index = (py * image.width + px) * 4;
		const alpha = imageData.data[index + 3] / 255;
		const r = imageData.data[index];
		const g = imageData.data[index + 1];
		const b = imageData.data[index + 2];
		const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
		const visibility = alpha > 0.08 && luminance >= 0.14 ? alpha : 0;
		const relief = visibility * depth * (0.35 + luminance * 0.65);
		positions.setZ(i, Number.isFinite(relief) ? relief : 0);
	}

	geometry.computeVertexNormals();
	return geometry;
}

export function getSubjectBounds(texture: THREE.Texture) {
	const { image, imageData } = getAlphaImageData(texture);
	const threshold = 40;

	let minX = image.width;
	let maxX = 0;
	let minY = image.height;
	let maxY = 0;

	for (let y = 0; y < image.height; y++) {
		for (let x = 0; x < image.width; x++) {
			const index = (y * image.width + x) * 4;
			const alpha = imageData.data[index + 3];
			const luminance =
				(0.299 * imageData.data[index] +
					0.587 * imageData.data[index + 1] +
					0.114 * imageData.data[index + 2]) /
				255;

			if (alpha > threshold && luminance >= 0.14) {
				minX = Math.min(minX, x);
				maxX = Math.max(maxX, x);
				minY = Math.min(minY, y);
				maxY = Math.max(maxY, y);
			}
		}
	}

	if (minX >= maxX || minY >= maxY) {
		return { centerX: 0, centerY: 0, width: 3.2, height: 3.2 };
	}

	const modelWidth = 3.4;
	const aspect = image.width / image.height;
	const modelHeight = modelWidth / aspect;

	return {
		centerX: ((minX + maxX) / 2 / image.width - 0.5) * modelWidth,
		centerY: (0.5 - (minY + maxY) / 2 / image.height) * modelHeight,
		width: ((maxX - minX) / image.width) * modelWidth,
		height: ((maxY - minY) / image.height) * modelHeight,
	};
}
