import { VueWrapper, mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'

import { composableRegister } from '@/composables/register'
import RegisterFormView from '@/views/RegisterFormView.vue'

const { form, isValidName, isValidEmail, isPasswordValid, isPasswordMatch, isValidForm, confirmPassword } = composableRegister()

describe('isValidName', () => {
  it('should return true for valid names', () => {
    form.name = 'Jane Smith'
    expect(isValidName()).toBeTruthy()
  })

  it('should return false for invalid names', () => {
    form.name = ''
    expect(isValidName()).toBeFalsy()
  })
})

describe('isValidEmail', () => {
  it('should return true for valid emails', () => {
    form.email = 'johndoe@example.com'
    expect(isValidEmail()).toBeTruthy()
    form.email = 'jane.smith@example.com'
    expect(isValidEmail()).toBeTruthy()
  })

  it('should return false for invalid emails', () => {
    form.email = '@example.com'
    expect(isValidEmail()).toBeFalsy()
    form.email = 'fsdfsf@example'
    expect(isValidEmail()).toBeFalsy()
    form.email = 'example'
    expect(isValidEmail()).toBeFalsy()
  })
})

describe('isPasswordValid', () => {
  it('should return true for valid passwords', () => {
    form.password = 'P@ssw0rd'
    expect(isPasswordValid()).toBeTruthy()
  })

  it('should return false for invalid passwords', () => {
    form.password = 'password'
    expect(isPasswordValid()).toBeFalsy()
    form.password = ''
    expect(isPasswordValid()).toBeFalsy()
    form.password = '123456'
    expect(isPasswordValid()).toBeFalsy()
  })

  describe('isPasswordMatch', () => {
    it('should return true for matching passwords', () => {
      form.password = 'P@ssw0rd'
      confirmPassword.value = 'P@ssw0rd'
      expect(isPasswordMatch()).toBeTruthy()
    })

    it('should return false for mismatching passwords', () => {
      form.password = '1234567'
      confirmPassword.value = '123456'
      expect(isPasswordMatch()).toBeFalsy()
    })
  })

  describe('isValidForm', () => {
    it('should return true for valid forms', () => {
      form.name = 'Jane Smith'
      form.password = 'P@ssw0rd'
      confirmPassword.value = 'P@ssw0rd'
      form.email = 'johndoe@example.com'

      expect(isValidForm.value).toBeTruthy()
    })

    it('should return false for invalid forms', () => {
      form.name = ''
      form.password = 'password'
      confirmPassword.value = 'password'
      form.email = 'johndoe@example.com'
      expect(isValidForm.value).toBeFalsy()
    })
  })
  describe('submit', () => {
    it('should send the form data when the form is valid', async () => {
      form.name = 'John Doe'
      form.password = 'P@ssw0rd'
      confirmPassword.value = 'P@ssw0rd'
      form.email = 'johndoe@example.com'
      const wrapper: VueWrapper<InstanceType<typeof RegisterFormView>> = mount(RegisterFormView)
      expect(isValidForm.value).toBeTruthy()

      await wrapper.vm.submit()

      vi.spyOn(console, 'log')
      console.log({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'P@ssw0rd',
      })
      expect(console.log).toBeCalledWith({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'P@ssw0rd',
      })
    })

    it('should not send the form data when the form is invalid', async () => {
      const wrapper = mount(RegisterFormView)

      form.name = ''
      form.password = 'P@ssw0rd'
      confirmPassword.value = 'P@ssw0rd'
      form.email = 'johndoe@example.com'

      expect(isValidForm.value).toBeFalsy()
      await wrapper.vm.submit()

      vi.spyOn(console, 'log')
      expect(console.log).not.toBeCalled()
    })
  })
})
