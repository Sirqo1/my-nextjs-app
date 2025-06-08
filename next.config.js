/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-nextjs-app' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/my-nextjs-app' : '',
}

module.exports = nextConfig