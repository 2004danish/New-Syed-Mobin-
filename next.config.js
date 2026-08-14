/** @type {import('next').Next.js} */
const nextConfig = {
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors. Plays smart for rapid deployment.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;