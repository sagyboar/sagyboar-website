"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform float u_dark;

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = uv;

    float wave = sin(p.x * 6.0 + p.y * 3.5 + u_time * 0.55) * 0.07;
    wave += sin(p.x * 3.2 - p.y * 5.0 - u_time * 0.38) * 0.05;
    wave += sin(p.x * 8.0 + u_time * 0.25) * 0.025;

    float diag = p.x * 0.72 + p.y * 0.48 + wave;
    float rightMask = smoothstep(0.22, 0.92, p.x);
    float band = smoothstep(0.28, 0.46, diag) * smoothstep(0.98, 0.58, diag);
    float strength = band * rightMask;

    vec3 purple = vec3(0.49, 0.23, 0.93);
    vec3 magenta = vec3(0.86, 0.24, 0.62);
    vec3 orange = vec3(0.98, 0.45, 0.12);
    vec3 yellow = vec3(0.99, 0.78, 0.22);

    float t = clamp((diag - 0.3) / 0.55, 0.0, 1.0);
    vec3 gradient = mix(purple, magenta, smoothstep(0.0, 0.38, t));
    gradient = mix(gradient, orange, smoothstep(0.35, 0.72, t));
    gradient = mix(gradient, yellow, smoothstep(0.68, 1.0, t));

    if (u_dark > 0.5) {
      gradient *= 1.08;
    }

    float alpha = strength * (u_dark > 0.5 ? 0.88 : 0.72);
    gl_FragColor = vec4(gradient, alpha);
  }
`;

function compileShader(
	gl: WebGLRenderingContext,
	type: number,
	source: string,
) {
	const shader = gl.createShader(type);
	if (!shader) return null;
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.error(gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}
	return shader;
}

type PricingShaderWaveProps = {
	className?: string;
};

export function PricingShaderWave({ className }: PricingShaderWaveProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const gl = canvas.getContext("webgl", {
			alpha: true,
			antialias: true,
			premultipliedAlpha: false,
		});
		if (!gl) return;

		const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
		const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
		if (!vs || !fs) return;

		const program = gl.createProgram();
		if (!program) return;
		gl.attachShader(program, vs);
		gl.attachShader(program, fs);
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			console.error(gl.getProgramInfoLog(program));
			return;
		}

		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
			gl.STATIC_DRAW,
		);

		const positionLoc = gl.getAttribLocation(program, "a_position");
		const resolutionLoc = gl.getUniformLocation(program, "u_resolution");
		const timeLoc = gl.getUniformLocation(program, "u_time");
		const darkLoc = gl.getUniformLocation(program, "u_dark");

		let animationId = 0;
		const start = performance.now();

		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const { clientWidth, clientHeight } = canvas;
			if (clientWidth === 0 || clientHeight === 0) return;
			canvas.width = clientWidth * dpr;
			canvas.height = clientHeight * dpr;
			gl.viewport(0, 0, canvas.width, canvas.height);
		};

		resize();
		const resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(canvas);

		const render = (now: number) => {
			const time = (now - start) / 1000;
			const isDark = resolvedTheme === "dark" ? 1 : 0;

			gl.clearColor(0, 0, 0, 0);
			gl.clear(gl.COLOR_BUFFER_BIT);
			gl.enable(gl.BLEND);
			gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

			gl.useProgram(program);
			gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
			gl.enableVertexAttribArray(positionLoc);
			gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
			gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
			gl.uniform1f(timeLoc, time);
			gl.uniform1f(darkLoc, isDark);
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

			animationId = requestAnimationFrame(render);
		};

		animationId = requestAnimationFrame(render);

		return () => {
			cancelAnimationFrame(animationId);
			resizeObserver.disconnect();
			gl.deleteProgram(program);
			gl.deleteShader(vs);
			gl.deleteShader(fs);
			gl.deleteBuffer(buffer);
		};
	}, [resolvedTheme]);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden
			className={cn(
				"pointer-events-none absolute inset-0 h-full w-full",
				className,
			)}
		/>
	);
}
