import type { SolutionGraphicName } from "./solution-types";

type SolutionStackGraphicProps = {
	name: SolutionGraphicName;
	label?: string;
	className?: string;
};

const labels: Record<SolutionGraphicName, string> = {
	apps: "Unlimited managed applications deployed across your product surface",
	infrastructure: "Dedicated cloud infrastructure on AWS, GCP or Azure",
	aiops: "Complete AI DevOps suite with monitoring and incident routing",
	team: "Dedicated platform team of developer, DevOps and QA engineers",
	sla: "SLA-backed uptime, onboarding and custom integrations",
	enterprise:
		"Sagyboar platform connecting your cloud, servers, team and monitoring",
	ops: "Managed ops command center handling incidents automatically",
	scale: "Scale your product without hiring a full DevOps team",
	fiveApps: "Run up to five managed applications from one platform",
	deploy: "One-click deployments with automated builds and rollbacks",
	monitoring: "Advanced AI monitoring with anomaly detection and alerts",
	aiEngineer: "AI-assisted engineering for fixes, deployments and tasks",
	support: "On-demand DevOps and support over email and chat",
	noPayroll: "A full DevOps team without the payroll",
	sideProject: "Deploy your side projects without the DevOps headache",
	oneApp: "One fully managed application with SSL and a custom domain",
	managedHosting: "Managed hosting so you build while we run the servers",
	uptime: "Round-the-clock AI monitoring with uptime alerts",
	tickets: "Automated issue tickets opened straight in your repo",
	database: "Managed database, storage and community support",
	quickShip: "Ship your side project in minutes, not weekends",
};

export function SolutionStackGraphic({
	name,
	label,
	className,
}: SolutionStackGraphicProps) {
	return (
		<svg
			viewBox="0 0 400 300"
			fill="none"
			role="img"
			aria-label={label ?? labels[name]}
			preserveAspectRatio="xMidYMid slice"
			className={["absolute inset-0 h-full w-full", className]
				.filter(Boolean)
				.join(" ")}
		>
			{name === "apps" && <AppsGraphic />}
			{name === "infrastructure" && <InfrastructureGraphic />}
			{name === "aiops" && <AiOpsGraphic />}
			{name === "team" && <TeamGraphic />}
			{name === "sla" && <SlaGraphic />}
			{name === "enterprise" && <EnterpriseGraphic />}
			{name === "ops" && <OpsGraphic />}
			{name === "scale" && <ScaleGraphic />}
			{name === "fiveApps" && <FiveAppsGraphic />}
			{name === "deploy" && <DeployGraphic />}
			{name === "monitoring" && <MonitoringGraphic />}
			{name === "aiEngineer" && <AiEngineerGraphic />}
			{name === "support" && <SupportGraphic />}
			{name === "noPayroll" && <NoPayrollGraphic />}
			{name === "sideProject" && <SideProjectGraphic />}
			{name === "oneApp" && <OneAppGraphic />}
			{name === "managedHosting" && <ManagedHostingGraphic />}
			{name === "uptime" && <UptimeGraphic />}
			{name === "tickets" && <TicketsGraphic />}
			{name === "database" && <DatabaseGraphic />}
			{name === "quickShip" && <QuickShipGraphic />}
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

/* 1. Unlimited applications — a grid of managed app tiles scaling in */
function AppsGraphic() {
	const cols = 4;
	const rows = 3;
	const tileW = 60;
	const tileH = 48;
	const gapX = 14;
	const gapY = 16;
	const gridW = cols * tileW + (cols - 1) * gapX;
	const gridH = rows * tileH + (rows - 1) * gapY;
	const startX = (400 - gridW) / 2;
	const startY = (300 - gridH) / 2 + 6;
	const accents = ["#3b82f6", "#8b5cf6", "#10b981"];

	const tiles = [];
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const i = r * cols + c;
			tiles.push({
				x: startX + c * (tileW + gapX),
				y: startY + r * (tileH + gapY),
				accent: accents[i % accents.length],
				delay: (r + c) * 0.16,
			});
		}
	}

	return (
		<>
			<BackgroundLayer id="apps" from="#3b82f6" to="#8b5cf6" />

			{tiles.map((t) => (
				<g key={`${t.x}-${t.y}`}>
					<rect
						x={t.x}
						y={t.y}
						width={tileW}
						height={tileH}
						rx="8"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					>
						<animate
							attributeName="opacity"
							values="0.45;1;0.45"
							dur="3.6s"
							begin={`${t.delay}s`}
							repeatCount="indefinite"
						/>
					</rect>
					{/* app icon glyph */}
					<rect
						x={t.x + 10}
						y={t.y + 10}
						width="14"
						height="14"
						rx="4"
						fill={t.accent}
					>
						<animate
							attributeName="opacity"
							values="0.5;1;0.5"
							dur="3.6s"
							begin={`${t.delay}s`}
							repeatCount="indefinite"
						/>
					</rect>
					{/* status dot */}
					<circle cx={t.x + tileW - 12} cy={t.y + 15} r="3" fill="#10b981">
						<animate
							attributeName="opacity"
							values="0.2;1;0.2"
							dur="2.2s"
							begin={`${t.delay}s`}
							repeatCount="indefinite"
						/>
					</circle>
					{/* content lines */}
					<rect
						x={t.x + 10}
						y={t.y + 30}
						width={tileW - 20}
						height="4"
						rx="2"
						className="fill-primary/25"
					/>
					<rect
						x={t.x + 10}
						y={t.y + 38}
						width={tileW - 30}
						height="4"
						rx="2"
						className="fill-primary/15"
					/>
				</g>
			))}

			{/* unlimited badge */}
			<g>
				<rect
					x="168"
					y="16"
					width="64"
					height="24"
					rx="12"
					className="fill-primary/15 stroke-primary/40"
					strokeWidth="1"
				/>
				<text
					x="200"
					y="28"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-primary"
					style={{ font: "700 13px system-ui, sans-serif" }}
				>
					∞ apps
				</text>
			</g>
		</>
	);
}

/* 2. Dedicated infrastructure — cloud feeding a stack of dedicated servers */
function InfrastructureGraphic() {
	const units = [110, 162, 214];
	const rackX = 130;
	const rackW = 140;

	return (
		<>
			<BackgroundLayer id="infra" from="#0ea5e9" to="#6366f1" />
			<defs>
				<linearGradient id="infra-cloud" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#60a5fa" />
					<stop offset="100%" stopColor="#6366f1" />
				</linearGradient>
			</defs>

			{/* cloud provider chip */}
			<g>
				<path
					d="M175 58 a18 18 0 0 1 34 -6 a15 15 0 0 1 20 14 a13 13 0 0 1 -3 25 h-52 a15 15 0 0 1 1 -33 Z"
					fill="url(#infra-cloud)"
					opacity="0.9"
				/>
				<text
					x="200"
					y="60"
					textAnchor="middle"
					dominantBaseline="central"
					fill="#ffffff"
					style={{ font: "700 10px system-ui, sans-serif" }}
				>
					cloud
				</text>
			</g>

			{/* connector cloud -> rack with flowing dots */}
			<line
				x1="200"
				y1="84"
				x2="200"
				y2="110"
				className="stroke-primary/40"
				strokeWidth="1.5"
				strokeDasharray="3 4"
			/>
			{[0, 1].map((k) => (
				<circle key={k} cx="200" r="2.5" fill="#3b82f6">
					<animate
						attributeName="cy"
						values="84;110"
						dur="1.6s"
						begin={`${k * 0.8}s`}
						repeatCount="indefinite"
					/>
					<animate
						attributeName="opacity"
						values="0;1;0"
						dur="1.6s"
						begin={`${k * 0.8}s`}
						repeatCount="indefinite"
					/>
				</circle>
			))}

			{/* server units */}
			{units.map((y, i) => (
				<g key={y}>
					<rect
						x={rackX}
						y={y}
						width={rackW}
						height="40"
						rx="8"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
					{/* accent bar */}
					<rect
						x={rackX + 10}
						y={y + 10}
						width="6"
						height="20"
						rx="3"
						fill="#6366f1"
					/>
					{/* slot lines */}
					<rect
						x={rackX + 26}
						y={y + 14}
						width="54"
						height="4"
						rx="2"
						className="fill-primary/20"
					/>
					<rect
						x={rackX + 26}
						y={y + 24}
						width="38"
						height="4"
						rx="2"
						className="fill-primary/15"
					/>
					{/* LEDs */}
					{[0, 1, 2].map((j) => (
						<circle
							key={j}
							cx={rackX + rackW - 18 - j * 12}
							cy={y + 20}
							r="3"
							fill={j === 0 ? "#10b981" : j === 1 ? "#fbbf24" : "#3b82f6"}
						>
							<animate
								attributeName="opacity"
								values="0.25;1;0.25"
								dur="1.8s"
								begin={`${i * 0.3 + j * 0.25}s`}
								repeatCount="indefinite"
							/>
						</circle>
					))}
				</g>
			))}

			{/* dedicated label */}
			<text
				x="200"
				y="276"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 11px system-ui, sans-serif" }}
			>
				AWS · GCP · Azure
			</text>
		</>
	);
}

/* 3. Complete AI DevOps suite — monitoring waveform routing incidents to an AI core */
function AiOpsGraphic() {
	const coreX = 300;
	const coreY = 150;
	const severities = [
		{ y: 96, color: "#10b981", label: "low" },
		{ y: 150, color: "#fbbf24", label: "med" },
		{ y: 204, color: "#f87171", label: "high" },
	];

	return (
		<>
			<BackgroundLayer id="aiops" from="#6366f1" to="#8b5cf6" />
			<defs>
				<linearGradient id="aiops-core" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#8b5cf6" />
					<stop offset="100%" stopColor="#6366f1" />
				</linearGradient>
			</defs>

			{/* incident chips routing into the core */}
			{severities.map((s, i) => (
				<g key={s.label}>
					<rect
						x="56"
						y={s.y - 14}
						width="86"
						height="28"
						rx="8"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
					<circle cx="72" cy={s.y} r="5" fill={s.color}>
						<animate
							attributeName="opacity"
							values="0.35;1;0.35"
							dur="1.8s"
							begin={`${i * 0.3}s`}
							repeatCount="indefinite"
						/>
					</circle>
					<rect
						x="84"
						y={s.y - 5}
						width="44"
						height="4"
						rx="2"
						className="fill-primary/30"
					/>
					<rect
						x="84"
						y={s.y + 3}
						width="30"
						height="4"
						rx="2"
						className="fill-primary/15"
					/>

					{/* routing path chip -> core */}
					<path
						d={`M142 ${s.y} Q ${(142 + coreX) / 2} ${s.y} ${coreX - 34} ${coreY + (s.y - coreY) * 0.25}`}
						className="stroke-primary/30"
						strokeWidth="1.5"
						fill="none"
						strokeDasharray="3 4"
					/>
					<circle r="3" fill={s.color}>
						<animateMotion
							dur="2.2s"
							begin={`${i * 0.5}s`}
							repeatCount="indefinite"
							path={`M142 ${s.y} Q ${(142 + coreX) / 2} ${s.y} ${coreX - 34} ${coreY + (s.y - coreY) * 0.25}`}
						/>
						<animate
							attributeName="opacity"
							values="0;1;1;0"
							dur="2.2s"
							begin={`${i * 0.5}s`}
							repeatCount="indefinite"
						/>
					</circle>
				</g>
			))}

			{/* AI core */}
			<circle
				cx={coreX}
				cy={coreY}
				r="34"
				fill="url(#aiops-core)"
				opacity="0.18"
			>
				<animate
					attributeName="r"
					values="32;38;32"
					dur="3s"
					repeatCount="indefinite"
				/>
			</circle>
			<circle
				cx={coreX}
				cy={coreY}
				r="26"
				fill="url(#aiops-core)"
				className="stroke-primary/50"
				strokeWidth="1.5"
			/>
			<text
				x={coreX}
				y={coreY}
				textAnchor="middle"
				dominantBaseline="central"
				fill="#ffffff"
				style={{ font: "800 13px system-ui, sans-serif" }}
			>
				AI
			</text>

			{/* monitoring waveform along the bottom */}
			<path
				d="M56 258 L88 258 L100 240 L112 268 L124 250 L140 258 L344 258"
				className="stroke-primary/25"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M56 258 L88 258 L100 240 L112 268 L124 250 L140 258 L344 258"
				stroke="#8b5cf6"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				pathLength={1}
				strokeDasharray="0.16 0.84"
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

/* 4. Dedicated platform team — role nodes orbiting a shared project core */
function TeamGraphic() {
	const coreX = 200;
	const coreY = 176;
	const roles = [
		{ x: 116, y: 96, color: "#3b82f6", label: "Dev", delay: "0s" },
		{ x: 200, y: 74, color: "#8b5cf6", label: "DevOps", delay: "0.6s" },
		{ x: 284, y: 96, color: "#10b981", label: "QA", delay: "1.2s" },
	];

	return (
		<>
			<BackgroundLayer id="team" from="#3b82f6" to="#10b981" />
			<defs>
				<linearGradient id="team-core" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#6366f1" />
					<stop offset="100%" stopColor="#8b5cf6" />
				</linearGradient>
			</defs>

			{/* connectors */}
			{roles.map((role, i) => (
				<g key={role.label}>
					<line
						x1={role.x}
						y1={role.y + 18}
						x2={coreX}
						y2={coreY}
						className="stroke-primary/30"
						strokeWidth="1.5"
						strokeDasharray="3 4"
					/>
					<circle r="2.5" fill={role.color}>
						<animateMotion
							dur="2.4s"
							begin={role.delay}
							repeatCount="indefinite"
							path={`M${role.x} ${role.y + 18} L${coreX} ${coreY}`}
						/>
						<animate
							attributeName="opacity"
							values="0;1;0"
							dur="2.4s"
							begin={role.delay}
							repeatCount="indefinite"
						/>
					</circle>
				</g>
			))}

			{/* role avatars */}
			{roles.map((role) => (
				<g key={`av-${role.label}`}>
					<circle
						cx={role.x}
						cy={role.y}
						r="22"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					>
						<animate
							attributeName="opacity"
							values="0.6;1;0.6"
							dur="3.4s"
							begin={role.delay}
							repeatCount="indefinite"
						/>
					</circle>
					{/* head + shoulders */}
					<circle cx={role.x} cy={role.y - 5} r="6" fill={role.color} />
					<path
						d={`M${role.x - 10} ${role.y + 11} a10 8 0 0 1 20 0 Z`}
						fill={role.color}
					/>
					{/* role label */}
					<rect
						x={role.x - 26}
						y={role.y + 26}
						width="52"
						height="16"
						rx="8"
						className="fill-primary/10"
					/>
					<text
						x={role.x}
						y={role.y + 34}
						textAnchor="middle"
						dominantBaseline="central"
						className="fill-foreground"
						style={{ font: "600 9px system-ui, sans-serif" }}
					>
						{role.label}
					</text>
				</g>
			))}

			{/* project core */}
			<circle
				cx={coreX}
				cy={coreY}
				r="30"
				fill="url(#team-core)"
				opacity="0.18"
			>
				<animate
					attributeName="r"
					values="28;34;28"
					dur="3s"
					repeatCount="indefinite"
				/>
			</circle>
			<circle
				cx={coreX}
				cy={coreY}
				r="24"
				fill="url(#team-core)"
				className="stroke-primary/50"
				strokeWidth="1.5"
			/>
			<text
				x={coreX}
				y={coreY}
				textAnchor="middle"
				dominantBaseline="central"
				fill="#ffffff"
				style={{ font: "700 10px system-ui, sans-serif" }}
			>
				your app
			</text>

			{/* on-demand label */}
			<text
				x="200"
				y="248"
				textAnchor="middle"
				className="fill-muted-foreground"
				style={{ font: "600 11px system-ui, sans-serif" }}
			>
				Developer · DevOps · QA on demand
			</text>
		</>
	);
}

/* 5. SLA, onboarding & integrations — an uptime gauge filling to 99.9% */
function SlaGraphic() {
	const cx = 148;
	const cy = 150;
	const r = 66;
	// 270deg arc, gap centered at the bottom (r * sin45 = 46.67)

	return (
		<>
			<BackgroundLayer id="sla" from="#10b981" to="#3b82f6" />
			<defs>
				<linearGradient id="sla-arc" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#10b981" />
					<stop offset="100%" stopColor="#22c55e" />
				</linearGradient>
			</defs>

			{/* gauge track */}
			<path
				d={`M${cx - 46.67} ${cy + 46.67} A${r} ${r} 0 1 0 ${cx + 46.67} ${cy + 46.67}`}
				className="stroke-primary/15"
				strokeWidth="12"
				strokeLinecap="round"
				fill="none"
			/>
			{/* gauge value ~99.9% */}
			<path
				d={`M${cx - 46.67} ${cy + 46.67} A${r} ${r} 0 1 0 ${cx + 46.67} ${cy + 46.67}`}
				stroke="url(#sla-arc)"
				strokeWidth="12"
				strokeLinecap="round"
				fill="none"
				pathLength={1}
				strokeDasharray="1 1"
			>
				<animate
					attributeName="stroke-dashoffset"
					values="1;0.001"
					dur="2.4s"
					fill="freeze"
					repeatCount="1"
				/>
				<animate
					attributeName="stroke-dashoffset"
					values="0.02;0.001;0.02"
					dur="3s"
					begin="2.4s"
					repeatCount="indefinite"
				/>
			</path>

			{/* gauge readout */}
			<text
				x={cx}
				y={cy - 4}
				textAnchor="middle"
				dominantBaseline="central"
				className="fill-foreground"
				style={{ font: "800 26px system-ui, sans-serif" }}
			>
				99.9%
			</text>
			<text
				x={cx}
				y={cy + 20}
				textAnchor="middle"
				dominantBaseline="central"
				className="fill-muted-foreground"
				style={{ font: "700 10px system-ui, sans-serif", letterSpacing: "2px" }}
			>
				UPTIME
			</text>

			{/* shield + check (SLA guarantee) */}
			<g>
				<path
					d="M300 78 l26 9 v20 c0 17 -12 27 -26 33 c-14 -6 -26 -16 -26 -33 v-20 Z"
					className="fill-card stroke-border"
					strokeWidth="1.5"
				/>
				<path
					d="M289 111 l7 7 l14 -15"
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
			</g>

			{/* integration nodes */}
			{[
				{ x: 268, y: 186, d: "0s" },
				{ x: 300, y: 200, d: "0.4s" },
				{ x: 332, y: 186, d: "0.8s" },
			].map((n) => (
				<g key={n.x}>
					<line
						x1="300"
						y1="172"
						x2={n.x}
						y2={n.y}
						className="stroke-primary/25"
						strokeWidth="1.5"
						strokeDasharray="2 3"
					/>
					<circle
						cx={n.x}
						cy={n.y}
						r="7"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
					<circle cx={n.x} cy={n.y} r="3" fill="#3b82f6">
						<animate
							attributeName="opacity"
							values="0.3;1;0.3"
							dur="2s"
							begin={n.d}
							repeatCount="indefinite"
						/>
					</circle>
				</g>
			))}
			{/* central integration hub */}
			<circle
				cx="300"
				cy="172"
				r="6"
				fill="url(#sla-arc)"
				className="stroke-primary/40"
				strokeWidth="1"
			/>

			{/* response-time chip */}
			<g>
				<rect
					x="256"
					y="222"
					width="88"
					height="22"
					rx="11"
					className="fill-primary/10 stroke-primary/30"
					strokeWidth="1"
				/>
				<text
					x="300"
					y="233"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-primary"
					style={{ font: "700 10px system-ui, sans-serif" }}
				>
					4h response
				</text>
			</g>
		</>
	);
}

/* Hero — the Sagyboar platform hub linking cloud, servers, team & monitoring */
function EnterpriseGraphic() {
	const cx = 200;
	const cy = 150;
	const hex = "200,110 234.6,130 234.6,170 200,190 165.4,170 165.4,130";
	const nodes = [
		{ x: 152, y: 34, w: 96, h: 38, label: "Your cloud", color: "#3b82f6" },
		{ x: 296, y: 126, w: 76, h: 48, label: "Servers", color: "#6366f1" },
		{ x: 28, y: 126, w: 76, h: 48, label: "Monitoring", color: "#8b5cf6" },
		{
			x: 150,
			y: 224,
			w: 100,
			h: 38,
			label: "Platform team",
			color: "#10b981",
		},
	];
	// [from, to] flow of each connector (node edge -> hexagon edge)
	const flows = [
		{ axis: "y", x: 200, from: 72, to: 110, delay: "0s" },
		{ axis: "x", y: 150, from: 296, to: 234.6, delay: "0.5s" },
		{ axis: "x", y: 150, from: 104, to: 165.4, delay: "1s" },
		{ axis: "y", x: 200, from: 224, to: 190, delay: "1.5s" },
	];

	return (
		<>
			<BackgroundLayer id="ent" from="#3b82f6" to="#8b5cf6" />
			<defs>
				<linearGradient id="ent-core" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#8b5cf6" />
					<stop offset="100%" stopColor="#6366f1" />
				</linearGradient>
			</defs>

			{/* connectors */}
			<line x1="200" y1="72" x2="200" y2="110" className="stroke-primary/25" strokeWidth="1.5" strokeDasharray="3 4" />
			<line x1="200" y1="224" x2="200" y2="190" className="stroke-primary/25" strokeWidth="1.5" strokeDasharray="3 4" />
			<line x1="104" y1="150" x2="165.4" y2="150" className="stroke-primary/25" strokeWidth="1.5" strokeDasharray="3 4" />
			<line x1="296" y1="150" x2="234.6" y2="150" className="stroke-primary/25" strokeWidth="1.5" strokeDasharray="3 4" />

			{/* flowing dots toward the core */}
			{flows.map((f, i) => (
				<circle key={i} r="2.5" fill="#6366f1">
					{f.axis === "y" ? (
						<animate attributeName="cy" values={`${f.from};${f.to}`} dur="2s" begin={f.delay} repeatCount="indefinite" />
					) : (
						<animate attributeName="cx" values={`${f.from};${f.to}`} dur="2s" begin={f.delay} repeatCount="indefinite" />
					)}
					{f.axis === "y" ? (
						<animate attributeName="cx" values={`${f.x};${f.x}`} dur="2s" begin={f.delay} repeatCount="indefinite" />
					) : (
						<animate attributeName="cy" values={`${f.y};${f.y}`} dur="2s" begin={f.delay} repeatCount="indefinite" />
					)}
					<animate attributeName="opacity" values="0;1;0" dur="2s" begin={f.delay} repeatCount="indefinite" />
				</circle>
			))}

			{/* satellite nodes */}
			{nodes.map((n) => (
				<g key={n.label}>
					<rect
						x={n.x}
						y={n.y}
						width={n.w}
						height={n.h}
						rx="10"
						className="fill-card stroke-border"
						strokeWidth="1.5"
					/>
					<rect x={n.x + 8} y={n.y + 8} width="4" height={n.h - 16} rx="2" fill={n.color} />
					<text
						x={n.x + n.w / 2 + 4}
						y={n.y + n.h / 2}
						textAnchor="middle"
						dominantBaseline="central"
						className="fill-foreground"
						style={{ font: "600 11px system-ui, sans-serif" }}
					>
						{n.label}
					</text>
				</g>
			))}

			{/* core */}
			<circle cx={cx} cy={cy} r="46" fill="url(#ent-core)" opacity="0.16">
				<animate attributeName="r" values="44;50;44" dur="3.4s" repeatCount="indefinite" />
			</circle>
			<polygon points={hex} fill="url(#ent-core)" className="stroke-primary/50" strokeWidth="1.5" />
			{/* spark */}
			<path
				d="M200 132 L205 146 L219 150 L205 154 L200 168 L195 154 L181 150 L195 146 Z"
				fill="#ffffff"
			>
				<animate attributeName="opacity" values="0.7;1;0.7" dur="2.4s" repeatCount="indefinite" />
			</path>

			{/* SLA badge */}
			<g>
				<rect
					x="298"
					y="16"
					width="86"
					height="24"
					rx="12"
					className="fill-primary/15 stroke-primary/40"
					strokeWidth="1"
				/>
				<circle cx="313" cy="28" r="3" fill="#10b981">
					<animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
				</circle>
				<text
					x="345"
					y="28"
					textAnchor="middle"
					dominantBaseline="central"
					className="fill-primary"
					style={{ font: "700 10px system-ui, sans-serif" }}
				>
					99.9% SLA
				</text>
			</g>
		</>
	);
}

/* Spotlight — a managed ops command center resolving incidents automatically */
function OpsGraphic() {
	const stages = [
		{ x: 96, color: "#f87171", label: "Detect", glyph: "!" },
		{ x: 168, color: "#fbbf24", label: "Route", glyph: "→" },
		{ x: 240, color: "#8b5cf6", label: "AI Fix", glyph: "AI" },
		{ x: 312, color: "#10b981", label: "Resolved", glyph: "✓" },
	];
	const metrics = [
		{ x: 58, label: "UPTIME", value: "99.9%" },
		{ x: 156, label: "MTTR", value: "< 4h" },
		{ x: 254, label: "HANDLING", value: "auto" },
	];

	return (
		<>
			<BackgroundLayer id="ops" from="#6366f1" to="#10b981" />
			<defs>
				<linearGradient id="ops-flow" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stopColor="#6366f1" />
					<stop offset="100%" stopColor="#10b981" />
				</linearGradient>
			</defs>

			{/* window */}
			<rect x="48" y="46" width="304" height="208" rx="16" className="fill-card stroke-border" strokeWidth="1.5" />
			<line x1="48" y1="76" x2="352" y2="76" className="stroke-border" strokeWidth="1.5" />
			<circle cx="66" cy="61" r="3.5" fill="#f87171" />
			<circle cx="78" cy="61" r="3.5" fill="#fbbf24" />
			<circle cx="90" cy="61" r="3.5" fill="#34d399" />
			<text x="106" y="61" dominantBaseline="central" className="fill-foreground" style={{ font: "700 10px system-ui, sans-serif" }}>
				Ops Center
			</text>
			<rect x="298" y="54" width="44" height="14" rx="7" className="fill-emerald-500/15" />
			<circle cx="308" cy="61" r="2.5" fill="#10b981">
				<animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
			</circle>
			<text x="316" y="61.5" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400" style={{ font: "700 7px system-ui, sans-serif" }}>
				LIVE
			</text>

			{/* pipeline track + travelling pulse */}
			<line x1="111" y1="118" x2="297" y2="118" className="stroke-primary/20" strokeWidth="2" strokeLinecap="round" />
			<line
				x1="111"
				y1="118"
				x2="297"
				y2="118"
				stroke="url(#ops-flow)"
				strokeWidth="2"
				strokeLinecap="round"
				pathLength={1}
				strokeDasharray="0.22 0.78"
			>
				<animate attributeName="stroke-dashoffset" values="1;0" dur="3.2s" repeatCount="indefinite" />
			</line>

			{/* stage nodes */}
			{stages.map((s, i) => (
				<g key={s.label}>
					<circle cx={s.x} cy="118" r="17" fill={s.color} opacity="0.15">
						<animate attributeName="r" values="15;21;15" dur="3.2s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
						<animate attributeName="opacity" values="0.35;0;0.35" dur="3.2s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
					</circle>
					<circle cx={s.x} cy="118" r="15" className="fill-card stroke-border" strokeWidth="1.5" />
					<text
						x={s.x}
						y="118"
						textAnchor="middle"
						dominantBaseline="central"
						fill={s.color}
						style={{ font: "800 11px system-ui, sans-serif" }}
					>
						{s.glyph}
					</text>
					<text
						x={s.x}
						y="146"
						textAnchor="middle"
						dominantBaseline="central"
						className="fill-muted-foreground"
						style={{ font: "600 9px system-ui, sans-serif" }}
					>
						{s.label}
					</text>
				</g>
			))}

			{/* metric cards */}
			{metrics.map((m) => (
				<g key={m.label}>
					<rect x={m.x} y="176" width="88" height="56" rx="10" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
					<text x={m.x + 44} y="196" textAnchor="middle" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "700 8px system-ui, sans-serif", letterSpacing: "1px" }}>
						{m.label}
					</text>
					<text x={m.x + 44} y="214" textAnchor="middle" dominantBaseline="central" className="fill-foreground" style={{ font: "800 16px system-ui, sans-serif" }}>
						{m.value}
					</text>
				</g>
			))}
		</>
	);
}

/* Hero — scaling a product upward with an AI DevOps boost (rocket) */
function ScaleGraphic() {
	const line = "M56 236 L110 214 L156 220 L206 184 L252 192 L300 140 L344 92";
	return (
		<>
			<BackgroundLayer id="scale" from="#6366f1" to="#10b981" />
			<defs>
				<linearGradient id="scale-line" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stopColor="#6366f1" />
					<stop offset="100%" stopColor="#10b981" />
				</linearGradient>
				<linearGradient id="scale-area" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#10b981" stopOpacity="0.28" />
					<stop offset="100%" stopColor="#10b981" stopOpacity="0" />
				</linearGradient>
			</defs>

			{/* growth area + line */}
			<path
				d={`${line} L344 244 L56 244 Z`}
				fill="url(#scale-area)"
			/>
			<path
				d={line}
				stroke="url(#scale-line)"
				strokeOpacity="0.35"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d={line}
				stroke="url(#scale-line)"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				pathLength={1}
				strokeDasharray="0.18 0.82"
			>
				<animate attributeName="stroke-dashoffset" values="1;0" dur="2.6s" repeatCount="indefinite" />
			</path>

			{/* app nodes multiplying along the curve */}
			{[
				{ x: 110, y: 214, d: "0s", c: "#3b82f6" },
				{ x: 206, y: 184, d: "0.5s", c: "#8b5cf6" },
				{ x: 300, y: 140, d: "1s", c: "#10b981" },
			].map((n) => (
				<g key={n.x}>
					<rect x={n.x - 9} y={n.y - 9} width="18" height="18" rx="5" fill={n.c}>
						<animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin={n.d} repeatCount="indefinite" />
					</rect>
				</g>
			))}

			{/* rocket at the peak */}
			<g>
				<animateTransform
					attributeName="transform"
					type="translate"
					values="0 0;0 -6;0 0"
					dur="2.8s"
					repeatCount="indefinite"
					calcMode="spline"
					keyTimes="0;0.5;1"
					keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
				/>
				<path
					d="M344 74 c10 4 15 14 13 27 l-9 4 l-8 0 l-9 -4 c-2 -13 3 -23 13 -27 Z"
					fill="url(#scale-line)"
					className="stroke-primary/40"
					strokeWidth="1"
				/>
				<circle cx="344" cy="92" r="3.5" fill="#ffffff" />
				<path d="M331 105 l-6 8 l8 -3 Z" fill="#6366f1" />
				<path d="M357 105 l6 8 l-8 -3 Z" fill="#10b981" />
				{/* flame */}
				<path d="M340 109 l4 12 l4 -12 Z" fill="#fbbf24">
					<animate attributeName="opacity" values="0.4;1;0.4" dur="0.6s" repeatCount="indefinite" />
				</path>
			</g>

			{/* scale badge */}
			<g>
				<rect x="56" y="60" width="96" height="24" rx="12" className="fill-primary/15 stroke-primary/40" strokeWidth="1" />
				<text x="104" y="72" textAnchor="middle" dominantBaseline="central" className="fill-primary" style={{ font: "700 11px system-ui, sans-serif" }}>
					AI DevOps boost
				</text>
			</g>
		</>
	);
}

/* 1. Up to five applications — a row of five managed app tiles */
function FiveAppsGraphic() {
	const tileW = 52;
	const tileH = 68;
	const gap = 12;
	const total = 5 * tileW + 4 * gap;
	const startX = (400 - total) / 2;
	const y = (300 - tileH) / 2 + 6;
	const accents = ["#3b82f6", "#8b5cf6", "#10b981", "#3b82f6", "#8b5cf6"];

	return (
		<>
			<BackgroundLayer id="five" from="#3b82f6" to="#8b5cf6" />

			{accents.map((c, i) => {
				const x = startX + i * (tileW + gap);
				return (
					<g key={x}>
						<rect x={x} y={y} width={tileW} height={tileH} rx="9" className="fill-card stroke-border" strokeWidth="1.5">
							<animate attributeName="opacity" values="0.45;1;0.45" dur="3.4s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
						</rect>
						<rect x={x + 10} y={y + 10} width={tileW - 20} height="16" rx="4" fill={c}>
							<animate attributeName="opacity" values="0.5;1;0.5" dur="3.4s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
						</rect>
						<rect x={x + 10} y={y + 34} width={tileW - 20} height="4" rx="2" className="fill-primary/25" />
						<rect x={x + 10} y={y + 42} width={tileW - 28} height="4" rx="2" className="fill-primary/15" />
						<circle cx={x + tileW / 2} cy={y + tileH - 12} r="3" fill="#10b981">
							<animate attributeName="opacity" values="0.25;1;0.25" dur="2.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
						</circle>
					</g>
				);
			})}

			{/* count badge */}
			<g>
				<rect x="168" y="20" width="64" height="24" rx="12" className="fill-primary/15 stroke-primary/40" strokeWidth="1" />
				<text x="200" y="32" textAnchor="middle" dominantBaseline="central" className="fill-primary" style={{ font: "700 13px system-ui, sans-serif" }}>
					×5 apps
				</text>
			</g>
		</>
	);
}

/* 2. One-click deployments — commit flows through a build/deploy pipeline */
function DeployGraphic() {
	const stages = [
		{ x: 84, color: "#3b82f6", label: "Commit", glyph: "⎇" },
		{ x: 164, color: "#8b5cf6", label: "Build", glyph: "⚙" },
		{ x: 244, color: "#f59e0b", label: "Deploy", glyph: "↑" },
		{ x: 324, color: "#10b981", label: "Live", glyph: "✓" },
	];
	return (
		<>
			<BackgroundLayer id="dep" from="#3b82f6" to="#10b981" />
			<defs>
				<linearGradient id="dep-flow" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stopColor="#3b82f6" />
					<stop offset="100%" stopColor="#10b981" />
				</linearGradient>
			</defs>

			{/* pipeline track + flow */}
			<line x1="99" y1="120" x2="309" y2="120" className="stroke-primary/20" strokeWidth="2" strokeLinecap="round" />
			<line x1="99" y1="120" x2="309" y2="120" stroke="url(#dep-flow)" strokeWidth="2" strokeLinecap="round" pathLength={1} strokeDasharray="0.24 0.76">
				<animate attributeName="stroke-dashoffset" values="1;0" dur="3s" repeatCount="indefinite" />
			</line>

			{stages.map((s, i) => (
				<g key={s.label}>
					<circle cx={s.x} cy="120" r="17" fill={s.color} opacity="0.15">
						<animate attributeName="r" values="15;21;15" dur="3s" begin={`${i * 0.75}s`} repeatCount="indefinite" />
						<animate attributeName="opacity" values="0.35;0;0.35" dur="3s" begin={`${i * 0.75}s`} repeatCount="indefinite" />
					</circle>
					<circle cx={s.x} cy="120" r="15" className="fill-card stroke-border" strokeWidth="1.5" />
					<text x={s.x} y="120" textAnchor="middle" dominantBaseline="central" fill={s.color} style={{ font: "800 12px system-ui, sans-serif" }}>
						{s.glyph}
					</text>
					<text x={s.x} y="148" textAnchor="middle" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "600 9px system-ui, sans-serif" }}>
						{s.label}
					</text>
				</g>
			))}

			{/* one-click button */}
			<g>
				<rect x="150" y="184" width="100" height="30" rx="15" fill="url(#dep-flow)">
					<animate attributeName="opacity" values="0.85;1;0.85" dur="2.4s" repeatCount="indefinite" />
				</rect>
				<text x="200" y="199" textAnchor="middle" dominantBaseline="central" fill="#ffffff" style={{ font: "700 11px system-ui, sans-serif" }}>
					Deploy
				</text>
				{/* click cursor */}
				<g>
					<path d="M236 206 l0 18 l5 -5 l4 8 l3 -1 l-4 -8 l7 0 Z" className="fill-foreground stroke-background" strokeWidth="1" />
					<circle cx="236" cy="206" r="10" fill="none" className="stroke-primary/50" strokeWidth="1.5">
						<animate attributeName="r" values="4;14;4" dur="2.4s" repeatCount="indefinite" />
						<animate attributeName="opacity" values="0.7;0;0.7" dur="2.4s" repeatCount="indefinite" />
					</circle>
				</g>
			</g>
		</>
	);
}

/* 3. Advanced AI monitoring — sparkline with a flagged anomaly + alert rows */
function MonitoringGraphic() {
	return (
		<>
			<BackgroundLayer id="mon" from="#6366f1" to="#8b5cf6" />
			<defs>
				<linearGradient id="mon-line" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stopColor="#6366f1" />
					<stop offset="100%" stopColor="#8b5cf6" />
				</linearGradient>
			</defs>

			{/* chart panel */}
			<rect x="48" y="56" width="220" height="188" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />
			<text x="64" y="76" dominantBaseline="central" className="fill-foreground" style={{ font: "700 10px system-ui, sans-serif" }}>
				Monitoring
			</text>

			{/* baseline grid */}
			{[110, 150, 190].map((gy) => (
				<line key={gy} x1="64" y1={gy} x2="252" y2={gy} className="stroke-border" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
			))}

			{/* sparkline with an anomaly spike */}
			<path
				d="M64 186 L96 176 L128 182 L160 120 L176 190 L208 170 L252 160"
				className="stroke-primary/25"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M64 186 L96 176 L128 182 L160 120 L176 190 L208 170 L252 160"
				stroke="url(#mon-line)"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				pathLength={1}
				strokeDasharray="0.2 0.8"
			>
				<animate attributeName="stroke-dashoffset" values="1;0" dur="2.6s" repeatCount="indefinite" />
			</path>

			{/* anomaly marker at the spike */}
			<circle cx="160" cy="120" r="9" fill="#f87171" opacity="0.25">
				<animate attributeName="r" values="6;14;6" dur="1.8s" repeatCount="indefinite" />
				<animate attributeName="opacity" values="0.4;0;0.4" dur="1.8s" repeatCount="indefinite" />
			</circle>
			<circle cx="160" cy="120" r="4" fill="#f87171" />
			<g>
				<rect x="150" y="92" width="56" height="18" rx="9" className="fill-card stroke-border" strokeWidth="1" />
				<text x="178" y="101.5" textAnchor="middle" dominantBaseline="central" className="fill-rose-600 dark:fill-rose-400" style={{ font: "700 8px system-ui, sans-serif" }}>
					anomaly
				</text>
			</g>

			{/* prioritized alert rows */}
			{[
				{ y: 78, c: "#f87171", w: 70, d: "0s" },
				{ y: 108, c: "#fbbf24", w: 88, d: "0.4s" },
				{ y: 138, c: "#10b981", w: 60, d: "0.8s" },
			].map((a) => (
				<g key={a.y}>
					<circle cx="292" cy={a.y} r="5" fill={a.c}>
						<animate attributeName="opacity" values="0.35;1;0.35" dur="1.8s" begin={a.d} repeatCount="indefinite" />
					</circle>
					<rect x="304" y={a.y - 5} width={a.w} height="4" rx="2" className="fill-primary/30" />
					<rect x="304" y={a.y + 3} width={a.w - 20} height="4" rx="2" className="fill-primary/15" />
				</g>
			))}
			<text x="292" y="170" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "600 8px system-ui, sans-serif" }}>
				prioritized
			</text>
		</>
	);
}

/* 4. AI-assisted engineering — a code editor where AI writes & fixes code */
function AiEngineerGraphic() {
	const lines = [
		{ y: 96, w: 120, c: "#8b5cf6" },
		{ y: 116, w: 168, c: "#3b82f6" },
		{ y: 136, w: 96, c: "#10b981" },
		{ y: 156, w: 148, c: "#8b5cf6" },
		{ y: 176, w: 76, c: "#3b82f6" },
	];
	return (
		<>
			<BackgroundLayer id="eng" from="#8b5cf6" to="#3b82f6" />
			<defs>
				<linearGradient id="eng-core" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#8b5cf6" />
					<stop offset="100%" stopColor="#6366f1" />
				</linearGradient>
			</defs>

			{/* editor window */}
			<rect x="56" y="54" width="288" height="192" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />
			<line x1="56" y1="80" x2="344" y2="80" className="stroke-border" strokeWidth="1.5" />
			<circle cx="72" cy="67" r="3.5" fill="#f87171" />
			<circle cx="84" cy="67" r="3.5" fill="#fbbf24" />
			<circle cx="96" cy="67" r="3.5" fill="#34d399" />
			<text x="112" y="67" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "600 8px system-ui, sans-serif" }}>
				main.ts
			</text>

			{/* gutter */}
			{lines.map((l, i) => (
				<text key={`ln-${l.y}`} x="74" y={l.y} dominantBaseline="central" className="fill-muted-foreground/60" style={{ font: "600 8px system-ui, sans-serif" }}>
					{i + 1}
				</text>
			))}

			{/* code lines appearing */}
			{lines.map((l, i) => (
				<rect key={l.y} x="90" y={l.y - 4} width={l.w} height="7" rx="3.5" fill={l.c}>
					<animate attributeName="opacity" values="0.25;1;0.25" dur="3.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
				</rect>
			))}

			{/* AI writing cursor on line 4 */}
			<rect x="242" y="152" width="2.5" height="12" className="fill-foreground">
				<animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
			</rect>

			{/* AI badge */}
			<g>
				<circle cx="316" cy="112" r="16" fill="url(#eng-core)" opacity="0.18">
					<animate attributeName="r" values="14;19;14" dur="3s" repeatCount="indefinite" />
				</circle>
				<circle cx="316" cy="112" r="13" fill="url(#eng-core)" className="stroke-primary/50" strokeWidth="1.5" />
				<text x="316" y="112" textAnchor="middle" dominantBaseline="central" fill="#ffffff" style={{ font: "800 9px system-ui, sans-serif" }}>
					AI
				</text>
			</g>

			{/* hours badge */}
			<g>
				<rect x="248" y="212" width="86" height="22" rx="11" className="fill-primary/10 stroke-primary/30" strokeWidth="1" />
				<text x="291" y="223" textAnchor="middle" dominantBaseline="central" className="fill-primary" style={{ font: "700 10px system-ui, sans-serif" }}>
					10 hrs/mo
				</text>
			</g>
		</>
	);
}

/* 5. On-demand DevOps & support — a live chat thread with a support agent */
function SupportGraphic() {
	return (
		<>
			<BackgroundLayer id="sup" from="#3b82f6" to="#6366f1" />
			<defs>
				<linearGradient id="sup-bubble" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#6366f1" />
					<stop offset="100%" stopColor="#3b82f6" />
				</linearGradient>
			</defs>

			{/* chat window */}
			<rect x="64" y="52" width="272" height="196" rx="16" className="fill-card stroke-border" strokeWidth="1.5" />
			<line x1="64" y1="82" x2="336" y2="82" className="stroke-border" strokeWidth="1.5" />
			{/* agent avatar + title */}
			<circle cx="84" cy="67" r="9" fill="url(#sup-bubble)" />
			<circle cx="84" cy="64" r="3" fill="#ffffff" />
			<path d="M78 72 a6 5 0 0 1 12 0 Z" fill="#ffffff" />
			<text x="100" y="64" dominantBaseline="central" className="fill-foreground" style={{ font: "700 9px system-ui, sans-serif" }}>
				DevOps support
			</text>
			<circle cx="101" cy="74" r="3" fill="#10b981">
				<animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
			</circle>
			<text x="110" y="74.5" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400" style={{ font: "600 7px system-ui, sans-serif" }}>
				online
			</text>

			{/* incoming bubble (user) */}
			<g>
				<rect x="80" y="98" width="132" height="30" rx="10" className="fill-muted/60" />
				<rect x="92" y="108" width="96" height="4" rx="2" className="fill-primary/30" />
				<rect x="92" y="116" width="72" height="4" rx="2" className="fill-primary/20" />
			</g>

			{/* outgoing bubble (support) */}
			<g>
				<rect x="152" y="138" width="136" height="34" rx="10" fill="url(#sup-bubble)">
					<animate attributeName="opacity" values="0;1;1" dur="3.6s" repeatCount="indefinite" />
				</rect>
				<rect x="164" y="148" width="104" height="4" rx="2" fill="#ffffff" fillOpacity="0.85" />
				<rect x="164" y="158" width="80" height="4" rx="2" fill="#ffffff" fillOpacity="0.6" />
			</g>

			{/* typing indicator */}
			<g>
				<rect x="80" y="182" width="52" height="24" rx="12" className="fill-muted/60" />
				{[94, 106, 118].map((cx, i) => (
					<circle key={cx} cx={cx} cy="194" r="3" className="fill-muted-foreground">
						<animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
					</circle>
				))}
			</g>

			{/* on-demand badge */}
			<g>
				<rect x="222" y="184" width="98" height="22" rx="11" className="fill-primary/10 stroke-primary/30" strokeWidth="1" />
				<text x="271" y="195" textAnchor="middle" dominantBaseline="central" className="fill-primary" style={{ font: "700 10px system-ui, sans-serif" }}>
					On-demand
				</text>
			</g>
		</>
	);
}

/* Spotlight — a DevOps team attached to your product, with zero payroll */
function NoPayrollGraphic() {
	const cx = 200;
	const cy = 176;
	const roles = [
		{ x: 116, y: 92, color: "#3b82f6", label: "Dev", delay: "0s" },
		{ x: 200, y: 74, color: "#8b5cf6", label: "DevOps", delay: "0.6s" },
		{ x: 284, y: 92, color: "#10b981", label: "QA", delay: "1.2s" },
	];
	return (
		<>
			<BackgroundLayer id="pay" from="#6366f1" to="#10b981" />
			<defs>
				<linearGradient id="pay-core" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#6366f1" />
					<stop offset="100%" stopColor="#8b5cf6" />
				</linearGradient>
			</defs>

			{/* connectors */}
			{roles.map((role) => (
				<g key={role.label}>
					<line x1={role.x} y1={role.y + 18} x2={cx} y2={cy} className="stroke-primary/30" strokeWidth="1.5" strokeDasharray="3 4" />
					<circle r="2.5" fill={role.color}>
						<animateMotion dur="2.4s" begin={role.delay} repeatCount="indefinite" path={`M${role.x} ${role.y + 18} L${cx} ${cy}`} />
						<animate attributeName="opacity" values="0;1;0" dur="2.4s" begin={role.delay} repeatCount="indefinite" />
					</circle>
				</g>
			))}

			{/* role avatars */}
			{roles.map((role) => (
				<g key={`av-${role.label}`}>
					<circle cx={role.x} cy={role.y} r="22" className="fill-card stroke-border" strokeWidth="1.5">
						<animate attributeName="opacity" values="0.6;1;0.6" dur="3.4s" begin={role.delay} repeatCount="indefinite" />
					</circle>
					<circle cx={role.x} cy={role.y - 5} r="6" fill={role.color} />
					<path d={`M${role.x - 10} ${role.y + 11} a10 8 0 0 1 20 0 Z`} fill={role.color} />
					<rect x={role.x - 26} y={role.y + 26} width="52" height="16" rx="8" className="fill-primary/10" />
					<text x={role.x} y={role.y + 34} textAnchor="middle" dominantBaseline="central" className="fill-foreground" style={{ font: "600 9px system-ui, sans-serif" }}>
						{role.label}
					</text>
				</g>
			))}

			{/* product core */}
			<circle cx={cx} cy={cy} r="30" fill="url(#pay-core)" opacity="0.18">
				<animate attributeName="r" values="28;34;28" dur="3s" repeatCount="indefinite" />
			</circle>
			<circle cx={cx} cy={cy} r="24" fill="url(#pay-core)" className="stroke-primary/50" strokeWidth="1.5" />
			<text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fill="#ffffff" style={{ font: "700 10px system-ui, sans-serif" }}>
				product
			</text>

			{/* $0 payroll badge */}
			<g>
				<rect x="150" y="232" width="100" height="26" rx="13" className="fill-emerald-500/15 stroke-emerald-500/40" strokeWidth="1" />
				<circle cx="168" cy="245" r="8" fill="none" className="stroke-emerald-500" strokeWidth="1.5" />
				<text x="168" y="245" textAnchor="middle" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400" style={{ font: "700 9px system-ui, sans-serif" }}>
					$
				</text>
				<line x1="162" y1="251" x2="174" y2="239" className="stroke-rose-500" strokeWidth="1.5" strokeLinecap="round" />
				<text x="204" y="245" textAnchor="middle" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400" style={{ font: "700 10px system-ui, sans-serif" }}>
					$0 payroll
				</text>
			</g>
		</>
	);
}

/* Hero — a side project shipping from repo to a live app, no DevOps needed */
function SideProjectGraphic() {
	return (
		<>
			<BackgroundLayer id="side" from="#8b5cf6" to="#3b82f6" />
			<defs>
				<linearGradient id="side-accent" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#8b5cf6" />
					<stop offset="100%" stopColor="#6366f1" />
				</linearGradient>
			</defs>

			{/* repo node */}
			<g>
				<rect x="40" y="122" width="72" height="56" rx="12" className="fill-card stroke-border" strokeWidth="1.5" />
				<circle cx="64" cy="142" r="4" fill="#8b5cf6" />
				<circle cx="64" cy="162" r="4" fill="#8b5cf6" />
				<circle cx="88" cy="152" r="4" fill="#8b5cf6" />
				<path d="M64 146 L64 158 M64 162 a0 0 0 0 0 0 0 M64 152 q0 10 20 0" className="stroke-primary/50" strokeWidth="1.5" fill="none" />
				<text x="76" y="192" textAnchor="middle" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "600 9px system-ui, sans-serif" }}>
					your repo
				</text>
			</g>

			{/* connector with flow */}
			<line x1="112" y1="150" x2="176" y2="150" className="stroke-primary/30" strokeWidth="1.5" strokeDasharray="3 4" />
			{[0, 1].map((k) => (
				<circle key={k} cy="150" r="2.5" fill="#6366f1">
					<animate attributeName="cx" values="112;176" dur="1.8s" begin={`${k * 0.9}s`} repeatCount="indefinite" />
					<animate attributeName="opacity" values="0;1;0" dur="1.8s" begin={`${k * 0.9}s`} repeatCount="indefinite" />
				</circle>
			))}

			{/* browser window with deployed app */}
			<g>
				<rect x="180" y="92" width="176" height="128" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />
				{/* url bar */}
				<rect x="192" y="104" width="152" height="18" rx="9" className="fill-muted/50" />
				<path d="M203 116 v-4 a3 3 0 0 1 6 0 v4 Z M201 116 h10 v6 h-10 Z" className="fill-emerald-500" />
				<text x="218" y="113.5" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "600 8px system-ui, sans-serif" }}>
					yourapp.com
				</text>
				{/* live dot */}
				<circle cx="334" cy="113" r="3" fill="#10b981">
					<animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
				</circle>
				{/* app content */}
				<rect x="192" y="134" width="152" height="30" rx="7" fill="url(#side-accent)" opacity="0.85" />
				<rect x="192" y="172" width="70" height="36" rx="7" className="fill-primary/15" />
				<rect x="274" y="172" width="70" height="36" rx="7" className="fill-primary/10" />
			</g>

			{/* sparkles */}
			{[
				{ x: 300, y: 74, d: "0s" },
				{ x: 340, y: 210, d: "0.7s" },
				{ x: 168, y: 96, d: "1.2s" },
			].map((s) => (
				<path
					key={`${s.x}-${s.y}`}
					d={`M${s.x} ${s.y - 7} L${s.x + 2} ${s.y - 2} L${s.x + 7} ${s.y} L${s.x + 2} ${s.y + 2} L${s.x} ${s.y + 7} L${s.x - 2} ${s.y + 2} L${s.x - 7} ${s.y} L${s.x - 2} ${s.y - 2} Z`}
					fill="#a855f7"
				>
					<animate attributeName="opacity" values="0.2;1;0.2" dur="2.4s" begin={s.d} repeatCount="indefinite" />
				</path>
			))}

			{/* no-DevOps badge */}
			<g>
				<rect x="40" y="60" width="132" height="24" rx="12" className="fill-primary/15 stroke-primary/40" strokeWidth="1" />
				<text x="106" y="72" textAnchor="middle" dominantBaseline="central" className="fill-primary" style={{ font: "700 10px system-ui, sans-serif" }}>
					No DevOps headache
				</text>
			</g>
		</>
	);
}

/* 1. One application, fully managed — an app with SSL & custom domain */
function OneAppGraphic() {
	return (
		<>
			<BackgroundLayer id="one" from="#3b82f6" to="#8b5cf6" />
			<defs>
				<linearGradient id="one-accent" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#3b82f6" />
					<stop offset="100%" stopColor="#8b5cf6" />
				</linearGradient>
			</defs>

			{/* browser window */}
			<rect x="96" y="70" width="208" height="160" rx="16" className="fill-card stroke-border" strokeWidth="1.5" />
			{/* url bar with padlock */}
			<rect x="112" y="84" width="176" height="22" rx="11" className="fill-muted/50" />
			<path d="M125 96 v-4 a4 4 0 0 1 8 0 v4 Z M122 96 h14 v8 h-14 Z" className="fill-emerald-500" />
			<text x="144" y="95" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "600 9px system-ui, sans-serif" }}>
				yourapp.com
			</text>
			<circle cx="278" cy="95" r="3" fill="#10b981">
				<animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
			</circle>

			{/* app layout */}
			<rect x="112" y="118" width="176" height="36" rx="8" fill="url(#one-accent)" opacity="0.85">
				<animate attributeName="opacity" values="0.6;0.9;0.6" dur="3.4s" repeatCount="indefinite" />
			</rect>
			<rect x="112" y="164" width="54" height="52" rx="8" className="fill-primary/15" />
			<rect x="173" y="164" width="54" height="52" rx="8" className="fill-primary/12" />
			<rect x="234" y="164" width="54" height="52" rx="8" className="fill-primary/10" />

			{/* SSL badge */}
			<g>
				<rect x="112" y="44" width="72" height="22" rx="11" className="fill-emerald-500/15 stroke-emerald-500/40" strokeWidth="1" />
				<path d="M126 56 v-4 a4 4 0 0 1 8 0 v4 Z M123 56 h14 v8 h-14 Z" className="fill-emerald-500" />
				<text x="158" y="55.5" textAnchor="middle" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400" style={{ font: "700 9px system-ui, sans-serif" }}>
					SSL
				</text>
			</g>
			{/* one-app badge */}
			<g>
				<rect x="232" y="44" width="60" height="22" rx="11" className="fill-primary/15 stroke-primary/40" strokeWidth="1" />
				<text x="262" y="55.5" textAnchor="middle" dominantBaseline="central" className="fill-primary" style={{ font: "700 10px system-ui, sans-serif" }}>
					1 app
				</text>
			</g>
		</>
	);
}

/* 2. Managed hosting — your app runs on our managed, auto-run stack */
function ManagedHostingGraphic() {
	return (
		<>
			<BackgroundLayer id="host" from="#0ea5e9" to="#6366f1" />
			<defs>
				<linearGradient id="host-accent" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#60a5fa" />
					<stop offset="100%" stopColor="#6366f1" />
				</linearGradient>
			</defs>

			{/* app tile on top */}
			<g>
				<rect x="158" y="70" width="84" height="52" rx="12" className="fill-card stroke-border" strokeWidth="1.5">
					<animate attributeName="opacity" values="0.7;1;0.7" dur="3.4s" repeatCount="indefinite" />
				</rect>
				<rect x="170" y="82" width="60" height="12" rx="4" fill="url(#host-accent)" />
				<rect x="170" y="100" width="44" height="5" rx="2.5" className="fill-primary/25" />
				<rect x="170" y="110" width="32" height="5" rx="2.5" className="fill-primary/15" />
				<text x="200" y="60" textAnchor="middle" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "600 9px system-ui, sans-serif" }}>
					your app
				</text>
			</g>

			{/* connector */}
			<line x1="200" y1="122" x2="200" y2="150" className="stroke-primary/40" strokeWidth="1.5" strokeDasharray="3 4" />
			{[0, 1].map((k) => (
				<circle key={k} cx="200" r="2.5" fill="#6366f1">
					<animate attributeName="cy" values="122;150" dur="1.8s" begin={`${k * 0.9}s`} repeatCount="indefinite" />
					<animate attributeName="opacity" values="0;1;0" dur="1.8s" begin={`${k * 0.9}s`} repeatCount="indefinite" />
				</circle>
			))}

			{/* managed server */}
			<g>
				<rect x="132" y="150" width="136" height="70" rx="12" className="fill-card stroke-border" strokeWidth="1.5" />
				{/* rack lines */}
				<rect x="146" y="164" width="108" height="14" rx="4" className="fill-muted/50" />
				<rect x="146" y="184" width="108" height="14" rx="4" className="fill-muted/50" />
				{/* LEDs */}
				{[0, 1, 2].map((j) => (
					<circle key={`a${j}`} cx={240 - j * 12} cy="171" r="2.6" fill={j === 0 ? "#10b981" : j === 1 ? "#fbbf24" : "#3b82f6"}>
						<animate attributeName="opacity" values="0.25;1;0.25" dur="1.8s" begin={`${j * 0.25}s`} repeatCount="indefinite" />
					</circle>
				))}
				{[0, 1, 2].map((j) => (
					<circle key={`b${j}`} cx={240 - j * 12} cy="191" r="2.6" fill={j === 0 ? "#10b981" : j === 1 ? "#3b82f6" : "#fbbf24"}>
						<animate attributeName="opacity" values="0.25;1;0.25" dur="1.8s" begin={`${0.4 + j * 0.25}s`} repeatCount="indefinite" />
					</circle>
				))}
				{/* rotating gear (auto-managed) */}
				<g>
					<animateTransform attributeName="transform" type="rotate" from="0 156 205" to="360 156 205" dur="8s" repeatCount="indefinite" />
					<path
						d="M156 197 l2.4 0 l1 -3 l2.5 1 l-0.6 3 l2 1.4 l2.6 -1.6 l1.8 1.8 l-1.6 2.6 l1.4 2 l3 -0.6 l1 2.5 l-3 1 l0 2.4 l3 1 l-1 2.5 l-3 -0.6 l-1.4 2 l1.6 2.6 l-1.8 1.8 l-2.6 -1.6 l-2 1.4 l0.6 3 l-2.5 1 l-1 -3 l-2.4 0 Z"
						fill="#6366f1"
						opacity="0.8"
					/>
					<circle cx="156" cy="205" r="3.5" className="fill-card" />
				</g>
				<text x="210" y="211" textAnchor="middle" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "600 8px system-ui, sans-serif" }}>
					auto-managed
				</text>
			</g>

			{/* managed badge */}
			<g>
				<rect x="272" y="130" width="86" height="22" rx="11" className="fill-emerald-500/15 stroke-emerald-500/40" strokeWidth="1" />
				<path d="M286 141 l3 3 l6 -7" className="stroke-emerald-500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
				<text x="322" y="141.5" textAnchor="middle" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400" style={{ font: "700 9px system-ui, sans-serif" }}>
					Managed
				</text>
			</g>
		</>
	);
}

/* 3. AI monitoring & alerts — a round-the-clock uptime heartbeat */
function UptimeGraphic() {
	return (
		<>
			<BackgroundLayer id="up" from="#10b981" to="#6366f1" />
			<defs>
				<linearGradient id="up-line" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stopColor="#10b981" />
					<stop offset="100%" stopColor="#22c55e" />
				</linearGradient>
			</defs>

			{/* monitor panel */}
			<rect x="56" y="76" width="288" height="148" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />

			{/* AI eye watching */}
			<g>
				<ellipse cx="88" cy="102" rx="16" ry="10" className="fill-primary/12 stroke-primary/40" strokeWidth="1.5" />
				<circle cx="88" cy="102" r="4.5" fill="url(#up-line)">
					<animate attributeName="cx" values="84;92;84" dur="4s" repeatCount="indefinite" />
				</circle>
				<text x="112" y="102" dominantBaseline="central" className="fill-foreground" style={{ font: "700 9px system-ui, sans-serif" }}>
					AI monitor
				</text>
			</g>

			{/* 24/7 badge */}
			<g>
				<rect x="276" y="92" width="52" height="20" rx="10" className="fill-emerald-500/15" />
				<circle cx="288" cy="102" r="2.5" fill="#10b981">
					<animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite" />
				</circle>
				<text x="304" y="102" textAnchor="middle" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400" style={{ font: "700 9px system-ui, sans-serif" }}>
					24/7
				</text>
			</g>

			{/* heartbeat line */}
			<line x1="72" y1="164" x2="328" y2="164" className="stroke-border" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
			<path
				d="M72 164 L120 164 L134 140 L148 188 L162 164 L200 164 L214 148 L226 180 L238 164 L328 164"
				className="stroke-primary/25"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M72 164 L120 164 L134 140 L148 188 L162 164 L200 164 L214 148 L226 180 L238 164 L328 164"
				stroke="url(#up-line)"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				pathLength={1}
				strokeDasharray="0.16 0.84"
			>
				<animate attributeName="stroke-dashoffset" values="1;0" dur="2.4s" repeatCount="indefinite" />
			</path>

			{/* uptime readout + bell */}
			<text x="72" y="200" dominantBaseline="central" className="fill-foreground" style={{ font: "800 16px system-ui, sans-serif" }}>
				99.9%
			</text>
			<text x="128" y="202" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "600 9px system-ui, sans-serif" }}>
				uptime
			</text>
			<g>
				<animateTransform attributeName="transform" type="rotate" values="0 300 196;-12 300 196;12 300 196;0 300 196" dur="2.4s" repeatCount="indefinite" />
				<path d="M300 184 a9 9 0 0 1 9 9 v3 l2 3 h-22 l2 -3 v-3 a9 9 0 0 1 9 -9 Z" fill="#fbbf24" />
				<circle cx="300" cy="203" r="2.5" fill="#fbbf24" />
			</g>
		</>
	);
}

/* 4. Automated issue tickets — an alert opens a structured repo ticket */
function TicketsGraphic() {
	return (
		<>
			<BackgroundLayer id="tick" from="#f59e0b" to="#6366f1" />
			<defs>
				<linearGradient id="tick-accent" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#6366f1" />
					<stop offset="100%" stopColor="#8b5cf6" />
				</linearGradient>
			</defs>

			{/* alert */}
			<g>
				<path d="M84 108 l24 42 h-48 Z" className="fill-amber-500/20 stroke-amber-500" strokeWidth="1.5" strokeLinejoin="round" />
				<rect x="82" y="120" width="4" height="16" rx="2" className="fill-amber-500" />
				<circle cx="84" cy="142" r="2.5" className="fill-amber-500">
					<animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite" />
				</circle>
				<text x="84" y="166" textAnchor="middle" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "600 9px system-ui, sans-serif" }}>
					error detected
				</text>
			</g>

			{/* connector */}
			<line x1="116" y1="132" x2="176" y2="132" className="stroke-primary/30" strokeWidth="1.5" strokeDasharray="3 4" />
			<circle cy="132" r="2.5" fill="#8b5cf6">
				<animate attributeName="cx" values="116;176" dur="1.8s" repeatCount="indefinite" />
				<animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
			</circle>

			{/* ticket card */}
			<g>
				<animate attributeName="opacity" values="0.3;1;1;0.3" dur="3.6s" repeatCount="indefinite" />
				<rect x="184" y="82" width="164" height="100" rx="12" className="fill-card stroke-border" strokeWidth="1.5" />
				{/* header: branch + severity */}
				<path d="M200 98 a3 3 0 1 0 0.1 0 M200 110 a3 3 0 1 0 0.1 0 M216 100 a3 3 0 1 0 0.1 0 M200 101 v6 M200 110 q0 -6 13 -8" className="stroke-primary/60" strokeWidth="1.5" fill="none" />
				<text x="224" y="103" dominantBaseline="central" className="fill-foreground" style={{ font: "700 9px system-ui, sans-serif" }}>
					issue #128
				</text>
				<rect x="300" y="94" width="36" height="16" rx="8" className="fill-rose-500/15" />
				<text x="318" y="102.5" textAnchor="middle" dominantBaseline="central" className="fill-rose-600 dark:fill-rose-400" style={{ font: "700 7px system-ui, sans-serif" }}>
					high
				</text>
				{/* body lines */}
				<rect x="200" y="124" width="132" height="5" rx="2.5" className="fill-primary/25" />
				<rect x="200" y="136" width="108" height="5" rx="2.5" className="fill-primary/15" />
				{/* checklist */}
				<rect x="200" y="152" width="12" height="12" rx="3" className="fill-emerald-500/15 stroke-emerald-500" strokeWidth="1" />
				<path d="M203 158 l2.5 2.5 l4 -5" className="stroke-emerald-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
				<rect x="218" y="156" width="90" height="5" rx="2.5" className="fill-primary/20" />
			</g>

			{/* auto badge */}
			<g>
				<rect x="184" y="196" width="76" height="22" rx="11" className="fill-primary/15 stroke-primary/40" strokeWidth="1" />
				<text x="222" y="207.5" textAnchor="middle" dominantBaseline="central" className="fill-primary" style={{ font: "700 10px system-ui, sans-serif" }}>
					auto-filed
				</text>
			</g>
		</>
	);
}

/* 5. Database, storage & support — managed DB, storage bar and community */
function DatabaseGraphic() {
	return (
		<>
			<BackgroundLayer id="db" from="#6366f1" to="#10b981" />
			<defs>
				<linearGradient id="db-accent" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#8b5cf6" />
					<stop offset="100%" stopColor="#6366f1" />
				</linearGradient>
			</defs>

			{/* database cylinder */}
			<g>
				<path d="M70 108 v56 a34 12 0 0 0 68 0 v-56" fill="url(#db-accent)" opacity="0.85" />
				<ellipse cx="104" cy="108" rx="34" ry="12" fill="url(#db-accent)" className="stroke-primary/40" strokeWidth="1" />
				<ellipse cx="104" cy="108" rx="34" ry="12" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1" />
				<ellipse cx="104" cy="127" rx="34" ry="12" fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1">
					<animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.4s" repeatCount="indefinite" />
				</ellipse>
				<ellipse cx="104" cy="146" rx="34" ry="12" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1">
					<animate attributeName="opacity" values="0.15;0.5;0.15" dur="2.4s" begin="0.4s" repeatCount="indefinite" />
				</ellipse>
				<text x="104" y="188" textAnchor="middle" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "600 9px system-ui, sans-serif" }}>
					managed DB
				</text>
			</g>

			{/* storage bar */}
			<g>
				<text x="180" y="104" dominantBaseline="central" className="fill-foreground" style={{ font: "700 9px system-ui, sans-serif" }}>
					Storage
				</text>
				<text x="330" y="104" textAnchor="end" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "600 9px system-ui, sans-serif" }}>
					10 GB
				</text>
				<rect x="180" y="114" width="150" height="10" rx="5" className="fill-primary/15" />
				<rect x="180" y="114" width="60" height="10" rx="5" fill="#10b981">
					<animate attributeName="width" values="30;96;30" dur="4s" repeatCount="indefinite" />
				</rect>
			</g>

			{/* community support */}
			<g>
				<text x="180" y="150" dominantBaseline="central" className="fill-foreground" style={{ font: "700 9px system-ui, sans-serif" }}>
					Community
				</text>
				{[
					{ x: 190, c: "#3b82f6", d: "0s" },
					{ x: 212, c: "#8b5cf6", d: "0.3s" },
					{ x: 234, c: "#10b981", d: "0.6s" },
				].map((a) => (
					<g key={a.x}>
						<circle cx={a.x} cy="176" r="12" className="fill-card stroke-border" strokeWidth="1.5">
							<animate attributeName="opacity" values="0.6;1;0.6" dur="3s" begin={a.d} repeatCount="indefinite" />
						</circle>
						<circle cx={a.x} cy="172" r="3.5" fill={a.c} />
						<path d={`M${a.x - 6} 183 a6 5 0 0 1 12 0 Z`} fill={a.c} />
					</g>
				))}
				<circle cx="256" cy="176" r="12" className="fill-primary/15" />
				<text x="256" y="176" textAnchor="middle" dominantBaseline="central" className="fill-primary" style={{ font: "700 8px system-ui, sans-serif" }}>
					+9
				</text>
			</g>
		</>
	);
}

/* Spotlight — ship in minutes: a fast deploy against a stopwatch */
function QuickShipGraphic() {
	const steps = [
		{ x: 116, label: "Repo", color: "#3b82f6" },
		{ x: 200, label: "Stack", color: "#8b5cf6" },
		{ x: 284, label: "Deploy", color: "#10b981" },
	];
	return (
		<>
			<BackgroundLayer id="quick" from="#8b5cf6" to="#10b981" />
			<defs>
				<linearGradient id="quick-flow" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stopColor="#8b5cf6" />
					<stop offset="100%" stopColor="#10b981" />
				</linearGradient>
			</defs>

			{/* stopwatch */}
			<g>
				<line x1="200" y1="58" x2="200" y2="66" className="stroke-primary/60" strokeWidth="3" strokeLinecap="round" />
				<circle cx="200" cy="98" r="30" className="fill-card stroke-border" strokeWidth="2" />
				<circle cx="200" cy="98" r="30" fill="none" stroke="url(#quick-flow)" strokeWidth="3" strokeLinecap="round" pathLength={1} strokeDasharray="1 1">
					<animate attributeName="stroke-dashoffset" values="1;0.7" dur="2.4s" repeatCount="indefinite" />
				</circle>
				{/* hand */}
				<line x1="200" y1="98" x2="200" y2="80" className="stroke-foreground" strokeWidth="2" strokeLinecap="round">
					<animateTransform attributeName="transform" type="rotate" from="0 200 98" to="360 200 98" dur="2.4s" repeatCount="indefinite" />
				</line>
				<circle cx="200" cy="98" r="3" className="fill-foreground" />
			</g>

			{/* pipeline track + flow */}
			<line x1="131" y1="168" x2="269" y2="168" className="stroke-primary/20" strokeWidth="2" strokeLinecap="round" />
			<line x1="131" y1="168" x2="269" y2="168" stroke="url(#quick-flow)" strokeWidth="2" strokeLinecap="round" pathLength={1} strokeDasharray="0.3 0.7">
				<animate attributeName="stroke-dashoffset" values="1;0" dur="1.8s" repeatCount="indefinite" />
			</line>

			{steps.map((s, i) => (
				<g key={s.label}>
					<circle cx={s.x} cy="168" r="15" className="fill-card stroke-border" strokeWidth="1.5" />
					<circle cx={s.x} cy="168" r="5" fill={s.color}>
						<animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
					</circle>
					<text x={s.x} y="196" textAnchor="middle" dominantBaseline="central" className="fill-muted-foreground" style={{ font: "600 9px system-ui, sans-serif" }}>
						{s.label}
					</text>
				</g>
			))}

			{/* live-in-minutes badge */}
			<g>
				<rect x="132" y="220" width="136" height="26" rx="13" className="fill-emerald-500/15 stroke-emerald-500/40" strokeWidth="1" />
				<circle cx="150" cy="233" r="3" fill="#10b981">
					<animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite" />
				</circle>
				<text x="204" y="233" textAnchor="middle" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400" style={{ font: "700 10px system-ui, sans-serif" }}>
					Live in minutes
				</text>
			</g>
		</>
	);
}
