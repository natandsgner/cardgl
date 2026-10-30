
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/cardgl",

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig
