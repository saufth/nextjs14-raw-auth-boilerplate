import 'server-only'
import { env } from '@/env.mjs'
import { createPool } from 'mysql2/promise'

export const db = createPool({
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  user: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME
})
