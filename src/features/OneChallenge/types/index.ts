export type Form = {
  name: string
  email: string
  password: string
}
export type ValidMessage = Form & { confirmPassword: string }
