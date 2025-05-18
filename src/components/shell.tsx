import { type ElementType, type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const shellVariants = cva('grid items-center gap-8 pb-8 pt-6 lg:py-6', {
  variants: {
    variant: {
      default: 'container',
      sidebar: '',
      centered: 'container h-dvh max-w-2xl flex flex-col justify-center',
      markdown: 'container max-w-3xl py-8 md:py-10'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

interface ShellProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shellVariants> {
  as?: ElementType
}

function Shell ({
  className,
  as: Comp = 'section',
  variant,
  ...props
}: ShellProps) {
  return (
    <Comp className={cn(shellVariants({ variant }), className)} {...props} />
  )
}

export { Shell, shellVariants }
