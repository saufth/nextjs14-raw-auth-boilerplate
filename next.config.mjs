import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const jiti = createJiti(fileURLToPath(import.meta.url))
// Import env here to validate during build. Using jiti we can import .ts files
await jiti.import('./src/env/server')
await jiti.import('./src/env/client')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  }
}

export default nextConfig
