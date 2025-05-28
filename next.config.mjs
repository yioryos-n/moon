/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/moon',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
