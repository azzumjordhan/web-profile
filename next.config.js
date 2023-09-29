/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: false,
  env: {
    HOST: process.env.HOST,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: this.env.HOST + ':path*', // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
