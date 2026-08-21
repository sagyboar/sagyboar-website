// Internationalization removed

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	// Sanity ships some packages with JSX/modern syntax in .js files that
	// webpack won't compile unless we opt them into Next's transpiler.
	transpilePackages: [
		"next-sanity",
		"sanity",
		"@sanity/vision",
		"@sanity/ui",
		"@sanity/icons",
		"@sanity/sdk",
		"@sanity/sdk-react",
	],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ik.imagekit.io",
			},
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
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
