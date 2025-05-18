import { type PropsWithChildren } from 'react'

export type ContainerElementType = 'div' | 'section' | 'article'

export type HeadingElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type LayoutProps = Readonly<PropsWithChildren>

export interface NavItem {
  title: string
  href?: string
  active?: boolean
  disabled?: boolean
  external?: boolean
  icon?: string // keyof typeof Icons
  label?: string
  description?: string
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithChildren

export interface FooterItem {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}
