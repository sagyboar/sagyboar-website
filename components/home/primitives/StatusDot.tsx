import { cn } from "@/lib/utils";

type Status = "running" | "errored" | "idle";

const statusColors: Record<Status, string> = {
	running: "bg-sagy-success",
	errored: "bg-sagy-error",
	idle: "bg-sagy-idle",
};

type StatusDotProps = {
	status: Status;
	className?: string;
	label?: string;
};

export function StatusDot({ status, className, label }: StatusDotProps) {
	return (
		<span className={cn("inline-flex items-center gap-2", className)}>
			<span
				className={cn("size-2 shrink-0 rounded-full", statusColors[status])}
				aria-hidden="true"
			/>
			{label && (
				<span className="font-mono text-xs uppercase tracking-wider text-sagy-muted">
					{label}
				</span>
			)}
		</span>
	);
}
