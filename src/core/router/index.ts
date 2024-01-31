import { createRouter, createWebHistory, type Router } from 'vue-router'

import { regiterRoute, stepperRoutes, calendarRoute } from '@/core/router/routes'

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...stepperRoutes, regiterRoute, calendarRoute],
})

export default router
