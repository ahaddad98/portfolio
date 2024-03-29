/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/hello',
                permanent: true,
            },
            {
                source: '/aboutme',
                destination: '/aboutme/bio',
                permanent: true,
            },
            {
                source: '/contactme',
                destination: '/contactme/mailpart',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
