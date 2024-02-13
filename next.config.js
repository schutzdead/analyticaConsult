/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  trailingSlash: true,
  assetPrefix: isProd ? 'https://histhorizons.fr' : undefined,
  images: {
    unoptimized: true,
  },
}