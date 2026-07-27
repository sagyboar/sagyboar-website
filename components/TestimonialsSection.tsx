import { Container } from "@/components/Container";
import clsx from "clsx";

type Testimonial = {
	quote: string;
	name: string;
	role?: string;
	company: string;
	featured?: boolean;
};

const testimonials: Testimonial[] = [
	{
		quote:
			"Sagyboar built our website and handled the entire deployment end to end. It was live faster than we expected, and we never had to touch any infrastructure ourselves.",
		name: "Prakash",
		company: "Documentsheet",
		featured: true,
	},
	{
		quote:
			"The team has been building our sites exactly the way we wanted — clear communication and quick turnarounds throughout. Now getting everything deployed on their platform.",
		name: "Anirudh Jadeja",
		company: "",
		featured: false,
	},
];

function getInitials(name: string) {
	return name
		.split(/\s+/)
		.filter(Boolean)
		.map((part) => part[0])
		.slice(0, 2)
		.join("")
		.toUpperCase();
}

export function TestimonialsSection() {
	return (
		<section
			id="testimonials"
			aria-labelledby="testimonials-title"
			className="bg-background py-16 sm:py-20"
		>
			<Container className="flex flex-col gap-10">
				<div className="mx-auto max-w-2xl md:text-center">
					<h2
						id="testimonials-title"
						className="text-center font-display text-3xl tracking-tight text-foreground sm:text-4xl"
					>
						Loved by engineers who{" "}
						<span className="border-b-2 border-blue-400 text-blue-400">
							ship
						</span>
					</h2>
					<p className="mt-4 text-center text-lg tracking-tight text-muted-foreground">
						What teams say after shipping with Sagyboar.
					</p>
				</div>

				<div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
					{testimonials.map((t) => (
						<article
							key={t.name}
							className={clsx(
								"group flex flex-col justify-between rounded-2xl border p-6 shadow-sm backdrop-blur-sm transition-all duration-200 sm:p-8",
								"hover:-translate-y-1 hover:scale-[1.02] hover:border-white/20",
								t.featured
									? "border-blue-400/30 bg-gradient-to-b from-blue-400/10 via-[#0a0a0a] to-[#0a0a0a]"
									: "border-white/10 bg-[#0a0a0a]/80",
							)}
						>
							<blockquote className="text-base leading-relaxed text-neutral-200 sm:text-lg">
								&ldquo;{t.quote}&rdquo;
							</blockquote>

							<footer className="mt-8 flex items-center gap-3">
								<div
									aria-hidden
									className={clsx(
										"flex size-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold",
										t.featured
											? "border-blue-400/40 bg-blue-400/15 text-blue-300"
											: "border-white/10 bg-white/5 text-neutral-300",
									)}
								>
									{getInitials(t.name)}
								</div>
								<div className="min-w-0">
									<p className="truncate font-semibold text-foreground">
										{t.name}
									</p>
									{(t.role || t.company) && (
										<p className="truncate text-sm text-muted-foreground">
											{t.role && <span>{t.role}</span>}
											{t.role && t.company ? " · " : null}
											{t.company || null}
										</p>
									)}
								</div>
							</footer>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
