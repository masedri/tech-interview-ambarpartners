<template>
  <MainLayout>
    <div class="calendar-container">
      <div class="header">
        <button
          class="rotate-90"
          @click="shiftMonth('-1')"
        >
          <Down></Down>
        </button>
        <div class="flex gap-3 items-center">
          <span class="month font-nothing">{{ viewDate.format('MMMM YYYY') }}</span>
        </div>
        <button
          class="-rotate-90"
          @click="shiftMonth('1')"
        >
          <Down></Down>
        </button>
      </div>
      <div class="flex items-center w-full justify-center">
        <button
          class="today-button underline"
          @click="reset"
        >
          Today
        </button>
      </div>
      <div class="days-header font-nothing">
        <div
          v-for="(day, index) in weekDays"
          :key="index"
          class="day-header"
        >
          {{ day }}
        </div>
      </div>
      <div class="days-grid font-mono">
        <div
          v-for="(day, index) in daystoPrepend"
          :key="`empty-${index}`"
          class="empty-day"
        ></div>
        <div
          v-for="(day, index) in days"
          :key="index"
          class="day-container"
        >
          <div
            class="xl:!p-10"
            :class="['day', { today: day.isToday() }]"
            @click="showAddEventModal(day)"
          >
            {{ day.format('D') }}
          </div>
          <div
            v-for="event in getEventsForDay(day)"
            :key="event.id"
            class="event-info"
          >
            <div class="w-full bg-blue-400 text-white flex px-4 p-2 justify-around items-center">
              {{ event.type }}
              <button @click="deleteEvent(event.id)">delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <teleport to="body">
      <div
        v-if="showModal"
        class="modal"
      >
        <div class="modal-content">
          <h2>Add Event</h2>
          <p>Selected Date: {{ selectedDate.format('YYYY-MM-DD') }}</p>
          <label for="eventType">Event Type:</label>
          <select
            id="eventType"
            v-model="newEventType"
          >
            <option
              v-for="eventType in eventTypes"
              :key="eventType"
            >
              {{ eventType }}
            </option>
          </select>
          <button @click="addEvent">Add Event</button>
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </teleport>
  </MainLayout>
</template>

<script setup lang="ts">
import dayjs, { Dayjs } from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import { computed, ref, type Ref } from 'vue'

import Down from '@/assets/icons/down.svg'
import MainLayout from '@/layouts/MainLayout.vue'

type EventType = 'concert' | 'meetup' | 'cinema' | 'other'
interface Event {
  id: string
  eventTime: string
  type: EventType | string
}

const eventsData: Ref<Event[]> = ref([
  { id: '1', eventTime: '2023-11-09T00:00:00', type: 'concert' },
  { id: '2', eventTime: '2023-11-11T00:00:00', type: 'meetup' },
  { id: '3', eventTime: '2023-11-11T00:00:00', type: 'meetup' },
  { id: '4', eventTime: '2023-11-12T00:00:00', type: 'meetup' },
  { id: '5', eventTime: '2023-11-15T00:00:00', type: 'concert' },
  { id: '6', eventTime: '2023-11-19T00:00:00', type: 'cinema' },
  { id: '7', eventTime: '2023-11-21T00:00:00', type: 'concert' },
  { id: '8', eventTime: '2023-11-24T00:00:00', type: 'meetup' },
  { id: '9', eventTime: '2023-11-25T00:00:00', type: 'meetup' },
  { id: '10', eventTime: '2023-11-29T00:00:00', type: 'cinema' },
])

const eventTypes: EventType[] = ['concert', 'meetup', 'cinema', 'other']

dayjs.extend(isToday)

const viewDate = ref<Dayjs>(dayjs())
const selectedDate = ref<Dayjs>(dayjs())
const showModal = ref(false)
const newEventType = ref<EventType | string>('')

const daystoPrepend = computed(() => {
  const startOfMonth = viewDate.value.startOf('month')
  const startOfFirstWeek = startOfMonth.startOf('week')
  const daysToFirstDay = startOfMonth.diff(startOfFirstWeek, 'day')
  return Array.from({ length: daysToFirstDay })
})

const days = computed(() => {
  const startOfMonth = viewDate.value.startOf('month')
  const endOfMonth = viewDate.value.endOf('month')
  const daysInMonth = endOfMonth.diff(startOfMonth, 'day') + 1
  return Array.from({ length: daysInMonth }).map((_, index) => startOfMonth.add(index, 'day'))
})

const shiftMonth = (amount: string) => {
  viewDate.value = viewDate.value.add(parseInt(amount), 'month')
}

const reset = () => {
  viewDate.value = dayjs()
}

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const getEventsForDay = (day: Dayjs) => {
  return eventsData.value.filter((event) => day.isSame(event.eventTime, 'day'))
}

const showAddEventModal = (day: Dayjs) => {
  selectedDate.value = day
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  newEventType.value = ''
}

const addEvent = () => {
  const newEvent: Event = {
    id: String(Date.now()),
    eventTime: selectedDate.value.format(),
    type: newEventType.value,
  }
  eventsData.value.push(newEvent)
  closeModal()
}

const deleteEvent = (eventId: string) => {
  const filteredEvents = eventsData.value.filter((event) => event.id !== eventId)
  eventsData.value.length = 0
  eventsData.value.push(...filteredEvents)
}
</script>

<style scoped>
/* Estilos específicos de Google Calendar */
.calendar-container {
  width: 100%;
  margin: auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 8px 8px 0 0;
}

.month {
  font-size: 1.5rem;
}

.days-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  background-color: #f5f5f5;
  padding: 10px;
}

.day-header {
  font-weight: bold;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 10px;
}

.event-info {
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
}

/* Resto de los estilos se mantienen sin cambios */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.today-button {
  background-color: #fff;
  color: black;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  font-family: 'Nothing You Could Do';
}

.grid {
  width: 100%;
}

.text-center {
  text-align: center;
}

.empty-day {
  height: 2rem;
}

.day-container {
  border: 1px solid #ecf0f1;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  &:hover {
    cursor: pointer;
    transition: all 0.3s ease;
    transform: scale(105%);
    border: solid 1px var(--color-primary);
  }
}

.day {
  text-align: center;
  padding: 0.5rem;
  background-color: #ecf0f1;
  transition: background-color 0.3s ease;
  border: solid 1px transparent;
  border-radius: 8px;
}

.today {
  background-color: var(--color-secondary);
  color: #fff;
}
</style>
