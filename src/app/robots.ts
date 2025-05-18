import { type MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/utils'

export default function Robots () : MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: absoluteUrl('/sitemap.xml')
  }
}
