/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol: 'https',
                hostname: 'cloudenary.cloudenary.com',
                port: '',
                pathname: '/my-bucket/**',
              },
        ]
    }
};

export default nextConfig;
