import { createRouter, createWebHistory } from 'vue-router'

import IntroView from '@/views/IntroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: IntroView,
    },
    {
      path: '/register-form',
      name: 'register-form',
      component: () => import('@/views/RegisterFormView.vue'),
    },
    {
      path: '/user-detail',
      name: 'user-detail',
      component: () => import('@/views/UserDetailView.vue'),
    },
    {
      path: '/event-calendar',
      name: 'event-calendar',
      component: () => import('@/views/EventCalendarView.vue'),
    },
  ],
})

export default router
