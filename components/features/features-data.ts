import type { LucideIcon } from "lucide-react";
import {
	Activity,
	Bell,
	Bug,
	Database,
	FileSearch,
	GitBranch,
	HeartPulse,
	Rocket,
	Server,
	ShieldCheck,
	Users,
} from "lucide-react";

export type FeatureBadge = "CORE" | "AI" | "MANAGED" | "NEW";

export type FeatureItem = {
	name: string;
	description: string;
	badge: FeatureBadge;
	image?: string;
	imageAlt?: string;
};

export type FeatureGroup = "Platform" | "AI & Operations";

export type FeaturePageData = {
	slug: string;
	title: string;
	navTitle: string;
	navDescription: string;
	group: FeatureGroup;
	icon: LucideIcon;
	headline: string;
	headlineHighlight: string;
	summary: string;
	items: FeatureItem[];
};

export const featurePages: FeaturePageData[] = [
	{
		slug: "application-deployment",
		title: "Application Deployment",
		navTitle: "Application Deployment",
		navDescription: "Deploy any stack from any source in minutes",
		group: "Platform",
		icon: Rocket,
		headline: "Deploy any stack from any source in minutes",
		headlineHighlight: "in minutes",
		summary:
			"Ship from any Git provider or registry with AI-generated build artifacts and one-click managed hosting — no server provisioning required.",
		items: [
			{
				name: "Multi-source deployment",
				description:
					"Deploy from GitHub, GitLab, Bitbucket, Gitea, Docker registries, or direct ZIP upload. No lock-in to any single provider.",
				badge: "CORE",
			},
			{
				name: "Flexible build strategies",
				description:
					"Choose from Nixpacks, Dockerfile, Railpack, Cloud Native Buildpacks, or pre-built Docker images — auto-detected or manually selected.",
				badge: "CORE",
			},
			{
				name: "AI deployment assistant",
				description:
					"Scans your repository, detects the tech stack, and auto-generates a production-ready Dockerfile, Docker Compose config, and environment variable scaffolding.",
				badge: "AI",
			},
			{
				name: "Infrastructure sizing recommendations",
				description:
					"AI recommends optimal CPU and RAM allocation based on detected stack type and estimated load — no more guesswork on server sizing.",
				badge: "AI",
			},
			{
				name: "Artifact review & edit",
				description:
					"All AI-generated Dockerfiles and Compose files are presented as editable drafts before deployment. Full developer control is preserved.",
				badge: "CORE",
			},
			{
				name: "One-click managed hosting",
				description:
					"Deploy on Sagyboar's own infrastructure in minutes. No VPS setup, no SSH keys, no server provisioning required.",
				badge: "MANAGED",
			},
		],
	},
	{
		slug: "ci-cd-git-integration",
		title: "CI/CD & Git Integration",
		navTitle: "CI/CD & Git",
		navDescription: "Automated pipelines from commit to production",
		group: "Platform",
		icon: GitBranch,
		headline: "Automated pipelines from commit to production",
		headlineHighlight: "to production",
		summary:
			"Push to any branch and let Sagyboar build, preview, and ship — with zero-downtime rolling updates and automatic rollback baked in.",
		items: [
			{
				name: "Webhook-triggered deployments",
				description:
					"Push to any branch and trigger automatic deployments instantly via Git webhooks across GitHub, GitLab, Bitbucket, and Gitea.",
				badge: "CORE",
			},
			{
				name: "PR preview environments",
				description:
					"Ephemeral preview environments are spun up automatically for every pull request, giving reviewers a live URL to test changes before merge.",
				badge: "CORE",
			},
			{
				name: "Branch-based environment targeting",
				description:
					"Map Git branches to specific environments (e.g. main to production, develop to staging) with independent deployment configurations per branch.",
				badge: "CORE",
			},
			{
				name: "Zero-downtime rolling updates",
				description:
					"Health-check-based rolling updates keep services live during deploys. Automatic rollback triggers if the new version fails health checks.",
				badge: "CORE",
			},
		],
	},
	{
		slug: "ai-monitoring-observability",
		title: "AI Monitoring & Observability",
		navTitle: "AI Monitoring",
		navDescription: "Active intelligence, not passive dashboards",
		group: "AI & Operations",
		icon: Activity,
		headline: "Active intelligence, not passive dashboards",
		headlineHighlight: "passive dashboards",
		summary:
			"Stream logs and metrics in real time while AI detects anomalies, forecasts saturation, and correlates cascading failures across your stack.",
		items: [
			{
				name: "Real-time log streaming",
				description:
					"Application, container, and Traefik access logs stream live to the dashboard via WebSockets. No polling, no delay.",
				badge: "CORE",
			},
			{
				name: "Container metrics monitoring",
				description:
					"CPU, memory, and network usage tracked per container with visual dashboards for at-a-glance health status.",
				badge: "CORE",
			},
			{
				name: "AI anomaly detection",
				description:
					"Continuously analyses log patterns and metric trends. Detects error rate spikes, latency degradation, and new failure patterns before they escalate.",
				badge: "AI",
			},
			{
				name: "Resource forecasting",
				description:
					"Tracks CPU, memory, and disk consumption trends and generates forward-looking saturation forecasts so you can scale before hitting a wall.",
				badge: "AI",
			},
			{
				name: "Cascading failure correlation",
				description:
					"Cross-correlates events across all services to identify when one failing dependency is causing downstream failures throughout the stack.",
				badge: "AI",
			},
			{
				name: "AI incident dashboard",
				description:
					"Unified view of all AI-enriched observability signals: deployment health, error trends, incident timeline, resource graphs, and AI-generated health summaries.",
				badge: "AI",
			},
		],
	},
	{
		slug: "ai-error-diagnosis",
		title: "AI Error Diagnosis & Automatic Ticketing",
		navTitle: "AI Error Diagnosis",
		navDescription: "From detection to assigned ticket in seconds",
		group: "AI & Operations",
		icon: Bug,
		headline: "From detection to assigned ticket in seconds",
		headlineHighlight: "in seconds",
		summary:
			"Sagyboar analyses stack traces, identifies root causes, and auto-creates prioritized tickets in your repo — routed to the first available developer.",
		items: [
			{
				name: "Stack trace analysis",
				description:
					"Full stack traces from application logs are parsed and analysed automatically to pinpoint the exact failure point and affected code path.",
				badge: "AI",
			},
			{
				name: "Root cause identification",
				description:
					"Identifies probable root causes — OOM errors, dependency failures, misconfigurations, or code bugs — with confidence scores per diagnosis.",
				badge: "AI",
			},
			{
				name: "Remediation recommendations",
				description:
					"Generates specific resolution steps with configuration snippets or code examples, estimated resolution time, and priority level for each issue.",
				badge: "AI",
			},
			{
				name: "Automatic issue ticketing",
				description:
					"When an error is detected, Sagyboar auto-creates a ticket in your connected repository (GitHub Issues, GitLab, Jira) with a full AI-generated description, priority, and estimated fix time.",
				badge: "NEW",
			},
			{
				name: "Priority-based agent assignment",
				description:
					"High-priority tickets are instantly routed to the first available developer on your team. No manual triage, no delay in response to critical issues.",
				badge: "NEW",
			},
			{
				name: "Incident history & correlation",
				description:
					"Stores all past diagnoses and cross-references new issues against historical patterns to identify recurring problems and surface long-term fixes.",
				badge: "AI",
			},
		],
	},
	{
		slug: "autonomous-self-healing",
		title: "Autonomous Self-Healing",
		navTitle: "Self-Healing",
		navDescription: "Automated remediation with human oversight",
		group: "AI & Operations",
		icon: HeartPulse,
		headline: "Automated remediation with human-in-the-loop control",
		headlineHighlight: "human-in-the-loop control",
		summary:
			"Recover crashed services, scale on threshold breaches, and roll back instantly — with high-impact actions gated behind operator approval.",
		items: [
			{
				name: "Auto-restart crashed services",
				description:
					"Detects container crashes and health check failures, then automatically restarts services and validates recovery without manual intervention.",
				badge: "AI",
			},
			{
				name: "Swarm service recovery",
				description:
					"Monitors Docker Swarm service health and automatically recovers failed nodes and services within the cluster.",
				badge: "AI",
			},
			{
				name: "Auto-scaling on threshold breach",
				description:
					"Scales replicas up automatically when resource thresholds are exceeded and triggers dependency service restarts on downstream failure detection.",
				badge: "AI",
			},
			{
				name: "Human approval workflows",
				description:
					"High-impact actions (e.g. database restarts, config overrides) require operator approval via Slack or email before execution. Configurable per action class.",
				badge: "CORE",
			},
			{
				name: "Plain-language action explanations",
				description:
					"Every autonomous action is accompanied by a plain-language explanation of what happened, why the action was taken, and what was resolved.",
				badge: "AI",
			},
			{
				name: "One-click rollback",
				description:
					"Any autonomous action or deployment can be reversed with a single click, re-triggering the last successful deployment state instantly.",
				badge: "CORE",
			},
		],
	},
	{
		slug: "database-management",
		title: "Database Management",
		navTitle: "Database Management",
		navDescription: "Provision, back up, and restore with your apps",
		group: "Platform",
		icon: Database,
		headline: "Provision, back up, and restore databases alongside your apps",
		headlineHighlight: "alongside your apps",
		summary:
			"Run PostgreSQL, MySQL, MongoDB, Redis, and more as managed containers with scheduled backups to any S3-compatible destination.",
		items: [
			{
				name: "Multi-engine support",
				description:
					"Provision PostgreSQL, MySQL, MariaDB, MongoDB, Redis, and LibSQL as Docker containers — all managed from the same dashboard as your applications.",
				badge: "CORE",
			},
			{
				name: "Automated backup scheduling",
				description:
					"Cron-based backup scheduling with destinations including AWS S3, MinIO, and DigitalOcean Spaces. In-dashboard restore from any backup point.",
				badge: "CORE",
			},
			{
				name: "Volume backups",
				description:
					"Full Docker volume backup support ensures persistent data is protected alongside database snapshots.",
				badge: "CORE",
			},
			{
				name: "Flexible backup destinations",
				description:
					"Any S3-compatible storage endpoint is supported as a backup destination, covering most enterprise and cloud storage needs.",
				badge: "CORE",
			},
		],
	},
	{
		slug: "multi-server-infrastructure",
		title: "Multi-Server & Infrastructure Management",
		navTitle: "Multi-Server & Infra",
		navDescription: "Centralized control over distributed infra",
		group: "Platform",
		icon: Server,
		headline: "Centralized control over distributed infrastructure",
		headlineHighlight: "distributed infrastructure",
		summary:
			"Manage your entire server fleet from one control plane with Docker Swarm orchestration, browser terminals, and automatic Traefik SSL.",
		items: [
			{
				name: "Remote server management",
				description:
					"Connect and manage any number of remote VPS servers via SSH key authentication. Deploy and orchestrate across your entire fleet from one control plane.",
				badge: "CORE",
			},
			{
				name: "Docker Swarm orchestration",
				description:
					"Native Docker Swarm integration for multi-node clustering, horizontal scaling, and high-availability deployments without Kubernetes complexity.",
				badge: "CORE",
			},
			{
				name: "Browser terminal access",
				description:
					"SSH directly into any container from the browser. No local SSH setup required — full terminal access in a single click.",
				badge: "CORE",
			},
			{
				name: "Traefik reverse proxy & SSL",
				description:
					"Automatic Traefik configuration for custom domains, HTTP-to-HTTPS redirects, wildcard domains, and Let's Encrypt SSL provisioning and renewal.",
				badge: "CORE",
			},
		],
	},
	{
		slug: "notifications-alerting",
		title: "Notifications & Alerting",
		navTitle: "Notifications & Alerting",
		navDescription: "AI-enriched alerts where your team works",
		group: "Platform",
		icon: Bell,
		headline: "AI-enriched alerts delivered where your team works",
		headlineHighlight: "where your team works",
		summary:
			"Deployment, health, and backup events arrive in Slack, Discord, Telegram, email, or webhooks — enriched with AI explanations and severity.",
		items: [
			{
				name: "Multi-channel notifications",
				description:
					"Deployment events, health alerts, and backup statuses delivered to Email, Slack, Discord, Telegram, or any custom webhook endpoint.",
				badge: "CORE",
			},
			{
				name: "AI-enriched alert summaries",
				description:
					"Alerts include AI-generated plain-language explanations of what went wrong, the likely cause, and recommended next steps — not just raw error messages.",
				badge: "AI",
			},
			{
				name: "Approval request routing",
				description:
					"When autonomous remediation requires human sign-off, approval requests are pushed directly to Slack or email with one-tap approve/deny actions.",
				badge: "AI",
			},
			{
				name: "Incident severity classification",
				description:
					"Incidents are automatically categorised by severity (Critical, High, Medium, Low) so teams can triage at a glance without reading full logs.",
				badge: "AI",
			},
		],
	},
	{
		slug: "managed-team-services",
		title: "Managed Team & Maintenance Services",
		navTitle: "Managed Team",
		navDescription: "A dedicated team to keep you running",
		group: "AI & Operations",
		icon: Users,
		headline: "A dedicated team to keep your product running",
		headlineHighlight: "running",
		summary:
			"Get a dedicated AI-assisted developer, a DevOps engineer, and on-demand QA — all running on fully managed Sagyboar infrastructure.",
		items: [
			{
				name: "Dedicated AI-assisted developer",
				description:
					"A dedicated developer is assigned to your project, backed by an AI assistant to accelerate frontend and backend maintenance and feature work.",
				badge: "MANAGED",
			},
			{
				name: "Dedicated DevOps engineer",
				description:
					"A DevOps engineer keeps your deployments, pipelines, and infrastructure healthy — monitoring environments and responding to incidents on your behalf.",
				badge: "MANAGED",
			},
			{
				name: "On-demand QA testing",
				description:
					"A QA tester is brought in as needed for release validation, regression testing, and quality assurance — so your team can ship with confidence.",
				badge: "MANAGED",
			},
			{
				name: "Fully managed infrastructure hosting",
				description:
					"All managed services run on Sagyboar's own infrastructure. No VPS to provision or maintain — we handle uptime, updates, and security patching.",
				badge: "MANAGED",
			},
		],
	},
	{
		slug: "weekly-code-review",
		title: "Weekly Code Review & Quality Automation",
		navTitle: "Weekly Code Review",
		navDescription: "AI code health checks on your repos",
		group: "AI & Operations",
		icon: FileSearch,
		headline: "AI-powered code health checks on your connected repositories",
		headlineHighlight: "connected repositories",
		summary:
			"Every week Sagyboar reviews your repos for quality, security, and technical debt — turning findings into prioritized, assignable tickets.",
		items: [
			{
				name: "Automated weekly code review",
				description:
					"Every week, Sagyboar runs an AI-powered review across all connected repositories — analysing code quality, complexity, duplication, and adherence to best practices without any manual trigger.",
				badge: "NEW",
			},
			{
				name: "AI-generated issue tickets from review",
				description:
					"Every finding is automatically converted into a structured issue ticket in your connected repository (GitHub Issues, GitLab, Jira) with a clear description, affected file, suggested fix, and severity level.",
				badge: "NEW",
			},
			{
				name: "Security vulnerability scanning",
				description:
					"Scans each repository for known vulnerability patterns, exposed secrets, outdated dependencies, and insecure coding practices — flagging critical findings as high-priority tickets immediately.",
				badge: "NEW",
			},
			{
				name: "Code smell & technical debt detection",
				description:
					"Identifies code smells, overly complex functions, dead code, and accumulating technical debt, generating actionable tickets so your team can systematically improve the codebase over time.",
				badge: "NEW",
			},
			{
				name: "Review summary report",
				description:
					"A weekly digest is delivered via Slack or email — summarising new issues found, issues resolved since last review, overall code health score, and trend over the past 4 weeks.",
				badge: "NEW",
			},
			{
				name: "Priority-based ticket routing",
				description:
					"Critical and high-severity findings are automatically assigned to the first available developer, ensuring security issues and blocking bugs are never left unattended in a queue.",
				badge: "NEW",
			},
		],
	},
	{
		slug: "platform-security-access-control",
		title: "Platform, Security & Access Control",
		navTitle: "Security & Access",
		navDescription: "Enterprise-grade controls for any team",
		group: "AI & Operations",
		icon: ShieldCheck,
		headline: "Enterprise-grade controls for teams of any size",
		headlineHighlight: "of any size",
		summary:
			"Granular RBAC, SSO, immutable audit logs, one-click templates, and an MCP server with 508 tools — security and automation built in.",
		items: [
			{
				name: "Role-based access control",
				description:
					"Granular RBAC with owner, admin, and member roles across a full Organization > Project > Environment hierarchy.",
				badge: "CORE",
			},
			{
				name: "SSO & enterprise authentication",
				description:
					"Single sign-on configuration for enterprise teams, alongside standard email/password authentication for smaller organizations.",
				badge: "CORE",
			},
			{
				name: "Audit logging",
				description:
					"Immutable audit trail of all user and autonomous system actions — actor, timestamp, action type, target, rationale, and outcome — for compliance.",
				badge: "CORE",
			},
			{
				name: "One-click template deployment",
				description:
					"Pre-configured application stacks (WordPress, Ghost, n8n, and more) deployable in a single click via AI-generated Docker Compose templates.",
				badge: "CORE",
			},
			{
				name: "Scheduling & automation",
				description:
					"Built-in cron job management, database backup scheduling, and Docker resource cleanup automation for hands-off operations.",
				badge: "CORE",
			},
			{
				name: "MCP server integration",
				description:
					"Official Dokploy MCP server with 508 tools across 49 categories — any AI assistant or agent can control the platform programmatically via natural language.",
				badge: "CORE",
			},
		],
	},
];

export function getFeatureBySlug(slug: string): FeaturePageData | undefined {
	return featurePages.find((feature) => feature.slug === slug);
}
