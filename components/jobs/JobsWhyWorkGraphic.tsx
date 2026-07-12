import { cn } from "@/lib/utils";

export type JobsGraphicName = "platform" | "market" | "remote" | "earnings";

type JobsWhyWorkGraphicProps = {
	name: JobsGraphicName;
	label?: string;
	className?: string;
};

const labels: Record<JobsGraphicName, string> = {
	platform: "AI-powered DevOps platform dashboard",
	market: "High demand from startups and growing businesses",
	remote: "Remote and flexible work from anywhere",
	earnings: "Unlimited earning potential",
};

export function JobsWhyWorkGraphic({
	name,
	label,
	className,
}: JobsWhyWorkGraphicProps) {
	return (
		<svg
			viewBox="0 0 400 300"
			fill="none"
			role="img"
			aria-label={label ?? labels[name]}
			preserveAspectRatio="xMidYMid slice"
			className={cn("absolute inset-0 h-full w-full", className)}
		>
			{name === "platform" && <PlatformGraphic />}
			{name === "market" && <MarketGraphic />}
			{name === "remote" && <RemoteGraphic />}
			{name === "earnings" && <EarningsGraphic />}
		</svg>
	);
}

function BackgroundLayer({
	id,
	from,
	to,
}: {
	id: string;
	from: string;
	to: string;
}) {
	return (
		<>
			<defs>
				<linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor={from} stopOpacity="0.14" />
					<stop offset="100%" stopColor={to} stopOpacity="0.14" />
				</linearGradient>
			</defs>
			<rect width="400" height="300" className="fill-muted/40" />
			<rect width="400" height="300" fill={`url(#${id}-bg)`} />
		</>
	);
}

/* 1. AI-powered DevOps platform — a live monitoring dashboard */
function PlatformGraphic() {
	return (
		<>
			<BackgroundLayer id="plat" from="#3b82f6" to="#8b5cf6" />
			<defs>
				<linearGradient id="plat-line" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stopColor="#3b82f6" />
					<stop offset="100%" stopColor="#8b5cf6" />
				</linearGradient>
				<linearGradient id="plat-area" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
					<stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
				</linearGradient>
			</defs>

			{/* window */}
			<rect
				x="64"
				y="66"
				width="272"
				height="168"
				rx="16"
				className="fill-card stroke-border"
				strokeWidth="1.5"
			/>
			<line
				x1="64"
				y1="94"
				x2="336"
				y2="94"
				className="stroke-border"
				strokeWidth="1.5"
			/>
			<circle cx="82" cy="80" r="3.5" fill="#f87171" />
			<circle cx="94" cy="80" r="3.5" fill="#fbbf24" />
			<circle cx="106" cy="80" r="3.5" fill="#34d399" />

			{/* live badge */}
			<rect
				x="286"
				y="74"
				width="40"
				height="13"
				rx="6.5"
				className="fill-emerald-500/15"
			/>
			<circle cx="296" cy="80.5" r="2.5" fill="#10b981">
				<animate
					attributeName="opacity"
					values="0.3;1;0.3"
					dur="1.8s"
					repeatCount="indefinite"
				/>
			</circle>
			<text
				x="304"
				y="84"
				className="fill-emerald-600 dark:fill-emerald-400"
				style={{ font: "700 7px system-ui, sans-serif" }}
			>
				LIVE
			</text>

			{/* area + sparkline */}
			<path
				d="M84 196 L112 180 L140 186 L168 162 L196 172 L224 146 L252 156 L280 132 L316 142 L316 214 L84 214 Z"
				fill="url(#plat-area)"
			/>
			<path
				d="M84 196 L112 180 L140 186 L168 162 L196 172 L224 146 L252 156 L280 132 L316 142"
				stroke="url(#plat-line)"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				pathLength={1}
				strokeDasharray="1 1"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="1;0"
					dur="2.6s"
					repeatCount="indefinite"
				/>
			</path>

			{/* metric bars */}
			<g>
				<rect
					x="84"
					y="222"
					width="70"
					height="6"
					rx="3"
					className="fill-primary/25"
				/>
				<rect x="84" y="222" width="30" height="6" rx="3" fill="#3b82f6">
					<animate
						attributeName="width"
						values="14;46;14"
						dur="4s"
						repeatCount="indefinite"
					/>
				</rect>
				<rect
					x="168"
					y="222"
					width="70"
					height="6"
					rx="3"
					className="fill-primary/25"
				/>
				<rect x="168" y="222" width="48" height="6" rx="3" fill="#8b5cf6">
					<animate
						attributeName="width"
						values="30;60;30"
						dur="4.6s"
						begin="0.5s"
						repeatCount="indefinite"
					/>
				</rect>
				<rect
					x="252"
					y="222"
					width="64"
					height="6"
					rx="3"
					className="fill-primary/25"
				/>
				<rect x="252" y="222" width="40" height="6" rx="3" fill="#10b981">
					<animate
						attributeName="width"
						values="20;52;20"
						dur="3.6s"
						begin="0.9s"
						repeatCount="indefinite"
					/>
				</rect>
			</g>
		</>
	);
}

/* 2. High-demand market — rising bar chart with trend line */
function MarketGraphic() {
	const baseline = 214;
	const bars = [
		{ x: 108, h: 60 },
		{ x: 156, h: 92 },
		{ x: 204, h: 124 },
		{ x: 252, h: 152 },
	];
	// Trend line rides the bar tops (bar center = x + 15, top = baseline - h).
	const trend = "M123 154 L171 122 L219 90 L267 62";
	return (
		<>
			<BackgroundLayer id="mkt" from="#6366f1" to="#a855f7" />
			<defs>
				<linearGradient id="mkt-bar" x1="0" y1="1" x2="0" y2="0">
					<stop offset="0%" stopColor="#6366f1" />
					<stop offset="100%" stopColor="#a855f7" />
				</linearGradient>
			</defs>

			{/* baseline */}
			<line
				x1="80"
				y1={baseline}
				x2="320"
				y2={baseline}
				className="stroke-border"
				strokeWidth="1.5"
			/>

			{bars.map((bar, i) => (
				<rect
					key={bar.x}
					x={bar.x}
					width="30"
					rx="5"
					fill="url(#mkt-bar)"
					y={baseline - bar.h}
					height={bar.h}
				>
					<animate
						attributeName="opacity"
						values="0.7;1;0.7"
						dur="2.6s"
						begin={`${i * 0.18}s`}
						repeatCount="indefinite"
					/>
				</rect>
			))}

			{/* trend line — full, static, aligned to bar tops */}
			<path
				d={trend}
				stroke="#10b981"
				strokeOpacity="0.35"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			{/* travelling highlight = smooth continuous flow along the same path */}
			<path
				d={trend}
				stroke="#10b981"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				pathLength={1}
				strokeDasharray="0.18 0.82"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="1;0"
					dur="2.6s"
					repeatCount="indefinite"
				/>
			</path>

			{/* arrowhead — barbs aligned to the final segment direction (219,90)->(267,62) */}
			<path
				d="M267 62 l-13.9 1.3 M267 62 l-8 11.5"
				stroke="#10b981"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
			<circle cx="267" cy="62" r="4" fill="#10b981">
				<animate
					attributeName="r"
					values="4;6;4"
					dur="2.6s"
					repeatCount="indefinite"
				/>
			</circle>
		</>
	);
}

/* 3. Remote & flexible — spinning globe with orbit + location pins */
function RemoteGraphic() {
	return (
		<>
			<BackgroundLayer id="rmt" from="#0ea5e9" to="#6366f1" />
			<defs>
				<radialGradient id="rmt-globe" cx="38%" cy="35%" r="75%">
					<stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
					<stop offset="100%" stopColor="#6366f1" stopOpacity="0.12" />
				</radialGradient>
			</defs>

			{/* orbit ring + satellite */}
			<g>
				<circle
					cx="200"
					cy="150"
					r="104"
					className="stroke-border"
					strokeWidth="1"
					strokeDasharray="3 8"
					opacity="0.6"
				>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 200 150"
						to="360 200 150"
						dur="24s"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx="304" cy="150" r="4" fill="#8b5cf6">
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 200 150"
						to="360 200 150"
						dur="24s"
						repeatCount="indefinite"
					/>
				</circle>
			</g>

			{/* globe */}
			<circle
				cx="200"
				cy="150"
				r="72"
				fill="url(#rmt-globe)"
				className="stroke-primary/50"
				strokeWidth="1.5"
			/>
			{/* latitudes */}
			<ellipse
				cx="200"
				cy="150"
				rx="72"
				ry="24"
				className="stroke-primary/30"
				strokeWidth="1"
			/>
			<ellipse
				cx="200"
				cy="150"
				rx="72"
				ry="52"
				className="stroke-primary/25"
				strokeWidth="1"
			/>
			<line
				x1="128"
				y1="150"
				x2="272"
				y2="150"
				className="stroke-primary/30"
				strokeWidth="1"
			/>
			{/* meridians sweeping (fake rotation) */}
			<ellipse
				cx="200"
				cy="150"
				ry="72"
				className="stroke-primary/40"
				strokeWidth="1"
				fill="none"
			>
				<animate
					attributeName="rx"
					values="72;6;72"
					dur="6s"
					repeatCount="indefinite"
				/>
			</ellipse>
			<ellipse
				cx="200"
				cy="150"
				ry="72"
				className="stroke-primary/25"
				strokeWidth="1"
				fill="none"
			>
				<animate
					attributeName="rx"
					values="40;72;40"
					dur="6s"
					repeatCount="indefinite"
				/>
			</ellipse>

			{/* location pins */}
			{[
				{ x: 168, y: 118, d: "0s" },
				{ x: 236, y: 138, d: "0.7s" },
				{ x: 190, y: 186, d: "1.3s" },
			].map((pin) => (
				<g key={`${pin.x}-${pin.y}`}>
					<circle cx={pin.x} cy={pin.y} r="8" fill="#10b981" opacity="0.25">
						<animate
							attributeName="r"
							values="4;12;4"
							dur="2.4s"
							begin={pin.d}
							repeatCount="indefinite"
						/>
						<animate
							attributeName="opacity"
							values="0.4;0;0.4"
							dur="2.4s"
							begin={pin.d}
							repeatCount="indefinite"
						/>
					</circle>
					<circle cx={pin.x} cy={pin.y} r="3.5" fill="#10b981" />
				</g>
			))}
		</>
	);
}

/* 4. Unlimited earning potential — rising area chart with floating coins */
function EarningsGraphic() {
	return (
		<>
			<BackgroundLayer id="ern" from="#f59e0b" to="#10b981" />
			<defs>
				<linearGradient id="ern-line" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stopColor="#10b981" />
					<stop offset="100%" stopColor="#22c55e" />
				</linearGradient>
				<linearGradient id="ern-area" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#10b981" stopOpacity="0.32" />
					<stop offset="100%" stopColor="#10b981" stopOpacity="0" />
				</linearGradient>
				<linearGradient id="ern-coin" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#fcd34d" />
					<stop offset="100%" stopColor="#f59e0b" />
				</linearGradient>
			</defs>

			{/* rising area — final point is the peak (top-right) */}
			<path
				d="M74 214 L112 198 L150 204 L192 172 L232 180 L280 138 L326 108 L326 226 L74 226 Z"
				fill="url(#ern-area)"
			/>
			{/* base line, static */}
			<path
				d="M74 214 L112 198 L150 204 L192 172 L232 180 L280 138 L326 108"
				stroke="url(#ern-line)"
				strokeOpacity="0.35"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			{/* travelling highlight = continuous flow */}
			<path
				d="M74 214 L112 198 L150 204 L192 172 L232 180 L280 138 L326 108"
				stroke="url(#ern-line)"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				pathLength={1}
				strokeDasharray="0.18 0.82"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="1;0"
					dur="2.6s"
					repeatCount="indefinite"
				/>
			</path>
			{/* arrowhead — barbs aligned to final segment (280,138)->(326,108) */}
			<path
				d="M326 108 l-13.9 2 M326 108 l-7.4 11.9"
				stroke="#10b981"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
			<circle cx="326" cy="108" r="3.5" fill="#10b981">
				<animate
					attributeName="r"
					values="3.5;5.5;3.5"
					dur="2.6s"
					repeatCount="indefinite"
				/>
			</circle>

			{/* floating coins */}
			{[
				{ cx: 120, cy: 108, r: 18, d: "0s", dur: "3.2s" },
				{ cx: 210, cy: 84, r: 22, d: "0.6s", dur: "3.8s" },
				{ cx: 288, cy: 96, r: 15, d: "1.1s", dur: "3.4s" },
			].map((coin) => (
				<g key={`${coin.cx}-${coin.cy}`}>
					<animateTransform
						attributeName="transform"
						type="translate"
						values="0 0;0 -8;0 0"
						dur={coin.dur}
						begin={coin.d}
						repeatCount="indefinite"
						calcMode="spline"
						keyTimes="0;0.5;1"
						keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
					/>
					<circle
						cx={coin.cx}
						cy={coin.cy}
						r={coin.r}
						fill="url(#ern-coin)"
						stroke="#f59e0b"
						strokeWidth="1"
					/>
					<circle
						cx={coin.cx}
						cy={coin.cy}
						r={coin.r - 4}
						fill="none"
						stroke="#ffffff"
						strokeOpacity="0.5"
						strokeWidth="1"
					/>
					<text
						x={coin.cx}
						y={coin.cy}
						textAnchor="middle"
						dominantBaseline="central"
						fill="#78350f"
						style={{
							font: `700 ${Math.round(coin.r * 0.95)}px system-ui, sans-serif`,
						}}
					>
						$
					</text>
				</g>
			))}
		</>
	);
}
