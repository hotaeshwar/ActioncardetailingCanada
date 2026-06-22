import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    // Add loader for video and image files using our custom loader.cjs
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|avif|mp4|webm|ogg|swf|ogv)$/i,
      loader: path.resolve('./loader.cjs'),
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/paint-protection-film',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
