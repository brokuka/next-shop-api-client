import * as zod from 'zod'

export const BASIC_CREDENTIALS_SCHEMA = zod.object({
  email: zod.string().email(),
  password: zod.string(),
})

export const REGISTER_SCHEMA = zod.object({
  confirm_password: zod.string(),
}).merge(BASIC_CREDENTIALS_SCHEMA).refine(data => data.password === data.confirm_password, {
  message: 'Password not match',
  path: ['confirm_password'],
})

export type RegisterSchema = zod.infer<typeof REGISTER_SCHEMA>
export type BasicCredentialsSchema = zod.infer<typeof BASIC_CREDENTIALS_SCHEMA>
