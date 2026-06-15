"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Mesh, ShaderMaterial } from "three";
import * as THREE from "three";
import type { EmergenceState } from "@/components/water-drops";

const RIPPLE_COUNT = 6;

type Ripple = {
	active: boolean;
	age: number;
	maxAge: number;
	x: number;
	z: number;
};

const chopVertexShader = `
uniform float uTime;
uniform float uStrength;

varying float vRipple;

void main() {
  vec3 pos = position;
  vec2 center = vec2(0.0);
  float dist = length(pos.xy - center);
  float waveA = sin(dist * 9.0 - uTime * 7.5) * exp(-dist * 0.45);
  float waveB = sin(dist * 14.0 + uTime * 5.0) * exp(-dist * 0.55) * 0.55;
  float waveC = sin((pos.x + pos.y) * 6.0 - uTime * 4.0) * exp(-dist * 0.35) * 0.35;
  float ripple = (waveA + waveB + waveC) * uStrength * 0.14;
  pos.z += ripple;
  vRipple = ripple;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const chopFragmentShader = `
uniform vec3 uDeepColor;
uniform vec3 uSurfaceColor;

varying float vRipple;

void main() {
  float highlight = smoothstep(0.0, 0.07, vRipple);
  vec3 color = mix(uDeepColor, uSurfaceColor, 0.35 + highlight * 0.45);
  color = mix(color, vec3(0.75, 0.88, 0.95), highlight * 0.25);
  float alpha = 0.18 + highlight * 0.32;
  gl_FragColor = vec4(color, alpha);
}
`;

type WaterDisturbanceProps = {
	emergenceRef: React.RefObject<EmergenceState>;
	seaLevel: number;
};

export function WaterDisturbance({ emergenceRef, seaLevel }: WaterDisturbanceProps) {
	const chopRef = useRef<Mesh>(null);
	const materialRef = useRef<ShaderMaterial>(null);
	const ripplesRef = useRef<Ripple[]>(
		Array.from({ length: RIPPLE_COUNT }, () => ({
			active: false,
			age: 0,
			maxAge: 1.4,
			x: 0,
			z: 0,
		})),
	);
	const spawnTimerRef = useRef(0);

	const uniforms = useMemo(
		() => ({
			uTime: { value: 0 },
			uStrength: { value: 0 },
			uDeepColor: { value: new THREE.Color("#1a5070") },
			uSurfaceColor: { value: new THREE.Color("#4a9ec0") },
		}),
		[],
	);

	const spawnRipple = () => {
		const ripple = ripplesRef.current.find((item) => !item.active);
		if (!ripple) {
			return;
		}

		ripple.active = true;
		ripple.age = 0;
		ripple.maxAge = 1.1 + Math.random() * 0.5;
		ripple.x = (Math.random() - 0.5) * 1.6;
		ripple.z = 0.2 + (Math.random() - 0.5) * 0.5;
	};

	useFrame(({ clock }, delta) => {
		const state = emergenceRef.current;
		if (!state) {
			return;
		}

		const strength = state.disturbance;
		const time = clock.elapsedTime;

		if (materialRef.current) {
			materialRef.current.uniforms.uTime.value = time;
			materialRef.current.uniforms.uStrength.value = strength;
		}

		if (chopRef.current) {
			const bob = Math.sin(time * 8) * strength * 0.06;
			chopRef.current.position.y = seaLevel + 0.08 + bob;
		}

		if (state.spawning && strength > 0.05) {
			spawnTimerRef.current += delta;
			if (spawnTimerRef.current > 0.12) {
				spawnTimerRef.current = 0;
				spawnRipple();
			}
		}
	});

	return (
		<group>
			<mesh
				ref={chopRef}
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, seaLevel + 0.08, 0.25]}
				renderOrder={3}
			>
				<planeGeometry args={[8, 4, 96, 48]} />
				<shaderMaterial
					ref={materialRef}
					uniforms={uniforms}
					vertexShader={chopVertexShader}
					fragmentShader={chopFragmentShader}
					transparent
					depthWrite={false}
					blending={THREE.NormalBlending}
				/>
			</mesh>

			{ripplesRef.current.map((ripple, index) => (
				<RippleRing
					key={`ripple-${index}`}
					ripple={ripple}
					seaLevel={seaLevel}
					emergenceRef={emergenceRef}
				/>
			))}
		</group>
	);
}

function RippleRing({
	ripple,
	seaLevel,
	emergenceRef,
}: {
	ripple: Ripple;
	seaLevel: number;
	emergenceRef: React.RefObject<EmergenceState>;
}) {
	const meshRef = useRef<Mesh>(null);

	useFrame((_, delta) => {
		const mesh = meshRef.current;
		const state = emergenceRef.current;
		if (!mesh || !ripple.active || !state) {
			if (mesh) {
				mesh.visible = false;
			}
			return;
		}

		ripple.age += delta;
		if (ripple.age >= ripple.maxAge) {
			ripple.active = false;
			mesh.visible = false;
			return;
		}

		const t = ripple.age / ripple.maxAge;
		const scale = 0.4 + t * 3.8;
		mesh.visible = true;
		mesh.position.set(ripple.x, seaLevel + 0.12 + t * 0.05, ripple.z);
		mesh.scale.set(scale, scale, 1);

		const material = mesh.material as THREE.MeshBasicMaterial;
		material.opacity = (1 - t) * 0.45 * state.disturbance;
	});

	return (
		<mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} visible={false} renderOrder={3}>
			<ringGeometry args={[0.42, 0.52, 48]} />
			<meshBasicMaterial
				color="#a8d8f0"
				transparent
				opacity={0}
				depthWrite={false}
				blending={THREE.NormalBlending}
			/>
		</mesh>
	);
}
