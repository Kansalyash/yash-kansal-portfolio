import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['sanity', 'next-sanity', '@sanity/workbench', '@sanity/sdk-react'],
};

export default nextConfig;
