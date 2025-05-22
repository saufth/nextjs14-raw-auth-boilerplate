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

  const onSubmit = (inputs: SignupInputs) => {
    startTransition(async () => {
      toast.message('Registrando..')
      // const response = await signup(inputs)

      // if (response.error) {
      //   toast.error(response.error)
      //   return
      // }

      toast.success(`¡${inputs.email} registro exitoso!`)
      form.reset()
      // router.push(`/signup/verify-email/${response.data!.id}`)
    })
  }

  return (
    <Form {...form}>
      <form
        className='space-y-6'
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
          className='w-full lg:w-full flex items-center gap-x-2'
          disabled={isTransition}
        >
          Sign up
        </Button>
      </form>
    </Form>
  )
}
