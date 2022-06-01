/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig;


module.exports = {
  experimental: {
    images: {
        layoutRaw: true,
    },
},
  images: {
    domains: ['images.unsplash.com', 'example2.com'],
  },
}