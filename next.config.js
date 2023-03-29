/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://cdn.myanimelist.net/",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
