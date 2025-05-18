import { type Metadata, type Viewport } from 'next'
import { env } from '@/env.mjs'
import type { LayoutProps } from '@/types'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { fontHeader, fontSans } from '@/lib/fonts'
import { Toaster } from '@/components/ui/sonner'
import GoogleSearchScript from '@/components/layouts/google-seacrch-script'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/providers'
import '@/app/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} — %s`
  },
  description: siteConfig.description,
  keywords: [
    'nextjs 14',
    'raw authentication',
    'boilerplate'
  ],
  authors: siteConfig.author,
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  applicationName: siteConfig.name,
  generator: 'Next.js',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.jpg`],
    siteName: siteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.jpg`],
    creator: '@saufth'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  userScalable: true,
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
}

export default async function RootLayout ({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'bg-background text-foreground font-sans min-h-screen !scroll-smooth',
          fontHeader.variable,
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          {children}
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
        <GoogleSearchScript />
      </body>
    </html>
  )
}
