// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

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
};

export default withPWA(nextConfig)