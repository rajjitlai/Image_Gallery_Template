/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['bit.ly'],
    },
    entry: {
        client: './src/app/page.tsx',
    },
}
