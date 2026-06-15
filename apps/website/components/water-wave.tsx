"use client";

import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Mesh } from "three";
import * as THREE from "three";
import { Water as Water2 } from "three/examples/jsm/objects/Water2.js";
import type { EmergenceState } from "@/components/water-drops";
import { getSeaLevel } from "@/lib/water-scene";

const SEA_NORMALS = [
	"/water/Water_1_M_Normal.jpg",
	"/water/Water_2_M_Normal.jpg",
] as const;

function DeepOceanBody({ y }: { y: number }) {
	return (
		<group position={[0, y, 0]}>
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.55, -0.6]} renderOrder={0}>
				<planeGeometry args={[70, 10]} />
				<meshBasicMaterial color="#0a3a5c" transparent opacity={0.92} depthWrite={false} />
			</mesh>
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.25, -0.3]} renderOrder={0}>
				<planeGeometry args={[70, 8]} />
				<meshBasicMaterial color="#1a6fa8" transparent opacity={0.78} depthWrite={false} />
			</mesh>
		</group>
	);
}

function SeaSurface({
	y,
	emergenceRef,
}: {
	y: number;
	emergenceRef?: React.RefObject<EmergenceState>;
}) {
	const seaRef = useRef<Mesh>(null);
	const [normalMap0, normalMap1] = useLoader(THREE.TextureLoader, [...SEA_NORMALS]);

	const sea = useMemo(() => {
		normalMap0.wrapS = normalMap0.wrapT = THREE.RepeatWrapping;
		normalMap1.wrapS = normalMap1.wrapT = THREE.RepeatWrapping;

		const geometry = new THREE.PlaneGeometry(70, 14);
		const surface = new Water2(geometry, {
			color: 0x3d9fd4,
			scale: 5,
			flowDirection: new THREE.Vector2(1, 0.08),
			flowSpeed: 0.045,
			reflectivity: 0.42,
			textureWidth: 1024,
			textureHeight: 1024,
			normalMap0,
			normalMap1,
		});

		surface.rotation.x = -Math.PI / 2;
		return surface;
	}, [normalMap0, normalMap1]);

	useFrame(({ clock }) => {
		const mesh = seaRef.current;
		const state = emergenceRef?.current;
		if (!mesh || !state) {
			return;
		}

		const strength = state.disturbance;
		const bob = Math.sin(clock.elapsedTime * 9) * strength * 0.08;
		const sway = Math.cos(clock.elapsedTime * 6.5) * strength * 0.03;
		mesh.position.y = y + bob;
		mesh.position.x = sway;
		mesh.rotation.z = sway * 0.05;

		const material = mesh.material as THREE.ShaderMaterial & {
			uniforms: { config: { value: THREE.Vector4 } };
		};
		if (material.uniforms?.config) {
			material.uniforms.config.value.w = 5 + strength * 2;
			material.uniforms.config.value.y = 0.045 + strength * 0.04;
		}
	});

	return <primitive ref={seaRef} object={sea} position={[0, y, 0.2]} renderOrder={2} />;
}

type WaterWaveProps = {
	seaLevel?: number;
	emergenceRef?: React.RefObject<EmergenceState>;
};

export function WaterWave({ seaLevel: seaLevelProp, emergenceRef }: WaterWaveProps) {
	const { viewport } = useThree();
	const seaLevel = seaLevelProp ?? getSeaLevel(viewport.height);

	return (
		<group>
			<DeepOceanBody y={seaLevel} />
			<SeaSurface y={seaLevel} emergenceRef={emergenceRef} />
		</group>
	);
}
