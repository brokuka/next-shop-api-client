export interface AuthInput {
  id: string
  label?: string
  placeholder?: string
  type: 'email' | 'text' | 'password'
  hint?: string
  disabled?: boolean
}
