import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    // Add loader for video and image files using our custom loader.cjs
    config.module.rules.unshift({
      test: /\.(png|jpe?g|gif|svg|webp|avif|mp4|webm|ogg|swf|ogv)$/i,
      loader: path.resolve('./loader.cjs'),
    });

    return config;
  },
};

export default nextConfig;
