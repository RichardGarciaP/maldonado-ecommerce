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
    domains: ["fakestoreapi.com",'www.rd.com','www.bankrate.com','media.npr.org'],
  },
};

module.exports = nextConfig;
