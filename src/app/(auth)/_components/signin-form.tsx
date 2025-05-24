'use client'
import { useTransition } from 'react'
// import { useRouter } from 'next/navigation'
import { LoaderCircleIcon } from 'lucide-react'
// import { signup } from '@/lib/actions/user'
import {
  signupSchema,
  type SignupInputs
} from '@/lib/validations/auth'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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

export default function SigninForm () {
  const [isTransition, startTransition] = useTransition()
  // const router = useRouter()

  const form = useForm<SignupInputs>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit (inputs: SignupInputs) {
    startTransition(async () => {
      // const response = await signin(input)

      // if (response.error) {
      //   showErrorToast(err)
      //   return
      // }

      // if (response.error === accountStatus.unverified) {
      //   toast.error('Ingresa el código enviado a tu correo electrónico')
      //   router.push(`/signup/verify-email/${response.data.id}`)
      //   return
      // }

      console.log(inputs.email)
      // router.push('/dashboard')
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
          type='submit'
          disabled={isTransition}
        >
          {isTransition && (
            <LoaderCircleIcon
              className='size-4 animate-in spin-in-[360deg] direction-reverse duration-1000 ease-linear repeat-infinite'
              aria-hidden='true'
            />
          )}
          Sign in
        </Button>
      </form>
    </Form>
  )
}
