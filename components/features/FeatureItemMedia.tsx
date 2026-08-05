import Image from "next/image";
import type { ReactNode } from "react";
import { FeatureItemGraphic } from "./FeatureItemGraphic";
import type { FeatureItem } from "./features-data";

/** Shared 4:3 frame — same treatment as the platform hero graphic card */
function MediaFrame({ children }: { children: ReactNode }) {
	return (
		<div className="sagy-spotlight group relative aspect-[4/3] overflow-hidden rounded-xl border border-sagy-border bg-sagy-surface shadow-sagy-card transition-colors duration-300 hover:border-sagy-accent/25">
			{children}
		</div>
	);
}

export function FeatureItemMedia({ item }: { item: FeatureItem }) {
	if (item.graphic) {
		return (
			<MediaFrame>
				<FeatureItemGraphic
					name={item.graphic}
					label={item.imageAlt ?? item.name}
					className="p-4 sm:p-6"
				/>
			</MediaFrame>
		);
	}

	if (item.image) {
		return (
			<MediaFrame>
				<Image
					src={item.image}
					alt={item.imageAlt ?? item.name}
					fill
					className="object-cover"
					sizes="(max-width: 1024px) 100vw, 50vw"
				/>
			</MediaFrame>
		);
	}

	return (
		<MediaFrame>
			<div className="absolute inset-0 flex items-center justify-center">
				<span className="font-mono text-[11px] uppercase tracking-wider text-sagy-muted">
					{item.name}
				</span>
			</div>
		</MediaFrame>
	);
}
