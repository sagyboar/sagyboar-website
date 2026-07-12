import { cn } from "@/lib/utils";

type PricingSectionHeadingProps = {
	before: string;
	highlight: string;
	className?: string;
	centered?: boolean;
};

export function PricingSectionHeading({
	before,
	highlight,
	className,
	centered = true,
}: PricingSectionHeadingProps) {
	return (
		<h2
			className={cn(
				"font-display text-3xl tracking-tight text-foreground sm:text-4xl",
				centered && "text-center",
				className,
			)}
		>
			{before}{" "}
			<span className="border-b-2 border-blue-400 text-blue-400">
				{highlight}
			</span>
		</h2>
	);
}
