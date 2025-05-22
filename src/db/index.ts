import 'server-only'
import { env } from '@/env'
import {
  createPool,
  type PoolOptions
} from 'mysql2/promise'

const mysqlPoolOptions: PoolOptions = {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  user: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME
}

export const db = createPool(mysqlPoolOptions)
