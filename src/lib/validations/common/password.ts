import {
  object as zodObject,
  string as zodString,
  type infer as zodInfer
} from 'zod'

export const passwordSchema = zodObject({
  password: zodString({ required_error: 'passwordRequired' })
    .min(6, { message: 'passwordInvalid' })
    .max(32, { message: 'passwordInvalid' })
})

export type PasswordInputs = zodInfer<typeof passwordSchema>

export const encryptedPasswordSchema = zodObject({
  encryptedPassword: zodString({ required_error: 'encryptedPasswordRequired' })
    .min(60, { message: 'encryptedPasswordInvalid' })
    .max(60, { message: 'encryptedPasswordInvalid' })
})

export type EncryptedPasswordInputs = zodInfer<typeof encryptedPasswordSchema>
