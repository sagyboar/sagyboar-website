"use client";
import { cn } from "@/lib/utils";
import {
	IconActivity,
	IconCpu,
	IconDashboard,
	IconDatabase,
	IconEye,
	IconGitBranch,
	IconRocket,
	IconShieldLock,
	IconTicket,
	IconUsers,
} from "@tabler/icons-react";
import { Layers, Lock, UnlockIcon } from "lucide-react";

export function FirstFeaturesSection() {
	const features = [
		{
		  title: "Unified Control Plane",
		  description: "Manage your entire stack from a single dashboard. One-click deploy containerized apps and databases directly to our managed servers in minutes.",
		  icon: <IconDashboard />,
		},
		{
		  title: "Intelligent Deployment",
		  description: "Stop writing boilerplate. Our AI auto-detects your stack, generates production-ready Dockerfiles, and recommends the exact infrastructure sizing you need.",
		  icon: <Layers />,
		},
		{
		  title: "AI Anomaly Detection",
		  description: "Move from reactive to proactive. The AI monitoring engine analyzes logs and surfaces plain-language incident explanations before minor issues become downtime.",
		  icon: <IconActivity />,
		},
		{
		  title: "Automated Incident Management",
		  description: "When issues occur, Sagyboar instantly generates a detailed ticket in your repository with problem descriptions, ETA, and priority, assigning it to the first available agent.",
		  icon: <IconTicket />,
		},
		{
		  title: "Cloud-Agnostic Portability",
		  description: "Never get trapped by vendor lock-in. Enjoy seamless one-click deployments to our managed servers, while retaining the freedom to migrate to your own infrastructure anytime.",
		  icon: <UnlockIcon />,
		},
		{
		  title: "Smart Resource Sizing",
		  description: "Eliminate resource waste. Our embedded AI continuously evaluates your workload to recommend optimal infrastructure configurations, balancing high performance with cost efficiency.",
		  icon: <IconCpu />,
		},
		{
		  title: "Managed Database Orchestration",
		  description: "Provision, scale, and back up complex databases with a single click. We handle the heavy lifting of data persistence so your team can focus purely on application logic.",
		  icon: <IconDatabase />,
		},
		{
		  title: "Zero-Config CI/CD Pipelines",
		  description: "Automate your path to production. Simply push code to your connected repository and let our built-in pipelines handle the build, test, and deployment phases instantly.",
		  icon: <IconRocket />,
		},
		{
		  title: "Deep Observability",
		  description: "Gain total visibility into your stack. Access real-time system metrics, custom dashboards, and application traces without the need to integrate costly third-party monitoring tools.",
		  icon: <IconEye />,
		},
		{
		  title: "Automated Security Scanning",
		  description: "Ship with confidence. Continuous, automated vulnerability scanning for your containers and dependencies ensures your deployments remain secure and production-ready from day one.",
		  icon: <IconShieldLock />,
		},
		{
		  title: "Seamless Git Integration",
		  description: "Connect your preferred Git provider in seconds. Trigger deployments via commits, manage staging environments through branches, and utilize auto-generated preview links for pull requests.",
		  icon: <IconGitBranch />,
		},
		{
		  title: "On-Demand Engineering Squad",
		  description: "Scale your operations instantly. Beyond the software, tap into our managed service to get a dedicated developer, DevOps engineer, and QA tester assigned to your project.",
		  icon: <IconUsers />,
		}
	  ];
	return (
		<div className="mt-20 flex flex-col items-center  justify-center px-4">
			<h2 className="text-center font-display text-3xl tracking-tight text-foreground sm:text-4xl">
				Engineering Freedom Meets <span className="text-blue-400 border-b-2 border-blue-400">AI Intelligence</span>
			</h2>
			<p className="mt-4 text-center text-lg  tracking-tight text-muted-foreground">
				Get the flexibility of self-hosting with the frictionless experience of a fully managed platform.
			</p>
			<div className="relative z-10 mx-auto mt-10 grid  max-w-7xl grid-cols-1 py-10 max-sm:mx-0 max-sm:w-full max-sm:p-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{features.map((feature, index) => (
					<Feature key={feature.title} {...feature} index={index} />
				))}
			</div>
		</div>
	);
}

const Feature = ({
	title,
	description,
	icon,
	index,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	index: number;
}) => {
	return (
		<div
			className={cn(
				"group/feature relative flex flex-col border-border py-10 lg:border-r",
				(index === 0 || index === 4 || index === 8) && "lg:border-l",
				index < 8 && "lg:border-b",
			)}
		>
			{index < 4 && (
				<div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-muted/80 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
			)}
			{index >= 4 && (
				<div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-muted/80 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
			)}
			<div className="relative z-10 mb-4 px-10 text-muted-foreground">{icon}</div>
			<div className="relative z-10 mb-2 px-10 text-lg font-bold">
				<div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-border transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-400 dark:bg-neutral-700 dark:group-hover/feature:bg-blue-700" />
				<span className="inline-block text-foreground transition duration-200 group-hover/feature:translate-x-2">
					{title}
				</span>
			</div>
			<p className="relative z-10 px-10 text-sm text-muted-foreground lg:max-w-xs">
				{description}
			</p>
		</div>
	);
};
