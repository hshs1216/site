/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: process.env.GITHUB_ACTIONS ? "/site" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
