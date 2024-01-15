//@type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
  },
  treeshake: {
    moduleSideEffects: false,
  },
  plugins: [
    commonjs({
      exclude: [
        'node_modules/pino-pretty/**',
      ],
    }),
  ],
};

module.exports = nextConfig;
