/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    // Add loader for video and image files using Webpack 5's asset/resource
    // without custom paths so Next.js's dev server handles asset URLs correctly.
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|avif|mp4|webm|ogg|swf|ogv)$/i,
      type: 'asset/resource',
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
