import { type MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function Manifest () : MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    orientation: 'portrait',
    display: 'standalone',
    theme_color: '#000000',
    background_color: '#000000',
    prefer_related_applications: true,
    icons: [
      {
        src: '/icon-192x192.webp',
        sizes: '192x192',
        type: 'image/webp',
        purpose: 'maskable'
      },
      {
        src: '/icon-512x512.webp',
        sizes: '512x512',
        type: 'image/webp'
      }
    ]
  }
}
