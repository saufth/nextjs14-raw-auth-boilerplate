import { type Metadata } from 'next'
import Link from 'next/link'
import { env } from '@/env.js'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Shell } from '@/components/shell'
import SignUpForm from '@/app/(auth)/_components/signup-form'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Sign Up',
  description: 'Sign up for an account'
}

export default function SignupPage () {
  return (
    <Shell className='max-w-lg gap-6'>
      <Card>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl'>Sign up</CardTitle>
          <CardDescription>
            Sign up for an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
        <CardFooter>
          <div className='text-sm text-muted-foreground'>
            Already have an account?{' '}
            <Link
              aria-label='Sign in'
              href='/signin'
              className='text-primary underline-offset-4 transition-colors hover:underline'
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  )
}
