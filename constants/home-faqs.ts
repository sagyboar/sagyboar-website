/** Home-page FAQ content — shared by UI and FAQPage JSON-LD */
export const homeFaqs = [
	{
		question: "What is Sagyboar?",
		answer:
			"Sagyboar is an AI-native DevOps platform and control plane that auto-generates deployment configurations, detects anomalies, and auto-heals server errors on fully managed infrastructure — with zero cloud lock-in.",
	},
	{
		question: "Do I need to provide my own server to deploy applications?",
		answer:
			"No. Sagyboar is a fully managed application deployment platform with one-click deploys to our managed servers, so you are live in minutes. Because there is zero cloud lock-in, you can also self-host or bring your own cloud when you prefer.",
	},
	{
		question: "How does the embedded AI deployment assistant work?",
		answer:
			"When you connect your repository, our AI-native DevOps assistant auto-detects your tech stack, generates production-ready Dockerfiles and Compose configs, and recommends infrastructure sizing — eliminating hours of manual setup.",
	},
	{
		question: "What happens when an error or anomaly occurs in my application?",
		answer:
			"Our auto-healing deployment platform continuously analyzes logs and metrics. When an issue is detected, it surfaces plain-language incident explanations, opens a ticket in your connected repository, and can auto-heal common server errors without manual intervention.",
	},
	{
		question: "What is included in the Fully Managed Maintenance service?",
		answer:
			"Beyond standard hosting, we act as an extension of your team: a dedicated developer powered by an AI assistant, a DevOps engineer for deployments and health, and a QA tester — so your team can focus on building.",
	},
	{
		question: "Is there a limit on the number of deployments or databases?",
		answer:
			"No. You can use your unified dashboard to deploy unlimited containerized applications, manage complex databases, and orchestrate multi-service workloads seamlessly.",
	},
	{
		question: "Can I use Sagyboar to deploy AI-built apps?",
		answer:
			"Yes. Sagyboar works with code from any source, including apps built with AI coding tools. Our AI assistant auto-generates the necessary configurations so your team can ship AI-built applications quickly and securely.",
	},
	{
		question: "What types of languages and frameworks are supported?",
		answer:
			"Sagyboar does not restrict programming languages. If your application can be containerized, Sagyboar can deploy it. Our AI automatically detects and writes configurations for most modern frameworks natively.",
	},
	{
		question: "How does Sagyboar handle database management?",
		answer:
			"Our platform provides a unified control plane to provision, scale, and manage complex databases — including automatic backups and performance monitoring — from a single dashboard.",
	},
	{
		question: "What kind of support do you offer?",
		answer:
			"Clients on our Fully Managed Maintenance tier receive direct support from their assigned DevOps engineer and dedicated developer. We also offer community support via GitHub discussions and Discord.",
	},
	{
		question: "Does the AI monitoring engine compromise my privacy?",
		answer:
			"No. The AI engine analyzes system metrics and logs strictly for anomaly detection, automated ticketing, auto-healing, and platform stability. We do not track, sell, or share your proprietary codebase or usage data.",
	},
	{
		question: "Is Sagyboar a Heroku alternative with zero cloud lock-in?",
		answer:
			"Yes. Sagyboar is a Heroku alternative with zero cloud lock-in: deploy to our fully managed infrastructure or bring your own cloud (AWS, GCP, Azure, DigitalOcean). You keep ownership of your code, configs, and infrastructure.",
	},
	{
		question: "Do you offer refunds?",
		answer:
			"We do not offer refunds, but you can cancel managed services at any time. Because Sagyboar prevents vendor lock-in, you always retain control of your codebase and configurations if you choose to migrate.",
	},
] as const;
