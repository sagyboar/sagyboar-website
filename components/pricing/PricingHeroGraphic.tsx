import { cn } from "@/lib/utils";

const cloudNodes = [
	{ id: "l1", label: "AWS", y: 78 },
	{ id: "l2", label: "GCP", y: 150 },
	{ id: "l3", label: "Azure", y: 222 },
];

const connectorsIn = [
	{ id: "in1", d: "M100 78 C140 78 150 120 173 136", dur: "2.6s", begin: "0s" },
	{ id: "in2", d: "M100 150 C138 150 150 150 173 150", dur: "2.2s", begin: "0.6s" },
	{ id: "in3", d: "M100 222 C140 222 150 180 173 164", dur: "2.8s", begin: "1s" },
];

const projectNodes = [
	{ id: "p1", y: 70 },
	{ id: "p2", y: 120 },
	{ id: "p3", y: 180 },
	{ id: "p4", y: 230 },
];

const connectorsOut = [
	{ id: "out1", d: "M227 136 C270 120 300 88 330 70", dur: "2.4s", begin: "0.3s" },
	{ id: "out2", d: "M227 144 C275 140 300 128 330 120", dur: "2s", begin: "0.9s" },
	{ id: "out3", d: "M227 156 C275 160 300 172 330 180", dur: "2.6s", begin: "0.5s" },
	{ id: "out4", d: "M227 164 C270 180 300 212 330 230", dur: "2.9s", begin: "1.2s" },
];

type PricingHeroGraphicProps = {
	className?: string;
};

export function PricingHeroGraphic({ className }: PricingHeroGraphicProps) {
	return (
		<svg
			viewBox="0 0 400 300"
			fill="none"
			role="img"
			aria-label="Your cloud feeds into the Sagyboar platform, which deploys and monitors your projects"
			preserveAspectRatio="xMidYMid meet"
			className={cn("h-full w-full", className)}
		>
			<style>
				{`.sgy-breathe{transform-box:fill-box;transform-origin:center;animation:sgyBreathe 3.5s ease-in-out infinite;}
@keyframes sgyBreathe{0%,100%{transform:scale(1);}50%{transform:scale(1.05);}}
@media (prefers-reduced-motion: reduce){.sgy-breathe{animation:none;}}`}
			</style>
			<defs>
				<linearGradient id="flowIn" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stopColor="#60a5fa" stopOpacity="0.15" />
					<stop offset="100%" stopColor="#60a5fa" stopOpacity="0.9" />
				</linearGradient>
				<linearGradient id="flowOut" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
					<stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
				</linearGradient>
				<linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#3b82f6" />
					<stop offset="55%" stopColor="#6366f1" />
					<stop offset="100%" stopColor="#8b5cf6" />
				</linearGradient>
				<radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stopColor="#6366f1" stopOpacity="0.45" />
					<stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
				</radialGradient>
			</defs>

			{/* soft core glow */}
			<circle cx="200" cy="150" r="95" fill="url(#coreGlow)">
				<animate
					attributeName="opacity"
					values="0.7;1;0.7"
					dur="4s"
					repeatCount="indefinite"
				/>
			</circle>

			{/* rotating orbit rings */}
			<g className="text-border" style={{ transformOrigin: "200px 150px" }}>
				<circle
					cx="200"
					cy="150"
					r="72"
					stroke="currentColor"
					strokeWidth="1"
					strokeDasharray="3 7"
					opacity="0.6"
				>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 200 150"
						to="360 200 150"
						dur="40s"
						repeatCount="indefinite"
					/>
				</circle>
				<circle
					cx="200"
					cy="150"
					r="90"
					stroke="currentColor"
					strokeWidth="1"
					strokeDasharray="2 10"
					opacity="0.4"
				>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="360 200 150"
						to="0 200 150"
						dur="55s"
						repeatCount="indefinite"
					/>
				</circle>
			</g>

			{/* connection paths */}
			<g fill="none" strokeWidth="1.5" strokeLinecap="round">
				{connectorsIn.map((c) => (
					<path key={c.id} id={c.id} d={c.d} stroke="url(#flowIn)" />
				))}
				{connectorsOut.map((c) => (
					<path key={c.id} id={c.id} d={c.d} stroke="url(#flowOut)" />
				))}
			</g>

			{/* flowing data dots */}
			{connectorsIn.map((c) => (
				<circle key={`${c.id}-dot`} r="3" fill="#60a5fa">
					<animateMotion dur={c.dur} begin={c.begin} repeatCount="indefinite">
						<mpath href={`#${c.id}`} />
					</animateMotion>
					<animate
						attributeName="opacity"
						values="0;1;1;0"
						dur={c.dur}
						begin={c.begin}
						repeatCount="indefinite"
					/>
				</circle>
			))}
			{connectorsOut.map((c) => (
				<circle key={`${c.id}-dot`} r="3" fill="#a78bfa">
					<animateMotion dur={c.dur} begin={c.begin} repeatCount="indefinite">
						<mpath href={`#${c.id}`} />
					</animateMotion>
					<animate
						attributeName="opacity"
						values="0;1;1;0"
						dur={c.dur}
						begin={c.begin}
						repeatCount="indefinite"
					/>
				</circle>
			))}

			{/* left cloud chips */}
			{cloudNodes.map((node) => (
				<g key={node.id}>
					<rect
						x="34"
						y={node.y - 15}
						width="66"
						height="30"
						rx="9"
						className="fill-card stroke-border"
						strokeWidth="1"
					/>
					<g
						transform={`translate(${51 - 12 * 0.62} ${node.y - 12 * 0.62}) scale(0.62)`}
					>
						<path
							d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
							className="fill-primary/15 stroke-primary"
							strokeWidth={1.1 / 0.62}
							strokeLinejoin="round"
						/>
					</g>
					<text
						x="76"
						y={node.y}
						textAnchor="middle"
						dominantBaseline="central"
						className="fill-muted-foreground"
						style={{ font: "600 9px system-ui, sans-serif" }}
					>
						{node.label}
					</text>
				</g>
			))}

			{/* right project/container nodes */}
			{projectNodes.map((node, index) => (
				<g key={node.id}>
					<rect
						x="330"
						y={node.y - 13}
						width="40"
						height="26"
						rx="7"
						className="fill-card stroke-border"
						strokeWidth="1"
					/>
					<circle cx="339" cy={node.y - 5} r="1.6" fill="#f87171" />
					<circle cx="345" cy={node.y - 5} r="1.6" fill="#fbbf24" />
					<circle cx="351" cy={node.y - 5} r="1.6" fill="#34d399" />
					<rect
						x="337"
						y={node.y + 1}
						width="26"
						height="3"
						rx="1.5"
						className="fill-muted-foreground/40"
					/>
					{/* healthy status pulse */}
					<circle cx="365" cy={node.y - 11} r="2.5" fill="#10b981">
						<animate
							attributeName="opacity"
							values="0.3;1;0.3"
							dur="2s"
							begin={`${index * 0.4}s`}
							repeatCount="indefinite"
						/>
					</circle>
				</g>
			))}

			{/* central platform core */}
			<g>
				{/* pulsing rings */}
				<circle cx="200" cy="150" r="34" fill="none" stroke="#6366f1" strokeWidth="1.5">
					<animate
						attributeName="r"
						values="34;58"
						dur="3s"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="opacity"
						values="0.6;0"
						dur="3s"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx="200" cy="150" r="34" fill="none" stroke="#8b5cf6" strokeWidth="1.5">
					<animate
						attributeName="r"
						values="34;58"
						dur="3s"
						begin="1.5s"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="opacity"
						values="0.6;0"
						dur="3s"
						begin="1.5s"
						repeatCount="indefinite"
					/>
				</circle>

				{/* hexagon core + spark, breathing about its own center */}
				<g className="sgy-breathe">
					<polygon
						points="200,118 227,134 227,166 200,182 173,166 173,134"
						fill="url(#coreGrad)"
						stroke="#c7d2fe"
						strokeWidth="1"
					/>
					<path
						d="M200 136 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 z"
						fill="#ffffff"
						opacity="0.95"
					>
						<animate
							attributeName="opacity"
							values="0.65;1;0.65"
							dur="2.4s"
							repeatCount="indefinite"
						/>
					</path>
				</g>
			</g>

			{/* uptime heartbeat */}
			<g transform="translate(0 282)">
				<path
					d="M120 0 H175 l6 -12 8 24 7 -18 5 6 H280"
					fill="none"
					stroke="#10b981"
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
					pathLength={1}
					strokeDasharray="1 1"
				>
					<animate
						attributeName="stroke-dashoffset"
						values="1;0"
						dur="2.2s"
						repeatCount="indefinite"
					/>
				</path>
			</g>
		</svg>
	);
}
