import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ModeToggle } from '@/components/layouts/mode-toggle'
import { GitHubIcon, TwitterIcon } from '@/components/icons'
import { Shell } from '@/components/shell'

export function SiteFooter () {
  return (
    <footer className='border-t bg-background'>
      <Shell>
        <section className='flex items-center justify-between gap-x-4'>
          <div className='text-sm text-muted-foreground'>
            Build by{' '}
            <Link
              href={siteConfig.links.twitter}
              target='_blank'
              rel='noreferrer'
              className='font-semibold transition-colors hover:text-foreground'
            >
              {siteConfig.author.name}
              <span className='sr-only'>Twitter</span>
            </Link>
            .
          </div>
          <div className='flex items-center gap-x-1'>
            <Link
              href={siteConfig.links.twitter}
              target='_blank'
              rel='noreferrer'
              title='Twitter'
              className={cn(
                buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                  className: 'group'
                }),
                '[&_svg]:size-3.5'
              )}
            >
              <TwitterIcon
                className='fill-muted-foreground group-hover:fill-foreground'
                aria-hidden
              />
              <span className='sr-only'>Twitter</span>
            </Link>
            <Link
              href={siteConfig.links.githubAccount}
              target='_blank'
              rel='noreferrer'
              title='GitHub'
              className={cn(
                buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                  className: 'group'
                })
              )}
            >
              <GitHubIcon
                className='fill-muted-foreground group-hover:fill-foreground'
                aria-hidden
              />
              <span className='sr-only'>GitHub</span>
            </Link>
            <ModeToggle />
          </div>
        </section>
      </Shell>
    </footer>
  )
}
