import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { SaufthIcon } from '@/components/icons'

const logotypeVariants = cva(
  'leading-none',
  {
    variants: {
      variant: {
        default: 'text-primary',
        secondary: 'text-secondary',
        ghost: 'text-accent',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'text-base font-medium',
        sm: 'text-xs',
        lg: 'text-[1.375rem] font-bold'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

interface LogotypeProps extends VariantProps<typeof logotypeVariants> {
  className?: string
}

export function Logotype ({ className, variant, size }: LogotypeProps) {
  return (
    <Link
      href='/'
      title={`${siteConfig.name} home`}
      className={cn(logotypeVariants({ variant, size, className }))}
    >
      <span>{siteConfig.name}</span>
      <div className='sr-only'>{`${siteConfig.name} home`}</div>
    </Link>
  )
}

export function SaufthLogo ({ className }: { className?: string }) {
  return (
    <Link
      href='/'
      className={cn('h-8', className)}
    >
      <SaufthIcon className='w-auto h-full' />
      <div className='sr-only'>Saufth</div>
    </Link>
  )
}
