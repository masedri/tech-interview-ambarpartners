import type { RouteRecordRaw } from 'vue-router'

import IntroView from '@/features/StepperIntro/views/IntroView.vue'

export const stepperRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'intro',
    component: IntroView,
  },
  {
    path: '/stepper-info',
    name: 'stepper-info',
    component: () => import('@/features/StepperIntro/views/StepperInfo.vue'),
  },
]
