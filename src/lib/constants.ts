import { env } from '@/env.mjs'

/** Node env production status flag */
export const IS_ENV_PRODUCTION = env.NODE_ENV === 'production'
