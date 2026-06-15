"use client";

import { ContactShadows, Environment, Float, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import type { Group } from "three";
import * as THREE from "three";
import {
	createBackingGeometry,
	createReliefGeometryFromTexture,
} from "@/lib/create-relief-geometry";

const TEXTURE_PATH = "/home/SAGYBOAR.png";

function SagyboarMesh() {
	const groupRef = useRef<Group>(null);
	const texture = useTexture(TEXTURE_PATH);

	const { frontGeometry, bodyGeometry } = useMemo(() => {
		texture.colorSpace = THREE.SRGBColorSpace;
		texture.anisotropy = 16;

		return {
			frontGeometry: createReliefGeometryFromTexture(texture, {
				width: 3.4,
				depth: 0.55,
				segments: 180,
			}),
			bodyGeometry: createBackingGeometry(texture, {
				width: 3.4,
				depth: 0.18,
			}),
		};
	}, [texture]);

	useFrame((state) => {
		if (!groupRef.current) {
			return;
		}

		groupRef.current.rotation.y =
			Math.sin(state.clock.elapsedTime * 0.35) * 0.45 + state.clock.elapsedTime * 0.12;
		groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.08 - 0.05;
	});

	return (
		<Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.35}>
			<group ref={groupRef} position={[0, 0.05, 0]}>
				<mesh geometry={bodyGeometry} position={[0, 0, -0.24]}>
					<meshStandardMaterial
						color="#6b3f1f"
						metalness={0.35}
						roughness={0.55}
					/>
				</mesh>

				<mesh geometry={frontGeometry} position={[0, 0, 0.02]}>
					<meshStandardMaterial
						map={texture}
						transparent
						alphaTest={0.08}
						metalness={0.18}
						roughness={0.42}
						side={THREE.FrontSide}
					/>
				</mesh>

				<mesh geometry={frontGeometry} position={[0, 0, -0.02]} rotation={[0, Math.PI, 0]}>
					<meshStandardMaterial
						color="#4a2812"
						metalness={0.25}
						roughness={0.65}
						side={THREE.FrontSide}
					/>
				</mesh>

				<pointLight position={[2, 2, 4]} intensity={22} color="#ffd2a1" />
				<pointLight position={[-2, -1, 2]} intensity={10} color="#4F8FF7" />
			</group>
		</Float>
	);
}

function SceneContent() {
	return (
		<>
			<ambientLight intensity={0.55} />
			<directionalLight position={[4, 6, 5]} intensity={1.4} color="#fff4e8" />
			<directionalLight position={[-5, -2, -3]} intensity={0.35} color="#4F8FF7" />
			<Environment preset="city" />
			<SagyboarMesh />
			<ContactShadows
				position={[0, -1.65, 0]}
				opacity={0.35}
				scale={8}
				blur={2.4}
				far={4}
			/>
		</>
	);
}

export function Sagyboar3DScene({ className }: { className?: string }) {
	return (
		<div className={className}>
			<Canvas
				camera={{ position: [0, 0, 4.8], fov: 42 }}
				dpr={[1, 2]}
				gl={{ antialias: true, alpha: true }}
				style={{ width: "100%", height: "100%" }}
			>
				<Suspense fallback={null}>
					<SceneContent />
				</Suspense>
			</Canvas>
		</div>
	);
}
