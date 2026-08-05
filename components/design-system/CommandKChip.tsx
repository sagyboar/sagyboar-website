import { cn } from "@/lib/utils";

type CommandKChipProps = {
	className?: string;
};

export function CommandKChip({ className }: CommandKChipProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 font-mono text-[11px] text-sagy-muted",
				className,
			)}
			aria-label="Command K shortcut"
		>
			<span aria-hidden="true">⌘</span>K
		</span>
	);
}
