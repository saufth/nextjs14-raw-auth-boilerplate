'use client'
// import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { PasswordInput } from '@/components/password-input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import { signup } from '@/lib/actions/user'
import {
  signupSchema,
  type SignupInputs
} from '@/lib/validations/auth'
import { LoaderCircleIcon } from 'lucide-react'

export default function SignupForm () {
  // const router = useRouter()
  const [isTransition, startTransition] = useTransition()

  const form = useForm<SignupInputs>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit (inputs: SignupInputs) {
    startTransition(async () => {
      toast.message('Registrando..')
      // const response = await signup(inputs)

      // if (response.error) {
      //   showErrorToast(err)
      //   return
      // }

      console.log(inputs.email)
      toast.message('Check your email', {
        description: 'We sent you a 6-digit verification code.'
      })
      // router.push(`/signup/verify-email`)
    })
  }

  return (
    <Form {...form}>
      <form
        className='grid gap-y-4'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='example@email.com'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder='**********' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='mt-2'
          disabled={isTransition}
        >
          {isTransition && (
            <LoaderCircleIcon
              className='size-4 animate-in spin-in-[360deg] direction-reverse duration-1000 ease-linear repeat-infinite'
              aria-hidden='true'
            />
          )}
          Continue
          <span className='sr-only'>Continue to email verification page</span>
        </Button>
      </form>
    </Form>
  )
}
