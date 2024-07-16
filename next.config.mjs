/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        host: "0.0.0.0",
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:'eveline.tatadev.pro'
            }
        ]
    },
    output: "export",
    
};

export default nextConfig;
