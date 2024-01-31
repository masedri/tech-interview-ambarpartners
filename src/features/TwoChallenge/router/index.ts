import type { RouteRecordRaw } from 'vue-router'

export const lawerRoute: RouteRecordRaw = {
  path: '/lawers-detail',
  name: 'lawers-detail',
  component: () => import('@/features/TwoChallenge/LawersDetailView.vue'),
}
