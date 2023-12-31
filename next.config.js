/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "www.rd.com",
      "www.bankrate.com",
      "media.npr.org",
      "i.pinimg.com",
    ],
  },
};

module.exports = nextConfig;
