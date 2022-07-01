/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig;

module.exports = {
  webpack(config) { // we depend on nextjs switching to webpack 4 by default. Probably they will 
    // change this behavior at some future major version.
    config.node = {
      fs: "empty", // webpack4 era solution 
    };

    return config;
  },
};


module.exports = {
  experimental: {
    images: {
        layoutRaw: true,
    },
},
  images: {
    domains: ['images.unsplash.com','localhost',"res.cloudinary.com"],
  },
}