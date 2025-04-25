/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // ← fix warning too
    appDir: true,
  },
  // Add this to enable CSS modules and global imports
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
};

module.exports = nextConfig;
