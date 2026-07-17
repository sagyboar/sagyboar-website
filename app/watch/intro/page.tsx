import { Container } from "@/components/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { IntroWatchPlayer } from "@/components/watch/IntroWatchPlayer";
import { pageSeo, SITE_NAME, SITE_URL } from "@/constants/seo-data";
import {
	INTRO_VIDEO_DESCRIPTION,
	INTRO_VIDEO_DURATION,
	INTRO_VIDEO_POSTER,
	INTRO_VIDEO_SRC,
	INTRO_VIDEO_TITLE,
	INTRO_VIDEO_UPLOAD_DATE,
} from "@/constants/video";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata(pageSeo.watchIntro);

const videoJsonLd = {
	"@context": "https://schema.org",
	"@type": "VideoObject",
	name: INTRO_VIDEO_TITLE,
	description: INTRO_VIDEO_DESCRIPTION,
	thumbnailUrl: `${SITE_URL}${INTRO_VIDEO_POSTER}`,
	contentUrl: `${SITE_URL}${INTRO_VIDEO_SRC}`,
	embedUrl: `${SITE_URL}/watch/intro`,
	uploadDate: INTRO_VIDEO_UPLOAD_DATE,
	duration: INTRO_VIDEO_DURATION,
	publisher: {
		"@type": "Organization",
		name: SITE_NAME,
		logo: {
			"@type": "ImageObject",
			url: `${SITE_URL}/Sagyboar-logo.png`,
		},
	},
};

export default function WatchIntroPage() {
	return (
		<div className="min-h-screen bg-background pt-28 pb-16 sm:pt-32 sm:pb-24">
			<JsonLd data={videoJsonLd} />
			<Container>
				<div className="mx-auto max-w-3xl">
					<p className="text-sm font-medium uppercase tracking-wider text-primary">
						Product video
					</p>
					<h1 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
						{INTRO_VIDEO_TITLE}
					</h1>
					<p className="mt-4 text-lg text-muted-foreground">
						{INTRO_VIDEO_DESCRIPTION}
					</p>

					<div className="mt-8">
						<IntroWatchPlayer />
					</div>

					<p className="mt-6 text-sm text-muted-foreground">
						<Link href="/" className="text-primary underline underline-offset-2">
							Back to homepage
						</Link>
						{" · "}
						<Link
							href="/pricing"
							className="text-primary underline underline-offset-2"
						>
							View pricing
						</Link>
					</p>
				</div>
			</Container>
		</div>
	);
}
