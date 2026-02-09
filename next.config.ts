/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Optional: ensures links like /about work without needing .html in the URL
  trailingSlash: true,
  images: {
    // Required because the default optimization API needs a Node.js server
    unoptimized: true,
  },
};

module.exports = nextConfig;
