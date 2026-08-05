import type { LucideIcon } from "lucide-react";
import {
	Bell,
	Bot,
	Database,
	FileSearch,
	GitBranch,
	HeartPulse,
	MessageSquare,
	Rocket,
	Server,
	ShieldCheck,
	Sparkles,
	Users,
	Wrench,
} from "lucide-react";

/** @deprecated Use `@/constants/site-nav` */
export { siteNavLinks as homeNavLinks } from "@/constants/site-nav";

/** ─── Hero ───────────────────────────────────────────────────── */

export const heroContent = {
	eyebrow: "AI-NATIVE DEVOPS PLATFORM [2026]",
	headline: "SHIP YOUR APP. SKIP THE DEVOPS.",
	headlineHighlight: "DEVOPS",
	subline:
		"Sagyboar is your AI DevOps agent — it builds, deploys, monitors, and heals so you can focus on shipping.",
	cta: "DEPLOY YOUR APP →",
	badges: ["AI-POWERED", "SELF-HEALING", "SECURE BY DESIGN"] as const,
};

export type TerminalLine = {
	text: string;
	type?: "default" | "success" | "error" | "info";
};

export const agentTerminalLines: TerminalLine[] = [
	{ text: "Agent initialized — Sagyboar v2.4.0", type: "info" },
	{ text: "Scanning repository… main @ a3f9c12", type: "default" },
	{
		text: "ERROR: Health check failed on /api/users — 502 Bad Gateway",
		type: "error",
	},
	{ text: "Analyzing stack trace and recent deploy diff…", type: "default" },
	{ text: "Generating fix: connection pool exhaustion in db.ts", type: "info" },
	{ text: "Running test suite… 142 tests", type: "default" },
	{ text: "✓ All tests passed (4.2s)", type: "success" },
	{ text: "Building container image… sagyboar/api:latest", type: "default" },
	{ text: "Pushing to registry… done", type: "default" },
	{ text: "Deploying to production… rolling update", type: "default" },
	{ text: "Health checks passing — latency 42ms", type: "success" },
	{ text: "Auto-heal complete.", type: "success" },
	{ text: "Your app is live. → https://app.example.com", type: "success" },
];

/** ─── Pipeline ─────────────────────────────────────────────────── */

export type PipelineStage = {
	id: string;
	label: string;
	meta: string;
	icon: LucideIcon;
};

export const pipelineStages: PipelineStage[] = [
	{ id: "commit", label: "COMMIT", meta: "a3f9c12", icon: GitBranch },
	{ id: "build", label: "BUILD", meta: "8s", icon: Wrench },
	{ id: "deploy", label: "DEPLOY", meta: "Live", icon: Rocket },
	{ id: "agent", label: "AI AGENT", meta: "Active", icon: Bot },
	{ id: "heal", label: "HEAL", meta: "OK", icon: HeartPulse },
];

/** ─── Trust strip ──────────────────────────────────────────────── */

export const trustStrip = {
	headline: "Trusted by engineers scaling modern stacks",
	logos: ["Documentsheet", "Craftfosslabs", "Hoodninja", "Volnyn"] as const,
};

/** ─── Features bento ─────────────────────────────────────────── */

export type FeatureTile = {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	size: "hero" | "wide" | "default";
	accent?: boolean;
};

export const featureTiles: FeatureTile[] = [
	{
		id: "deployment",
		title: "Application Deployment",
		description:
			"One-click deploys to fully managed infrastructure with zero cloud lock-in.",
		icon: Rocket,
		size: "hero",
		accent: true,
	},
	{
		id: "cicd",
		title: "CI/CD & Git",
		description:
			"Connect any repo. Auto-build on push with preview environments.",
		icon: GitBranch,
		size: "default",
	},
	{
		id: "monitoring",
		title: "AI Monitoring",
		description:
			"Real-time metrics, anomaly detection, and intelligent alerting.",
		icon: Sparkles,
		size: "default",
	},
	{
		id: "diagnosis",
		title: "AI Error Diagnosis",
		description:
			"Plain-language root cause analysis from logs and stack traces.",
		icon: FileSearch,
		size: "wide",
	},
	{
		id: "healing",
		title: "Self-Healing",
		description: "Automatic remediation for common production failures.",
		icon: HeartPulse,
		size: "default",
	},
	{
		id: "database",
		title: "Database Management",
		description: "Provision, backup, and scale databases from one dashboard.",
		icon: Database,
		size: "default",
	},
	{
		id: "infra",
		title: "Multi-Server & Infra",
		description: "Orchestrate multi-service workloads across servers.",
		icon: Server,
		size: "default",
	},
	{
		id: "notifications",
		title: "Notifications & Alerting",
		description: "Slack, email, and webhook alerts with severity routing.",
		icon: Bell,
		size: "default",
	},
	{
		id: "team",
		title: "Managed Team",
		description: "Dedicated developer, DevOps engineer, and QA on your stack.",
		icon: Users,
		size: "default",
	},
	{
		id: "review",
		title: "Weekly Code Review",
		description: "AI-assisted reviews with actionable improvement reports.",
		icon: MessageSquare,
		size: "default",
	},
	{
		id: "security",
		title: "Security & Access",
		description: "RBAC, SSO, audit logs, and deployment approval workflows.",
		icon: ShieldCheck,
		size: "default",
	},
];

export const customFeatureTile = {
	title: "Need something custom?",
	description:
		"Talk to us about enterprise requirements and custom integrations.",
	cta: "Contact sales",
	href: "/contact",
};

/** ─── Dashboard showcase ───────────────────────────────────────── */

export const dashboardShowcase = {
	eyebrow: "PRODUCT",
	title: "Fully",
	titleHighlight: "Managed",
	titleSuffix: "Setup",
	subline:
		"A unified control plane for deployments, services, and AI operations.",
	tabs: ["Sagyboar Dashboard", "Sagy AI"] as const,
	/** Workspace shown in the mock dashboard's project switcher */
	project: { name: "sagyboar", initials: "SB" },
};

export type DashboardStat = {
	label: string;
	value: string;
	status?: "running" | "errored" | "idle";
	/** Change chip, e.g. "+3 this week" */
	delta?: string;
	/** Normalised series (0–1) for the tile sparkline */
	trend?: number[];
};

export const dashboardStats: DashboardStat[] = [
	{
		label: "Projects",
		value: "12",
		delta: "+2",
		trend: [0.3, 0.35, 0.45, 0.4, 0.6, 0.72, 0.8],
	},
	{
		label: "Services",
		value: "34",
		status: "running",
		delta: "+5",
		trend: [0.25, 0.4, 0.38, 0.55, 0.62, 0.7, 0.9],
	},
	{
		label: "Deploys",
		value: "1,284",
		delta: "+128",
		trend: [0.2, 0.3, 0.5, 0.45, 0.65, 0.85, 0.95],
	},
	{
		label: "Uptime",
		value: "99.98%",
		status: "running",
		delta: "30d",
		trend: [0.9, 0.94, 0.92, 0.97, 0.95, 0.99, 1],
	},
];

/** Left rail of the mock dashboard shell */
export const dashboardNav = [
	{ label: "Overview", active: true },
	{ label: "Services", badge: "34" },
	{ label: "Databases", badge: "6" },
	{ label: "Logs" },
	{ label: "AI Ops", badge: "2" },
];

export type DeploymentRow = {
	name: string;
	env: string;
	time: string;
	status: "running" | "errored" | "idle" | "deploying";
	stack: string;
	commit: string;
	duration: string;
	/** 0–100, only for in-flight deploys */
	progress?: number;
};

export const recentDeployments: DeploymentRow[] = [
	{
		name: "api-gateway",
		env: "production",
		time: "2m ago",
		status: "running",
		stack: "Node 20",
		commit: "a7f3c91",
		duration: "48s",
	},
	{
		name: "checkout-svc",
		env: "production",
		time: "now",
		status: "deploying",
		stack: "Go 1.22",
		commit: "e10bd44",
		duration: "22s",
		progress: 68,
	},
	{
		name: "worker-queue",
		env: "staging",
		time: "18m ago",
		status: "running",
		stack: "Python 3.12",
		commit: "5c8ae02",
		duration: "36s",
	},
	{
		name: "legacy-auth",
		env: "production",
		time: "1h ago",
		status: "errored",
		stack: "Node 16",
		commit: "b22f7de",
		duration: "1m 12s",
	},
	{
		name: "frontend-web",
		env: "preview",
		time: "3h ago",
		status: "idle",
		stack: "Next 15",
		commit: "9de1a05",
		duration: "41s",
	},
];

export type SagyAiStep = {
	label: string;
	detail: string;
	tone: "alert" | "thinking" | "action" | "success";
	elapsed: string;
	diff?: { removed: string; added: string };
};

export const sagyAiSteps: SagyAiStep[] = [
	{
		label: "Anomaly detected",
		detail:
			"Error rate on legacy-auth jumped to 4.8% (502s) across 3 replicas.",
		tone: "alert",
		elapsed: "0s",
	},
	{
		label: "Root cause found",
		detail:
			"Connection pool exhausted in db.ts:142 — no retry on acquire timeout.",
		tone: "thinking",
		elapsed: "6s",
	},
	{
		label: "Fix generated",
		detail:
			"Raised pool ceiling and added bounded retry, then ran the test suite.",
		tone: "action",
		elapsed: "19s",
		diff: {
			removed: "pool: { max: 10 }",
			added: "pool: { max: 50, retryOnTimeout: true }",
		},
	},
	{
		label: "Deployed & verified",
		detail:
			"Rolling update complete. Error rate back to 0.02%, health checks green.",
		tone: "success",
		elapsed: "42s",
	},
];

export const sagyAiMetrics = [
	{ label: "Time to resolve", value: "42s" },
	{ label: "Human approvals", value: "0" },
	{ label: "Rollbacks", value: "0" },
];

/** ─── Performance stats ────────────────────────────────────────── */

export const performanceStats = [
	{
		metric: "<60s",
		label: "Sub-Minute Deploys",
		description: "From push to production in under a minute.",
		icon: Rocket,
	},
	{
		metric: "99.9%",
		label: "Uptime",
		description: "SLA-backed reliability on managed infrastructure.",
		icon: HeartPulse,
	},
	{
		metric: "40+",
		label: "Supported Stacks",
		description: "Any containerized language or framework.",
		icon: Server,
	},
	{
		metric: "24/7",
		label: "Active Monitoring",
		description: "Always-on AI agent watching your production.",
		icon: Sparkles,
	},
] as const;

/** ─── Testimonials ───────────────────────────────────────────────── */

export const testimonials = [
	{
		quote:
			"Sagyboar replaced our entire DevOps hire. Deploys that took hours now happen in minutes, and the auto-healing has saved us twice this quarter.",
		name: "Prakash",
		company: "Documentsheet",
		initial: "P",
	},
	{
		quote:
			"The AI agent caught a memory leak before our users did. It diagnosed the issue, opened a PR, and had a fix deployed — all while we slept.",
		name: "Anirudh Jadeja",
		company: "Independent Engineer",
		initial: "A",
	},
] as const;

/** ─── FAQ ──────────────────────────────────────────────────────── */

export const homeFaqItems = [
	{
		question: "What is Sagyboar?",
		answer:
			"Sagyboar is an AI-native DevOps platform that auto-generates deployment configs, monitors production, and auto-heals errors on fully managed infrastructure — with zero cloud lock-in.",
	},
	{
		question: "Do I need to provide my own server to deploy applications?",
		answer:
			"No. Deploy to our fully managed servers in minutes. You can also self-host or bring your own cloud when you prefer — no vendor lock-in.",
	},
	{
		question: "How does the embedded AI deployment assistant work?",
		answer:
			"Connect your repository and our AI detects your stack, generates Dockerfiles and Compose configs, and recommends infrastructure sizing automatically.",
	},
	{
		question: "What happens when an error or anomaly occurs in my application?",
		answer:
			"Our agent analyzes logs and metrics, surfaces plain-language explanations, opens tickets in your repo, and auto-heals common server errors without manual intervention.",
	},
	{
		question: "What is included in the Fully Managed Maintenance service?",
		answer:
			"A dedicated developer, DevOps engineer, and QA tester powered by AI — so your team can focus on building while we handle operations.",
	},
	{
		question: "Is there a limit on the number of deployments or databases?",
		answer:
			"No limits. Deploy unlimited containerized applications and manage complex databases from a single unified dashboard.",
	},
	{
		question: "Can I use Sagyboar to deploy AI-built apps?",
		answer:
			"Yes. Sagyboar works with code from any source, including AI coding tools. Our assistant auto-generates configs so you ship quickly and securely.",
	},
	{
		question: "What types of languages and frameworks are supported?",
		answer:
			"Any language that can be containerized. Our AI auto-detects and writes configurations for most modern frameworks natively.",
	},
] as const;

/** ─── Final CTA ──────────────────────────────────────────────────── */

export const finalCta = {
	headline: "STOP MANAGING INFRASTRUCTURE. START SHIPPING.",
	subline:
		"Join engineers who deploy faster with an AI DevOps agent that never sleeps.",
	cta: "Deploy Your First App",
};

/** ─── Footer ───────────────────────────────────────────────────── */

export const footerTagline = "Deploy your applications with ease";
