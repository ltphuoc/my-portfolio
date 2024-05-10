/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'github.com',
      'github-readme-stats-eight-theta.vercel.app',
      'github-readme-stats.vercel.app',
      'raw.githubusercontent.com',
      'plus.unsplash.com',
    ],
  },
}

module.exports = nextConfig
