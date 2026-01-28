import nextra from "nextra";

const withNextra = nextra({}); // No theme specified here, using it purely as a loader

export default withNextra({
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
});
