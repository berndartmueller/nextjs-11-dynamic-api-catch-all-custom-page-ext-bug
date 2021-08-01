const nextTranslate = require('next-translate')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // pageExtensions: [
  //   "page.tsx",
  //   "page.ts",
  //   "page.jsx",
  //   "page.js",
  //   "api.ts",
  //   "api.js"
  // ]
};

module.exports = nextTranslate(nextConfig);
