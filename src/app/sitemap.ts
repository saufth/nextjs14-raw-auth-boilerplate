import { type MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { absoluteUrl } from '@/lib/utils'

export default function Sitemap () : MetadataRoute.Sitemap {
  const mainNav = siteConfig.mainNav.map((navItem) => ({
    url: absoluteUrl(navItem.href),
    lastModified: new Date().toISOString()
  }))

  return [
    ...mainNav
  ]
}
