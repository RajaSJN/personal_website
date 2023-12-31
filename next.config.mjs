
import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};


export default withContentlayer(nextConfig);
