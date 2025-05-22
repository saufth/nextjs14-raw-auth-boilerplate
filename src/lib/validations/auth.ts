import { type infer as zodInfer } from 'zod'
import { emailSchema } from '@/lib/validations/common/email'
import { passwordSchema } from '@/lib/validations/common/password'

export const signupSchema = emailSchema.merge(passwordSchema)

export type SignupInputs = zodInfer<typeof signupSchema>
