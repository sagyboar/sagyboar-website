import { GoogleAnalytics } from "@next/third-parties/google";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, Lexend } from "next/font/google";
import type { ReactNode } from "react";
import "@/public/styles/tailwind.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/theme-provider";
import { Sagyboar_LOGO_SRC } from "@/constants/branding";
import {
	DEFAULT_OG_IMAGE,
	SITE_DESCRIPTION,
	SITE_NAME,
	SITE_URL,
	organizationJsonLd,
	websiteJsonLd,
} from "@/constants/seo-data";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const lexend = Lexend({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-lexend",
});

const instrumentSerif = Instrument_Serif({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-instrument-serif",
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],
};

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: `${SITE_NAME} — Deploy Your Applications With Ease`,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	applicationName: SITE_NAME,
	manifest: "/site.webmanifest",
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: Sagyboar_LOGO_SRC, type: "image/svg+xml" },
		],
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		title: `${SITE_NAME} — Deploy Your Applications With Ease`,
		description: SITE_DESCRIPTION,
		url: SITE_URL,
		siteName: SITE_NAME,
		images: DEFAULT_OG_IMAGE,
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: `${SITE_NAME} — Deploy Your Applications With Ease`,
		description: SITE_DESCRIPTION,
		images: [DEFAULT_OG_IMAGE],
	},
	robots: { index: true, follow: true },
	appleWebApp: {
		capable: true,
		title: SITE_NAME,
		statusBarStyle: "default",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			className={clsx(
				"h-full scroll-smooth antialiased",
				inter.variable,
				lexend.variable,
				instrumentSerif.variable,
			)}
			suppressHydrationWarning
		>
			<head>
				<link rel="manifest" href="/site.webmanifest" />
				<JsonLd data={[organizationJsonLd, websiteJsonLd]} />
				<script
					type="text/javascript"
					id="hs-script-loader"
					async
					defer
					src="//js-eu1.hs-scripts.com/147033433.js"
				/>
			</head>
			<body className="min-h-full overflow-x-hidden">
				<ThemeProvider>
					<GoogleAnalytics gaId="G-3YPQZXP48E" />
					<div className="flex min-h-full flex-col bg-background">
						<Header />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
