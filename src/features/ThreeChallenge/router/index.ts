import type { RouteRecordRaw } from 'vue-router'

export const calendarRoute: RouteRecordRaw = {
  path: '/event-calendar',
  name: 'event-calendar',
  component: () => import('@/features/ThreeChallenge/views/EventCalendarView.vue'),
}
