/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
    "images": {
        "domains": ["wefit-react-web-test.s3.amazonaws.com", "wefit-react-web-test.s3.amazonaws.com"],
    },
};

export default nextConfig;
