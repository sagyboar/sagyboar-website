import { Container } from "@/components/Container";
import { Sagyboar_SUPPORT_EMAIL } from "@/constants/branding";
import { pageSeo } from "@/constants/seo-data";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata(pageSeo.sla);

const slaPackages = [
	{
		plan: "Hobby",
		uptime: "99.5%",
		responseTime: "6 hours",
		support: "Business hours (Mon–Fri, 9 AM–6 PM EST)",
	},
	{
		plan: "Startup",
		uptime: "99.9%",
		responseTime: "1 hour",
		support: "24×7",
	},
	{
		plan: "Enterprise",
		uptime: "99.99%",
		responseTime: "15 minutes",
		support: "24×7 Priority",
	},
] as const;

export default function SlaPage() {
	return (
		<div className="min-h-screen bg-background pt-28 pb-16 sm:pt-32 sm:pb-20">
			<Container>
				<article className="flex w-full flex-col gap-6 text-muted-foreground [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_h1]:text-foreground [&_h2]:text-foreground [&_h3]:text-foreground [&_li]:leading-relaxed [&_p]:leading-relaxed [&_strong]:text-foreground [&_td]:px-4 [&_td]:py-3 [&_th]:px-4 [&_th]:py-3">
					<h1 className="mb-6 text-center font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Service Level{" "}
						<span className="border-b border-blue-400 text-blue-400">
							Agreement
						</span>
					</h1>
					<p className="text-center text-sm text-muted-foreground">
						Sagyboar.space · Last Updated: July 2026
					</p>

					<section className="flex flex-col gap-4">
						<h2 className="text-2xl font-semibold">Overview</h2>
						<p>
							This Service Level Agreement (&quot;SLA&quot;) describes the
							availability, support, and operational commitments Sagyboar
							Technologies, Inc. (&quot;Sagyboar&quot;, &quot;we&quot;,
							&quot;us&quot;) provides for <strong>Cloud Services</strong> on
							paid subscription plans. It applies in addition to our{" "}
							<Link href="/terms-of-service">Terms of Service</Link> and is
							incorporated by reference therein.
						</p>
						<p>
							The SLA does <strong>not</strong> apply to the Free plan,
							self-hosted (on-premise) installations, beta or preview features,
							or outages caused by factors outside our reasonable control.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-2xl font-semibold">SLA by plan</h2>
						<p>
							Each paid plan includes a defined uptime target, incident response
							time, and support coverage. Higher tiers receive faster response
							and priority handling.
						</p>
						<div className="overflow-x-auto rounded-2xl border border-border bg-card/50 shadow-sm">
							<table className="w-full min-w-[640px] text-left text-sm">
								<thead>
									<tr className="border-b border-border bg-muted/20">
										<th className="font-semibold text-foreground">Package</th>
										<th className="font-semibold text-foreground">
											Uptime SLA
										</th>
										<th className="font-semibold text-foreground">
											Response time
										</th>
										<th className="font-semibold text-foreground">Support</th>
									</tr>
								</thead>
								<tbody>
									{slaPackages.map((row, index) => (
										<tr
											key={row.plan}
											className={
												index < slaPackages.length - 1
													? "border-b border-border/50"
													: undefined
											}
										>
											<td className="font-medium text-foreground">
												{row.plan}
											</td>
											<td>{row.uptime}</td>
											<td>{row.responseTime}</td>
											<td>{row.support}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p className="text-sm">
							Compare full plan features on our{" "}
							<Link href="/pricing">pricing page</Link>.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-2xl font-semibold">1. Uptime commitment</h2>
						<p>
							We commit to the monthly uptime percentages shown in the table
							above for each eligible plan. Uptime is measured as:
						</p>
						<p className="rounded-xl border border-border bg-muted/20 px-4 py-3 font-mono text-sm text-foreground">
							((Total minutes in month − Downtime minutes) ÷ Total minutes in
							month) × 100
						</p>
						<p>
							<strong>Downtime</strong> means periods when the Cloud Services
							are unavailable to you, excluding Scheduled Maintenance and the
							exclusions listed in Section 8.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-2xl font-semibold">
							2. Response &amp; resolution times
						</h2>
						<h3 className="text-xl font-medium">2.1 Response time</h3>
						<p>
							<strong>Response time</strong> is the period from when you report
							a qualifying incident through our official support channels until
							Sagyboar acknowledges the ticket and begins investigation. Targets
							by severity:
						</p>
						<ul className="list-inside list-disc space-y-2">
							<li>
								<strong>Critical</strong> — production outage or severe security
								issue: within the plan response target (15–60 minutes depending
								on tier)
							</li>
							<li>
								<strong>High</strong> — major feature degradation: within 4
								business hours
							</li>
							<li>
								<strong>Normal</strong> — non-urgent issues: within 1 business
								day
							</li>
						</ul>
						<h3 className="text-xl font-medium">2.2 Resolution time</h3>
						<p>
							For <strong>critical</strong> incidents, we will use commercially
							reasonable efforts to restore service or provide a workaround
							within <strong>4 hours</strong> of acknowledgment. Resolution time
							depends on incident complexity; we will keep you updated on
							progress until the issue is resolved or mitigated.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-2xl font-semibold">3. Support hours</h2>
						<ul className="list-inside list-disc space-y-2">
							<li>
								<strong>Hobby</strong> — Monday through Friday, 9 AM–6 PM EST
								(business hours)
							</li>
							<li>
								<strong>Startup</strong> — 24 hours a day, 7 days a week
							</li>
							<li>
								<strong>Enterprise</strong> — 24×7 priority support with
								dedicated escalation paths
							</li>
						</ul>
						<p>
							Contact us at{" "}
							<a href={`mailto:${Sagyboar_SUPPORT_EMAIL}`}>
								{Sagyboar_SUPPORT_EMAIL}
							</a>{" "}
							or through your dashboard support channel. For critical outages,
							mark your ticket as <strong>Critical</strong> and include affected
							services, error messages, and steps to reproduce.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-2xl font-semibold">4. Backup policy</h2>
						<p>
							We maintain automated backups of managed databases and critical
							platform configuration on the following schedule:
						</p>
						<ul className="list-inside list-disc space-y-2">
							<li>
								<strong>Daily backups</strong> for production databases on paid
								plans
							</li>
							<li>
								<strong>Weekly backups</strong> for non-production environments
								where applicable
							</li>
							<li>
								<strong>30-day retention</strong> — backup copies are retained
								for up to 30 days unless a longer period is agreed in your
								enterprise agreement
							</li>
						</ul>
						<p>
							Backups are stored in geographically separate infrastructure. You
							are responsible for testing restore procedures for your own
							application data where self-managed components apply.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-2xl font-semibold">5. Security</h2>
						<p>All Cloud Services include baseline security measures:</p>
						<ul className="list-inside list-disc space-y-2">
							<li>
								<strong>SSL/TLS encryption</strong> for data in transit
							</li>
							<li>
								<strong>Continuous monitoring</strong> of infrastructure health,
								uptime, and security events
							</li>
							<li>
								<strong>Regular updates</strong> — security patches and platform
								updates applied on a scheduled basis
							</li>
							<li>
								Access controls, audit logging, and incident response aligned
								with our security practices
							</li>
						</ul>
						<p>
							Learn more in our{" "}
							<Link href="/features/platform-security-access-control">
								Security &amp; Access Control
							</Link>{" "}
							feature overview.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-2xl font-semibold">
							6. Service credits (compensation)
						</h2>
						<p>
							If we fail to meet the uptime commitment for your plan in a given
							calendar month, you may request a <strong>service credit</strong>{" "}
							applied to a future invoice. Service credits are your sole and
							exclusive remedy for SLA failures — they are not cash refunds.
						</p>
						<div className="overflow-x-auto rounded-2xl border border-border bg-card/50 shadow-sm">
							<table className="w-full min-w-[480px] text-left text-sm">
								<thead>
									<tr className="border-b border-border bg-muted/20">
										<th className="font-semibold text-foreground">
											Monthly uptime achieved
										</th>
										<th className="font-semibold text-foreground">
											Service credit
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b border-border/50">
										<td>99.0% – below plan target</td>
										<td>10% of monthly fees</td>
									</tr>
									<tr className="border-b border-border/50">
										<td>95.0% – 99.0%</td>
										<td>25% of monthly fees</td>
									</tr>
									<tr>
										<td>Below 95.0%</td>
										<td>50% of monthly fees</td>
									</tr>
								</tbody>
							</table>
						</div>
						<p>
							Credit requests must be submitted within <strong>30 days</strong>{" "}
							of the incident. Credits do not exceed one month&apos;s fees and
							cannot be transferred or redeemed for cash.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-2xl font-semibold">7. Example</h2>
						<p>
							Here is a simple illustration of how this SLA works in practice:
						</p>
						<div className="rounded-2xl border border-border bg-muted/15 p-5">
							<p className="text-foreground">
								You are on the <strong>Startup</strong> plan. We commit to{" "}
								<strong>99.9% uptime</strong> and a <strong>1-hour</strong>{" "}
								response target for critical issues.
							</p>
							<p className="mt-3">
								If your production app goes down, you open a critical support
								ticket. We acknowledge within 60 minutes and work to restore
								service within 4 hours. If monthly uptime falls below 99.9%, you
								can request a service credit on your next invoice.
							</p>
						</div>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-2xl font-semibold">8. Exclusions</h2>
						<p>
							The following are excluded from Downtime and SLA calculations:
						</p>
						<ul className="list-inside list-disc space-y-2">
							<li>Scheduled maintenance announced in advance</li>
							<li>
								Force majeure, internet or DNS provider failures, and
								third-party service outages outside our control
							</li>
							<li>
								Customer misconfiguration, unauthorized changes, or failure to
								follow documented guidance
							</li>
							<li>Beta, preview, or experimental features</li>
							<li>Free-tier and community-supported workloads</li>
						</ul>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-2xl font-semibold">9. Contact</h2>
						<p>
							To report an incident or request a service credit, contact{" "}
							<a href={`mailto:${Sagyboar_SUPPORT_EMAIL}`}>
								{Sagyboar_SUPPORT_EMAIL}
							</a>
							. Include your account identifier, affected services, and incident
							start time.
						</p>
						<p>
							For the full legal terms governing the Services, see our{" "}
							<Link href="/terms-of-service">Terms of Service</Link> and{" "}
							<Link href="/privacy">Privacy Policy</Link>.
						</p>
					</section>
				</article>
			</Container>
		</div>
	);
}
