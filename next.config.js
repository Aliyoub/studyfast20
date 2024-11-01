//** @type {import('next').NextConfig} */
// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/question-answer',
//         destination: '/revisions/history/question-answer',
//       },
//     ];
//   },
// };

//** @type {import('next').NextConfig} */
// const nextConfig = {
//   serverExternalPackages: ['@acme/ui'],
// }
// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@acme/ui'],
  },
}
module.exports = nextConfig


// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
  // runtimeCaching: [
  //   {
  //     urlPattern: /^https:\/\/your-api-url\/api\/ocr/,
  //     handler: 'NetworkOnly',
  //   },
  //   // D'autres règles de mise en cache...
  // ],
  register: true,
  skipWaiting: true,
});

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true, // Assurez-vous que cette option est activée si vous utilisez le modèle `app/`
//   },
// }

module.exports = withPWA({
  // Autres configurations Next.js
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/question-answer',
        destination: '/revisions/history/question-answer',
      },
    ];
  },
});


const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  // Other Next.js configurations...
  
  webpack: (config, { dev, isServer }) => {
    // Only add GenerateSW in production on the client-side
    if (!dev && !isServer) {
      config.plugins.push(
        new GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          // Additional Workbox configuration here...
        })
      );
    }

    return config;
  },
};

