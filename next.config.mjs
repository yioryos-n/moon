/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/moon', // e.g. '/moon'
  trailingSlash: true, // recommended for GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
