import { siteConfig } from '@/config/site'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl (path: string = '/') {
  return `${siteConfig.url}${path}`
}

export function slugify (str: string) {
  return str
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-') // replace spaces and undercores with hyphens
    .replace(/[^\w-]+/g, '') // remove non-alphanumeric characters except underscores and hyphens
    .replace(/-+/g, '-') // remove consecutive hyphens
}

export function capitalize (txt: string) {
  return `${txt.charAt(0).toUpperCase()}${txt.slice(1).toLowerCase()}`
}

export function toTitleCase (str: string) {
  return str.replace(/\w\S*/g, (txt) => capitalize(txt))
}
