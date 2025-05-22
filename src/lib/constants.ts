import { env } from '@/env.js'

export const IS_ENV_PRODUCTION = env.NODE_ENV === 'production'

export const unknownError = 'An unknown error occurred. Please try again later.'
