/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'github.com',
      'github-readme-stats-eight-theta.vercel.app',
      'github-readme-stats.vercel.app',
      'raw.githubusercontent.com',
    ],
  },
}

module.exports = nextConfig
