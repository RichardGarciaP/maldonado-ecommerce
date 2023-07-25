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
    domains: ["fakestoreapi.com",'upload.wikimedia.org','www.tematika.com','m.media-amazon.com'],
  },
};

module.exports = nextConfig;
