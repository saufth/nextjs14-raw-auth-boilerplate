'use client'
import dynamic from 'next/dynamic'
import { type ThemeProviderProps } from 'next-themes'
import { TooltipProvider } from '@/components/ui/tooltip'

const NextThemeProvider = dynamic(
  () => import('next-themes').then((e) => e.ThemeProvider),
  { ssr: false }
)

export function ThemeProvider ({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider {...props}>
      <TooltipProvider>{children}</TooltipProvider>
    </NextThemeProvider>
  )
}
