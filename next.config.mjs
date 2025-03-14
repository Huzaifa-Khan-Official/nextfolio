import pwa from 'next-pwa'

const withPWA = pwa({
  dest: 'public',
  buildExcludes: [/app-build-manifest\.json$/, /middleware-manifest\.json$/],
  register: true,
})
const nextConfig = {
  output: 'standalone',
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withPWA(nextConfig)