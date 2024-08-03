/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	distDir: 'dist',
	images: {
		unoptimized: true,
	},
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

module.exports = nextConfig;
