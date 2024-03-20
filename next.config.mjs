/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "www.thetimes.co.uk"
            }, {
                hostname: "encrypted-tbn0.gstatic.com"
            }, {
                hostname: "luna-askmen-images.askmen.com"
            }, {
                hostname: "oxfordpennant.com"
            }
        ]
    }
};

export default nextConfig;
