import { createEnv } from '@t3-oss/env-nextjs'
import {
  enum as zodEnum,
  number as zodNumber,
  string as zodString
} from 'zod'

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: zodEnum(['development', 'test', 'production'])
      .default('development'),
    DATABASE_HOST: zodString().min(1),
    DATABASE_PORT: zodNumber(),
    DATABASE_USERNAME: zodString().min(1),
    DATABASE_PASSWORD: zodString().min(1),
    DATABASE_NAME: zodString().min(1)
  },
  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_URL: zodString().url()
  },
  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_PORT: Number(process.env.DATABASE_PORT),
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME: process.env.DATABASE_NAME
  },
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true
})
