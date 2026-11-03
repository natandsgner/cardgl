/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/cardgl",
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig