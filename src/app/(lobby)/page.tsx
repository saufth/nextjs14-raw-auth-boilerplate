import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Badge } from '@/components/ui/badge'
import { CallToAction } from '@/components/call-to-action'
import { GitHubIcon } from '@/components/icons'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading
} from '@/components/page-header'
import { Shell } from '@/components/shell'

export default function LobbyPage () {
  return (
    <Shell className='max-w-6xl gap-0'>
      <PageHeader
        className='gap-4 sm:gap-5 lg:gap-6'
        centered
        withPadding
      >
        <Link
          href={siteConfig.links.github}
          target='_blank'
          rel='noreferrer'
          className='animate-fade-up'
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          <Badge
            className='px-3.5 py-1.5 gap-x-2 rounded-full'
            variant='secondary'
            aria-hidden
          >
            <GitHubIcon className='size-3.5' aria-hidden />
            GitHub Repository
          </Badge>
        </Link>
        <PageHeaderHeading
          className='animate-fade-up'
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          {siteConfig.name}
        </PageHeaderHeading>
        <PageHeaderDescription
          className='animate-fade-up'
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          {siteConfig.description}
        </PageHeaderDescription>
        <PageActions
          className='flex flex-col-reverse xs:flex-row animate-fade-up'
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          <CallToAction
            className='w-full xs:w-fit font-semibold'
            to='signin'
            size='lg'
            variant='outline'
          />
          <CallToAction
            className='w-full xs:w-fit font-semibold'
            to='signup'
            size='lg'
          >
            Sign up now!
          </CallToAction>
        </PageActions>
      </PageHeader>
    </Shell>
  )
}
