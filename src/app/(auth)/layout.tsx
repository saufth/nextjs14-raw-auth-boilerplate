import { type PropsWithChildren } from 'react'
import Image from 'next/image'
import { SaufthLogo } from '@/components/logotype'

export default function AuthLayout ({ children }: PropsWithChildren) {
  return (
    <div className='relative grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2'>
      <SaufthLogo className='absolute left-8 top-6 z-20' />
      <main className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center lg:static lg:left-0 lg:top-0 lg:flex lg:translate-x-0 lg:translate-y-0'>
        {children}
      </main>
      <div className='relative aspect-video size-full'>
        <Image
          src='/images/auth-layout.webp'
          alt='A London undeground train at a station platform, with its doors open and passangers boarding'
          fill
          className='absolute inset-0 object-cover'
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-background/90 to-black/50 lg:to-black/30' />
      </div>
    </div>
  )
}
