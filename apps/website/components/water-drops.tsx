"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { InstancedMesh } from "three";
import * as THREE from "three";

const DROP_COUNT = 180;
const GRAVITY = 11;

type Drop = {
	active: boolean;
	x: number;
	y: number;
	z: number;
	vx: number;
	vy: number;
	vz: number;
	life: number;
	scale: number;
};

export type EmergenceState = {
	elapsed: number;
	progress: number;
	spawning: boolean;
	surfaceY: number;
	disturbance: number;
};

function createDropPool(): Drop[] {
	return Array.from({ length: DROP_COUNT }, () => ({
		active: false,
		x: 0,
		y: 0,
		z: 0,
		vx: 0,
		vy: 0,
		vz: 0,
		life: 0,
		scale: 0.015,
	}));
}

function spawnDrop(drop: Drop, state: EmergenceState) {
	drop.active = true;
	drop.x = (Math.random() - 0.5) * 2.2;
	drop.y = state.surfaceY + 0.15 + Math.random() * 2.2;
	drop.z = 0.2 + Math.random() * 0.55;
	drop.vx = (Math.random() - 0.5) * 1.1;
	drop.vy = -0.4 - Math.random() * 1.4;
	drop.vz = (Math.random() - 0.5) * 0.35;
	drop.life = 0.55 + Math.random() * 0.75;
	drop.scale = 0.01 + Math.random() * 0.022;
}

type WaterDropsProps = {
	emergenceRef: React.RefObject<EmergenceState>;
};

export function WaterDrops({ emergenceRef }: WaterDropsProps) {
	const meshRef = useRef<InstancedMesh>(null);
	const dropsRef = useRef(createDropPool());
	const spawnTimerRef = useRef(0);
	const dummy = useMemo(() => new THREE.Object3D(), []);

	useFrame((_, delta) => {
		const mesh = meshRef.current;
		const state = emergenceRef.current;
		if (!mesh || !state) {
			return;
		}

		let visibleCount = 0;

		if (state.spawning && state.disturbance > 0.08) {
			spawnTimerRef.current += delta;
			const spawnInterval = THREE.MathUtils.lerp(0.04, 0.12, 1 - state.disturbance);
			while (spawnTimerRef.current >= spawnInterval) {
				spawnTimerRef.current -= spawnInterval;
				const drop = dropsRef.current.find((item) => !item.active);
				if (drop) {
					spawnDrop(drop, state);
				}
			}
		}

		for (const drop of dropsRef.current) {
			if (!drop.active) {
				continue;
			}

			drop.vy -= GRAVITY * delta;
			drop.x += drop.vx * delta;
			drop.y += drop.vy * delta;
			drop.z += drop.vz * delta;
			drop.life -= delta;

			if (drop.life <= 0 || drop.y < state.surfaceY - 0.05) {
				drop.active = false;
				continue;
			}

			const fade = THREE.MathUtils.clamp(drop.life / 0.7, 0, 1);
			dummy.position.set(drop.x, drop.y, drop.z);
			dummy.scale.setScalar(drop.scale * fade);
			dummy.updateMatrix();
			mesh.setMatrixAt(visibleCount, dummy.matrix);
			visibleCount++;
		}

		mesh.count = visibleCount;
		mesh.instanceMatrix.needsUpdate = true;
	});

	return (
		<instancedMesh ref={meshRef} args={[undefined, undefined, DROP_COUNT]} renderOrder={4}>
			<sphereGeometry args={[1, 8, 8]} />
			<meshPhysicalMaterial
				color="#b8e4f8"
				emissive="#5a90a8"
				emissiveIntensity={0.12}
				transparent
				opacity={0.75}
				roughness={0.08}
				metalness={0.05}
				transmission={0.4}
				depthWrite={false}
			/>
		</instancedMesh>
	);
}
