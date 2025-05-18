import type { LayoutProps } from '@/types'
import { SiteHeader } from '@/components/layouts/site-header'
import { SiteFooter } from '@/components/layouts/site-footer'

export default function LobbyLayout ({ children }: LayoutProps) {
  return (
    <div className='min-h-screen relative flex flex-col'>
      <SiteHeader />
      <main className='flex-1'>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
