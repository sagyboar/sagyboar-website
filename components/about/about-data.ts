import type { LucideIcon } from "lucide-react";
import {
	BrainCircuit,
	Globe2,
	Handshake,
	Rocket,
	ShieldCheck,
	Sparkles,
	Users,
} from "lucide-react";

export type TimelineMilestone = {
	year: string;
	title: string;
	description: string;
	icon: LucideIcon;
};

/**
 * Placeholder milestones — replace year/title/description with Sagyboar's
 * real founding date and history before shipping this page.
 */
export const timelineMilestones: TimelineMilestone[] = [
	{
		year: "2023",
		title: "Sagyboar is founded",
		description:
			"Started with a simple idea: deployment and infrastructure management shouldn't need a full DevOps team.",
		icon: Sparkles,
	},
	{
		year: "2023",
		title: "Private beta",
		description:
			"Early adopters started deploying containerized apps through the first version of the platform.",
		icon: Rocket,
	},
	{
		year: "2024",
		title: "AI-powered monitoring & diagnosis",
		description:
			"Shipped intelligent monitoring and automated incident diagnosis to catch issues before they become outages.",
		icon: BrainCircuit,
	},
	{
		year: "2024",
		title: "Managed services launched",
		description:
			"Introduced fully managed frontend, backend, QA, and DevOps support for teams that want a hands-off experience.",
		icon: Handshake,
	},
	{
		year: "2025",
		title: "Serving teams worldwide",
		description:
			"Grew from a handful of early users to startups and enterprises across multiple countries.",
		icon: Globe2,
	},
	{
		year: "Today",
		title: "Building the next chapter",
		description:
			"Continuing to invest in AI-native infrastructure so engineering teams can move faster with less overhead.",
		icon: Users,
	},
];

export type AboutValue = {
	title: string;
	description: string;
	icon: LucideIcon;
};

export const aboutValues: AboutValue[] = [
	{
		title: "AI-native by default",
		description:
			"We build AI into the core of the platform, not as an afterthought, so infrastructure problems get caught and explained automatically.",
		icon: BrainCircuit,
	},
	{
		title: "Reliability first",
		description:
			"Deployments, monitoring, and managed services are held to the same bar we'd expect for our own production systems.",
		icon: ShieldCheck,
	},
	{
		title: "Real people, not just dashboards",
		description:
			"Behind every plan is a team that answers when something goes wrong — not just a support ticket queue.",
		icon: Handshake,
	},
	{
		title: "Built for every stage",
		description:
			"From solo side projects to enterprise infrastructure, the same platform scales with you instead of forcing a migration.",
		icon: Rocket,
	},
];
