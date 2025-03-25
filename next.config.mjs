// import pwa from 'next-pwa'

// const withPWA = pwa({
//   dest: 'public',
//   buildExcludes: [/app-build-manifest\.json$/, /middleware-manifest\.json$/],
//   register: true,
// })
// const nextConfig = {
//   output: 'standalone',
//   sassOptions: {
//     silenceDeprecations: ['legacy-js-api'],
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//     ],
//   },
// };

// export default withPWA(nextConfig)

import pwa from 'next-pwa'

const withPWA = pwa({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'offlineCache',
        expiration: {
          maxEntries: 200,
        },
      },
    },
  ],
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