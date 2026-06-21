import { Container } from "@/components/Container";
import { CallToAction } from "@/components/CallToAction";
import { HeroParticleWave } from "@/components/hero/hero-particle-wave";
import { HeroParticleField } from "@/components/hero/hero-particle-field";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	Wallet,
	Unlock,
	Lock,
	Settings2,
	KeyRound,
	ScrollText,
	Shield,
	LifeBuoy,
	ServerCog,
	TerminalSquare,
	MonitorSmartphone,
	GitBranch,
	CheckCircle2,
	Cloud,
	Server,
	Bot,
	Cpu,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "The Self-Hosted PaaS Built for Developers",
	description:
		"Start using Sagyboar, the free, open source PaaS that enables developers to deploy apps and databases on their own infrastructure.",
	alternates: {
		canonical: "https://Sagyboar.com/self-hosted-paas",
	},
};

const controlFeatures = [
	{
		icon: Wallet,
		title: "Save on infrastructure costs",
		description:
			"Run Sagyboar on any VPS or bare metal server you already own. No per-seat fees, no per-deployment charges—just your underlying infrastructure costs.",
	},
	{
		icon: Unlock,
		title: "Eliminate vendor lock-in",
		description:
			"Your apps, your servers, your data. A self-hosted PaaS gives you full control over where workloads run and makes it straightforward to migrate if your needs change.",
	},
	{
		icon: Lock,
		title: "Keep sensitive data on your own servers",
		description:
			"For teams with compliance requirements or strict data residency rules, self-hosting means your code and databases never leave your own infrastructure.",
	},
	{
		icon: Settings2,
		title: "Customize to your exact requirements",
		description:
			"SSH access, custom Docker images, environment variables, resource limits, and container orchestration settings—all configurable without waiting on a cloud provider.",
	},
	{
		icon: Bot,
		title: "Run your AI tools in-house",
		description:
			"Your AI tools run on your own server, so code, prompts, and outputs never leave your infrastructure. Create sandboxes where your team can deploy vibe-coded tools safely.",
	},
	{
		icon: Cpu,
		title: "Choose and switch your AI models",
		description:
			"You can run any open source model you want and swap it out without changing your stack, avoiding being tied to a single AI provider's pricing or availability.",
	},
];

const enterpriseFeatures = [
	{
		icon: KeyRound,
		title: "SSO / SAML",
		description:
			"Integrate with enterprise identity providers like Okta and Azure AD for centralized, secure access control across your organization.",
	},
	{
		icon: ScrollText,
		title: "Audit Logs",
		description:
			"Comprehensive tracking of all system activities—deployments, config changes, and access events—for compliance and accountability.",
	},
	{
		icon: Shield,
		title: "Fine-Grained RBAC",
		description:
			"Granular role-based access controls with custom roles, so the right people have the right permissions at every level.",
	},
	{
		icon: LifeBuoy,
		title: "Priority Support and SLAs",
		description:
			"Dedicated support with guaranteed response times and service level agreements, so mission-critical deployments stay running.",
	},
];

const setupSteps = [
	{
		number: "01",
		icon: ServerCog,
		title: "Provision a server",
		description:
			"Spin up any Linux VPS from a cloud provider of your choice, or use hardware you already own. Sagyboar has minimal overhead and runs comfortably on modest specs.",
	},
	{
		number: "02",
		icon: TerminalSquare,
		title: "Run one install command",
		description:
			"Install Sagyboar with a single command. Docker is the only prerequisite, the installer handles the rest in just a few commands.",
	},
	{
		number: "03",
		icon: MonitorSmartphone,
		title: "Open the web UI",
		description:
			"Once installed, open the Sagyboar web UI in your browser, create your admin account, and you're in. No complex cluster setup, no Kubernetes complexity.",
	},
	{
		number: "04",
		icon: GitBranch,
		title: "Connect your code and deploy",
		description:
			"Connect a Git repo or container registry, configure your environment variables, add a database, attach a domain, and deploy. The whole process takes minutes.",
	},
];

const selfHostedBullets = [
	"Free to install and run, with no platform fees",
	"Full control over the underlying infrastructure",
	"SSH access and unrestricted server management",
	"Fits air-gapped, on-premise, or hybrid environments",
	"Deploy on any cloud provider or your own hardware",
];

const cloudBullets = [
	"Managed uptime for the control plane",
	"Automatic updates—always on the latest version",
	"Direct email, chat, and priority support",
	"Rapid setup with no server provisioning required",
	"Plans from $4.50/mo per server",
];

const faqs = [
	{
		question: "What is a self-hosted PaaS?",
		answer: (
			<>
				<p>
					A self-hosted PaaS is a platform as a service that you run on your own
					infrastructure rather than using a managed cloud service. It gives
					developers the same deployment experience—Git-based deploys,
					environment variable management, built-in Docker support, load
					balancing, and database management—but without handing control to a
					third-party cloud provider.
				</p>
				<p className="mt-3">
					Sagyboar is an open source PaaS you can install on any server with a
					single command.
				</p>
			</>
		),
	},
	{
		question: "What is the best open source PaaS?",
		answer: (
			<>
				<p>
					The best open source PaaS depends on your team size, technical
					requirements, and how much infrastructure management you want to take
					on.
				</p>
				<p className="mt-3">
					Sagyboar is a strong open source PaaS alternative to Heroku and similar
					hosted platforms. It supports application deployment, Docker Compose,
					MySQL and other databases, Heroku Buildpacks, multi-server management,
					and enterprise features like SSO and audit logs.
				</p>
				<p className="mt-3">
					It&apos;s free to self-host, actively maintained, and designed to keep
					ops overhead minimal.
				</p>
			</>
		),
	},
	{
		question: "Is Sagyboar really free to self-host?",
		answer: (
			<p>
				Yes. The open source version of Sagyboar is free to install and run on
				your own servers. You pay only for the infrastructure you provision,
				meaning no per-seat or per-deployment fees. Sagyboar Cloud plans start at
				$4.50 per server per month if you prefer managed uptime.
			</p>
		),
	},
	{
		question: "What's the difference between Sagyboar Cloud and self-hosted?",
		answer: (
			<p>
				Both versions are functionally identical. Every feature available in
				self-hosted is also available in Cloud, and vice versa. The difference
				is purely operational: with self-hosted, you manage the Sagyboar instance
				itself, including updates and uptime. With Cloud, Sagyboar manages the
				control plane for you. Your applications always run on your own servers
				in both cases.
			</p>
		),
	},
	{
		question: "Does Sagyboar support multi-tenancy?",
		answer: (
			<p>
				Yes. Sagyboar includes multi-tenancy support via organizations and
				projects, with role-based access controls that let you manage
				permissions across teams. Enterprise plans include fine-grained RBAC and
				custom roles for more complex access requirements.
			</p>
		),
	},
	{
		question: "What infrastructure does Sagyboar support?",
		answer: (
			<p>
				Sagyboar runs on any Linux server—a VPS from any cloud provider, bare
				metal, or even a Raspberry Pi for testing. It uses Docker Swarm for
				container orchestration and Traefik as a reverse proxy, so you get load
				balancing, SSL, and routing out of the box without managing those layers
				yourself.
			</p>
		),
	},
];

const INSTALL_COMMAND = "curl -sSL https://Sagyboar.com/install.sh | sh";

export default function SelfHostedPaasPage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-32">
				<HeroParticleWave />
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[58%] bg-gradient-to-b from-background via-background/95 to-transparent"
				/>
				<Container className="relative z-10">
					<div className="mx-auto max-w-5xl text-center">
						<h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
							The Self-Hosted PaaS Built for Developers
						</h1>
						<p className="mt-6 text-lg text-muted-foreground">
							Sagyboar is a free, open source PaaS that enables developers to
							deploy apps and databases on their own infrastructure. Full
							control, no vendor lock-in, and none of the Kubernetes complexity.
							Install it with a single command and start deploying in minutes.
						</p>
						<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
							<Button className="rounded-full" asChild>
								<Link href="/contact">Contact sales</Link>
							</Button>
						</div>

						<div className="mx-auto mt-12 max-w-5xl">
							<p className="mb-3 text-sm text-muted-foreground">
								Deploy with one line of code
							</p>
							<div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-left font-mono text-sm text-foreground">
								<span className="select-none text-primary">$</span>
								<code className="flex-1 overflow-x-auto whitespace-nowrap">
									{INSTALL_COMMAND}
								</code>
							</div>
						</div>
					</div>
				</Container>
			</section>

			<section className="relative overflow-hidden border-b border-border bg-background pb-16 pt-20 sm:pb-20 sm:pt-32">
				<HeroParticleField />
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[42%] bg-gradient-to-b from-background via-background/85 to-transparent"
				/>
				<Container className="relative z-10">
					<div className="mx-auto max-w-5xl text-center">
						<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
							Full control over your platform
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Self-hosting a PaaS solution means you decide where your
							infrastructure lives, how resources are allocated, and who has
							access—without paying for a managed service to make those
							decisions for you.
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{controlFeatures.map((feature) => (
							<div
								key={feature.title}
								className="rounded-xl border border-border bg-card p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
									<feature.icon className="h-6 w-6" />
								</div>
								<h3 className="text-xl font-semibold">{feature.title}</h3>
								<p className="mt-3 text-sm text-muted-foreground">
									{feature.description}
								</p>
							</div>
						))}
					</div>

					<div className="mx-auto mt-12 max-w-7xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl sm:mt-16">
						<Image
							src="/primary/servers.png"
							alt="Sagyboar self-hosted server management dashboard"
							width={1200}
							height={750}
							className="w-full object-cover"
							sizes="(max-width: 768px) 100vw, 1200px"
						/>
					</div>
				</Container>
			</section>

			{/* Self-Hosted Enterprise PaaS */}
			<section className="border-b border-border bg-muted/30 py-20 sm:py-32 dark:bg-muted/10">
				<Container>
					<div className="mx-auto max-w-5xl text-center">
						<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
							Self-Hosted Enterprise PaaS
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							For organizations that need more than the open source version,
							Sagyboar Enterprise adds the security, compliance, and support
							features that larger teams require, deployable on-premises or in
							your own cloud, with no external dependencies.
						</p>
						<div className="mt-8">
							<Button className="rounded-full" asChild>
								<Link href="/enterprise">Learn more about Sagyboar Enterprise</Link>
							</Button>
						</div>
					</div>
					<div className="mx-auto mt-16 max-w-5xl">
						<h3 className="text-center text-lg font-semibold text-foreground">
							What you get with Sagyboar Enterprise
						</h3>
						<div className="mt-8 grid gap-6 sm:grid-cols-2">
							{enterpriseFeatures.map((feature) => (
								<div
									key={feature.title}
									className="rounded-xl border border-border bg-card p-6"
								>
									<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
										<feature.icon className="h-6 w-6" />
									</div>
									<h4 className="text-lg font-semibold text-foreground">
										{feature.title}
									</h4>
									<p className="mt-3 text-sm text-muted-foreground">
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</Container>
			</section>

			{/* How to get set up */}
			<section className="border-b border-border py-20 sm:py-32">
				<Container>
					<div className="mx-auto max-w-5xl text-center">
						<h2 className="font-display text-3xl tracking-tight sm:text-4xl">
							How to get set up with self-hosted Sagyboar
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Getting a self-hosted PaaS running doesn&apos;t have to be an
							infrastructure project. Sagyboar is designed for minimal overhead,
							so you can go from a blank server to a running deployment platform
							in under ten minutes.
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
						{setupSteps.map((step) => (
							<div
								key={step.number}
								className="relative rounded-xl border border-border bg-card p-6"
							>
								<div className="absolute right-6 top-6 font-display text-4xl font-bold text-primary/30">
									{step.number}
								</div>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
									<step.icon className="h-6 w-6" />
								</div>
								<h3 className="text-xl font-semibold">{step.title}</h3>
								<p className="mt-3 text-sm text-muted-foreground">
									{step.description}
								</p>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* Should you choose Cloud or Self-Hosted? */}
			<section className="border-b border-border bg-muted/30 py-20 sm:py-32 dark:bg-muted/10">
				<Container>
					<div className="mx-auto max-w-5xl text-center">
						<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
							Should you choose Cloud or Self-Hosted?
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Both are great options. Every key feature available in
							Self-Hosted is also available in Cloud, and vice versa. The choice
							comes down to how much you want to manage yourself.
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
						<div className="rounded-xl border border-border bg-card p-8">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
								<Server className="h-6 w-6" />
							</div>
							<h3 className="text-2xl font-semibold text-foreground">Self-Hosted</h3>
							<p className="mt-3 text-sm text-muted-foreground">
								Choose Self-Hosted if you want zero cost beyond your server
								bills, full control over everything, or need to run Sagyboar in
								an air-gapped or private network.
							</p>
							<ul className="mt-6 space-y-3 text-sm text-muted-foreground">
								{selfHostedBullets.map((bullet) => (
									<li key={bullet} className="flex gap-3">
										<CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
										<span>{bullet}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="rounded-xl border border-border bg-card p-8">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
								<Cloud className="h-6 w-6" />
							</div>
							<h3 className="text-2xl font-semibold text-foreground">
								Sagyboar Cloud
							</h3>
							<p className="mt-3 text-sm text-muted-foreground">
								Choose Cloud if you&apos;d rather not maintain the Sagyboar
								instance itself. Your apps still run on your own servers —
								Sagyboar manages the control plane for you.
							</p>
							<ul className="mt-6 space-y-3 text-sm text-muted-foreground">
								{cloudBullets.map((bullet) => (
									<li key={bullet} className="flex gap-3">
										<CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
										<span>{bullet}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Container>
			</section>

			{/* One product, two ways to run the control plane */}
			<section className="border-b border-border py-20 sm:py-32">
				<Container>
					<div className="mx-auto max-w-5xl text-center">
						<h2 className="font-display text-3xl tracking-tight sm:text-4xl">
							One product, two ways to run the control plane
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Sagyboar&apos;s deployment engine is identical in both options. The
							only difference is where the control plane—the UI, PostgreSQL
							database, and Redis instance—runs.
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
						<div className="rounded-xl border border-border bg-card p-6 text-center">
							<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
								<Server className="h-6 w-6" />
							</div>
							<h3 className="text-xl font-semibold">Self-Hosted</h3>
							<p className="mt-3 text-sm text-muted-foreground">
								Everything runs on your server. Full control, zero external
								dependencies.
							</p>
						</div>
						<div className="rounded-xl border border-border bg-card p-6 text-center">
							<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
								<Cloud className="h-6 w-6" />
							</div>
							<h3 className="text-xl font-semibold">Sagyboar Cloud</h3>
							<p className="mt-3 text-sm text-muted-foreground">
								Your apps keep running independently even if the Cloud control
								plane is temporarily unavailable.
							</p>
						</div>
					</div>
				</Container>
			</section>

			<section className="border-b border-border py-20 sm:py-32">
				<Container>
					<div className="mx-auto max-w-5xl text-center">
						<h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
							Self-hosted PaaS FAQs
						</h2>
					</div>
					<Accordion
						type="single"
						collapsible
						className="mx-auto mt-12 w-full max-w-5xl rounded-2xl border border-border bg-card/50 px-6 shadow-sm backdrop-blur-sm dark:bg-card/30"
					>
						{faqs.map((faq, index) => (
							<AccordionItem value={`faq-${index}`} key={faq.question} className="border-border">
								<AccordionTrigger className="text-left text-foreground hover:text-foreground">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent>{faq.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</Container>
			</section>

			<CallToAction />
		</div>
	);
}
