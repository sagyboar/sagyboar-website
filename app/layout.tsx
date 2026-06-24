import { GoogleAnalytics } from "@next/third-parties/google";
import clsx from "clsx";
import type { Metadata } from "next";
import { Instrument_Serif, Inter, Lexend } from "next/font/google";
import type { ReactNode } from "react";
import "@/styles/tailwind.css";
import "react-photo-view/dist/react-photo-view.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { SAGYBOAR_LOGO_SRC } from "@/constants/branding";

type Props = {
	children: ReactNode;
};

export const metadata: Metadata = {
	metadataBase: new URL("https://Sagyboar.com"),
	title: {
		default: "Sagyboar - Deploy your applications with ease",
		template: "%s | Sagyboar",
	},
	description: "Deploy your applications with ease using Sagyboar",
	icons: {
		icon: SAGYBOAR_LOGO_SRC,
		apple: SAGYBOAR_LOGO_SRC,
	},
	openGraph: {
		title: "Sagyboar - Deploy your applications with ease",
		description: "Deploy your applications with ease using Sagyboar",
		images: "/og.png",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Sagyboar - Deploy your applications with ease",
		description: "Deploy your applications with ease using Sagyboar",
		images: ["/og.png"],
	},
};
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
// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			className={clsx(
				"h-full scroll-smooth antialiased dark",
				inter.variable,
				lexend.variable,
				instrumentSerif.variable,
			)}
			suppressHydrationWarning
		>
			<head>
				<script
					type="text/javascript"
					id="hs-script-loader"
					async
					defer
					src="//js-eu1.hs-scripts.com/147033433.js"
				/>
			</head>
			<body>
				<ThemeProvider>
					<GoogleAnalytics gaId="G-3YPQZXP48E" />
					<div className="flex h-full flex-col bg-background">
						<Header />
						{children}
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
