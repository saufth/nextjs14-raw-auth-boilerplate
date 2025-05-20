import { ComponentProps } from 'react'
import Link from 'next/link'
import { capitalize } from '@/lib/utils'
import { ChevronRightIcon, HomeIcon, LogInIcon } from 'lucide-react'
import { Button, type ButtonProps } from '@/components/ui/button'

const CALL_TO_ACTIONS = [
  {
    title: 'home',
    href: '/',
    icon: HomeIcon
  },
  {
    title: 'signup',
    href: '#',
    icon: ChevronRightIcon
  },
  {
    title: 'signin',
    href: '#',
    icon: LogInIcon
  }
] as const

interface CallToActionProps
  extends Omit<ComponentProps<typeof Link>, 'href'>,
    Pick<ButtonProps, 'size' | 'variant'> {
  to: typeof CALL_TO_ACTIONS[number]['title']
  withIcon?: boolean
}

export function CallToAction ({
  children,
  className,
  to,
  size,
  variant,
  withIcon,
  ...props
}: CallToActionProps) {
  const callToAction = CALL_TO_ACTIONS.find((callToActionItem) => callToActionItem.title === to)!
  const Icon = () => <callToAction.icon aria-hidden />

  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className={className}
    >
      <Link href={callToAction.href} {...props}>
        {size !== 'icon'
          ? (
            <>
              {children || capitalize(callToAction.title)}
              {withIcon && <Icon />}
            </>
            )
          : <Icon />}
      </Link>
    </Button>
  )
}
