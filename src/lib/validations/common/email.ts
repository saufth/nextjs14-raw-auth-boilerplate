import {
  object as zodObject,
  string as zodString,
  type infer as zodInfer
} from 'zod'

export const emailSchema = zodObject({
  email: zodString({ required_error: 'emailRequired' })
    .email({ message: 'emailInvalid' })
    .min(6, { message: 'emailInvalid' })
    .max(64, { message: 'emailInvalid' })
})

export type EmailInputs = zodInfer<typeof emailSchema>
