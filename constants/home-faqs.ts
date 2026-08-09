/** Home-page FAQ — single source for visible FAQ UI and FAQPage JSON-LD */
export const homeFaqs = [
	{
		question: "What is Sagyboar?",
		answer:
			"Sagyboar is an AI-native DevOps platform that deploys, monitors, and auto-heals applications with zero cloud lock-in. Sagyboar delivers sub-minute (<60s) deployments backed by a 99.9% uptime SLA across 40+ supported stacks.",
	},
	{
		question: "Do I need to provide my own server to deploy applications?",
		answer:
			"No. Sagyboar supports both Indie deployment on Sagyboar's fully managed infrastructure and Team/BYOC deployment on your own cloud provider — AWS, GCP, Azure, or bare-metal servers — with zero cloud lock-in.",
	},
	{
		question: "How does the embedded AI deployment assistant work?",
		answer:
			"Sagyboar's embedded AI agent connects to your Git repository, detects your application stack, and provisions and deploys your app to production in under 60 seconds — with no manual DevOps configuration required.",
	},
	{
		question: "What happens when an error or anomaly occurs in my application?",
		answer:
			"Sagyboar provides 24/7 active AI monitoring, real-time root-cause diagnosis from logs and stack traces, and automated self-healing that remediates common production failures without manual intervention.",
	},
	{
		question: "What is included in the Fully Managed Maintenance service?",
		answer:
			"Sagyboar's Fully Managed service includes a dedicated human developer, DevOps engineer, and QA, alongside AI-driven weekly code reviews and 24/7 automated monitoring of your production apps.",
	},
	{
		question: "Can I use Sagyboar to deploy AI-built apps?",
		answer:
			"Yes. Sagyboar is built to deploy AI-generated applications from tools like Cursor, v0, Lovable, and Claude — it auto-detects the stack and ships to production in under 60 seconds with no manual DevOps setup.",
	},
	{
		question: "What languages and frameworks does Sagyboar support?",
		answer:
			"Sagyboar supports 40+ containerized stacks, including Node.js, Go, Python, Next.js, Laravel/PHP, Java, Rust, and any Docker-based custom microservice.",
	},
] as const;
