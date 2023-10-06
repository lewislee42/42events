/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
    return [
      {
        source: '/',
        destination: '/Login',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig