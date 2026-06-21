import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "./Container";

const faqs = [
	{
		question: "What is Sagyboar?",
		answer:
			"Sagyboar is a stable, easy-to-use deployment solution designed to simplify the application management process. Think of Sagyboar as a free alternative self-hostable solution to platforms like Heroku, Vercel, and Netlify.",
	},
	{
		question: "How does Sagyboar's Open Source plan work?",
		answer:
			"You can host Sagyboar UI on your own infrastructure and you will be responsible for the maintenance and updates.",
	},
	{
		question: "Do I need to provide my own server for the managed plan?",
		answer:
			"Yes, in the managed plan, you provide your own server (e.g., Hetzner, Hostinger, AWS, etc.) VPS, and we manage the Sagyboar UI infrastructure for you.",
	},
	{
		question: "What happens if I need more than one server?",
		answer:
			"The first server costs $4.50/month, if you buy more than one it will be $3.50/month per server.",
	},
	{
		question: "Is there a limit on the number of deployments?",
		answer:
			"No, there is no limit on the number of deployments in any of the plans.",
	},
	{
		question: "What happens if I exceed my purchased server limit?",
		answer:
			"The most recently added servers will be deactivated. You won't be able to create services on inactive servers until they are reactivated.",
	},
	{
		question: "What kind of support do you offer?",
		answer:
			"We offer community support for the open source version and priority support for paid plans (via Discord or Email at support@Sagyboar.com).",
	},
	{
		question: "What's the catch on the Paid Plan?",
		answer:
			"Nothing, once you link your server (VPS) to your account, you can deploy unlimited applications, databases, and users, and you get unlimited updates, deployments, backups, and more.",
	},
	{
		question: "Why Choose Sagyboar?",
		answer:
			"Sagyboar offers simplicity, flexibility, and speed in application deployment and management.",
	},
	{
		question: "Is it open source?",
		answer: "Yes, Sagyboar offers a plan that is open source and free to use.",
	},
	{
		question: "Can I use Sagyboar to deploy AI-built apps?",
		answer:
			"Yes. Sagyboar works with code from any source, including apps built with AI coding tools. You can deploy using your existing Git, Docker, and Compose workflows, or create a sandbox environment to give teams a governed space where they can ship AI-built apps with SSO, audit logs, and multitenancy built in.",
	},
	{
		question: "What types of languages can I deploy with Sagyboar?",
		answer:
			"Sagyboar does not restrict programming languages. You are free to choose your preferred language and framework.",
	},
	{
		question: "How do I request a feature or report a bug?",
		answer:
			"To request a feature or report a bug, please create an issue on our GitHub repository or ask in our Discord channel.",
	},
	{
		question: "Do you track the usage of Sagyboar?",
		answer: "No, we don't track any usage data.",
	},
	{
		question:
			"Are there any user forums or communities where I can interact with other users?",
		answer:
			"Yes, we have active GitHub discussions and Discord where you can share ideas, ask for help, and connect with other users.",
	},
	{
		question: "Do you offer a refunds?",
		answer:
			"We do not offer refunds. However, you can cancel your subscription at any time. Feel free to try our open-source version for free before making a purchase.",
	},
	{
		question: "What types of applications can I deploy with Sagyboar?",
		answer:
			"You can deploy any application that can be Dockerized, with no limits. Sagyboar supports builds from Git repositories, Dockerfiles, Nixpacks, and Buildpacks like Heroku and Paketo.",
	},
	{
		question: "How does Sagyboar handle database management?",
		answer:
			"Sagyboar supports multiple database systems including Postgres, MySQL, MariaDB, MongoDB, and Redis, providing tools for easy deployment and management and backups directly from the dashboard.",
	},
];

export function Faqs() {
	return (
		<section
			id="faqs"
			aria-labelledby="faq-title"
			className="bg-background py-20 sm:py-32"
		>
			<Container className="flex flex-col gap-10">
				<div className="mx-auto w-full justify-center lg:mx-0">
					<h2
						id="faq-title"
						className="text-center font-display text-3xl tracking-tight text-foreground sm:text-4xl"
					>
						Frequently asked questions
					</h2>
					<p className="mt-4 text-center text-lg tracking-tight text-muted-foreground">
						If you can't find what you're looking for, please submit an issue
						through our GitHub repository or ask questions on our Discord.
					</p>
				</div>

				<Accordion
					type="single"
					collapsible
					className="mx-auto w-full max-w-3xl rounded-2xl border border-border bg-card/50 px-6 shadow-sm backdrop-blur-sm dark:bg-card/30"
				>
					{faqs.map((faq, columnIndex) => (
						<AccordionItem
							value={`${columnIndex}`}
							key={columnIndex}
							className="border-border"
						>
							<AccordionTrigger className="text-left text-foreground hover:text-foreground">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</Container>
		</section>
	);
}
