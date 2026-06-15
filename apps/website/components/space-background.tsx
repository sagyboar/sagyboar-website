"use client";

import { Stars } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group, Points } from "three";
import * as THREE from "three";

type GalaxyConfig = {
	position: [number, number, number];
	rotation?: [number, number, number];
	scale?: number;
	radius?: number;
	arms?: number;
	spin?: number;
	count?: number;
	innerColor: string;
	outerColor: string;
	glowColor: string;
	speed?: number;
};

const GALAXIES: GalaxyConfig[] = [
	{
		position: [-7, 2.5, -14],
		rotation: [0.6, 0.4, 0.2],
		scale: 1.1,
		radius: 3.2,
		innerColor: "#c4b5fd",
		outerColor: "#312e81",
		glowColor: "#6366f1",
		speed: 0.012,
	},
	{
		position: [8.5, -1.5, -16],
		rotation: [0.3, -0.5, 0.1],
		scale: 1.35,
		radius: 3.8,
		innerColor: "#93c5fd",
		outerColor: "#1e3a8a",
		glowColor: "#3b82f6",
		speed: 0.008,
	},
	{
		position: [1.5, 4.5, -20],
		rotation: [0.8, 0.2, -0.3],
		scale: 0.95,
		radius: 2.8,
		innerColor: "#f0abfc",
		outerColor: "#581c87",
		glowColor: "#a855f7",
		speed: 0.01,
	},
	{
		position: [-3, -3.5, -18],
		rotation: [-0.2, 0.6, 0.15],
		scale: 1.2,
		radius: 3.4,
		innerColor: "#fcd34d",
		outerColor: "#92400e",
		glowColor: "#f59e0b",
		speed: 0.009,
	},
];

function createGalaxyGeometry({
	radius = 3,
	arms = 4,
	spin = 1.2,
	count = 1200,
	randomness = 0.35,
	innerColor,
	outerColor,
}: Pick<
	GalaxyConfig,
	"radius" | "arms" | "spin" | "count" | "innerColor" | "outerColor"
> & { randomness?: number }) {
	const positions = new Float32Array(count * 3);
	const colors = new Float32Array(count * 3);
	const inner = new THREE.Color(innerColor);
	const outer = new THREE.Color(outerColor);

	for (let i = 0; i < count; i++) {
		const i3 = i * 3;
		const r = Math.random() * radius;
		const branch = (i % arms) / arms;
		const angle = branch * Math.PI * 2 + (spin ?? 1) * r;
		const randomStrength = (Math.random() - 0.5) * randomness * r;

		positions[i3] = Math.cos(angle) * r + randomStrength;
		positions[i3 + 1] = Math.sin(angle) * r + randomStrength * 0.6;
		positions[i3 + 2] = (Math.random() - 0.5) * randomness * 1.5;

		const mixed = inner.clone().lerp(outer, r / radius);
		colors[i3] = mixed.r;
		colors[i3 + 1] = mixed.g;
		colors[i3 + 2] = mixed.b;
	}

	const geometry = new THREE.BufferGeometry();
	geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
	geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
	return geometry;
}

function createGlowTexture(color: string) {
	const size = 256;
	const canvas = document.createElement("canvas");
	canvas.width = size;
	canvas.height = size;
	const ctx = canvas.getContext("2d");

	if (!ctx) {
		return new THREE.Texture();
	}

	const gradient = ctx.createRadialGradient(
		size / 2,
		size / 2,
		0,
		size / 2,
		size / 2,
		size / 2,
	);
	gradient.addColorStop(0, color);
	gradient.addColorStop(0.25, `${color}88`);
	gradient.addColorStop(0.55, `${color}22`);
	gradient.addColorStop(1, "transparent");

	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, size, size);

	const texture = new THREE.CanvasTexture(canvas);
	texture.needsUpdate = true;
	return texture;
}

function Galaxy({
	position,
	rotation = [0, 0, 0],
	scale = 1,
	radius = 3,
	arms = 4,
	spin = 1.2,
	count = 1200,
	innerColor,
	outerColor,
	glowColor,
	speed = 0.01,
}: GalaxyConfig) {
	const groupRef = useRef<Group>(null);

	const { geometry, glowTexture } = useMemo(() => {
		return {
			geometry: createGalaxyGeometry({
				radius,
				arms,
				spin,
				count,
				innerColor,
				outerColor,
			}),
			glowTexture: createGlowTexture(glowColor),
		};
	}, [radius, arms, spin, count, innerColor, outerColor, glowColor]);

	useFrame((_, delta) => {
		if (groupRef.current) {
			groupRef.current.rotation.z += speed * delta;
		}
	});

	return (
		<group
			ref={groupRef}
			position={position}
			rotation={rotation}
			scale={scale}
		>
			<sprite scale={[radius * 2.2, radius * 2.2, 1]} position={[0, 0, -0.2]}>
				<spriteMaterial
					map={glowTexture}
					transparent
					opacity={0.55}
					depthWrite={false}
					blending={THREE.AdditiveBlending}
				/>
			</sprite>
			<points geometry={geometry}>
				<pointsMaterial
					size={0.045}
					sizeAttenuation
					vertexColors
					transparent
					opacity={0.9}
					depthWrite={false}
					blending={THREE.AdditiveBlending}
				/>
			</points>
		</group>
	);
}

function StarField({ spread = 1 }: { spread?: number }) {
	const pointsRef = useRef<Points>(null);

	const geometry = useMemo(() => {
		const count = 2500;
		const positions = new Float32Array(count * 3);
		const colors = new Float32Array(count * 3);

		for (let i = 0; i < count; i++) {
			const i3 = i * 3;
			positions[i3] = (Math.random() - 0.5) * 32 * spread;
			positions[i3 + 1] = (Math.random() - 0.5) * 18 * spread;
			positions[i3 + 2] = -5 - Math.random() * 22;

			const tone = Math.random();
			const starColor = new THREE.Color();
			if (tone < 0.15) {
				starColor.set("#93c5fd");
			} else if (tone < 0.25) {
				starColor.set("#fde68a");
			} else {
				starColor.set("#ffffff");
			}

			colors[i3] = starColor.r;
			colors[i3 + 1] = starColor.g;
			colors[i3 + 2] = starColor.b;
		}

		const starGeometry = new THREE.BufferGeometry();
		starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
		starGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
		return starGeometry;
	}, [spread]);

	useFrame((_, delta) => {
		if (pointsRef.current) {
			pointsRef.current.rotation.y += delta * 0.012;
		}
	});

	return (
		<points ref={pointsRef} geometry={geometry}>
			<pointsMaterial
				size={0.04}
				transparent
				opacity={0.92}
				sizeAttenuation
				vertexColors
				depthWrite={false}
			/>
		</points>
	);
}

export function SpaceBackground() {
	const { viewport } = useThree();
	const spread = Math.max(viewport.width / 6, viewport.height / 4.5, 1);

	return (
		<group scale={[spread, spread, 1]}>
			<Stars
				radius={140}
				depth={70}
				count={6000}
				factor={4}
				saturation={0}
				fade
				speed={0.35}
			/>
			<StarField spread={spread} />
			{GALAXIES.map((galaxy) => (
				<Galaxy key={`${galaxy.position.join("-")}-${galaxy.glowColor}`} {...galaxy} />
			))}
		</group>
	);
}
