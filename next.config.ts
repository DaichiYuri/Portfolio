import type { NextConfig } from "next";

const isProd: boolean = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? '/Portfolio' : ''
};

export default nextConfig;
