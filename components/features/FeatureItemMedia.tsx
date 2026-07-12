import Image from "next/image";
import { FeatureItemGraphic } from "./FeatureItemGraphic";
import type { FeatureBadge, FeatureItem } from "./features-data";

const VISUAL_GRADIENTS = [
	"from-blue-500/25 via-violet-500/15 to-muted/40",
	"from-emerald-500/25 via-cyan-500/15 to-muted/40",
	"from-orange-500/20 via-pink-500/15 to-muted/40",
	"from-violet-500/25 via-indigo-500/15 to-muted/40",
] as const;

const BADGE_ACCENT: Record<FeatureBadge, string> = {
	CORE: "bg-primary/80",
	AI: "bg-blue-500/80",
	MANAGED: "bg-emerald-500/80",
	NEW: "bg-violet-500/80",
};

function FeatureItemVisual({
	badge,
	index,
}: {
	badge: FeatureBadge;
	index: number;
}) {
	const gradient = VISUAL_GRADIENTS[index % VISUAL_GRADIENTS.length];
	const accent = BADGE_ACCENT[badge];

	return (
		<div
			className={`relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${gradient} shadow-sm`}
		>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.35]"
				style={{
					backgroundImage:
						"linear-gradient(hsl(var(--border) / 0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.35) 1px, transparent 1px)",
					backgroundSize: "28px 28px",
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-white/10 blur-3xl dark:bg-white/5"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -bottom-10 -left-6 size-36 rounded-full bg-primary/20 blur-3xl"
			/>

			<div className="relative flex h-full flex-col p-5 sm:p-6">
				<div className="flex items-center gap-2">
					<span className={`size-2.5 rounded-full ${accent}`} />
					<span className="size-2.5 rounded-full bg-muted-foreground/30" />
					<span className="size-2.5 rounded-full bg-muted-foreground/30" />
				</div>

				<div className="mt-5 flex-1 rounded-2xl border border-border/50 bg-background/55 p-4 backdrop-blur-sm dark:bg-background/35">
					<div className="space-y-3">
						<div className="h-2.5 w-2/5 rounded-full bg-foreground/15" />
						<div className="h-2 w-full rounded-full bg-foreground/10" />
						<div className="h-2 w-11/12 rounded-full bg-foreground/10" />
						<div className="h-2 w-4/5 rounded-full bg-foreground/10" />
					</div>
					<div className="mt-5 grid grid-cols-3 gap-2">
						<div className="h-14 rounded-xl border border-border/40 bg-muted/30" />
						<div className="h-14 rounded-xl border border-border/40 bg-muted/30" />
						<div className="h-14 rounded-xl border border-border/40 bg-muted/30" />
					</div>
				</div>

				<div className="mt-4 flex items-center justify-between">
					<div className="h-2 w-24 rounded-full bg-foreground/10" />
					<div className={`h-7 w-20 rounded-full ${accent} opacity-70`} />
				</div>
			</div>
		</div>
	);
}

export function FeatureItemMedia({
	item,
	index,
}: {
	item: FeatureItem;
	index: number;
}) {
	if (item.graphic) {
		return (
			<div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-muted/30 shadow-sm">
				<FeatureItemGraphic
					name={item.graphic}
					label={item.imageAlt ?? item.name}
				/>
			</div>
		);
	}

	if (item.image) {
		return (
			<div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-muted/30 shadow-sm">
				<Image
					src={item.image}
					alt={item.imageAlt ?? item.name}
					fill
					className="object-cover"
					sizes="(max-width: 1024px) 100vw, 50vw"
				/>
			</div>
		);
	}

	return <FeatureItemVisual badge={item.badge} index={index} />;
}
