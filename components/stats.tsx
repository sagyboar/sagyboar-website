"use client";

import { Activity, Clock, ShieldCheck, Blocks } from "lucide-react";
import React, { useId } from "react";
import NumberTicker from "./ui/number-ticker";

// Platform performance stats for a fresh launch
const currentStats = {
	deployTimeSeconds: 60,
	uptimeGuarantee: 99.9,
	supportedFrameworks: 40,
	monitoringHours: 24,
};

const GRID_PATTERNS: number[][][] = [
	[
		[7, 1], [8, 3], [9, 2], [10, 4], [11, 1],
	],
	[
		[7, 2], [8, 5], [9, 1], [10, 3], [11, 4],
	],
	[
		[8, 1], [9, 4], [10, 2], [11, 5], [7, 3],
	],
	[
		[7, 4], [8, 2], [9, 5], [10, 1], [11, 3],
	],
];

export function StatsSection() {
	return (
		<div className="flex flex-col gap-10 px-4 py-20 lg:py-40">
			<div className="mx-auto max-w-2xl md:text-center">
				<h2 className="text-center font-display text-3xl tracking-tight sm:text-4xl">
					Engineered for <span className="text-blue-400 border-b-2 border-blue-400">Performance</span>
				</h2>
				<p className="mt-4 text-center text-lg tracking-tight text-muted-foreground">
					We built SAGYBOAR to remove bottlenecks. Experience enterprise-grade reliability, instant deployments, and proactive AI monitoring from day one.
				</p>
			</div>
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4">
				{getGrid(currentStats).map((feature, index) => (
					<div
						key={feature.title}
						className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 p-6"
					>
						<Grid pattern={GRID_PATTERNS[index % GRID_PATTERNS.length]} size={20} />

						<p className="relative z-20 flex flex-row items-center gap-4 text-base font-bold text-white">
							{feature.icon}
							{feature.title}
						</p>
						<p className="relative z-20 mt-4 text-base font-normal text-neutral-400">
							{feature.description}
						</p>
						{feature.component}
					</div>
				))}
			</div>
		</div>
	);
}

function getGrid({
	deployTimeSeconds,
	uptimeGuarantee,
	supportedFrameworks,
	monitoringHours,
}: typeof currentStats) {
	return [
		{
			title: "Sub-Minute Deploys",
			description: `Stop waiting on sluggish pipelines. Our AI deployment assistant analyzes your stack and pushes your containers to production in seconds.`,
			icon: <Clock className="h-6 w-6 stroke-white" />,
			component: (
				<p className="mt-4 whitespace-pre-wrap text-2xl !font-semibold tracking-tighter text-white">
					&lt;<NumberTicker value={deployTimeSeconds} />s
				</p>
			),
		},
		{
			title: "Uptime Reliability",
			description: `Deploy with confidence. Our managed infrastructure and automated Docker Swarm clustering ensure your mission-critical apps stay online.`,
			icon: <ShieldCheck className="h-6 w-6 stroke-white" />,
			component: (
				<p className="mt-4 whitespace-pre-wrap text-2xl !font-semibold tracking-tighter text-white">
					<NumberTicker value={uptimeGuarantee} decimalPlaces={1} />%
				</p>
			),
		},
		{
			title: "Supported Stacks",
			description: `From Node and Python to complex multi-tier architectures. Our AI auto-detects and generates boilerplate for dozens of frameworks natively.`,
			icon: <Blocks className="h-6 w-6 stroke-white" />,
			component: (
				<p className="mt-4 whitespace-pre-wrap text-2xl !font-semibold tracking-tighter text-white">
					<NumberTicker value={supportedFrameworks} />+
				</p>
			),
		},
		{
			title: "Active Monitoring",
			description: `Round-the-clock system observability. Our AI engine continuously analyzes logs and metrics, generating automated tickets the moment an anomaly is detected.`,
			icon: <Activity className="h-6 w-6 stroke-white" />,
			component: (
				<p className="mt-4 whitespace-pre-wrap text-2xl !font-semibold tracking-tighter text-white">
					<NumberTicker value={monitoringHours} />/7
				</p>
			),
		},
	];
}

export const Grid = ({
	pattern,
	size,
}: {
	pattern?: number[][];
	size?: number;
}) => {
	const p = pattern ?? GRID_PATTERNS[0];
	return (
		<div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
			<div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
				<GridPattern
					width={size ?? 20}
					height={size ?? 20}
					x="-12"
					y="4"
					squares={p}
					className="absolute inset-0 h-full w-full fill-white/10 stroke-white/10 mix-blend-overlay"
				/>
			</div>
		</div>
	);
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
	const patternId = useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern
					id={patternId}
					width={width}
					height={height}
					patternUnits="userSpaceOnUse"
					x={x}
					y={y}
				>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect
				width="100%"
				height="100%"
				strokeWidth={0}
				fill={`url(#${patternId})`}
			/>
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y]: any) => (
						<rect
							strokeWidth="0"
							key={`${x}-${y}`}
							width={width + 1}
							height={height + 1}
							x={x * width}
							y={y * height}
						/>
					))}
				</svg>
			)}
		</svg>
	);
}