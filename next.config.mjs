/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  poweredByHeader: false,
  // Vercel runs `next build` with no NEXT_DIST_DIR, so it gets the default
  // `.next` it expects. Locally, `npm run build:check` sets the variable and
  // builds into a scratch directory instead, leaving the running dev server's
  // cache untouched — building over it corrupts the dev chunks.
  distDir: process.env.NEXT_DIST_DIR || '.next'
};
export default nextConfig;
