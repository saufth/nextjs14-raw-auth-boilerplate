'use client'
import { type CSSProperties } from 'react'
import { useTheme } from 'next-themes'
import {
  ChevronDownIcon,
  LaptopIcon,
  MoonStarIcon,
  SunIcon
} from 'lucide-react'
import { cn, capitalize } from '@/lib/utils'
import { Button, ButtonProps } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { LedIndicator } from '@/components/status-indicator'

const THEMES = [
  {
    name: 'light',
    icon: SunIcon
  },
  {
    name: 'dark',
    icon: MoonStarIcon
  },
  {
    name: 'system',
    icon: LaptopIcon
  }
] as const

interface ModeToggleProps {
  className?: string
  style?: CSSProperties
  variant?: Exclude<ButtonProps['variant'], 'destructive' | 'link'>
  withName?: boolean
  withChevron?: boolean
}

export function ModeToggle ({
  className,
  style,
  variant = 'ghost',
  withName,
  withChevron
}: ModeToggleProps) {
  const { theme, setTheme } = useTheme()
  const currentTheme = THEMES.find((themeItem) => themeItem.name === theme)!
  const title = 'Switch theme'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={withChevron ? '[&[data-state=open]>.chevron]:rotate-180' : ''}
      >
        <Button
          className={cn('group', className)}
          style={style}
          size={withName || withChevron ? 'default' : 'icon'}
          variant={variant}
          title={title}
        >
          <div className='icon [&_svg]:size-full size-4 relative inline-flex items-center justify-center'>
            <SunIcon
              className='rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 fill-muted stroke-muted-foreground group-hover:stroke-foreground'
              aria-hidden
            />
            <MoonStarIcon
              className='absolute rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 fill-muted stroke-muted-foreground group-hover:stroke-foreground'
              aria-hidden
            />
          </div>
          {withName && (
            <span aria-hidden className='title'>
              {capitalize(currentTheme.name)}
            </span>
          )}
          {withChevron && (
            <ChevronDownIcon
              className='chevron stroke-muted-foreground transition-transform duration-300'
              aria-hidden
            />
          )}
          <span className='sr-only'>{title}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='min-w-fit'>
        {THEMES.map((themeItem) => {
          const isActive = themeItem.name === theme
          return (
            <DropdownMenuItem
              className='font-medium cursor-pointer'
              key={`theme-${themeItem.name}`}
              onClick={() => setTheme(themeItem.name)}
            >
              <div className='flex items-center gap-2'>
                <themeItem.icon
                  className={cn(
                    'size-5 fill-muted stroke-muted-foreground',
                    isActive && 'stroke-foreground'
                  )}
                  aria-hidden
                />
                <span className='font-meadium text-base'>
                  {capitalize(themeItem.name)}
                </span>
              </div>
              <div className='w-5 flex items-center justify-center'>
                {isActive && <LedIndicator />}
              </div>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
