/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.ap-southeast-3.amazonaws.com", "s3.ap-southeast-1.amazonaws.com", "static.wixstatic.com"],
  },
};

module.exports = nextConfig;
