/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */

// @ts-ignore
import WithPWA from "next-pwa";
const withPWA = WithPWA({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: false,
});
const config = withPWA({
  reactStrictMode: true,

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  eslint: { 
    ignoreDuringBuilds: true, 
  }, 
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        hostname: 'i.ibb.co',
      },
      {
        hostname: 'ibb.co',
      },
    ],
  },
});

export default config;
