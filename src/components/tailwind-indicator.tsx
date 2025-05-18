import { IS_ENV_PRODUCTION } from '@/lib/constants'

export function TailwindIndicator () {
  if (IS_ENV_PRODUCTION) return null

  return (
    <div className='fixed bottom-px left-0.5 z-50 grid place-content-center font-mono font-bold text-[0.625rem] text-muted-foreground'>
      <span className='block xs:hidden'>2xs</span>
      <span className='hidden xs:block sm:hidden'>xs</span>
      <span className='hidden sm:block md:hidden'>sm</span>
      <span className='hidden md:block lg:hidden'>md</span>
      <span className='hidden lg:block xl:hidden'>lg</span>
      <span className='hidden xl:block 2xl:hidden'>xl</span>
      <span className='hidden 2xl:block 3xl:hidden'>2xl</span>
      <span className='hidden 3xl:block'>3xl</span>
    </div>
  )
}
