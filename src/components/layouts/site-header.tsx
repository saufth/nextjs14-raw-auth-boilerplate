import { ModeToggle } from '@/components/layouts/mode-toggle'
import { CallToAction } from '@/components/call-to-action'
import { SaufthLogo } from '@/components/logotype'

export function SiteHeader () {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background'>
      <div className='container flex h-16 items-center'>
        <SaufthLogo />
        <div className='hidden sm:flex flex-1 items-center justify-end gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <ModeToggle
              className='animate-fade-down [&>.icon]:size-5'
              style={{ animationDelay: '0.40s', animationFillMode: 'both' }}
            />
          </div>
          <CallToAction
            className='animate-fade-down'
            style={{ animationDelay: '0.20s', animationFillMode: 'both' }}
            to='signin'
            variant='outline'
          />
          <CallToAction
            className='animate-fade-down'
            style={{ animationDelay: '0.10s', animationFillMode: 'both' }}
            to='signup'
          />
        </div>
        <div className='flex flex-1 sm:hidden items-center justify-end gap-x-1'>
          <ModeToggle className='[&>.icon]:size-5' />
        </div>
      </div>
    </header>
  )
}
