import type { Author } from 'next/dist/lib/metadata/types/metadata-types'
import type { FooterItem, MainNavItem } from '@/types'
import { env } from '@/env.js'

const links = {
  twitter: 'https://x.com/saufth',
  github: 'https://github.com/saufth/xpassport',
  githubAccount: 'https://github.com/saufth'
}

export const siteConfig = {
  name: 'Next.js 14 Raw Auth Boilerplate',
  description: 'A Next.js 14 configuration with raw authentication used as a starting point for new projects',
  url: env.NEXT_PUBLIC_APP_URL,
  links,
  mainNav: [
    {
      title: 'Lobby',
      href: '/'
    }
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: 'Social',
      items: [
        {
          title: 'Twitter',
          href: links.twitter,
          external: true
        },
        {
          title: 'GitHub',
          href: links.githubAccount,
          external: true
        }
      ]
    }
  ] satisfies FooterItem[],
  author: {
    name: 'Saufth',
    url: 'https://saufth.dev'
  } satisfies Required<Author>
}

export type SiteConfig = typeof siteConfig
