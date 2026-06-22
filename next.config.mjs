/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  webpack(config, { isServer }) {
    // Add loader for video and image files to return direct URL strings (similar to Vite)
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|avif|mp4|webm|ogg|swf|ogv)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
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
