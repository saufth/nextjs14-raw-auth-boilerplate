await import('./src/env.mjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  }
}

export default nextConfig
