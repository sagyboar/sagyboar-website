import { cn } from "@/lib/utils";

type SectionHeadingProps = {
	eyebrow?: string;
	title: string;
	titleHighlight?: string;
	subline?: string;
	align?: "left" | "center";
	className?: string;
	as?: "h1" | "h2";
	size?: "hero" | "section";
};

/** Mono eyebrow + condensed display title with one brand-accent word + sans subline */
export function SectionHeading({
	eyebrow,
	title,
	titleHighlight,
	subline,
	align = "left",
	className,
	as: Tag = "h2",
	size = "section",
}: SectionHeadingProps) {
	const parts = titleHighlight ? title.split(titleHighlight) : [title];

	return (
		<div
			className={cn(
				"max-w-3xl",
				align === "center" && "mx-auto text-center",
				className,
			)}
		>
			{eyebrow && (
				<p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-sagy-muted">
					{eyebrow}
				</p>
			)}
			<Tag
				className={cn(
					"font-display uppercase leading-[0.95] tracking-tight text-sagy-heading",
					size === "hero"
						? "text-4xl sm:text-5xl lg:text-6xl"
						: "text-3xl sm:text-4xl lg:text-5xl",
				)}
			>
				{titleHighlight && parts.length > 1 ? (
					<>
						{parts[0]}
						<span className="text-sagy-accent">{titleHighlight}</span>
						{parts[1]}
					</>
				) : (
					title
				)}
			</Tag>
			{subline && (
				<p
					className={cn(
						"mt-4 max-w-2xl font-sans text-base leading-relaxed text-sagy-body sm:text-lg",
						align === "center" && "mx-auto",
					)}
				>
					{subline}
				</p>
			)}
		</div>
	);
}
