import path from 'path';
import fs from 'fs';

// Programmatically create symlink/junction in public/src pointing to src
const linkPath = path.resolve('./public/src');
const targetPath = path.resolve('./src');

if (!fs.existsSync(linkPath)) {
  try {
    const type = process.platform === 'win32' ? 'junction' : 'dir';
    fs.symlinkSync(targetPath, linkPath, type);
    console.log('Successfully created public/src symlink/junction');
  } catch (err) {
    console.error('Failed to create public/src symlink/junction:', err);
  }
}

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
