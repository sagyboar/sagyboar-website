"use client";

import { useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import type { Group } from "three";
import * as THREE from "three";
import { SpaceBackground } from "@/components/space-background";
import { WaterDrops, type EmergenceState } from "@/components/water-drops";
import { WaterDisturbance } from "@/components/water-disturbance";
import { WaterWave } from "@/components/water-wave";
import {
	createCutoutTexture,
	createReliefGeometryFromTexture,
	getSubjectBounds,
} from "@/lib/create-relief-geometry";
import { easeOutBack, getSeaLevel } from "@/lib/water-scene";

const TEXTURE_PATH = "/home/SAGYBOAR.png";
const EMERGENCE_DURATION = 3.2;

type SagyboarMeshProps = {
	emergenceRef: React.RefObject<EmergenceState>;
	seaLevel: number;
};

function SagyboarMesh({ emergenceRef, seaLevel }: SagyboarMeshProps) {
	const groupRef = useRef<Group>(null);
	const sourceTexture = useTexture(TEXTURE_PATH);

	const { cutoutTexture, frontGeometry, bounds } = useMemo(() => {
		sourceTexture.colorSpace = THREE.SRGBColorSpace;
		sourceTexture.anisotropy = 16;

		const cutout = createCutoutTexture(sourceTexture);
		const geometry = createReliefGeometryFromTexture(cutout, {
			width: 3.4,
			depth: 0.55,
			segments: 180,
		});

		return {
			cutoutTexture: cutout,
			frontGeometry: geometry,
			bounds: getSubjectBounds(cutout),
		};
	}, [sourceTexture]);

	const targetY = -bounds.centerY;
	const submergedY = seaLevel - 2.1;

	useFrame((_, delta) => {
		const group = groupRef.current;
		const state = emergenceRef.current;
		if (!group || !state) {
			return;
		}

		state.elapsed = Math.min(state.elapsed + delta, EMERGENCE_DURATION + 0.6);
		state.progress = THREE.MathUtils.clamp(state.elapsed / EMERGENCE_DURATION, 0, 1);
		state.surfaceY = seaLevel;
		state.spawning = state.progress > 0.18 && state.elapsed < EMERGENCE_DURATION + 0.35;

		const risePeak = 1 - Math.abs(state.progress - 0.5) * 2;
		state.disturbance = state.spawning
			? THREE.MathUtils.clamp(risePeak * 1.2 + 0.15, 0, 1)
			: THREE.MathUtils.lerp(state.disturbance, 0, delta * 2);

		const eased = easeOutBack(state.progress);
		group.position.y = THREE.MathUtils.lerp(submergedY, targetY, eased);
		group.position.x = -bounds.centerX;
		group.rotation.x = THREE.MathUtils.lerp(0.22, 0, eased);
		group.rotation.z = THREE.MathUtils.lerp(-0.08, 0, eased);
		group.scale.setScalar(THREE.MathUtils.lerp(0.82, 1, eased));
	});

	return (
		<group ref={groupRef} position={[-bounds.centerX, submergedY, 0.35]}>
			<mesh geometry={frontGeometry} renderOrder={2}>
				<meshStandardMaterial
					map={cutoutTexture}
					transparent
					alphaTest={0.12}
					metalness={0.18}
					roughness={0.42}
					side={THREE.FrontSide}
					depthWrite
				/>
			</mesh>

			<pointLight position={[3, 1.5, 5]} intensity={12} color="#e8f0ff" />
			<pointLight position={[-2.5, -0.5, 3]} intensity={6} color="#6eb5ff" />
		</group>
	);
}

function SceneContent() {
	const { viewport } = useThree();
	const seaLevel = getSeaLevel(viewport.height);
	const emergenceRef = useRef<EmergenceState>({
		elapsed: 0,
		progress: 0,
		spawning: false,
		surfaceY: seaLevel,
		disturbance: 0,
	});

	return (
		<>
			<fog attach="fog" args={["#000000", 14, 40]} />
			<SpaceBackground />
			<WaterWave seaLevel={seaLevel} emergenceRef={emergenceRef} />
			<WaterDisturbance emergenceRef={emergenceRef} seaLevel={seaLevel} />
			<WaterDrops emergenceRef={emergenceRef} />
			<ambientLight intensity={0.4} />
			<directionalLight position={[5, 4, 6]} intensity={0.75} color="#f0f4ff" />
			<directionalLight position={[-4, 2, -2]} intensity={0.2} color="#4F8FF7" />
			<SagyboarMesh emergenceRef={emergenceRef} seaLevel={seaLevel} />
		</>
	);
}

export function Sagyboar3DScene({ className }: { className?: string }) {
	return (
		<div className={className}>
			<Canvas
				camera={{ position: [0, 0, 5.2], fov: 52 }}
				dpr={[1, 2]}
				gl={{ antialias: true, alpha: true }}
				style={{ width: "100%", height: "100%", background: "transparent" }}
			>
				<Suspense fallback={null}>
					<SceneContent />
				</Suspense>
			</Canvas>
		</div>
	);
}
