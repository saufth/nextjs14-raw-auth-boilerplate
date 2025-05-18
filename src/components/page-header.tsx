import { type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ContainerElementType, type HeadingElementType } from '@/types'
import { cn } from '@/lib/utils'

interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  as?: ContainerElementType
  centered?: boolean
  withPadding?: boolean
}

function PageHeader ({
  className,
  children,
  as: Comp = 'section',
  withPadding = false,
  centered = false,
  ...props
}: PageHeaderProps) {
  return (
    <Comp
      className={cn(
        'max-w-[61.25rem] flex flex-col gap-2',
        className,
        centered && 'mx-auto items-center text-center',
        withPadding && 'py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

const headingVariants = cva(
  'font-header text-balance',
  {
    variants: {
      size: {
        default: 'font-extrabold text-4xl md:text-5xl lg:text-6xl',
        sm: 'font-bold text-3xl md:text-4xl lg:text-5xl',
        lg: ' font-extrabold text-5xl md:text-6xl lg:text-7xl'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

interface PageHeaderHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingElementType
}

function PageHeaderHeading ({
  className,
  size,
  as: Comp = 'h1',
  ...props
}: PageHeaderHeadingProps) {
  return (
    <Comp
      className={cn(headingVariants({ size, className }))}
      {...props}
    />
  )
}

const descriptionVariants = cva(
  'max-w-2xl text-foreground/70 text-balance',
  {
    variants: {
      size: {
        default: 'text-lg lg:text-xl',
        sm: 'text-base lg:text-lg',
        lg: 'text-xl lg:text-2xl'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

interface PageHeaderDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof descriptionVariants> {}

function PageHeaderDescription ({
  className,
  size,
  ...props
}: PageHeaderDescriptionProps) {
  return (
    <p
      className={cn(descriptionVariants({ size, className }))}
      {...props}
    />
  )
}

function PageActions ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'w-full flex items-center justify-center gap-4 py-4 md:pb-10',
        className
      )}
      {...props}
    />
  )
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading }
