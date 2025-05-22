import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const jiti = createJiti(fileURLToPath(import.meta.url))
jiti.import('./src/env')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  }
}

export default nextConfig
