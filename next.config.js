// Internationalization removed

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ik.imagekit.io",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/solutions/hobby",
				destination: "/solutions/side-projects",
				permanent: true,
			},
			{
				source: "/solutions/startup",
				destination: "/solutions/scale-ups",
				permanent: true,
			},
			{
				source: "/solutions/enterprise",
				destination: "/solutions/organizations",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
