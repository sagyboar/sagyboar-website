import type { FeatureGraphicName } from "./features-data";

type FeatureItemGraphicProps = {
	name: FeatureGraphicName;
	label?: string;
};

export function FeatureItemGraphic({ name, label }: FeatureItemGraphicProps) {
	return (
		<svg
			viewBox="0 0 400 300"
			fill="none"
			role="img"
			aria-label={label ?? name}
			preserveAspectRatio="xMidYMid slice"
			className="absolute inset-0 h-full w-full"
		>
			{name === "sources" && <Sources />}
			{name === "build" && <Build />}
			{name === "aiScan" && <AiScan />}
			{name === "sizing" && <Sizing />}
			{name === "artifact" && <Artifact />}
			{name === "oneClickHost" && <OneClickHost />}
			{name === "webhook" && <Webhook />}
			{name === "prPreview" && <PrPreview />}
			{name === "branches" && <Branches />}
			{name === "rolling" && <Rolling />}
			{name === "logs" && <Logs />}
			{name === "metrics" && <Metrics />}
			{name === "anomaly" && <Anomaly />}
			{name === "forecast" && <Forecast />}
			{name === "cascade" && <Cascade />}
			{name === "dashboard" && <Dashboard />}
			{name === "stacktrace" && <Stacktrace />}
			{name === "rootcause" && <Rootcause />}
			{name === "remediation" && <Remediation />}
			{name === "ticket" && <Ticket />}
			{name === "assign" && <Assign />}
			{name === "history" && <History />}
			{name === "restart" && <Restart />}
			{name === "swarm" && <Swarm />}
			{name === "autoscale" && <Autoscale />}
			{name === "approval" && <Approval />}
			{name === "explain" && <Explain />}
			{name === "rollback" && <Rollback />}
			{name === "dbEngines" && <DbEngines />}
			{name === "backupSchedule" && <BackupSchedule />}
			{name === "volume" && <Volume />}
			{name === "s3dest" && <S3dest />}
			{name === "servers" && <Servers />}
			{name === "terminal" && <Terminal />}
			{name === "proxy" && <ProxyGraphic />}
			{name === "channels" && <Channels />}
			{name === "alertSummary" && <AlertSummary />}
			{name === "severity" && <Severity />}
			{name === "developer" && <Developer />}
			{name === "devopsEng" && <DevopsEng />}
			{name === "qa" && <Qa />}
			{name === "managedInfra" && <ManagedInfra />}
			{name === "codeReview" && <CodeReview />}
			{name === "security" && <Security />}
			{name === "codeSmell" && <CodeSmell />}
			{name === "report" && <Report />}
			{name === "rbac" && <Rbac />}
			{name === "sso" && <Sso />}
			{name === "audit" && <Audit />}
			{name === "templates" && <Templates />}
			{name === "cron" && <Cron />}
			{name === "mcp" && <Mcp />}
		</svg>
	);
}

/* ---------- shared helpers ---------- */

function Bg({ id, from, to }: { id: string; from: string; to: string }) {
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

function Frame({
	x,
	y,
	w,
	h,
	dots = true,
}: {
	x: number;
	y: number;
	w: number;
	h: number;
	dots?: boolean;
}) {
	return (
		<g>
			<rect
				x={x}
				y={y}
				width={w}
				height={h}
				rx="12"
				className="fill-card stroke-border"
				strokeWidth="1.5"
			/>
			{dots && (
				<>
					<line
						x1={x}
						y1={y + 24}
						x2={x + w}
						y2={y + 24}
						className="stroke-border"
						strokeWidth="1"
					/>
					<circle cx={x + 15} cy={y + 12} r="3" fill="#f87171" />
					<circle cx={x + 26} cy={y + 12} r="3" fill="#fbbf24" />
					<circle cx={x + 37} cy={y + 12} r="3" fill="#34d399" />
				</>
			)}
		</g>
	);
}

function Chip({
	x,
	y,
	w,
	label,
	color,
}: {
	x: number;
	y: number;
	w: number;
	label: string;
	color: string;
}) {
	return (
		<g>
			<rect
				x={x}
				y={y}
				width={w}
				height="30"
				rx="8"
				className="fill-card stroke-border"
				strokeWidth="1.5"
			/>
			<circle cx={x + 15} cy={y + 15} r="5" fill={color} />
			<text
				x={x + 28}
				y={y + 15}
				dominantBaseline="central"
				className="fill-foreground"
				style={{ font: "600 10px system-ui, sans-serif" }}
			>
				{label}
			</text>
		</g>
	);
}

const flow = "3 4";

/* ================= Page 1: Application Deployment ================= */

/* Multi-source deployment */
function Sources() {
	const srcs = [
		{ y: 70, c: "#8b5cf6", label: "GitHub" },
		{ y: 116, c: "#f59e0b", label: "GitLab" },
		{ y: 162, c: "#3b82f6", label: "Docker" },
		{ y: 208, c: "#10b981", label: "ZIP" },
	];
	return (
		<>
			<Bg id="src" from="#3b82f6" to="#8b5cf6" />
			{srcs.map((s, i) => (
				<g key={s.label}>
					<Chip x={40} y={s.y} w={104} label={s.label} color={s.c} />
					<path
						d={`M144 ${s.y + 15} C 210 ${s.y + 15}, 240 150, 288 150`}
						className="stroke-primary/30"
						strokeWidth="1.5"
						fill="none"
						strokeDasharray={flow}
					/>
					<circle r="2.5" fill={s.c}>
						<animateMotion
							dur="2.4s"
							begin={`${i * 0.4}s`}
							repeatCount="indefinite"
							path={`M144 ${s.y + 15} C 210 ${s.y + 15}, 240 150, 288 150`}
						/>
						<animate
							attributeName="opacity"
							values="0;1;0"
							dur="2.4s"
							begin={`${i * 0.4}s`}
							repeatCount="indefinite"
						/>
					</circle>
				</g>
			))}
			<circle cx="312" cy="150" r="30" className="fill-primary/15">
				<animate
					attributeName="r"
					values="28;33;28"
					dur="3s"
					repeatCount="indefinite"
				/>
			</circle>
			<circle
				cx="312"
				cy="150"
				r="24"
				className="fill-primary/80 stroke-primary"
				strokeWidth="1.5"
			/>
			<path
				d="M304 150 l6 6 l12 -14"
				stroke="#fff"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
		</>
	);
}

/* Flexible build strategies */
function Build() {
	const rows = ["Nixpacks", "Dockerfile", "Buildpacks", "Docker image"];
	return (
		<>
			<Bg id="bld" from="#6366f1" to="#3b82f6" />
			<Frame x={90} y={62} w={220} h={176} dots={false} />
			<text
				x="108"
				y="86"
				dominantBaseline="central"
				className="fill-foreground"
				style={{ font: "700 11px system-ui, sans-serif" }}
			>
				Build strategy
			</text>
			{rows.map((r, i) => {
				const y = 108 + i * 32;
				return (
					<g key={r}>
						<rect
							x="108"
							y={y - 12}
							width="184"
							height="26"
							rx="8"
							className="fill-muted/40"
						/>
						<circle
							cx="122"
							cy={y}
							r="6"
							className="fill-card stroke-border"
							strokeWidth="1.5"
						/>
						<circle cx="122" cy={y} r="3" fill="#6366f1">
							<animate
								attributeName="opacity"
								values={i === 0 ? "1;1;0;0" : "0;0;1;0"}
								dur="6s"
								begin={`${i * 1.5}s`}
								repeatCount="indefinite"
							/>
						</circle>
						<text
							x="138"
							y={y}
							dominantBaseline="central"
							className="fill-foreground"
							style={{ font: "600 10px system-ui, sans-serif" }}
						>
							{r}
						</text>
					</g>
				);
			})}
			<rect
				x="108"
				y="108"
				width="184"
				height="26"
				rx="8"
				fill="none"
				className="stroke-primary"
				strokeWidth="1.5"
			>
				<animate
					attributeName="y"
					values="96;128;160;192;96"
					dur="6s"
					repeatCount="indefinite"
				/>
			</rect>
		</>
	);
}

/* AI deployment assistant */
function AiScan() {
	return (
		<>
			<Bg id="scan" from="#8b5cf6" to="#6366f1" />
			{/* repo */}
			<Frame x={44} y={112} w={70} h={76} dots={false} />
			<circle cx="66" cy="138" r="4" fill="#8b5cf6" />
			<circle cx="66" cy="162" r="4" fill="#8b5cf6" />
			<circle cx="92" cy="150" r="4" fill="#8b5cf6" />
			<path
				d="M66 142 v16 M66 150 q0 8 22 -2"
				className="stroke-primary/50"
				strokeWidth="1.5"
				fill="none"
			/>
			{/* AI core */}
			<circle
				cx="200"
				cy="150"
				r="30"
				className="fill-primary/12 stroke-primary/40"
				strokeWidth="1.5"
			/>
			<circle
				cx="200"
				cy="150"
				r="30"
				fill="none"
				className="stroke-primary"
				strokeWidth="1.5"
				strokeDasharray="6 6"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 200 150"
					to="360 200 150"
					dur="6s"
					repeatCount="indefinite"
				/>
			</circle>
			<text
				x="200"
				y="150"
				textAnchor="middle"
				dominantBaseline="central"
				className="fill-primary"
				style={{ font: "800 13px system-ui, sans-serif" }}
			>
				AI
			</text>
			<line
				x1="114"
				y1="150"
				x2="170"
				y2="150"
				className="stroke-primary/40"
				strokeWidth="1.5"
				strokeDasharray={flow}
			/>
			{/* generated dockerfile */}
			<Frame x={286} y={104} w={72} h={92} dots={false} />
			{[120, 134, 148, 162, 176].map((y, i) => (
				<rect
					key={y}
					x="298"
					y={y}
					width={i === 0 ? 40 : 48 - i * 4}
					height="5"
					rx="2.5"
					fill={i === 0 ? "#10b981" : undefined}
					className={i === 0 ? undefined : "fill-primary/25"}
				>
					<animate
						attributeName="opacity"
						values="0.2;1;0.2"
						dur="3s"
						begin={`${i * 0.3}s`}
						repeatCount="indefinite"
					/>
				</rect>
			))}
			<line
				x1="230"
				y1="150"
				x2="284"
				y2="150"
				className="stroke-primary/40"
				strokeWidth="1.5"
				strokeDasharray={flow}
			/>
		</>
	);
}

/* Infrastructure sizing recommendations */
function Sizing() {
	const gauges = [
		{ cx: 130, label: "CPU", val: 0.62, c: "#3b82f6" },
		{ cx: 270, label: "RAM", val: 0.78, c: "#8b5cf6" },
	];
	return (
		<>
			<Bg id="size" from="#3b82f6" to="#8b5cf6" />
			{gauges.map((g) => (
				<g key={g.label}>
					<path
						d={`M${g.cx - 46} 176 A56 56 0 1 0 ${g.cx + 46} 176`}
						className="stroke-primary/15"
						strokeWidth="12"
						strokeLinecap="round"
						fill="none"
					/>
					<path
						d={`M${g.cx - 46} 176 A56 56 0 1 0 ${g.cx + 46} 176`}
						stroke={g.c}
						strokeWidth="12"
						strokeLinecap="round"
						fill="none"
						pathLength={1}
						strokeDasharray="1 1"
					>
						<animate
							attributeName="stroke-dashoffset"
							values={`1;${1 - g.val}`}
							dur="2s"
							fill="freeze"
						/>
						<animate
							attributeName="stroke-dashoffset"
							values={`${1 - g.val + 0.04};${1 - g.val}`}
							dur="3s"
							begin="2s"
							repeatCount="indefinite"
						/>
					</path>
					<text
						x={g.cx}
						y="140"
						textAnchor="middle"
						dominantBaseline="central"
						className="fill-foreground"
						style={{ font: "800 18px system-ui, sans-serif" }}
					>
						{Math.round(g.val * 100)}%
					</text>
					<text
						x={g.cx}
						y="162"
						textAnchor="middle"
						dominantBaseline="central"
						className="fill-muted-foreground"
						style={{ font: "700 10px system-ui, sans-serif" }}
					>
						{g.label}
					</text>
				</g>
			))}
			<g>
				<rect
					x="140"
					y="212"
					width="120"
					height="24"
					rx="12"
					className="fill-primary/15 stroke-primary/40"
					strokeWidth="1"
				/>
				<text
					x="200"
					y="224"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-primary"
					style={{ font: "700 10px system-ui, sans-serif" }}
				>
					AI recommended
				</text>
			</g>
		</>
	);
}

/* Artifact review & edit */
function Artifact() {
	return (
		<>
			<Bg id="art" from="#6366f1" to="#8b5cf6" />
			<Frame x={70} y={58} w={260} h={184} />
			<text
				x="112"
				y="70"
				dominantBaseline="central"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				Dockerfile
			</text>
			{[
				{ w: 120, c: "#8b5cf6" },
				{ w: 168, c: "#3b82f6" },
				{ w: 96, c: "#10b981" },
				{ w: 150, c: "#8b5cf6" },
				{ w: 70, c: "#3b82f6" },
			].map((l, i) => {
				const y = 104 + i * 24;
				return (
					<g key={y}>
						<text
							x="86"
							y={y}
							dominantBaseline="central"
							className="fill-muted-foreground/60"
							style={{ font: "600 8px system-ui, sans-serif" }}
						>
							{i + 1}
						</text>
						<rect x="100" y={y - 4} width={l.w} height="7" rx="3.5" fill={l.c}>
							<animate
								attributeName="opacity"
								values="0.3;1;0.3"
								dur="3.4s"
								begin={`${i * 0.35}s`}
								repeatCount="indefinite"
							/>
						</rect>
					</g>
				);
			})}
			<rect x="252" y="148" width="2.5" height="12" className="fill-foreground">
				<animate
					attributeName="opacity"
					values="1;0;1"
					dur="1s"
					repeatCount="indefinite"
				/>
			</rect>
			{/* pencil */}
			<g>
				<path
					d="M296 196 l14 -14 l10 10 l-14 14 l-12 2 Z"
					className="fill-amber-400 stroke-amber-500"
					strokeWidth="1"
					strokeLinejoin="round"
				/>
				<path
					d="M306 186 l10 10"
					className="stroke-amber-600"
					strokeWidth="1.5"
				/>
			</g>
			<g>
				<rect
					x="86"
					y="212"
					width="110"
					height="22"
					rx="11"
					className="fill-primary/15 stroke-primary/40"
					strokeWidth="1"
				/>
				<text
					x="141"
					y="223"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-primary"
					style={{ font: "700 9px system-ui, sans-serif" }}
				>
					editable draft
				</text>
			</g>
		</>
	);
}

/* One-click managed hosting */
function OneClickHost() {
	return (
		<>
			<Bg id="host1" from="#10b981" to="#3b82f6" />
			{/* button */}
			<g>
				<rect
					x="70"
					y="132"
					width="110"
					height="36"
					rx="18"
					className="fill-primary"
				>
					<animate
						attributeName="opacity"
						values="0.85;1;0.85"
						dur="2.4s"
						repeatCount="indefinite"
					/>
				</rect>
				<text
					x="125"
					y="150"
					textAnchor="middle"
					dominantBaseline="central"
					fill="#fff"
					style={{ font: "700 12px system-ui, sans-serif" }}
				>
					Deploy
				</text>
				<circle
					cx="168"
					cy="168"
					r="8"
					fill="none"
					className="stroke-primary/60"
					strokeWidth="1.5"
				>
					<animate
						attributeName="r"
						values="4;16;4"
						dur="2.4s"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="opacity"
						values="0.7;0;0.7"
						dur="2.4s"
						repeatCount="indefinite"
					/>
				</circle>
				<path
					d="M166 158 l0 18 l5 -5 l4 8 l3 -1 l-4 -8 l7 0 Z"
					className="fill-foreground stroke-background"
					strokeWidth="1"
				/>
			</g>
			<line
				x1="184"
				y1="150"
				x2="236"
				y2="150"
				className="stroke-primary/40"
				strokeWidth="1.5"
				strokeDasharray={flow}
			/>
			<circle r="2.5" fill="#10b981">
				<animateMotion
					dur="1.8s"
					repeatCount="indefinite"
					path="M184 150 L236 150"
				/>
				<animate
					attributeName="opacity"
					values="0;1;0"
					dur="1.8s"
					repeatCount="indefinite"
				/>
			</circle>
			{/* managed server */}
			<Frame x={240} y={116} w={96} h={68} dots={false} />
			<rect
				x="254"
				y="132"
				width="68"
				height="12"
				rx="4"
				className="fill-muted/50"
			/>
			<rect
				x="254"
				y="152"
				width="68"
				height="12"
				rx="4"
				className="fill-muted/50"
			/>
			{[0, 1, 2].map((j) => (
				<circle
					key={j}
					cx={310 - j * 12}
					cy="138"
					r="2.6"
					fill={j === 0 ? "#10b981" : "#3b82f6"}
				>
					<animate
						attributeName="opacity"
						values="0.3;1;0.3"
						dur="1.6s"
						begin={`${j * 0.25}s`}
						repeatCount="indefinite"
					/>
				</circle>
			))}
			<g>
				<rect
					x="288"
					y="188"
					width="64"
					height="20"
					rx="10"
					className="fill-emerald-500/15"
				/>
				<text
					x="320"
					y="198"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-emerald-600 dark:fill-emerald-400"
					style={{ font: "700 9px system-ui, sans-serif" }}
				>
					Managed
				</text>
			</g>
		</>
	);
}

/* ================= Page 2: CI/CD & Git ================= */

/* Webhook-triggered deployments */
function Webhook() {
	return (
		<>
			<Bg id="wh" from="#3b82f6" to="#6366f1" />
			{/* branch with commits */}
			<line
				x1="52"
				y1="150"
				x2="150"
				y2="150"
				className="stroke-primary/40"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			{[64, 96, 128].map((cx, i) => (
				<circle
					key={cx}
					cx={cx}
					cy="150"
					r="7"
					className="fill-card stroke-primary"
					strokeWidth="2"
				>
					<animate
						attributeName="opacity"
						values="0.4;1;0.4"
						dur="2.4s"
						begin={`${i * 0.4}s`}
						repeatCount="indefinite"
					/>
				</circle>
			))}
			<text
				x="90"
				y="178"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				git push
			</text>
			{/* webhook bolt */}
			<circle
				cx="200"
				cy="150"
				r="24"
				className="fill-amber-400/15 stroke-amber-500/50"
				strokeWidth="1.5"
			/>
			<path d="M204 134 l-12 20 h8 l-4 14 l14 -22 h-9 Z" fill="#f59e0b">
				<animate
					attributeName="opacity"
					values="0.5;1;0.5"
					dur="1.4s"
					repeatCount="indefinite"
				/>
			</path>
			<line
				x1="150"
				y1="150"
				x2="176"
				y2="150"
				className="stroke-primary/40"
				strokeWidth="1.5"
				strokeDasharray={flow}
			/>
			<line
				x1="224"
				y1="150"
				x2="252"
				y2="150"
				className="stroke-primary/40"
				strokeWidth="1.5"
				strokeDasharray={flow}
			/>
			{/* deploy node */}
			<circle cx="290" cy="150" r="30" className="fill-primary/15" />
			<circle cx="290" cy="150" r="24" className="fill-primary/80" />
			<path
				d="M281 150 l6 6 l12 -14"
				stroke="#fff"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
			<text
				x="290"
				y="196"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				auto deploy
			</text>
		</>
	);
}

/* PR preview environments */
function PrPreview() {
	return (
		<>
			<Bg id="pr" from="#8b5cf6" to="#3b82f6" />
			{/* PR card */}
			<Frame x={44} y={108} w={110} h={84} dots={false} />
			<circle
				cx="66"
				cy="132"
				r="5"
				className="fill-card stroke-primary"
				strokeWidth="2"
			/>
			<circle
				cx="66"
				cy="168"
				r="5"
				className="fill-card stroke-primary"
				strokeWidth="2"
			/>
			<path d="M66 137 v26" className="stroke-primary" strokeWidth="2" />
			<path
				d="M66 150 q0 -14 18 -14"
				className="stroke-primary"
				strokeWidth="2"
				fill="none"
			/>
			<circle cx="90" cy="136" r="5" className="fill-primary" />
			<rect
				x="82"
				y="158"
				width="60"
				height="5"
				rx="2.5"
				className="fill-primary/25"
			/>
			<rect
				x="82"
				y="170"
				width="44"
				height="5"
				rx="2.5"
				className="fill-primary/15"
			/>
			<text
				x="99"
				y="126"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 8px system-ui, sans-serif" }}
			>
				PR #42
			</text>
			<line
				x1="154"
				y1="150"
				x2="196"
				y2="150"
				className="stroke-primary/40"
				strokeWidth="1.5"
				strokeDasharray={flow}
			/>
			<circle r="2.5" fill="#8b5cf6">
				<animateMotion
					dur="1.8s"
					repeatCount="indefinite"
					path="M154 150 L196 150"
				/>
				<animate
					attributeName="opacity"
					values="0;1;0"
					dur="1.8s"
					repeatCount="indefinite"
				/>
			</circle>
			{/* preview browser */}
			<Frame x={200} y={96} w={156} h={112} />
			<rect
				x="212"
				y="128"
				width="132"
				height="14"
				rx="7"
				className="fill-muted/50"
			/>
			<circle cx="222" cy="135" r="3" fill="#10b981" />
			<text
				x="232"
				y="135.5"
				dominantBaseline="central"
				className="fill-muted-foreground"
				style={{ font: "600 7px system-ui, sans-serif" }}
			>
				pr-42.preview.app
			</text>
			<rect
				x="212"
				y="150"
				width="132"
				height="20"
				rx="6"
				className="fill-primary/20"
			/>
			<rect
				x="212"
				y="178"
				width="62"
				height="22"
				rx="6"
				className="fill-primary/12"
			/>
			<rect
				x="282"
				y="178"
				width="62"
				height="22"
				rx="6"
				className="fill-primary/10"
			/>
		</>
	);
}

/* Branch-based environment targeting */
function Branches() {
	const envs = [
		{ y: 92, label: "production", c: "#10b981" },
		{ y: 150, label: "staging", c: "#fbbf24" },
		{ y: 208, label: "develop", c: "#3b82f6" },
	];
	return (
		<>
			<Bg id="br" from="#6366f1" to="#10b981" />
			<line
				x1="70"
				y1="150"
				x2="70"
				y2="92"
				className="stroke-primary/40"
				strokeWidth="2"
			/>
			<line
				x1="70"
				y1="150"
				x2="70"
				y2="208"
				className="stroke-primary/40"
				strokeWidth="2"
			/>
			<circle
				cx="70"
				cy="150"
				r="7"
				className="fill-card stroke-primary"
				strokeWidth="2"
			/>
			{envs.map((e) => (
				<g key={e.label}>
					<path
						d={`M70 ${e.y === 150 ? 150 : e.y} h40`}
						className="stroke-primary/40"
						strokeWidth="2"
						fill="none"
					/>
					<path
						d={`M70 150 C 90 150, 90 ${e.y}, 110 ${e.y}`}
						className="stroke-primary/40"
						strokeWidth="2"
						fill="none"
					/>
					<circle cx="110" cy={e.y} r="6" fill={e.c} />
					<line
						x1="116"
						y1={e.y}
						x2="150"
						y2={e.y}
						className="stroke-primary/30"
						strokeWidth="1.5"
						strokeDasharray={flow}
					/>
					<rect
						x="152"
						y={e.y - 16}
						width="150"
						height="32"
						rx="8"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
					<rect x="164" y={e.y - 4} width="10" height="10" rx="2" fill={e.c} />
					<text
						x="182"
						y={e.y}
						dominantBaseline="central"
						className="fill-foreground"
						style={{ font: "600 11px system-ui, sans-serif" }}
					>
						{e.label}
					</text>
				</g>
			))}
		</>
	);
}

/* Zero-downtime rolling updates */
function Rolling() {
	const insts = [80, 152, 224, 296];
	return (
		<>
			<Bg id="roll" from="#3b82f6" to="#10b981" />
			<text
				x="200"
				y="86"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 10px system-ui, sans-serif" }}
			>
				v1 → v2 rolling update
			</text>
			{insts.map((cx, i) => (
				<g key={cx}>
					<rect
						x={cx - 26}
						y="118"
						width="52"
						height="64"
						rx="10"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
					{/* v1 fill */}
					<rect
						x={cx - 26}
						y="118"
						width="52"
						height="64"
						rx="10"
						fill="#3b82f6"
						opacity="0.5"
					>
						<animate
							attributeName="opacity"
							values="0.5;0;0"
							keyTimes="0;0.5;1"
							dur="4s"
							begin={`${i * 0.6}s`}
							repeatCount="indefinite"
						/>
					</rect>
					{/* v2 fill */}
					<rect
						x={cx - 26}
						y="118"
						width="52"
						height="64"
						rx="10"
						fill="#10b981"
						opacity="0"
					>
						<animate
							attributeName="opacity"
							values="0;0.55;0.55"
							keyTimes="0;0.5;1"
							dur="4s"
							begin={`${i * 0.6}s`}
							repeatCount="indefinite"
						/>
					</rect>
					<circle cx={cx} cy="150" r="10" className="fill-card" />
					<path
						d={`M${cx - 5} 150 l4 4 l7 -8`}
						stroke="#10b981"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						fill="none"
					>
						<animate
							attributeName="opacity"
							values="0;0;1;1"
							keyTimes="0;0.5;0.6;1"
							dur="4s"
							begin={`${i * 0.6}s`}
							repeatCount="indefinite"
						/>
					</path>
				</g>
			))}
			<g>
				<rect
					x="132"
					y="204"
					width="136"
					height="24"
					rx="12"
					className="fill-emerald-500/15 stroke-emerald-500/40"
					strokeWidth="1"
				/>
				<circle cx="150" cy="216" r="3" fill="#10b981">
					<animate
						attributeName="opacity"
						values="0.3;1;0.3"
						dur="1.6s"
						repeatCount="indefinite"
					/>
				</circle>
				<text
					x="204"
					y="216"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-emerald-600 dark:fill-emerald-400"
					style={{ font: "700 10px system-ui, sans-serif" }}
				>
					zero downtime
				</text>
			</g>
		</>
	);
}

/* ================= Page 3: AI Monitoring ================= */

/* Real-time log streaming */
function Logs() {
	const rows = [
		{ c: "#10b981", w: 150 },
		{ c: "#3b82f6", w: 190 },
		{ c: "#fbbf24", w: 120 },
		{ c: "#8b5cf6", w: 170 },
		{ c: "#10b981", w: 140 },
		{ c: "#f87171", w: 200 },
	];
	return (
		<>
			<Bg id="log" from="#6366f1" to="#8b5cf6" />
			<Frame x={56} y={54} w={288} h={192} />
			<text
				x="112"
				y="66"
				dominantBaseline="central"
				className="fill-muted-foreground"
				style={{ font: "600 8px system-ui, sans-serif" }}
			>
				live logs
			</text>
			<circle cx="330" cy="66" r="3" fill="#10b981">
				<animate
					attributeName="opacity"
					values="0.3;1;0.3"
					dur="1.4s"
					repeatCount="indefinite"
				/>
			</circle>
			<clipPath id="log-clip">
				<rect x="66" y="88" width="268" height="148" />
			</clipPath>
			<g clipPath="url(#log-clip)">
				<g>
					<animateTransform
						attributeName="transform"
						type="translate"
						values="0 148;0 -20"
						dur="6s"
						repeatCount="indefinite"
					/>
					{rows.concat(rows).map((r, i) => (
						<g key={i}>
							<rect x="72" y={i * 22} width="24" height="6" rx="3" fill={r.c} />
							<rect
								x="104"
								y={i * 22}
								width={r.w}
								height="6"
								rx="3"
								className="fill-primary/20"
							/>
						</g>
					))}
				</g>
			</g>
		</>
	);
}

/* Container metrics monitoring */
function Metrics() {
	const bars = [
		{ label: "CPU", c: "#3b82f6", v: "30;58;30" },
		{ label: "MEM", c: "#8b5cf6", v: "40;70;40" },
		{ label: "NET", c: "#10b981", v: "22;50;22" },
	];
	return (
		<>
			<Bg id="met" from="#3b82f6" to="#8b5cf6" />
			<Frame x={60} y={60} w={280} h={180} dots={false} />
			<text
				x="80"
				y="82"
				dominantBaseline="central"
				className="fill-foreground"
				style={{ font: "700 11px system-ui, sans-serif" }}
			>
				Container metrics
			</text>
			{bars.map((b, i) => {
				const y = 112 + i * 40;
				return (
					<g key={b.label}>
						<text
							x="80"
							y={y}
							dominantBaseline="central"
							className="fill-muted-foreground"
							style={{ font: "700 10px system-ui, sans-serif" }}
						>
							{b.label}
						</text>
						<rect
							x="124"
							y={y - 6}
							width="192"
							height="12"
							rx="6"
							className="fill-primary/15"
						/>
						<rect x="124" y={y - 6} width="80" height="12" rx="6" fill={b.c}>
							<animate
								attributeName="width"
								values="60;180;60"
								dur={`${4 + i}s`}
								repeatCount="indefinite"
							/>
						</rect>
					</g>
				);
			})}
		</>
	);
}

/* AI anomaly detection */
function Anomaly() {
	return (
		<>
			<Bg id="ano" from="#6366f1" to="#8b5cf6" />
			<Frame x={56} y={64} w={288} h={172} dots={false} />
			<text
				x="76"
				y="86"
				dominantBaseline="central"
				className="fill-foreground"
				style={{ font: "700 10px system-ui, sans-serif" }}
			>
				AI anomaly detection
			</text>
			<path
				d="M72 176 L110 168 L146 174 L180 118 L196 182 L232 160 L272 166 L328 158"
				className="stroke-primary/25"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M72 176 L110 168 L146 174 L180 118 L196 182 L232 160 L272 166 L328 158"
				stroke="#6366f1"
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
			<circle cx="180" cy="118" r="9" fill="#f87171" opacity="0.3">
				<animate
					attributeName="r"
					values="6;15;6"
					dur="1.8s"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="opacity"
					values="0.4;0;0.4"
					dur="1.8s"
					repeatCount="indefinite"
				/>
			</circle>
			<circle cx="180" cy="118" r="4" fill="#f87171" />
			<rect
				x="168"
				y="94"
				width="58"
				height="16"
				rx="8"
				className="fill-card stroke-border"
				strokeWidth="1"
			/>
			<text
				x="197"
				y="103"
				textAnchor="middle"
				dominantBaseline="central"
				className="fill-rose-600 dark:fill-rose-400"
				style={{ font: "700 8px system-ui, sans-serif" }}
			>
				anomaly
			</text>
		</>
	);
}

/* Resource forecasting */
function Forecast() {
	return (
		<>
			<Bg id="fc" from="#3b82f6" to="#f59e0b" />
			<Frame x={56} y={64} w={288} h={172} dots={false} />
			<line
				x1="72"
				y1="120"
				x2="328"
				y2="120"
				className="stroke-rose-400/50"
				strokeWidth="1.5"
				strokeDasharray="4 4"
			/>
			<text
				x="328"
				y="112"
				textAnchor="end"
				className="fill-rose-500"
				style={{ font: "600 8px system-ui, sans-serif" }}
			>
				capacity
			</text>
			{/* actual */}
			<path
				d="M72 200 L112 190 L152 178 L192 168"
				stroke="#3b82f6"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
			{/* forecast dashed */}
			<path
				d="M192 168 L232 150 L272 138 L312 124"
				stroke="#f59e0b"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
				strokeDasharray="5 5"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="20;0"
					dur="1.6s"
					repeatCount="indefinite"
				/>
			</path>
			<circle cx="192" cy="168" r="4" fill="#3b82f6" />
			<circle cx="312" cy="124" r="4" fill="#f59e0b">
				<animate
					attributeName="opacity"
					values="0.4;1;0.4"
					dur="1.6s"
					repeatCount="indefinite"
				/>
			</circle>
			<text
				x="250"
				y="210"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				forecast
			</text>
		</>
	);
}

/* Cascading failure correlation */
function Cascade() {
	const nodes = [
		{ x: 80, y: 150, d: 0 },
		{ x: 170, y: 100, d: 0.5 },
		{ x: 170, y: 200, d: 0.5 },
		{ x: 262, y: 150, d: 1 },
		{ x: 340, y: 100, d: 1.5 },
		{ x: 340, y: 200, d: 1.5 },
	];
	const edges = [
		[0, 1],
		[0, 2],
		[1, 3],
		[2, 3],
		[3, 4],
		[3, 5],
	];
	return (
		<>
			<Bg id="cas" from="#f87171" to="#6366f1" />
			{edges.map(([a, b], i) => (
				<line
					key={i}
					x1={nodes[a].x}
					y1={nodes[a].y}
					x2={nodes[b].x}
					y2={nodes[b].y}
					className="stroke-primary/25"
					strokeWidth="1.5"
				/>
			))}
			{nodes.map((n, i) => (
				<g key={i}>
					<circle cx={n.x} cy={n.y} r="14" fill="#f87171" opacity="0.25">
						<animate
							attributeName="opacity"
							values="0;0.5;0"
							dur="3s"
							begin={`${n.d}s`}
							repeatCount="indefinite"
						/>
						<animate
							attributeName="r"
							values="12;20;12"
							dur="3s"
							begin={`${n.d}s`}
							repeatCount="indefinite"
						/>
					</circle>
					<circle
						cx={n.x}
						cy={n.y}
						r="12"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
					<circle
						cx={n.x}
						cy={n.y}
						r="5"
						fill={i === 0 ? "#f87171" : "#6366f1"}
					>
						<animate
							attributeName="fill"
							values="#6366f1;#f87171;#6366f1"
							dur="3s"
							begin={`${n.d}s`}
							repeatCount="indefinite"
						/>
					</circle>
				</g>
			))}
		</>
	);
}

/* AI incident dashboard */
function Dashboard() {
	return (
		<>
			<Bg id="dash" from="#6366f1" to="#3b82f6" />
			<Frame x={48} y={52} w={304} h={196} />
			{/* chart widget */}
			<rect
				x="62"
				y="90"
				width="140"
				height="72"
				rx="8"
				className="fill-muted/40"
			/>
			<path
				d="M74 148 L96 132 L118 140 L140 116 L162 126 L190 104"
				stroke="#3b82f6"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
				pathLength={1}
				strokeDasharray="1 1"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="1;0"
					dur="2.4s"
					repeatCount="indefinite"
				/>
			</path>
			{/* gauge widget */}
			<rect
				x="212"
				y="90"
				width="126"
				height="72"
				rx="8"
				className="fill-muted/40"
			/>
			<path
				d="M250 150 A26 26 0 1 1 300 150"
				className="stroke-primary/20"
				strokeWidth="8"
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M250 150 A26 26 0 1 1 300 150"
				stroke="#10b981"
				strokeWidth="8"
				fill="none"
				strokeLinecap="round"
				pathLength={1}
				strokeDasharray="1 1"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="1;0.15"
					dur="2s"
					fill="freeze"
				/>
			</path>
			{/* incident list */}
			{[0, 1, 2].map((i) => (
				<g key={i}>
					<circle
						cx="70"
						cy={186 + i * 18}
						r="4"
						fill={["#f87171", "#fbbf24", "#10b981"][i]}
					/>
					<rect
						x="82"
						y={182 + i * 18}
						width="180"
						height="6"
						rx="3"
						className="fill-primary/20"
					/>
					<rect
						x="282"
						y={182 + i * 18}
						width="52"
						height="6"
						rx="3"
						className="fill-primary/12"
					/>
				</g>
			))}
		</>
	);
}

/* ================= Page 4: AI Error Diagnosis ================= */

/* Stack trace analysis */
function Stacktrace() {
	return (
		<>
			<Bg id="st" from="#f87171" to="#6366f1" />
			<Frame x={60} y={54} w={280} h={192} />
			<text
				x="112"
				y="66"
				dominantBaseline="central"
				className="fill-muted-foreground"
				style={{ font: "600 8px system-ui, sans-serif" }}
			>
				stack trace
			</text>
			{[0, 1, 2, 3, 4].map((i) => {
				const y = 96 + i * 26;
				const err = i === 2;
				return (
					<g key={i}>
						{err && (
							<rect
								x="70"
								y={y - 12}
								width="260"
								height="24"
								rx="6"
								className="fill-rose-500/15"
							/>
						)}
						<text
							x="80"
							y={y}
							dominantBaseline="central"
							className="fill-muted-foreground/60"
							style={{ font: "600 8px system-ui, sans-serif" }}
						>
							{err ? "→" : "at"}
						</text>
						<rect
							x="98"
							y={y - 3}
							width={err ? 180 : 150 - i * 12}
							height="6"
							rx="3"
							fill={err ? "#f87171" : undefined}
							className={err ? undefined : "fill-primary/20"}
						/>
						{err && (
							<circle cx="316" cy={y} r="5" fill="#f87171">
								<animate
									attributeName="opacity"
									values="0.3;1;0.3"
									dur="1.6s"
									repeatCount="indefinite"
								/>
							</circle>
						)}
					</g>
				);
			})}
		</>
	);
}

/* Root cause identification */
function Rootcause() {
	return (
		<>
			<Bg id="rc" from="#8b5cf6" to="#6366f1" />
			{/* nodes */}
			{[
				{ x: 90, y: 110 },
				{ x: 90, y: 190 },
				{ x: 300, y: 110 },
				{ x: 300, y: 190 },
			].map((n, i) => (
				<g key={i}>
					<line
						x1={n.x}
						y1={n.y}
						x2="195"
						y2="150"
						className="stroke-primary/25"
						strokeWidth="1.5"
					/>
					<circle
						cx={n.x}
						cy={n.y}
						r="10"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
				</g>
			))}
			{/* root node */}
			<circle cx="195" cy="150" r="18" fill="#f87171" opacity="0.2">
				<animate
					attributeName="r"
					values="16;24;16"
					dur="2.4s"
					repeatCount="indefinite"
				/>
			</circle>
			<circle cx="195" cy="150" r="14" className="fill-rose-500/80" />
			{/* magnifier */}
			<circle
				cx="200"
				cy="152"
				r="30"
				fill="none"
				className="stroke-primary"
				strokeWidth="3"
			/>
			<line
				x1="222"
				y1="174"
				x2="244"
				y2="196"
				className="stroke-primary"
				strokeWidth="4"
				strokeLinecap="round"
			/>
			{/* confidence */}
			<g>
				<rect
					x="150"
					y="214"
					width="100"
					height="22"
					rx="11"
					className="fill-primary/15 stroke-primary/40"
					strokeWidth="1"
				/>
				<text
					x="200"
					y="225"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-primary"
					style={{ font: "700 10px system-ui, sans-serif" }}
				>
					94% confidence
				</text>
			</g>
		</>
	);
}

/* Remediation recommendations */
function Remediation() {
	return (
		<>
			<Bg id="rem" from="#10b981" to="#6366f1" />
			<Frame x={64} y={54} w={272} h={192} dots={false} />
			<path
				d="M84 74 l4 4 l8 -9"
				stroke="#10b981"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
			<text
				x="104"
				y="74"
				dominantBaseline="central"
				className="fill-foreground"
				style={{ font: "700 10px system-ui, sans-serif" }}
			>
				Recommended fix
			</text>
			{[0, 1, 2].map((i) => {
				const y = 104 + i * 24;
				return (
					<g key={i}>
						<rect
							x="80"
							y={y - 8}
							width="16"
							height="16"
							rx="4"
							className="fill-emerald-500/15 stroke-emerald-500"
							strokeWidth="1"
						/>
						<path
							d={`M84 ${y} l3 3 l5 -6`}
							stroke="#10b981"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							fill="none"
						>
							<animate
								attributeName="opacity"
								values="0;1"
								dur="0.6s"
								begin={`${i * 0.5}s`}
								fill="freeze"
							/>
						</path>
						<rect
							x="104"
							y={y - 4}
							width={180 - i * 30}
							height="6"
							rx="3"
							className="fill-primary/20"
						/>
					</g>
				);
			})}
			{/* code snippet */}
			<rect
				x="80"
				y="176"
				width="224"
				height="30"
				rx="6"
				className="fill-muted/50"
			/>
			<rect x="92" y="184" width="60" height="5" rx="2.5" fill="#8b5cf6" />
			<rect
				x="92"
				y="194"
				width="120"
				height="5"
				rx="2.5"
				className="fill-primary/25"
			/>
			<g>
				<rect
					x="248"
					y="214"
					width="56"
					height="22"
					rx="11"
					className="fill-rose-500/15"
				/>
				<text
					x="276"
					y="225"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-rose-600 dark:fill-rose-400"
					style={{ font: "700 9px system-ui, sans-serif" }}
				>
					high
				</text>
			</g>
		</>
	);
}

/* Automatic issue ticketing */
function Ticket() {
	return (
		<>
			<Bg id="tk" from="#f59e0b" to="#6366f1" />
			<path
				d="M78 112 l22 40 h-44 Z"
				className="fill-amber-500/20 stroke-amber-500"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
			<rect
				x="76"
				y="122"
				width="4"
				height="14"
				rx="2"
				className="fill-amber-500"
			/>
			<circle cx="78" cy="143" r="2.5" className="fill-amber-500" />
			<line
				x1="106"
				y1="132"
				x2="168"
				y2="132"
				className="stroke-primary/30"
				strokeWidth="1.5"
				strokeDasharray={flow}
			/>
			<circle r="2.5" fill="#8b5cf6">
				<animateMotion
					dur="1.8s"
					repeatCount="indefinite"
					path="M106 132 L168 132"
				/>
				<animate
					attributeName="opacity"
					values="0;1;0"
					dur="1.8s"
					repeatCount="indefinite"
				/>
			</circle>
			<g>
				<animate
					attributeName="opacity"
					values="0.3;1;1;0.3"
					dur="3.6s"
					repeatCount="indefinite"
				/>
				<Frame x={176} y={84} w={168} h={104} dots={false} />
				<text
					x="196"
					y="106"
					dominantBaseline="central"
					className="fill-foreground"
					style={{ font: "700 9px system-ui, sans-serif" }}
				>
					issue #128
				</text>
				<rect
					x="298"
					y="98"
					width="36"
					height="16"
					rx="8"
					className="fill-rose-500/15"
				/>
				<text
					x="316"
					y="106.5"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-rose-600 dark:fill-rose-400"
					style={{ font: "700 7px system-ui, sans-serif" }}
				>
					high
				</text>
				<rect
					x="192"
					y="126"
					width="130"
					height="5"
					rx="2.5"
					className="fill-primary/25"
				/>
				<rect
					x="192"
					y="138"
					width="104"
					height="5"
					rx="2.5"
					className="fill-primary/15"
				/>
				<rect
					x="192"
					y="158"
					width="12"
					height="12"
					rx="3"
					className="fill-emerald-500/15 stroke-emerald-500"
					strokeWidth="1"
				/>
				<path
					d="M195 164 l2.5 2.5 l4 -5"
					stroke="#10b981"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
					fill="none"
				/>
			</g>
			<g>
				<rect
					x="176"
					y="200"
					width="76"
					height="22"
					rx="11"
					className="fill-primary/15 stroke-primary/40"
					strokeWidth="1"
				/>
				<text
					x="214"
					y="211.5"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-primary"
					style={{ font: "700 10px system-ui, sans-serif" }}
				>
					auto-filed
				</text>
			</g>
		</>
	);
}

/* Priority-based agent assignment */
function Assign() {
	return (
		<>
			<Bg id="asg" from="#6366f1" to="#10b981" />
			{/* ticket */}
			<Frame x={44} y={110} w={110} h={80} dots={false} />
			<rect
				x="58"
				y="126"
				width="60"
				height="6"
				rx="3"
				className="fill-primary/30"
			/>
			<rect
				x="58"
				y="140"
				width="82"
				height="5"
				rx="2.5"
				className="fill-primary/15"
			/>
			<rect
				x="58"
				y="164"
				width="44"
				height="16"
				rx="8"
				className="fill-rose-500/15"
			/>
			<text
				x="80"
				y="172.5"
				textAnchor="middle"
				dominantBaseline="central"
				className="fill-rose-600 dark:fill-rose-400"
				style={{ font: "700 8px system-ui, sans-serif" }}
			>
				high
			</text>
			<line
				x1="154"
				y1="150"
				x2="210"
				y2="150"
				className="stroke-primary/30"
				strokeWidth="1.5"
				strokeDasharray={flow}
			/>
			<circle r="3" fill="#6366f1">
				<animateMotion
					dur="1.8s"
					repeatCount="indefinite"
					path="M154 150 L210 150"
				/>
				<animate
					attributeName="opacity"
					values="0;1;0"
					dur="1.8s"
					repeatCount="indefinite"
				/>
			</circle>
			{/* developer */}
			<circle
				cx="252"
				cy="150"
				r="30"
				className="fill-primary/12 stroke-primary/40"
				strokeWidth="1.5"
			/>
			<circle cx="252" cy="142" r="9" fill="#6366f1" />
			<path d="M236 168 a16 12 0 0 1 32 0 Z" fill="#6366f1" />
			<circle cx="278" cy="128" r="7" className="fill-emerald-500" />
			<path
				d="M275 128 l2 2 l4 -4"
				stroke="#fff"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
			<text
				x="252"
				y="200"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				first available
			</text>
		</>
	);
}

/* Incident history & correlation */
function History() {
	const items = [70, 118, 166, 214, 262, 310];
	return (
		<>
			<Bg id="hist" from="#8b5cf6" to="#6366f1" />
			<line
				x1="56"
				y1="150"
				x2="344"
				y2="150"
				className="stroke-border"
				strokeWidth="2"
			/>
			{items.map((cx, i) => {
				const recurring = i === 1 || i === 4;
				return (
					<g key={cx}>
						<circle
							cx={cx}
							cy="150"
							r={recurring ? 9 : 6}
							fill={recurring ? "#8b5cf6" : undefined}
							className={recurring ? undefined : "fill-card stroke-border"}
							strokeWidth="1.5"
						>
							{recurring && (
								<animate
									attributeName="opacity"
									values="0.5;1;0.5"
									dur="2s"
									repeatCount="indefinite"
								/>
							)}
						</circle>
						<line
							x1={cx}
							y1={i % 2 === 0 ? 132 : 168}
							x2={cx}
							y2="150"
							className="stroke-border"
							strokeWidth="1"
						/>
						<rect
							x={cx - 22}
							y={i % 2 === 0 ? 108 : 172}
							width="44"
							height="20"
							rx="6"
							className="fill-card stroke-border"
							strokeWidth="1"
						/>
						<rect
							x={cx - 14}
							y={i % 2 === 0 ? 116 : 180}
							width="28"
							height="4"
							rx="2"
							className="fill-primary/25"
						/>
					</g>
				);
			})}
			{/* correlation link */}
			<path
				d="M118 150 C 150 110, 230 110, 262 150"
				className="stroke-violet-500"
				strokeWidth="1.5"
				fill="none"
				strokeDasharray="4 4"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="16;0"
					dur="1.6s"
					repeatCount="indefinite"
				/>
			</path>
			<text
				x="190"
				y="100"
				textAnchor="middle"
				className="fill-violet-500"
				style={{ font: "600 8px system-ui, sans-serif" }}
			>
				correlated
			</text>
		</>
	);
}

/* ================= Page 5: Autonomous Self-Healing ================= */

/* Auto-restart crashed services */
function Restart() {
	return (
		<>
			<Bg id="rst" from="#f87171" to="#10b981" />
			{/* service box */}
			<Frame x={148} y={102} w={104} h={96} dots={false} />
			<rect
				x="164"
				y="120"
				width="72"
				height="10"
				rx="4"
				className="fill-muted/50"
			/>
			<rect
				x="164"
				y="138"
				width="52"
				height="8"
				rx="4"
				className="fill-primary/20"
			/>
			{/* crash then check */}
			<g>
				<path
					d="M188 166 l24 24 M212 166 l-24 24"
					className="stroke-rose-500"
					strokeWidth="3"
					strokeLinecap="round"
				>
					<animate
						attributeName="opacity"
						values="1;1;0;0"
						keyTimes="0;0.4;0.5;1"
						dur="4s"
						repeatCount="indefinite"
					/>
				</path>
				<path
					d="M188 178 l6 6 l14 -16"
					stroke="#10b981"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
					fill="none"
				>
					<animate
						attributeName="opacity"
						values="0;0;1;1"
						keyTimes="0;0.5;0.6;1"
						dur="4s"
						repeatCount="indefinite"
					/>
				</path>
			</g>
			{/* restart arc encircling the service */}
			<path
				d="M200 90 A60 60 0 1 1 260 150"
				fill="none"
				className="stroke-primary"
				strokeWidth="2.5"
				strokeLinecap="round"
				pathLength={1}
				strokeDasharray="1 1"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="1;0"
					dur="2s"
					repeatCount="indefinite"
				/>
			</path>
			<path d="M260 138 l-6 13 l12 0 Z" className="fill-primary" />
			<text
				x="200"
				y="236"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 10px system-ui, sans-serif" }}
			>
				auto-restart &amp; verify
			</text>
		</>
	);
}

/* Swarm service recovery */
function Swarm() {
	const nodes = [
		{ x: 200, y: 90 },
		{ x: 130, y: 150 },
		{ x: 270, y: 150 },
		{ x: 165, y: 212 },
		{ x: 235, y: 212 },
	];
	return (
		<>
			<Bg id="sw" from="#0ea5e9" to="#6366f1" />
			{nodes.map((n, i) =>
				i === 0 ? null : (
					<line
						key={i}
						x1="200"
						y1="150"
						x2={n.x}
						y2={n.y}
						className="stroke-primary/25"
						strokeWidth="1.5"
					/>
				),
			)}
			{/* manager */}
			<circle cx="200" cy="150" r="20" className="fill-primary/80" />
			<path
				d="M192 150 l6 6 l10 -12"
				stroke="#fff"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
			{nodes.map((n, i) => {
				if (i === 0) return null;
				const failing = i === 3;
				return (
					<g key={`n${i}`}>
						<circle
							cx={n.x}
							cy={n.y}
							r="14"
							className="fill-card stroke-border"
							strokeWidth="1.5"
						/>
						<rect
							x={n.x - 6}
							y={n.y - 6}
							width="12"
							height="12"
							rx="3"
							fill={failing ? "#f87171" : "#3b82f6"}
						>
							{failing && (
								<animate
									attributeName="fill"
									values="#f87171;#10b981;#f87171"
									dur="3s"
									repeatCount="indefinite"
								/>
							)}
						</rect>
					</g>
				);
			})}
			<text
				x="200"
				y="252"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 10px system-ui, sans-serif" }}
			>
				swarm auto-recovery
			</text>
		</>
	);
}

/* Auto-scaling on threshold breach */
function Autoscale() {
	const reps = [96, 150, 204, 258, 312];
	return (
		<>
			<Bg id="as" from="#3b82f6" to="#8b5cf6" />
			<line
				x1="60"
				y1="120"
				x2="340"
				y2="120"
				className="stroke-rose-400/50"
				strokeWidth="1.5"
				strokeDasharray="4 4"
			/>
			<text
				x="340"
				y="112"
				textAnchor="end"
				className="fill-rose-500"
				style={{ font: "600 8px system-ui, sans-serif" }}
			>
				threshold
			</text>
			{reps.map((cx, i) => (
				<g key={cx}>
					<rect
						x={cx - 20}
						y="150"
						width="40"
						height="70"
						rx="8"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					>
						<animate
							attributeName="opacity"
							values={i < 2 ? "1;1" : "0.2;1"}
							keyTimes="0;1"
							dur="2s"
							begin={`${i * 0.4}s`}
							fill="freeze"
						/>
					</rect>
					<rect
						x={cx - 12}
						y="162"
						width="24"
						height="8"
						rx="3"
						fill="#3b82f6"
					/>
					<rect
						x={cx - 12}
						y="176"
						width="16"
						height="6"
						rx="3"
						className="fill-primary/25"
					/>
				</g>
			))}
			<path
				d="M60 200 L120 184 L180 160 L240 138 L300 120"
				stroke="#8b5cf6"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
				pathLength={1}
				strokeDasharray="1 1"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="1;0"
					dur="2.4s"
					repeatCount="indefinite"
				/>
			</path>
			<text
				x="200"
				y="240"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 10px system-ui, sans-serif" }}
			>
				scale replicas up
			</text>
		</>
	);
}

/* Human approval workflows */
function Approval() {
	return (
		<>
			<Bg id="ap" from="#fbbf24" to="#6366f1" />
			<Frame x={88} y={58} w={224} h={150} />
			<circle cx="104" cy="102" r="6" className="fill-amber-400" />
			<text
				x="118"
				y="102"
				dominantBaseline="central"
				className="fill-foreground"
				style={{ font: "700 10px system-ui, sans-serif" }}
			>
				Approval required
			</text>
			<rect
				x="104"
				y="122"
				width="192"
				height="6"
				rx="3"
				className="fill-primary/25"
			/>
			<rect
				x="104"
				y="136"
				width="150"
				height="6"
				rx="3"
				className="fill-primary/15"
			/>
			{/* buttons */}
			<g>
				<rect
					x="104"
					y="158"
					width="92"
					height="30"
					rx="8"
					className="fill-emerald-500/80"
				/>
				<path
					d="M120 173 l5 5 l9 -10"
					stroke="#fff"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					fill="none"
				/>
				<text
					x="158"
					y="173"
					textAnchor="middle"
					dominantBaseline="central"
					fill="#fff"
					style={{ font: "700 9px system-ui, sans-serif" }}
				>
					Approve
				</text>
				<circle
					cx="150"
					cy="173"
					r="18"
					fill="none"
					className="stroke-emerald-500/60"
					strokeWidth="1.5"
				>
					<animate
						attributeName="r"
						values="6;22;6"
						dur="2.6s"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="opacity"
						values="0.7;0;0.7"
						dur="2.6s"
						repeatCount="indefinite"
					/>
				</circle>
			</g>
			<rect
				x="204"
				y="158"
				width="92"
				height="30"
				rx="8"
				className="fill-card stroke-border"
				strokeWidth="1.5"
			/>
			<text
				x="250"
				y="173"
				textAnchor="middle"
				dominantBaseline="central"
				className="fill-muted-foreground"
				style={{ font: "700 9px system-ui, sans-serif" }}
			>
				Deny
			</text>
			<text
				x="200"
				y="228"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				via Slack or email
			</text>
		</>
	);
}

/* Plain-language action explanations */
function Explain() {
	return (
		<>
			<Bg id="ex" from="#8b5cf6" to="#3b82f6" />
			<circle
				cx="88"
				cy="120"
				r="22"
				className="fill-primary/12 stroke-primary/40"
				strokeWidth="1.5"
			/>
			<text
				x="88"
				y="120"
				textAnchor="middle"
				dominantBaseline="central"
				className="fill-primary"
				style={{ font: "800 12px system-ui, sans-serif" }}
			>
				AI
			</text>
			{/* speech bubble */}
			<path
				d="M124 92 h188 a12 12 0 0 1 12 12 v72 a12 12 0 0 1 -12 12 h-160 l-18 18 v-18 h-10 a12 12 0 0 1 -12 -12 v-72 a12 12 0 0 1 12 -12 Z"
				className="fill-card stroke-border"
				strokeWidth="1.5"
			/>
			{[0, 1, 2, 3].map((i) => (
				<rect
					key={i}
					x="140"
					y={112 + i * 18}
					width={i === 3 ? 120 : 168 - i * 8}
					height="7"
					rx="3.5"
					className="fill-primary/20"
				>
					<animate
						attributeName="opacity"
						values="0.2;1;0.2"
						dur="3.4s"
						begin={`${i * 0.35}s`}
						repeatCount="indefinite"
					/>
				</rect>
			))}
			<text
				x="200"
				y="216"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 10px system-ui, sans-serif" }}
			>
				plain-language summary
			</text>
		</>
	);
}

/* One-click rollback */
function Rollback() {
	const states = [110, 170, 230, 290];
	return (
		<>
			<Bg id="rb" from="#6366f1" to="#10b981" />
			{states.map((cx, i) => (
				<g key={cx}>
					<circle
						cx={cx}
						cy="150"
						r="10"
						fill={i === 1 ? "#10b981" : "#6366f1"}
						opacity={i === 3 ? 0.4 : 1}
					/>
					{i < 3 && (
						<line
							x1={cx + 10}
							y1="150"
							x2={states[i + 1] - 10}
							y2="150"
							className="stroke-primary/30"
							strokeWidth="1.5"
						/>
					)}
				</g>
			))}
			{/* rollback arc from last to good state */}
			<path
				d="M290 138 C 260 96, 200 96, 172 138"
				fill="none"
				className="stroke-emerald-500"
				strokeWidth="2.5"
				strokeLinecap="round"
				pathLength={1}
				strokeDasharray="1 1"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="1;0"
					dur="1.8s"
					repeatCount="indefinite"
				/>
			</path>
			<path d="M172 138 l-2 -12 l12 5 Z" className="fill-emerald-500" />
			<text
				x="170"
				y="170"
				textAnchor="middle"
				className="fill-emerald-600 dark:fill-emerald-400"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				last good
			</text>
			<g>
				<rect
					x="132"
					y="200"
					width="136"
					height="28"
					rx="14"
					className="fill-primary"
				/>
				<text
					x="200"
					y="214"
					textAnchor="middle"
					dominantBaseline="central"
					fill="#fff"
					style={{ font: "700 10px system-ui, sans-serif" }}
				>
					One-click rollback
				</text>
			</g>
		</>
	);
}

/* ================= Page 6: Database Management ================= */

function Cylinder({
	x,
	y,
	w,
	h,
	fill,
}: { x: number; y: number; w: number; h: number; fill: string }) {
	const ry = w * 0.18;
	return (
		<g>
			<path
				d={`M${x} ${y} v${h} a${w / 2} ${ry} 0 0 0 ${w} 0 v${-h}`}
				fill={fill}
				opacity="0.85"
			/>
			<ellipse
				cx={x + w / 2}
				cy={y}
				rx={w / 2}
				ry={ry}
				fill={fill}
				className="stroke-primary/40"
				strokeWidth="1"
			/>
			<ellipse
				cx={x + w / 2}
				cy={y}
				rx={w / 2}
				ry={ry}
				fill="none"
				stroke="#fff"
				strokeOpacity="0.5"
				strokeWidth="1"
			/>
		</g>
	);
}

/* Multi-engine support */
function DbEngines() {
	const dbs = [
		{ x: 60, c: "#3b82f6", label: "Postgres" },
		{ x: 130, c: "#8b5cf6", label: "MySQL" },
		{ x: 200, c: "#10b981", label: "Mongo" },
		{ x: 270, c: "#f59e0b", label: "Redis" },
	];
	return (
		<>
			<Bg id="dbe" from="#6366f1" to="#10b981" />
			{dbs.map((d, i) => (
				<g key={d.label}>
					<Cylinder x={d.x} y={110} w={62} h={64} fill={d.c} />
					<ellipse
						cx={d.x + 31}
						cy="130"
						rx="31"
						ry="11"
						fill="none"
						stroke="#fff"
						strokeOpacity="0.3"
						strokeWidth="1"
					>
						<animate
							attributeName="opacity"
							values="0.15;0.5;0.15"
							dur="2.4s"
							begin={`${i * 0.3}s`}
							repeatCount="indefinite"
						/>
					</ellipse>
					<text
						x={d.x + 31}
						y="196"
						textAnchor="middle"
						className="fill-muted-foreground"
						style={{ font: "600 9px system-ui, sans-serif" }}
					>
						{d.label}
					</text>
				</g>
			))}
		</>
	);
}

/* Automated backup scheduling */
function BackupSchedule() {
	return (
		<>
			<Bg id="bk" from="#3b82f6" to="#8b5cf6" />
			{/* clock */}
			<circle
				cx="96"
				cy="150"
				r="34"
				className="fill-card stroke-border"
				strokeWidth="1.5"
			/>
			<circle
				cx="96"
				cy="150"
				r="34"
				fill="none"
				className="stroke-primary/40"
				strokeWidth="2"
				strokeDasharray="3 5"
			/>
			<line
				x1="96"
				y1="150"
				x2="96"
				y2="130"
				className="stroke-foreground"
				strokeWidth="2"
				strokeLinecap="round"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 96 150"
					to="360 96 150"
					dur="6s"
					repeatCount="indefinite"
				/>
			</line>
			<line
				x1="96"
				y1="150"
				x2="112"
				y2="150"
				className="stroke-foreground"
				strokeWidth="2"
				strokeLinecap="round"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 96 150"
					to="360 96 150"
					dur="24s"
					repeatCount="indefinite"
				/>
			</line>
			<text
				x="96"
				y="204"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				cron schedule
			</text>
			{/* flow to storage */}
			<line
				x1="134"
				y1="150"
				x2="212"
				y2="150"
				className="stroke-primary/40"
				strokeWidth="1.5"
				strokeDasharray={flow}
			/>
			{[0, 1].map((k) => (
				<circle key={k} cy="150" r="3" fill="#3b82f6">
					<animate
						attributeName="cx"
						values="134;212"
						dur="2s"
						begin={`${k}s`}
						repeatCount="indefinite"
					/>
					<animate
						attributeName="opacity"
						values="0;1;0"
						dur="2s"
						begin={`${k}s`}
						repeatCount="indefinite"
					/>
				</circle>
			))}
			{/* bucket */}
			<Cylinder x={224} y={116} w={70} h={64} fill="#8b5cf6" />
			<text
				x="259"
				y="150"
				textAnchor="middle"
				dominantBaseline="central"
				fill="#fff"
				style={{ font: "800 14px system-ui, sans-serif" }}
			>
				S3
			</text>
			<text
				x="259"
				y="200"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				backup
			</text>
		</>
	);
}

/* Volume backups */
function Volume() {
	return (
		<>
			<Bg id="vol" from="#6366f1" to="#3b82f6" />
			{/* volume disk stack */}
			<Cylinder x={110} y={100} w={90} h={80} fill="#6366f1" />
			<ellipse
				cx="155"
				cy="126"
				rx="45"
				ry="16"
				fill="none"
				stroke="#fff"
				strokeOpacity="0.35"
				strokeWidth="1"
			/>
			<ellipse
				cx="155"
				cy="152"
				rx="45"
				ry="16"
				fill="none"
				stroke="#fff"
				strokeOpacity="0.25"
				strokeWidth="1"
			/>
			<text
				x="155"
				y="204"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				docker volume
			</text>
			{/* snapshot */}
			<line
				x1="204"
				y1="140"
				x2="244"
				y2="140"
				className="stroke-primary/40"
				strokeWidth="1.5"
				strokeDasharray={flow}
			/>
			<circle r="3" fill="#3b82f6">
				<animateMotion
					dur="2s"
					repeatCount="indefinite"
					path="M204 140 L244 140"
				/>
				<animate
					attributeName="opacity"
					values="0;1;0"
					dur="2s"
					repeatCount="indefinite"
				/>
			</circle>
			<Frame x={248} y={108} w={92} h={72} dots={false} />
			<path
				d="M284 146 l7 7 l15 -17"
				stroke="#10b981"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
			<text
				x="294"
				y="196"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				snapshot
			</text>
		</>
	);
}

/* Flexible backup destinations */
function S3dest() {
	const dests = [
		{ y: 84, label: "AWS S3", c: "#f59e0b" },
		{ y: 136, label: "MinIO", c: "#f87171" },
		{ y: 188, label: "DO Spaces", c: "#3b82f6" },
	];
	return (
		<>
			<Bg id="s3" from="#10b981" to="#6366f1" />
			{/* source */}
			<Cylinder x={54} y={118} w={70} h={60} fill="#6366f1" />
			<text
				x="89"
				y="210"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				backup
			</text>
			{dests.map((d, i) => (
				<g key={d.label}>
					<path
						d={`M124 150 C 190 150, 200 ${d.y + 16}, 246 ${d.y + 16}`}
						className="stroke-primary/30"
						strokeWidth="1.5"
						fill="none"
						strokeDasharray={flow}
					/>
					<circle r="2.5" fill={d.c}>
						<animateMotion
							dur="2.4s"
							begin={`${i * 0.5}s`}
							repeatCount="indefinite"
							path={`M124 150 C 190 150, 200 ${d.y + 16}, 246 ${d.y + 16}`}
						/>
						<animate
							attributeName="opacity"
							values="0;1;0"
							dur="2.4s"
							begin={`${i * 0.5}s`}
							repeatCount="indefinite"
						/>
					</circle>
					<rect
						x="248"
						y={d.y}
						width="100"
						height="32"
						rx="8"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
					<rect x="256" y={d.y + 11} width="10" height="10" rx="2" fill={d.c} />
					<text
						x="300"
						y={d.y + 16}
						textAnchor="middle"
						dominantBaseline="central"
						className="fill-foreground"
						style={{ font: "600 10px system-ui, sans-serif" }}
					>
						{d.label}
					</text>
				</g>
			))}
		</>
	);
}

/* ================= Page 7: Multi-Server & Infra ================= */

/* Remote server management */
function Servers() {
	const servers = [
		{ x: 150, y: 96 },
		{ x: 260, y: 132 },
		{ x: 140, y: 190 },
		{ x: 262, y: 214 },
	];
	return (
		<>
			<Bg id="srv" from="#0ea5e9" to="#6366f1" />
			{/* control plane */}
			<circle cx="70" cy="150" r="26" className="fill-primary/80" />
			<rect x="58" y="142" width="24" height="4" rx="2" fill="#fff" />
			<rect
				x="58"
				y="150"
				width="24"
				height="4"
				rx="2"
				fill="#fff"
				opacity="0.7"
			/>
			<rect
				x="58"
				y="158"
				width="16"
				height="4"
				rx="2"
				fill="#fff"
				opacity="0.5"
			/>
			<text
				x="70"
				y="192"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 8px system-ui, sans-serif" }}
			>
				control
			</text>
			{servers.map((s, i) => (
				<g key={i}>
					<path
						d={`M96 150 C 120 150, 120 ${s.y + 20}, ${s.x - 30} ${s.y + 20}`}
						className="stroke-primary/25"
						strokeWidth="1.5"
						fill="none"
						strokeDasharray={flow}
					/>
					<circle r="2.5" fill="#0ea5e9">
						<animateMotion
							dur="2.4s"
							begin={`${i * 0.4}s`}
							repeatCount="indefinite"
							path={`M96 150 C 120 150, 120 ${s.y + 20}, ${s.x - 30} ${s.y + 20}`}
						/>
						<animate
							attributeName="opacity"
							values="0;1;0"
							dur="2.4s"
							begin={`${i * 0.4}s`}
							repeatCount="indefinite"
						/>
					</circle>
					<rect
						x={s.x - 28}
						y={s.y}
						width="88"
						height="40"
						rx="8"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
					<rect
						x={s.x - 18}
						y={s.y + 10}
						width="46"
						height="6"
						rx="3"
						className="fill-muted/60"
					/>
					<rect
						x={s.x - 18}
						y={s.y + 22}
						width="34"
						height="6"
						rx="3"
						className="fill-primary/20"
					/>
					{[0, 1, 2].map((j) => (
						<circle
							key={j}
							cx={s.x + 46 - j * 9}
							cy={s.y + 14}
							r="2.2"
							fill={j === 0 ? "#10b981" : "#3b82f6"}
						>
							<animate
								attributeName="opacity"
								values="0.3;1;0.3"
								dur="1.8s"
								begin={`${j * 0.2 + i * 0.3}s`}
								repeatCount="indefinite"
							/>
						</circle>
					))}
				</g>
			))}
		</>
	);
}

/* Browser terminal access */
function Terminal() {
	const cmds = [
		{ w: 120, c: "#10b981" },
		{ w: 170, c: "#3b82f6" },
		{ w: 90, c: "#8b5cf6" },
	];
	return (
		<>
			<Bg id="term" from="#6366f1" to="#8b5cf6" />
			<Frame x={60} y={58} w={280} h={184} />
			{cmds.map((c, i) => {
				const y = 104 + i * 30;
				return (
					<g key={y}>
						<text
							x="78"
							y={y}
							dominantBaseline="central"
							fill="#10b981"
							style={{ font: "700 11px monospace" }}
						>
							$
						</text>
						<rect x="92" y={y - 4} width={c.w} height="8" rx="4" fill={c.c}>
							<animate
								attributeName="opacity"
								values="0.3;1;0.3"
								dur="3s"
								begin={`${i * 0.5}s`}
								repeatCount="indefinite"
							/>
						</rect>
					</g>
				);
			})}
			<rect x="92" y="190" width="9" height="14" className="fill-foreground">
				<animate
					attributeName="opacity"
					values="1;0;1"
					dur="1s"
					repeatCount="indefinite"
				/>
			</rect>
			<text
				x="112"
				y="197"
				dominantBaseline="central"
				className="fill-muted-foreground"
				style={{ font: "600 9px monospace" }}
			>
				ssh in-browser
			</text>
		</>
	);
}

/* Traefik reverse proxy & SSL */
function ProxyGraphic() {
	const routes = [
		{ y: 96, label: "app.com" },
		{ y: 150, label: "api.com" },
		{ y: 204, label: "*.dev" },
	];
	return (
		<>
			<Bg id="px" from="#10b981" to="#6366f1" />
			{/* incoming */}
			<text
				x="60"
				y="150"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				traffic
			</text>
			<line
				x1="84"
				y1="150"
				x2="150"
				y2="150"
				className="stroke-primary/40"
				strokeWidth="1.5"
				strokeDasharray={flow}
			/>
			{/* proxy */}
			<rect
				x="150"
				y="118"
				width="70"
				height="64"
				rx="12"
				className="fill-primary/80"
			/>
			<path
				d="M170 138 h30 M170 150 h30 M170 162 h20"
				stroke="#fff"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<text
				x="185"
				y="200"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 8px system-ui, sans-serif" }}
			>
				Traefik
			</text>
			{routes.map((r, i) => (
				<g key={r.label}>
					<path
						d={`M220 150 C 250 150, 250 ${r.y + 15}, 280 ${r.y + 15}`}
						className="stroke-primary/30"
						strokeWidth="1.5"
						fill="none"
						strokeDasharray={flow}
					/>
					<circle r="2.5" fill="#10b981">
						<animateMotion
							dur="2s"
							begin={`${i * 0.4}s`}
							repeatCount="indefinite"
							path={`M220 150 C 250 150, 250 ${r.y + 15}, 280 ${r.y + 15}`}
						/>
						<animate
							attributeName="opacity"
							values="0;1;0"
							dur="2s"
							begin={`${i * 0.4}s`}
							repeatCount="indefinite"
						/>
					</circle>
					<rect
						x="282"
						y={r.y}
						width="86"
						height="30"
						rx="8"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
					<path
						d={`M293 ${r.y + 15} v-3 a3 3 0 0 1 6 0 v3 Z M291 ${r.y + 15} h10 v6 h-10 Z`}
						className="fill-emerald-500"
					/>
					<text
						x="308"
						y={r.y + 15}
						dominantBaseline="central"
						className="fill-foreground"
						style={{ font: "600 9px system-ui, sans-serif" }}
					>
						{r.label}
					</text>
				</g>
			))}
		</>
	);
}

/* ================= Page 8: Notifications & Alerting ================= */

/* Multi-channel notifications */
function Channels() {
	const chans = [
		{ x: 150, y: 84, label: "Slack", c: "#8b5cf6" },
		{ x: 300, y: 120, label: "Discord", c: "#6366f1" },
		{ x: 300, y: 190, label: "Email", c: "#3b82f6" },
		{ x: 150, y: 216, label: "Telegram", c: "#0ea5e9" },
	];
	return (
		<>
			<Bg id="ch" from="#3b82f6" to="#8b5cf6" />
			{/* hub */}
			<circle cx="80" cy="150" r="26" className="fill-primary/80" />
			<path d="M68 144 h24 v14 l-6 -4 h-18 Z" fill="#fff" />
			{chans.map((c, i) => (
				<g key={c.label}>
					<path
						d={`M106 150 C 130 150, 130 ${c.y + 15}, ${c.x - 30} ${c.y + 15}`}
						className="stroke-primary/25"
						strokeWidth="1.5"
						fill="none"
						strokeDasharray={flow}
					/>
					<circle r="2.5" fill={c.c}>
						<animateMotion
							dur="2.2s"
							begin={`${i * 0.4}s`}
							repeatCount="indefinite"
							path={`M106 150 C 130 150, 130 ${c.y + 15}, ${c.x - 30} ${c.y + 15}`}
						/>
						<animate
							attributeName="opacity"
							values="0;1;0"
							dur="2.2s"
							begin={`${i * 0.4}s`}
							repeatCount="indefinite"
						/>
					</circle>
					<Chip x={c.x - 28} y={c.y} w={100} label={c.label} color={c.c} />
				</g>
			))}
		</>
	);
}

/* AI-enriched alert summaries */
function AlertSummary() {
	return (
		<>
			<Bg id="al" from="#8b5cf6" to="#3b82f6" />
			<Frame x={72} y={64} w={256} h={172} dots={false} />
			<circle cx="94" cy="88" r="8" className="fill-amber-400" />
			<path
				d="M94 84 v5 M94 92 v0.5"
				className="stroke-amber-800"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<text
				x="110"
				y="88"
				dominantBaseline="central"
				className="fill-foreground"
				style={{ font: "700 10px system-ui, sans-serif" }}
			>
				Alert
			</text>
			<g>
				<rect
					x="250"
					y="76"
					width="66"
					height="20"
					rx="10"
					className="fill-primary/15"
				/>
				<text
					x="283"
					y="86"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-primary"
					style={{ font: "700 9px system-ui, sans-serif" }}
				>
					AI summary
				</text>
			</g>
			{[0, 1, 2, 3].map((i) => (
				<rect
					key={i}
					x="94"
					y={116 + i * 22}
					width={i === 3 ? 130 : 210 - i * 14}
					height="7"
					rx="3.5"
					className="fill-primary/20"
				>
					<animate
						attributeName="opacity"
						values="0.2;1;0.2"
						dur="3.4s"
						begin={`${i * 0.35}s`}
						repeatCount="indefinite"
					/>
				</rect>
			))}
			<text
				x="94"
				y="216"
				dominantBaseline="central"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				cause &amp; next steps
			</text>
		</>
	);
}

/* Incident severity classification */
function Severity() {
	const levels = [
		{ label: "Critical", c: "#ef4444", w: 200 },
		{ label: "High", c: "#f59e0b", w: 160 },
		{ label: "Medium", c: "#fbbf24", w: 120 },
		{ label: "Low", c: "#10b981", w: 80 },
	];
	return (
		<>
			<Bg id="sev" from="#f87171" to="#6366f1" />
			<Frame x={60} y={58} w={280} h={184} dots={false} />
			<text
				x="80"
				y="80"
				dominantBaseline="central"
				className="fill-foreground"
				style={{ font: "700 11px system-ui, sans-serif" }}
			>
				Severity triage
			</text>
			{levels.map((l, i) => {
				const y = 108 + i * 32;
				return (
					<g key={l.label}>
						<rect x="80" y={y - 10} width="12" height="20" rx="3" fill={l.c}>
							<animate
								attributeName="opacity"
								values="0.4;1;0.4"
								dur="2.4s"
								begin={`${i * 0.25}s`}
								repeatCount="indefinite"
							/>
						</rect>
						<text
							x="102"
							y={y}
							dominantBaseline="central"
							className="fill-foreground"
							style={{ font: "600 10px system-ui, sans-serif" }}
						>
							{l.label}
						</text>
						<rect
							x="170"
							y={y - 4}
							width="150"
							height="8"
							rx="4"
							className="fill-primary/12"
						/>
						<rect
							x="170"
							y={y - 4}
							width={l.w * 0.75}
							height="8"
							rx="4"
							fill={l.c}
						/>
					</g>
				);
			})}
		</>
	);
}

/* ================= Page 9: Managed Team & Maintenance ================= */

function Avatar({ x, y, c }: { x: number; y: number; c: string }) {
	return (
		<g>
			<circle
				cx={x}
				cy={y}
				r="22"
				className="fill-card stroke-border"
				strokeWidth="1.5"
			/>
			<circle cx={x} cy={y - 6} r="7" fill={c} />
			<path d={`M${x - 12} ${y + 13} a12 9 0 0 1 24 0 Z`} fill={c} />
		</g>
	);
}

/* Dedicated AI-assisted developer */
function Developer() {
	return (
		<>
			<Bg id="dev" from="#6366f1" to="#8b5cf6" />
			<Avatar x={150} y={140} c="#6366f1" />
			{/* code window */}
			<Frame x={210} y={96} w={130} h={92} dots={false} />
			{[116, 130, 144, 158, 172].map((y, i) => (
				<rect
					key={y}
					x="224"
					y={y}
					width={i === 4 ? 60 : 100 - i * 8}
					height="6"
					rx="3"
					className="fill-primary/25"
				>
					<animate
						attributeName="opacity"
						values="0.3;1;0.3"
						dur="3s"
						begin={`${i * 0.3}s`}
						repeatCount="indefinite"
					/>
				</rect>
			))}
			{/* AI badge on avatar */}
			<circle cx="172" cy="120" r="12" className="fill-primary/80" />
			<text
				x="172"
				y="120"
				textAnchor="middle"
				dominantBaseline="central"
				fill="#fff"
				style={{ font: "800 9px system-ui, sans-serif" }}
			>
				AI
			</text>
			<line
				x1="174"
				y1="140"
				x2="208"
				y2="140"
				className="stroke-primary/30"
				strokeWidth="1.5"
				strokeDasharray={flow}
			/>
			<text
				x="180"
				y="212"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 10px system-ui, sans-serif" }}
			>
				dedicated developer
			</text>
		</>
	);
}

/* Dedicated DevOps engineer */
function DevopsEng() {
	return (
		<>
			<Bg id="doe" from="#0ea5e9" to="#6366f1" />
			<Avatar x={120} y={140} c="#0ea5e9" />
			{/* gear */}
			<g>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 120 140"
					to="360 120 140"
					dur="10s"
					repeatCount="indefinite"
				/>
				<circle
					cx="120"
					cy="140"
					r="30"
					fill="none"
					className="stroke-primary/25"
					strokeWidth="2"
					strokeDasharray="4 6"
				/>
			</g>
			{/* infra nodes managed */}
			{[
				{ x: 240, y: 106 },
				{ x: 300, y: 150 },
				{ x: 240, y: 194 },
			].map((n, i) => (
				<g key={i}>
					<line
						x1="152"
						y1="140"
						x2={n.x}
						y2={n.y}
						className="stroke-primary/25"
						strokeWidth="1.5"
						strokeDasharray={flow}
					/>
					<rect
						x={n.x - 22}
						y={n.y - 16}
						width="60"
						height="32"
						rx="8"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
					<circle cx={n.x - 10} cy={n.y} r="4" fill="#10b981">
						<animate
							attributeName="opacity"
							values="0.3;1;0.3"
							dur="1.8s"
							begin={`${i * 0.3}s`}
							repeatCount="indefinite"
						/>
					</circle>
					<rect
						x={n.x - 2}
						y={n.y - 3}
						width="30"
						height="6"
						rx="3"
						className="fill-primary/20"
					/>
				</g>
			))}
			<text
				x="120"
				y="196"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 10px system-ui, sans-serif" }}
			>
				DevOps engineer
			</text>
		</>
	);
}

/* On-demand QA testing */
function Qa() {
	return (
		<>
			<Bg id="qa" from="#10b981" to="#6366f1" />
			<Avatar x={110} y={150} c="#10b981" />
			{/* test checklist */}
			<Frame x={190} y={82} w={150} h={136} dots={false} />
			<text
				x="206"
				y="102"
				dominantBaseline="central"
				className="fill-foreground"
				style={{ font: "700 10px system-ui, sans-serif" }}
			>
				Test suite
			</text>
			{[0, 1, 2, 3].map((i) => {
				const y = 128 + i * 24;
				const fail = i === 2;
				return (
					<g key={i}>
						<rect
							x="206"
							y={y - 8}
							width="16"
							height="16"
							rx="4"
							className={
								fail
									? "fill-rose-500/15 stroke-rose-500"
									: "fill-emerald-500/15 stroke-emerald-500"
							}
							strokeWidth="1"
						/>
						{fail ? (
							<path
								d={`M210 ${y - 4} l8 8 M218 ${y - 4} l-8 8`}
								className="stroke-rose-500"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
						) : (
							<path
								d={`M210 ${y} l3 3 l5 -6`}
								stroke="#10b981"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								fill="none"
							>
								<animate
									attributeName="opacity"
									values="0;1"
									dur="0.5s"
									begin={`${i * 0.4}s`}
									fill="freeze"
								/>
							</path>
						)}
						<rect
							x="232"
							y={y - 3}
							width={92 - i * 8}
							height="6"
							rx="3"
							className="fill-primary/20"
						/>
					</g>
				);
			})}
			<text
				x="110"
				y="200"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 9px system-ui, sans-serif" }}
			>
				on-demand QA
			</text>
		</>
	);
}

/* Fully managed infrastructure hosting */
function ManagedInfra() {
	return (
		<>
			<Bg id="mi" from="#10b981" to="#3b82f6" />
			{/* shield over servers */}
			<path
				d="M200 70 l44 16 v34 c0 30 -22 48 -44 58 c-22 -10 -44 -28 -44 -58 v-34 Z"
				className="fill-emerald-500/12 stroke-emerald-500/50"
				strokeWidth="1.5"
			/>
			<path
				d="M182 128 l12 12 l24 -26"
				stroke="#10b981"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
				pathLength={1}
				strokeDasharray="1 1"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="1;0;0;1"
					dur="3.2s"
					repeatCount="indefinite"
				/>
			</path>
			{/* server rack */}
			<Frame x={140} y={188} w={120} h={54} dots={false} />
			<rect
				x="154"
				y="200"
				width="92"
				height="12"
				rx="4"
				className="fill-muted/50"
			/>
			<rect
				x="154"
				y="218"
				width="92"
				height="12"
				rx="4"
				className="fill-muted/50"
			/>
			{[0, 1, 2].map((j) => (
				<circle
					key={j}
					cx={236 - j * 12}
					cy="206"
					r="2.6"
					fill={j === 0 ? "#10b981" : "#3b82f6"}
				>
					<animate
						attributeName="opacity"
						values="0.3;1;0.3"
						dur="1.6s"
						begin={`${j * 0.25}s`}
						repeatCount="indefinite"
					/>
				</circle>
			))}
			<text
				x="200"
				y="262"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 10px system-ui, sans-serif" }}
			>
				fully managed hosting
			</text>
		</>
	);
}

/* ================= Page 10: Weekly Code Review ================= */

/* Automated weekly code review */
function CodeReview() {
	return (
		<>
			<Bg id="cr" from="#8b5cf6" to="#6366f1" />
			{/* calendar */}
			<Frame x={64} y={70} w={120} h={120} dots={false} />
			<rect
				x="64"
				y="70"
				width="120"
				height="26"
				rx="12"
				className="fill-primary/20"
			/>
			<text
				x="124"
				y="83"
				textAnchor="middle"
				dominantBaseline="central"
				className="fill-primary"
				style={{ font: "700 10px system-ui, sans-serif" }}
			>
				Weekly
			</text>
			{[0, 1, 2].map((r) =>
				[0, 1, 2, 3].map((c) => {
					const active = r === 1 && c === 2;
					return (
						<rect
							key={`${r}-${c}`}
							x={78 + c * 26}
							y={108 + r * 26}
							width="18"
							height="18"
							rx="4"
							fill={active ? "#8b5cf6" : undefined}
							className={active ? undefined : "fill-muted/50"}
						>
							{active && (
								<animate
									attributeName="opacity"
									values="0.5;1;0.5"
									dur="2s"
									repeatCount="indefinite"
								/>
							)}
						</rect>
					);
				}),
			)}
			{/* scan into code */}
			<line
				x1="184"
				y1="150"
				x2="216"
				y2="150"
				className="stroke-primary/30"
				strokeWidth="1.5"
				strokeDasharray={flow}
			/>
			<Frame x={220} y={82} w={116} h={136} dots={false} />
			{[104, 120, 136, 152, 168, 184].map((y, i) => (
				<rect
					key={y}
					x="234"
					y={y}
					width={i % 2 === 0 ? 88 : 64}
					height="6"
					rx="3"
					className="fill-primary/25"
				/>
			))}
			<rect
				x="220"
				y="96"
				width="116"
				height="18"
				fill="none"
				className="stroke-primary"
				strokeWidth="1.5"
			>
				<animate
					attributeName="y"
					values="96;188;96"
					dur="3s"
					repeatCount="indefinite"
				/>
			</rect>
		</>
	);
}

/* Security vulnerability scanning */
function Security() {
	return (
		<>
			<Bg id="sec" from="#f87171" to="#6366f1" />
			<path
				d="M200 66 l48 18 v36 c0 32 -24 52 -48 62 c-24 -10 -48 -30 -48 -62 v-36 Z"
				className="fill-card stroke-border"
				strokeWidth="1.5"
			/>
			{/* scan sweep */}
			<clipPath id="sec-clip">
				<path d="M200 66 l48 18 v36 c0 32 -24 52 -48 62 c-24 -10 -48 -30 -48 -62 v-36 Z" />
			</clipPath>
			<g clipPath="url(#sec-clip)">
				<rect x="152" y="66" width="96" height="8" className="fill-primary/50">
					<animate
						attributeName="y"
						values="66;176;66"
						dur="3s"
						repeatCount="indefinite"
					/>
				</rect>
			</g>
			{/* vuln markers */}
			{[
				{ x: 184, y: 116, c: "#f87171" },
				{ x: 216, y: 140, c: "#fbbf24" },
			].map((v, i) => (
				<circle key={i} cx={v.x} cy={v.y} r="5" fill={v.c}>
					<animate
						attributeName="opacity"
						values="0.3;1;0.3"
						dur="1.6s"
						begin={`${i * 0.4}s`}
						repeatCount="indefinite"
					/>
				</circle>
			))}
			<text
				x="200"
				y="212"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 10px system-ui, sans-serif" }}
			>
				vulnerability scan
			</text>
		</>
	);
}

/* Code smell & technical debt detection */
function CodeSmell() {
	return (
		<>
			<Bg id="cs" from="#f59e0b" to="#6366f1" />
			<Frame x={64} y={56} w={272} h={188} />
			{[
				{ w: 180, warn: false },
				{ w: 120, warn: true },
				{ w: 210, warn: false },
				{ w: 90, warn: true },
				{ w: 160, warn: false },
			].map((l, i) => {
				const y = 100 + i * 26;
				return (
					<g key={y}>
						<text
							x="82"
							y={y}
							dominantBaseline="central"
							className="fill-muted-foreground/60"
							style={{ font: "600 8px system-ui, sans-serif" }}
						>
							{i + 1}
						</text>
						{l.warn && (
							<rect
								x="96"
								y={y - 11}
								width="228"
								height="22"
								rx="5"
								className="fill-amber-400/15"
							/>
						)}
						<rect
							x="100"
							y={y - 3}
							width={l.w}
							height="6"
							rx="3"
							fill={l.warn ? "#f59e0b" : undefined}
							className={l.warn ? undefined : "fill-primary/20"}
						/>
						{l.warn && (
							<g>
								<path
									d={`M312 ${y - 7} l7 12 h-14 Z`}
									className="fill-amber-500"
								/>
								<rect
									x={318}
									y={y - 3}
									width="1.5"
									height="4"
									className="fill-amber-900"
								/>
							</g>
						)}
					</g>
				);
			})}
			<g>
				<rect
					x="82"
					y="212"
					width="120"
					height="22"
					rx="11"
					className="fill-amber-400/15 stroke-amber-500/40"
					strokeWidth="1"
				/>
				<text
					x="142"
					y="223"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-amber-600 dark:fill-amber-400"
					style={{ font: "700 9px system-ui, sans-serif" }}
				>
					tech debt found
				</text>
			</g>
		</>
	);
}

/* Review summary report */
function Report() {
	return (
		<>
			<Bg id="rep" from="#6366f1" to="#10b981" />
			<Frame x={72} y={54} w={256} h={192} dots={false} />
			<text
				x="92"
				y="76"
				dominantBaseline="central"
				className="fill-foreground"
				style={{ font: "700 11px system-ui, sans-serif" }}
			>
				Weekly digest
			</text>
			{/* health score ring */}
			<circle
				cx="120"
				cy="140"
				r="30"
				className="stroke-primary/15"
				strokeWidth="8"
				fill="none"
			/>
			<circle
				cx="120"
				cy="140"
				r="30"
				className="stroke-emerald-500"
				strokeWidth="8"
				fill="none"
				strokeLinecap="round"
				pathLength={1}
				strokeDasharray="1 1"
				transform="rotate(-90 120 140)"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="1;0.18"
					dur="2s"
					fill="freeze"
				/>
			</circle>
			<text
				x="120"
				y="140"
				textAnchor="middle"
				dominantBaseline="central"
				className="fill-foreground"
				style={{ font: "800 15px system-ui, sans-serif" }}
			>
				82
			</text>
			{/* stats + trend */}
			{[0, 1, 2].map((i) => (
				<g key={i}>
					<circle
						cx="180"
						cy={110 + i * 22}
						r="4"
						fill={["#f87171", "#10b981", "#3b82f6"][i]}
					/>
					<rect
						x="192"
						y={106 + i * 22}
						width="110"
						height="6"
						rx="3"
						className="fill-primary/20"
					/>
				</g>
			))}
			<path
				d="M180 196 L210 188 L240 192 L270 176 L300 168"
				stroke="#10b981"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
				pathLength={1}
				strokeDasharray="1 1"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="1;0"
					dur="2.4s"
					repeatCount="indefinite"
				/>
			</path>
		</>
	);
}

/* ================= Page 11: Platform, Security & Access ================= */

/* Role-based access control */
function Rbac() {
	const roles = [
		{ x: 120, label: "Owner", c: "#8b5cf6" },
		{ x: 200, label: "Admin", c: "#3b82f6" },
		{ x: 280, label: "Member", c: "#10b981" },
	];
	return (
		<>
			<Bg id="rbac" from="#6366f1" to="#8b5cf6" />
			<circle cx="200" cy="80" r="18" className="fill-primary/80" />
			<path
				d="M191 80 l6 6 l11 -12"
				stroke="#fff"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
			<text
				x="200"
				y="110"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 8px system-ui, sans-serif" }}
			>
				organization
			</text>
			{roles.map((r) => (
				<g key={r.label}>
					<line
						x1="200"
						y1="98"
						x2={r.x}
						y2="150"
						className="stroke-primary/25"
						strokeWidth="1.5"
					/>
					<rect
						x={r.x - 40}
						y="150"
						width="80"
						height="60"
						rx="10"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
					<circle cx={r.x} cy="172" r="8" fill={r.c} />
					<path d={`M${r.x - 12} 196 a12 8 0 0 1 24 0 Z`} fill={r.c} />
					<text
						x={r.x}
						y="220"
						textAnchor="middle"
						className="fill-foreground"
						style={{ font: "600 10px system-ui, sans-serif" }}
					>
						{r.label}
					</text>
				</g>
			))}
		</>
	);
}

/* SSO & enterprise authentication */
function Sso() {
	return (
		<>
			<Bg id="sso" from="#3b82f6" to="#6366f1" />
			{/* providers */}
			{[
				{ y: 100, label: "SSO", c: "#8b5cf6" },
				{ y: 150, label: "SAML", c: "#3b82f6" },
				{ y: 200, label: "OAuth", c: "#10b981" },
			].map((p, i) => (
				<g key={p.label}>
					<Chip x={48} y={p.y - 15} w={92} label={p.label} color={p.c} />
					<line
						x1="140"
						y1={p.y}
						x2="196"
						y2="150"
						className="stroke-primary/25"
						strokeWidth="1.5"
						strokeDasharray={flow}
					/>
					<circle r="2.5" fill={p.c}>
						<animateMotion
							dur="2s"
							begin={`${i * 0.4}s`}
							repeatCount="indefinite"
							path={`M140 ${p.y} L196 150`}
						/>
						<animate
							attributeName="opacity"
							values="0;1;0"
							dur="2s"
							begin={`${i * 0.4}s`}
							repeatCount="indefinite"
						/>
					</circle>
				</g>
			))}
			{/* lock */}
			<circle
				cx="240"
				cy="150"
				r="40"
				className="fill-primary/12 stroke-primary/40"
				strokeWidth="1.5"
			/>
			<path
				d="M228 148 v-8 a12 12 0 0 1 24 0 v8"
				fill="none"
				className="stroke-primary"
				strokeWidth="3"
			/>
			<rect
				x="224"
				y="148"
				width="32"
				height="26"
				rx="5"
				className="fill-primary/80"
			/>
			<circle cx="240" cy="160" r="3.5" fill="#fff" />
			<text
				x="300"
				y="150"
				dominantBaseline="central"
				className="fill-muted-foreground"
				style={{ font: "600 10px system-ui, sans-serif" }}
			>
				single
			</text>
			<text
				x="300"
				y="166"
				dominantBaseline="central"
				className="fill-muted-foreground"
				style={{ font: "600 10px system-ui, sans-serif" }}
			>
				sign-on
			</text>
		</>
	);
}

/* Audit logging */
function Audit() {
	return (
		<>
			<Bg id="aud" from="#6366f1" to="#3b82f6" />
			<Frame x={64} y={54} w={272} h={192} dots={false} />
			<text
				x="84"
				y="76"
				dominantBaseline="central"
				className="fill-foreground"
				style={{ font: "700 10px system-ui, sans-serif" }}
			>
				Audit trail
			</text>
			{[0, 1, 2, 3, 4].map((i) => {
				const y = 104 + i * 28;
				return (
					<g key={i}>
						<circle cx="88" cy={y} r="4" className="fill-primary" />
						{i < 4 && (
							<line
								x1="88"
								y1={y + 4}
								x2="88"
								y2={y + 24}
								className="stroke-border"
								strokeWidth="1.5"
							/>
						)}
						<rect
							x="104"
							y={y - 8}
							width="180"
							height="18"
							rx="5"
							className="fill-muted/40"
						/>
						<rect
							x="112"
							y={y - 3}
							width="70"
							height="5"
							rx="2.5"
							fill={["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"][i]}
						/>
						<rect
							x="188"
							y={y - 3}
							width="60"
							height="5"
							rx="2.5"
							className="fill-primary/15"
						/>
						<g transform={`translate(300 ${y})`}>
							<rect
								x="0"
								y="-6"
								width="20"
								height="12"
								rx="3"
								className="fill-emerald-500/15"
							/>
							<path
								d="M4 0 l3 3 l6 -7"
								stroke="#10b981"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								fill="none"
							/>
						</g>
					</g>
				);
			})}
		</>
	);
}

/* One-click template deployment */
function Templates() {
	const tps = [
		{ label: "WordPress", c: "#3b82f6" },
		{ label: "Ghost", c: "#8b5cf6" },
		{ label: "n8n", c: "#f87171" },
		{ label: "Redis", c: "#10b981" },
		{ label: "Postgres", c: "#6366f1" },
		{ label: "Metabase", c: "#f59e0b" },
	];
	return (
		<>
			<Bg id="tpl" from="#8b5cf6" to="#3b82f6" />
			{tps.map((t, i) => {
				const col = i % 3;
				const row = Math.floor(i / 3);
				const x = 66 + col * 96;
				const y = 84 + row * 84;
				return (
					<g key={t.label}>
						<rect
							x={x}
							y={y}
							width="80"
							height="68"
							rx="12"
							className="fill-card stroke-border"
							strokeWidth="1.5"
						>
							<animate
								attributeName="opacity"
								values="0.5;1;0.5"
								dur="3.4s"
								begin={`${i * 0.2}s`}
								repeatCount="indefinite"
							/>
						</rect>
						<rect
							x={x + 14}
							y={y + 12}
							width="52"
							height="20"
							rx="6"
							fill={t.c}
						/>
						<text
							x={x + 40}
							y={y + 48}
							textAnchor="middle"
							dominantBaseline="central"
							className="fill-foreground"
							style={{ font: "600 9px system-ui, sans-serif" }}
						>
							{t.label}
						</text>
					</g>
				);
			})}
		</>
	);
}

/* Scheduling & automation (cron) */
function Cron() {
	return (
		<>
			<Bg id="cron" from="#3b82f6" to="#10b981" />
			<circle
				cx="140"
				cy="150"
				r="52"
				className="fill-card stroke-border"
				strokeWidth="1.5"
			/>
			<circle
				cx="140"
				cy="150"
				r="52"
				fill="none"
				className="stroke-primary/30"
				strokeWidth="2"
				strokeDasharray="2 6"
			/>
			{[0, 90, 180, 270].map((a) => (
				<line
					key={a}
					x1="140"
					y1="106"
					x2="140"
					y2="112"
					className="stroke-muted-foreground"
					strokeWidth="2"
					transform={`rotate(${a} 140 150)`}
				/>
			))}
			<line
				x1="140"
				y1="150"
				x2="140"
				y2="118"
				className="stroke-foreground"
				strokeWidth="2.5"
				strokeLinecap="round"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 140 150"
					to="360 140 150"
					dur="8s"
					repeatCount="indefinite"
				/>
			</line>
			<line
				x1="140"
				y1="150"
				x2="166"
				y2="150"
				className="stroke-primary"
				strokeWidth="2.5"
				strokeLinecap="round"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 140 150"
					to="360 140 150"
					dur="2s"
					repeatCount="indefinite"
				/>
			</line>
			<circle cx="140" cy="150" r="4" className="fill-foreground" />
			{/* tasks firing */}
			{[110, 150, 190].map((y, i) => (
				<g key={y}>
					<rect
						x="228"
						y={y - 14}
						width="112"
						height="28"
						rx="8"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
					<circle cx="244" cy={y} r="4" fill="#10b981">
						<animate
							attributeName="opacity"
							values="0.2;1;0.2"
							dur="2.4s"
							begin={`${i * 0.8}s`}
							repeatCount="indefinite"
						/>
					</circle>
					<rect
						x="256"
						y={y - 3}
						width="72"
						height="6"
						rx="3"
						className="fill-primary/20"
					/>
				</g>
			))}
		</>
	);
}

/* MCP server integration */
function Mcp() {
	return (
		<>
			<Bg id="mcp" from="#6366f1" to="#8b5cf6" />
			{/* central MCP core */}
			<circle cx="200" cy="150" r="34" className="fill-primary/15">
				<animate
					attributeName="r"
					values="32;38;32"
					dur="3s"
					repeatCount="indefinite"
				/>
			</circle>
			<circle cx="200" cy="150" r="26" className="fill-primary/80" />
			<text
				x="200"
				y="150"
				textAnchor="middle"
				dominantBaseline="central"
				fill="#fff"
				style={{ font: "800 12px system-ui, sans-serif" }}
			>
				MCP
			</text>
			{/* tool nodes around */}
			{Array.from({ length: 8 }).map((_, i) => {
				const ang = (i / 8) * Math.PI * 2;
				const x = 200 + Math.cos(ang) * 96;
				const y = 150 + Math.sin(ang) * 84;
				return (
					<g key={i}>
						<line
							x1="200"
							y1="150"
							x2={x}
							y2={y}
							className="stroke-primary/25"
							strokeWidth="1.5"
							strokeDasharray={flow}
						/>
						<rect
							x={x - 12}
							y={y - 12}
							width="24"
							height="24"
							rx="6"
							className="fill-card stroke-border"
							strokeWidth="1.5"
						/>
						<rect
							x={x - 6}
							y={y - 6}
							width="12"
							height="12"
							rx="3"
							fill={["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"][i % 4]}
						>
							<animate
								attributeName="opacity"
								values="0.4;1;0.4"
								dur="2.6s"
								begin={`${i * 0.2}s`}
								repeatCount="indefinite"
							/>
						</rect>
					</g>
				);
			})}
			<g>
				<rect
					x="150"
					y="228"
					width="100"
					height="22"
					rx="11"
					className="fill-primary/15 stroke-primary/40"
					strokeWidth="1"
				/>
				<text
					x="200"
					y="239"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-primary"
					style={{ font: "700 9px system-ui, sans-serif" }}
				>
					508 tools
				</text>
			</g>
		</>
	);
}
