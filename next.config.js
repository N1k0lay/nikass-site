/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        workerThreads: false,
        cpus: 1
    },
};

module.exports = nextConfig;
