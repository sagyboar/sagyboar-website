"use client";

import {
	INTRO_VIDEO_DESCRIPTION,
	INTRO_VIDEO_POSTER,
	INTRO_VIDEO_SRC,
	INTRO_VIDEO_TITLE,
} from "@/constants/video";

export function IntroWatchPlayer() {
	return (
		<div className="overflow-hidden rounded-2xl border border-border bg-black shadow-lg">
			<video
				controls
				playsInline
				preload="metadata"
				poster={INTRO_VIDEO_POSTER}
				className="aspect-video w-full bg-black"
				aria-label={`${INTRO_VIDEO_TITLE} — ${INTRO_VIDEO_DESCRIPTION}`}
			>
				<source src={INTRO_VIDEO_SRC} type="video/mp4" />
				<p className="p-4 text-sm text-muted-foreground">
					Your browser does not support HTML5 video.{" "}
					<a
						href={INTRO_VIDEO_SRC}
						className="text-primary underline underline-offset-2"
					>
						Download the intro video
					</a>
					.
				</p>
			</video>
		</div>
	);
}
