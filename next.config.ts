import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'robohash.org', // Replace with your image host
                port: '',
                // pathname: '/path/to/images/**', // Optional: specify a path
            },
        ],
    },
};

export default nextConfig;
