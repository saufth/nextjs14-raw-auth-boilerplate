import { type Metadata } from 'next'
import Link from 'next/link'
import { env } from '@/env/client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Shell } from '@/components/shell'
import SigninForm from '@/app/(auth)/_components/signup-form'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Sign In',
  description: 'Sign in to your account'
}

export default function SigninPage () {
  return (
    <Shell className='max-w-lg'>
      <Card>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl'>Sign in</CardTitle>
          <CardDescription>
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SigninForm />
        </CardContent>
        <CardFooter className='flex flex-wrap items-center justify-between gap-2'>
          <div className='text-sm text-muted-foreground'>
            <span className='mr-1 hidden sm:inline-block'>
              Don&apos;t have an account?
            </span>
            <Link
              aria-label='Sign up'
              href='/signup'
              className='text-primary underline-offset-4 transition-colors hover:underline'
            >
              Sign up
            </Link>
          </div>
          <Link
            aria-label='Reset password'
            href='/signin/reset-password'
            className='text-sm text-primary underline-offset-4 transition-colors hover:underline'
          >
            Reset password
          </Link>
        </CardFooter>
      </Card>
    </Shell>
  )
}
