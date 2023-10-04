/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
    return [
      {
        source: '/',
        destination: '/Dashboard',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig