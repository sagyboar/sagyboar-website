export const Sagyboar_ABOUT = `Sagyboar is an AI-native DevOps platform designed to simplify application deployment, monitoring, and infrastructure management for modern engineering teams.

Our platform enables businesses to deploy containerized applications, manage databases, and orchestrate complex workloads from a single dashboard. With one-click deployments, AI-powered infrastructure recommendations, intelligent monitoring, automated incident management, and fully managed hosting services, Sagyboar helps organizations move faster without the complexity of traditional DevOps.

In addition to our platform, we provide fully managed maintenance services for frontend, backend, QA, and DevOps operations through dedicated technical resources backed by AI-powered assistance.`;

export type JobPosting = {
	id: string;
	title: string;
	badge: string;
	location: string;
	overview: string;
	responsibilities: string[];
	requiredSkills: string[];
	preferredExperience: string[];
	compensation: string[];
	whyJoin: string[];
	applyEmail: string;
	applySubject: string;
	applicationRequirements: string[];
	closingNote: string;
};

export function getJobBySlug(slug: string): JobPosting | undefined {
	return jobPostings.find((job) => job.id === slug);
}

export const jobPostings: JobPosting[] = [
	{
		id: "sales-executive",
		title: "Sales Executive (Commission-Based)",
		badge: "Commission-Based",
		location: "Remote — Worldwide",
		overview:
			"We are looking for motivated and ambitious Sales Executives who can identify potential clients, generate leads, build relationships, and close deals for Sagyboar's DevOps platform and managed services. This is a performance-driven, commission-based opportunity ideal for professionals who have strong communication skills, confidence in client interactions, and a passion for technology sales.",
		responsibilities: [
			"Identify and approach potential clients, startups, agencies, and businesses.",
			"Generate qualified leads through networking, referrals, LinkedIn outreach, cold calling, and other sales channels.",
			"Present Sagyboar's platform and managed services to prospective customers.",
			"Understand client requirements and recommend suitable solutions.",
			"Conduct product demonstrations and sales presentations.",
			"Negotiate pricing, contracts, and service agreements.",
			"Build long-term relationships with clients and maintain regular follow-ups.",
			"Collaborate with the technical team to ensure smooth client onboarding.",
			"Maintain accurate records of leads, opportunities, and closed deals.",
			"Achieve monthly and quarterly sales targets.",
		],
		requiredSkills: [
			"Excellent verbal and written communication skills.",
			"Strong marketing and lead-generation abilities.",
			"Client negotiation and relationship management skills.",
			"Confidence in presenting products and services.",
			"Ability to understand business requirements and propose solutions.",
			"Self-motivated and target-oriented mindset.",
			"Ability to work independently and remotely.",
			"Basic understanding of SaaS, cloud technologies, software development, or DevOps is preferred but not mandatory.",
		],
		preferredExperience: [
			"Experience in B2B sales.",
			"Experience selling software, SaaS products, IT services, web development services, or cloud solutions.",
			"Existing network of startup founders, business owners, CTOs, or technology decision-makers is a plus.",
		],
		compensation: [
			"100% Commission-Based Role",
			"Attractive commission on every successful sale.",
			"Unlimited earning potential based on performance.",
			"Performance bonuses for high achievers.",
			"Long-term partnership opportunities for top performers.",
		],
		whyJoin: [
			"Sell an innovative AI-powered DevOps platform.",
			"High-demand product targeting startups and growing businesses.",
			"Flexible working hours.",
			"Work remotely from anywhere.",
			"Unlimited commission opportunities.",
			"Opportunity to grow with a fast-growing technology company.",
		],
		applyEmail: "souravrathore15@gmail.com",
		applySubject: "Application for Sales Executive (Commission-Based) – Sagyboar",
		applicationRequirements: [
			"Updated Resume/CV",
			"Full Name",
			"Contact Number",
			"Email Address",
			"Current Location",
			"Relevant Sales/Marketing Experience (if any)",
			"LinkedIn Profile (optional)",
		],
		closingNote:
			"Shortlisted candidates will be contacted for an introductory discussion regarding the role, commission structure, and growth opportunities within Sagyboar. We welcome applications from freelancers, sales professionals, business development executives, marketing specialists, and individuals with strong networking and client acquisition skills.",
	},
];

export const whyWorkAtSagyboar = [
	{
		title: "AI-powered DevOps platform",
		description:
			"Sell an innovative product that combines deployment, monitoring, and managed services in one place.",
		image: "/primary/monitoring.png",
		imageAlt: "Sagyboar monitoring dashboard",
	},
	{
		title: "High-demand market",
		description:
			"Our platform targets startups and growing businesses that need DevOps without hiring a full team.",
		image: "/startup.png",
		imageAlt: "Startup teams using Sagyboar",
	},
	{
		title: "Remote & flexible",
		description:
			"Work from anywhere with flexible hours and an async-friendly culture built for independent performers.",
		image: "/secondary/users.png",
		imageAlt: "Remote team collaboration",
	},
	{
		title: "Unlimited earning potential",
		description:
			"Commission-based roles reward results — top performers unlock bonuses and long-term partnership opportunities.",
		image: "/Enterprise.png",
		imageAlt: "Enterprise growth with Sagyboar",
	},
] as const;
