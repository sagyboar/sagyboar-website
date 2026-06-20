const TRUSTED_LOGOS = [
	{ name: "Docker", label: "docker" },
	{ name: "Kubernetes", label: "kubernetes" },
	{ name: "GitHub", label: "github" },
	{ name: "AWS", label: "aws" },
	{ name: "Vercel", label: "vercel" },
	{ name: "Railway", label: "railway" },
] as const;

export function HeroTrustedBy() {
	return (
		<div className="relative z-10 mt-auto w-full pb-10 pt-16 sm:pb-14 sm:pt-20">
			<p className="text-center text-sm text-muted-foreground">
				Trusted by leaders in
			</p>
			<ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 sm:gap-x-12">
				{TRUSTED_LOGOS.map(({ name, label }) => (
					<li key={label}>
						<span
							className="select-none font-display text-base font-semibold tracking-tight text-foreground/35 transition-colors hover:text-foreground/55 sm:text-lg"
							aria-label={name}
						>
							{name}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
