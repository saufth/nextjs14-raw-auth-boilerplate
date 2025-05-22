import Script from 'next/script'
import { absoluteUrl } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import type { Graph } from 'schema-dts'

const SEARCH_SCHEME: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': absoluteUrl('/#organization'),
      name: `${siteConfig.name}`
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      url: absoluteUrl(),
      name: `${siteConfig.name}`,
      publisher: {
        '@id': absoluteUrl('/#organization')
      },
      inLanguage: 'en-US'
    },
    {
      '@type': 'CollectionPage',
      '@id': absoluteUrl('/#webpage'),
      url: absoluteUrl(),
      name: `${siteConfig.name}`,
      about: {
        '@id': absoluteUrl('/#organization')
      },
      isPartOf: {
        '@id': absoluteUrl('/#website')
      },
      inLanguage: 'en-US'
    }
  ]
} as const

export default function GoogleSearchScript () {
  return (
    <Script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(SEARCH_SCHEME)
      }}
      id='WebSite'
    />
  )
}
