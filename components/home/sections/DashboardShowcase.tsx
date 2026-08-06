"use client";

import { BrowserFrame } from "@/components/design-system/BrowserFrame";
import {
	ScrollReveal,
	ScrollRevealItem,
} from "@/components/design-system/ScrollReveal";
import { SectionHeading } from "@/components/design-system/SectionHeading";
import { StatusDot } from "@/components/design-system/StatusDot";
import { useReducedMotion } from "@/components/design-system/useReducedMotion";
import {
	type DashboardStat,
	type DeploymentRow,
	type SagyAiStep,
	dashboardNav,
	dashboardShowcase,
	dashboardStats,
	recentDeployments,
	sagyAiMetrics,
	sagyAiSteps,
} from "@/components/home/data/home-content";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
	AlertTriangle,
	ArrowUpRight,
	CheckCircle2,
	LayoutDashboard,
	ScanSearch,
	Sparkles,
	Wrench,
} from "lucide-react";
import { useState } from "react";

const tabIcons = {
	"Sagyboar Dashboard": LayoutDashboard,
	"Sagy AI": Sparkles,
} as const;

const frameTitles = {
	"Sagyboar Dashboard": "dashboard.sagyboar.space",
	"Sagy AI": "sagy-ai — incident #4417",
} as const;

export function DashboardShowcase() {
	const [activeTab, setActiveTab] = useState<
		(typeof dashboardShowcase.tabs)[number]
	>(dashboardShowcase.tabs[0]);
	const reducedMotion = useReducedMotion();

	return (
		<ScrollReveal
			as="section"
			className="relative z-10 px-4 py-24 sm:px-6 sm:py-28"
			aria-label="Dashboard showcase"
			stagger
		>
			<div className="mx-auto max-w-6xl">
				<ScrollRevealItem>
					<SectionHeading
						eyebrow={dashboardShowcase.eyebrow}
						title={`${dashboardShowcase.title} ${dashboardShowcase.titleHighlight} ${dashboardShowcase.titleSuffix}`}
						titleHighlight={dashboardShowcase.titleHighlight}
						subline={dashboardShowcase.subline}
						align="center"
						className="mx-auto mb-10"
					/>
				</ScrollRevealItem>

				<ScrollRevealItem>
					<div
						className="mx-auto mb-8 flex w-fit rounded-full border border-sagy-border bg-sagy-surface p-1"
						role="tablist"
						aria-label="Dashboard view toggle"
					>
						{dashboardShowcase.tabs.map((tab) => {
							const Icon = tabIcons[tab];
							const active = activeTab === tab;

							return (
								<button
									key={tab}
									type="button"
									role="tab"
									aria-selected={active}
									onClick={() => setActiveTab(tab)}
									className={cn(
										"relative flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sagy-accent",
										active
											? "text-sagy-heading"
											: "text-sagy-muted hover:text-sagy-body",
									)}
								>
									{active && (
										<motion.span
											layoutId={reducedMotion ? undefined : "showcase-tab"}
											className="absolute inset-0 rounded-full bg-sagy-accent shadow-sagy-glow"
											transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
											aria-hidden="true"
										/>
									)}
									<span className="relative z-10 flex items-center gap-2">
										<Icon
											className="size-3.5"
											strokeWidth={2}
											aria-hidden="true"
										/>
										{tab}
									</span>
								</button>
							);
						})}
					</div>
				</ScrollRevealItem>

				<ScrollRevealItem>
					<div className="relative">
						<div
							className="pointer-events-none absolute -inset-x-10 -top-8 bottom-0 bg-sagy-cta-glow opacity-40 blur-2xl"
							aria-hidden="true"
						/>
						<BrowserFrame
							title={frameTitles[activeTab]}
							className="relative"
							contentClassName="overflow-hidden"
						>
							<AnimatePresence mode="wait" initial={false}>
								<motion.div
									key={activeTab}
									initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
									animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
									exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
									transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
								>
									{activeTab === "Sagyboar Dashboard" ? (
										<DashboardView />
									) : (
										<SagyAiView />
									)}
								</motion.div>
							</AnimatePresence>

							<FrameStatusBar tab={activeTab} />
						</BrowserFrame>
					</div>
				</ScrollRevealItem>
			</div>
		</ScrollReveal>
	);
}

function FrameStatusBar({
	tab,
}: {
	tab: (typeof dashboardShowcase.tabs)[number];
}) {
	return (
		<div className="flex items-center justify-between gap-3 border-t border-sagy-border bg-sagy-bg/40 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-sagy-muted">
			<span>
				{tab === "Sagy AI" ? "auto-heal: enabled" : "region: ap-south-1"}
			</span>
			<span className="flex items-center gap-2">
				<StatusDot status="running" />
				live · synced 3s ago
			</span>
		</div>
	);
}

/* ─── Dashboard view ─────────────────────────────────────────────── */

function Sparkline({ points }: { points: number[] }) {
	const coords = points
		.map((point, index) => {
			const x = (index / (points.length - 1)) * 100;
			const y = 26 - point * 22;
			return `${x},${y}`;
		})
		.join(" ");

	return (
		<svg
			viewBox="0 0 100 28"
			preserveAspectRatio="none"
			className="mt-3 h-6 w-full text-sagy-accent"
			aria-hidden="true"
		>
			<polyline
				points={`0,28 ${coords} 100,28`}
				fill="currentColor"
				opacity="0.12"
			/>
			<polyline
				points={coords}
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				vectorEffect="non-scaling-stroke"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function StatTile({ stat }: { stat: DashboardStat }) {
	return (
		<div className="sagy-spotlight group relative overflow-hidden rounded-xl border border-sagy-border bg-sagy-bg/60 p-4 transition-colors duration-300 hover:border-sagy-accent/30">
			<div className="flex items-start justify-between gap-2">
				<p className="font-mono text-[10px] uppercase tracking-wider text-sagy-muted">
					{stat.label}
				</p>
				{stat.delta && (
					<span className="flex items-center gap-0.5 rounded-full border border-sagy-success/25 bg-sagy-success/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-sagy-success">
						<ArrowUpRight className="size-2.5" aria-hidden="true" />
						{stat.delta}
					</span>
				)}
			</div>
			<div className="mt-2 flex items-center gap-2">
				<p className="font-display text-2xl leading-none text-sagy-heading">
					{stat.value}
				</p>
				{stat.status && <StatusDot status={stat.status} />}
			</div>
			{stat.trend && <Sparkline points={stat.trend} />}
		</div>
	);
}

const envTone: Record<string, string> = {
	production: "border-sagy-accent/25 bg-sagy-accent/10 text-sagy-accent",
	staging: "border-sagy-border bg-sagy-heading/[0.04] text-sagy-body",
	preview: "border-sagy-border bg-sagy-heading/[0.04] text-sagy-muted",
};

function DeploymentItem({ deployment }: { deployment: DeploymentRow }) {
	const inFlight = deployment.status === "deploying";

	return (
		<div
			className={cn(
				"sagy-spotlight group relative overflow-hidden rounded-xl border border-sagy-border bg-sagy-bg/50 px-4 py-3 transition-colors duration-300 hover:border-sagy-heading/15",
				inFlight && "border-sagy-accent/30",
			)}
		>
			<div className="flex items-center justify-between gap-4">
				<div className="min-w-0">
					<div className="flex flex-wrap items-center gap-2">
						<p className="font-sans text-sm text-sagy-heading">{deployment.name}</p>
						<span
							className={cn(
								"rounded-full border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider",
								envTone[deployment.env] ?? envTone.staging,
							)}
						>
							{deployment.env}
						</span>
					</div>
					<p className="mt-1 flex flex-wrap items-center gap-x-2 font-mono text-[10px] text-sagy-muted">
						<span>{deployment.stack}</span>
						<span aria-hidden="true">·</span>
						<span>{deployment.commit}</span>
						<span aria-hidden="true">·</span>
						<span>{deployment.duration}</span>
						<span aria-hidden="true">·</span>
						<span>{deployment.time}</span>
					</p>
				</div>

				<div className="flex shrink-0 items-center gap-3">
					{inFlight ? (
						<span className="font-mono text-[10px] uppercase tracking-wider text-sagy-accent">
							deploying
						</span>
					) : (
						<span className="font-mono text-[10px] uppercase tracking-wider text-sagy-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100">
							view logs
						</span>
					)}
					{deployment.status === "deploying" ? (
						<span
							className="size-2 shrink-0 rounded-full bg-sagy-accent motion-safe:animate-pulse"
							aria-hidden="true"
						/>
					) : (
						<StatusDot status={deployment.status} />
					)}
				</div>
			</div>

			{inFlight && deployment.progress !== undefined && (
				<div
					className="mt-3 h-1 w-full overflow-hidden rounded-full bg-sagy-heading/[0.06]"
					aria-hidden="true"
				>
					<div
						className="h-full rounded-full bg-sagy-accent"
						style={{ width: `${deployment.progress}%` }}
					/>
				</div>
			)}
		</div>
	);
}

function DashboardView() {
	return (
		<div className="grid lg:grid-cols-[13rem_1fr]">
			<aside className="hidden flex-col justify-between border-r border-sagy-border bg-sagy-bg/40 p-4 lg:flex">
				<div>
					<div className="flex items-center gap-2 rounded-lg border border-sagy-border bg-sagy-heading/[0.04] px-2.5 py-2">
						<span
							className="flex size-5 items-center justify-center rounded bg-sagy-accent/15 font-mono text-[9px] text-sagy-accent"
							aria-hidden="true"
						>
							{dashboardShowcase.project.initials}
						</span>
						<span className="font-sans text-xs text-sagy-heading">
							{dashboardShowcase.project.name}
						</span>
					</div>

					<ul className="mt-4 space-y-0.5">
						{dashboardNav.map((item) => (
							<li key={item.label}>
								<span
									className={cn(
										"flex items-center justify-between rounded-lg px-2.5 py-2 font-sans text-xs",
										item.active
											? "bg-sagy-accent/10 text-sagy-heading"
											: "text-sagy-muted",
									)}
								>
									{item.label}
									{item.badge && (
										<span className="font-mono text-[9px] text-sagy-muted">
											{item.badge}
										</span>
									)}
								</span>
							</li>
						))}
					</ul>
				</div>

				<div className="mt-6 rounded-lg border border-sagy-border bg-sagy-heading/[0.02] p-3">
					<p className="font-mono text-[9px] uppercase tracking-wider text-sagy-muted">
						Cluster load
					</p>
					<div
						className="mt-2 h-1 w-full overflow-hidden rounded-full bg-sagy-heading/[0.06]"
						aria-hidden="true"
					>
						<div className="h-full w-[38%] rounded-full bg-sagy-success" />
					</div>
					<p className="mt-2 font-mono text-[10px] text-sagy-body">
						38% of 16 vCPU
					</p>
				</div>
			</aside>

			<div className="space-y-6 p-4 sm:p-6">
				<div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
					{dashboardStats.map((stat) => (
						<StatTile key={stat.label} stat={stat} />
					))}
				</div>

				<div>
					<div className="mb-3 flex items-center justify-between">
						<p className="font-mono text-[10px] uppercase tracking-wider text-sagy-muted">
							Recent deployments
						</p>
						<p className="font-mono text-[10px] uppercase tracking-wider text-sagy-muted">
							last 24h
						</p>
					</div>
					<div className="space-y-2">
						{recentDeployments.map((deployment) => (
							<DeploymentItem key={deployment.name} deployment={deployment} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

/* ─── Sagy AI view ───────────────────────────────────────────────── */

const stepTone = {
	alert: {
		icon: AlertTriangle,
		chip: "border-sagy-error/30 bg-sagy-error/10 text-sagy-error",
		node: "bg-sagy-error",
	},
	thinking: {
		icon: ScanSearch,
		chip: "border-sagy-accent/30 bg-sagy-accent/10 text-sagy-accent",
		node: "bg-sagy-accent",
	},
	action: {
		icon: Wrench,
		chip: "border-sagy-accent/30 bg-sagy-accent/10 text-sagy-accent",
		node: "bg-sagy-accent",
	},
	success: {
		icon: CheckCircle2,
		chip: "border-sagy-success/30 bg-sagy-success/10 text-sagy-success",
		node: "bg-sagy-success",
	},
} as const;

function AiStep({ step, last }: { step: SagyAiStep; last: boolean }) {
	const tone = stepTone[step.tone];
	const Icon = tone.icon;

	return (
		<li className="relative flex gap-4 pb-5 last:pb-0">
			{!last && (
				<span
					className="absolute left-[15px] top-9 bottom-0 w-px bg-gradient-to-b from-white/[0.12] to-transparent"
					aria-hidden="true"
				/>
			)}

			<span
				className={cn(
					"relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border",
					tone.chip,
				)}
			>
				<Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
			</span>

			<div className="min-w-0 flex-1">
				<div className="flex flex-wrap items-center gap-2">
					<p className="font-sans text-sm text-sagy-heading">{step.label}</p>
					<span className="font-mono text-[10px] uppercase tracking-wider text-sagy-muted">
						+{step.elapsed}
					</span>
					{step.tone === "success" && (
						<span
							className="size-1.5 rounded-full bg-sagy-success motion-safe:animate-pulse"
							aria-hidden="true"
						/>
					)}
				</div>
				<p className="mt-1 font-sans text-sm leading-relaxed text-sagy-body">
					{step.detail}
				</p>

				{step.diff && (
					<div className="mt-3 overflow-hidden rounded-lg border border-sagy-border bg-sagy-bg/60 font-mono text-[11px]">
						<p className="border-b border-sagy-border px-3 py-1.5 text-sagy-muted">
							src/db.ts
						</p>
						<p className="flex gap-2 bg-sagy-error/[0.06] px-3 py-1.5 text-sagy-error">
							<span aria-hidden="true">-</span>
							<span className="break-all">{step.diff.removed}</span>
						</p>
						<p className="flex gap-2 bg-sagy-success/[0.06] px-3 py-1.5 text-sagy-success">
							<span aria-hidden="true">+</span>
							<span className="break-all">{step.diff.added}</span>
						</p>
					</div>
				)}
			</div>
		</li>
	);
}

function SagyAiView() {
	return (
		<div className="p-4 sm:p-6">
			<div className="flex flex-wrap items-center justify-between gap-3 border-b border-sagy-border pb-4">
				<div className="flex items-center gap-3">
					<span className="flex size-8 items-center justify-center rounded-lg border border-sagy-accent/25 bg-sagy-accent/10">
						<Sparkles
							className="size-4 text-sagy-accent"
							strokeWidth={1.75}
							aria-hidden="true"
						/>
					</span>
					<div>
						<p className="font-sans text-sm text-sagy-heading">Sagy AI</p>
						<p className="font-mono text-[10px] uppercase tracking-wider text-sagy-muted">
							Incident response · legacy-auth
						</p>
					</div>
				</div>
				<span className="flex items-center gap-2 rounded-full border border-sagy-success/25 bg-sagy-success/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-sagy-success">
					Resolved in 42s
				</span>
			</div>

			<ol className="mt-5">
				{sagyAiSteps.map((step, index) => (
					<AiStep
						key={step.label}
						step={step}
						last={index === sagyAiSteps.length - 1}
					/>
				))}
			</ol>

			<dl className="mt-5 grid grid-cols-3 gap-3 border-t border-sagy-border pt-5">
				{sagyAiMetrics.map((metric) => (
					<div
						key={metric.label}
						className="rounded-xl border border-sagy-border bg-sagy-bg/50 p-3"
					>
						<dt className="font-mono text-[10px] uppercase tracking-wider text-sagy-muted">
							{metric.label}
						</dt>
						<dd className="mt-1 font-display text-xl leading-none text-sagy-heading">
							{metric.value}
						</dd>
					</div>
				))}
			</dl>
		</div>
	);
}
