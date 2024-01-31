import type { RouteRecordRaw } from 'vue-router'

export const regiterRoute: RouteRecordRaw = {
  path: '/register-form',
  name: 'register-form',
  component: () => import('@/features/OneChallenge/views/RegisterFormView.vue'),
}
