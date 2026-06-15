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
		const relief = alpha * depth * (0.35 + luminance * 0.65);
		positions.setZ(i, Number.isFinite(relief) ? relief : 0);
	}

	geometry.computeVertexNormals();
	return geometry;
}

export function createBackingGeometry(
	texture: THREE.Texture,
	{ width = 3.2, depth = 0.18 }: ReliefOptions = {},
) {
	const { image, imageData } = getAlphaImageData(texture);
	const threshold = 40;

	let minX = image.width;
	let maxX = 0;
	let minY = image.height;
	let maxY = 0;

	for (let y = 0; y < image.height; y++) {
		for (let x = 0; x < image.width; x++) {
			const alpha = imageData.data[(y * image.width + x) * 4 + 3];
			if (alpha > threshold) {
				minX = Math.min(minX, x);
				maxX = Math.max(maxX, x);
				minY = Math.min(minY, y);
				maxY = Math.max(maxY, y);
			}
		}
	}

	if (minX >= maxX || minY >= maxY) {
		return new THREE.BoxGeometry(width, width, depth);
	}

	const aspect = image.width / image.height;
	const fullHeight = width / aspect;
	const boundsWidth = ((maxX - minX) / image.width) * width;
	const boundsHeight = ((maxY - minY) / image.height) * fullHeight;
	const centerX = ((minX + maxX) / 2 / image.width - 0.5) * width;
	const centerY = (0.5 - (minY + maxY) / 2 / image.height) * fullHeight;

	const geometry = new THREE.BoxGeometry(
		Math.max(boundsWidth * 0.92, 0.5),
		Math.max(boundsHeight * 0.92, 0.5),
		depth,
	);
	geometry.translate(centerX, centerY, 0);

	return geometry;
}
