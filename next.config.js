// Internationalization removed

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [],
	},
};

module.exports = nextConfig;
