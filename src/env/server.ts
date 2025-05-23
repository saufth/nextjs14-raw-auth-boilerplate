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
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  // runtimeEnv: {
  //   DATABASE_URL: process.env.DATABASE_URL,
  //   OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
  // },
  // For Next.js >= 13.4.4, you can just reference process.env:
  experimental__runtimeEnv: {
    ...process.env,
    DATABASE_PORT: Number(process.env.DATABASE_PORT)
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true
})
