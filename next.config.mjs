/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  poweredByHeader: false,
  // Production builds write to .next-build so they never clobber the running
  // `next dev` cache. `npm run build` sets this for you.
  distDir: process.env.NEXT_DIST_DIR || '.next'
};
export default nextConfig;
