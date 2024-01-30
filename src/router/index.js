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
      path: '/lawers-detail',
      name: 'lawers-detail',
      component: () => import('@/views/LawersDetailView.vue'),
    },
    {
      path: '/event-calendar',
      name: 'event-calendar',
      component: () => import('@/views/EventCalendarView.vue'),
    },
    {
      path: '/stepper-info',
      name: 'stepper-info',
      component: () => import('@/views/StepperInfo.vue'),
    },
  ],
})

export default router
