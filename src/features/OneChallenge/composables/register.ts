import { computed, reactive, ref } from 'vue'

import type { Form } from '@/features/OneChallenge/types'

const MIN_PASSWORD_LENGTH = 8

export const composableRegister = () => {
  const form = reactive<Form>({
    name: '',
    email: '',
    password: '',
  })
  const confirmPassword = ref('')

  const isValidName = () => form.name.trim() !== '' && form.name.length <= 64

  const isValidEmail = () => {
    const [firstPart, secondPart] = form.email.trim().split('@')
    return firstPart !== '' && secondPart?.includes('.')
  }

  const isPasswordValid = () => {
    // other option with regx --> const hasNumber = /\d/.test(form.password)
    const hasNumber = [...Array(10)].map((_, index) => index).some((number) => form.password.includes(number.toString()))
    const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(form.password)

    return form.password.length >= MIN_PASSWORD_LENGTH && hasNumber && hasSpecialChar
  }

  const isPasswordMatch = () => form.password === confirmPassword.value

  const isValidForm = computed(() => isValidName() && isValidEmail() && isPasswordValid() && isPasswordMatch())

  return { form, isValidName, isValidEmail, isPasswordValid, confirmPassword, isPasswordMatch, isValidForm }
}
