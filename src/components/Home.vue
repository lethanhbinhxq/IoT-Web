<template>
  <div class="px-4 py-2">
    <h1 class="text-5xl font-bold text-center mb-3">
      <v-icon icon="mdi-home" />
      Welcome Home!
    </h1>

    <div class="flex flex-row justify-between items-start">
      <div>
        <div class="gradient-bg basis-12/25 rounded-2xl text-white p-4" dark>
          <div class="flex flex-row justify-between items-start">
            <!-- Left Column: Greeting + Date + Time -->
            <div class="flex flex-col items-start gap-2">
              <div class="flex items-center">
                <img :src="greetingIcon" alt="Greeting Icon" class="w-12 h-12 me-2" />
                <div>
                  <p class="text-2xl">{{ greeting }},</p>
                  <p class="text-4xl">LTB!</p>
                </div>
              </div>

              <div class="m-3 text-violet-300">
                <p class="text-xl">{{ currentDate }}</p>
                <p class="text-lg">
                  <v-icon>mdi-clock-time-four</v-icon>
                  {{ currentTime }}
                </p>
              </div>

              <div class="flex flex-row items-center text-4xl justify-between">
                <v-icon>mdi-water</v-icon>
                <span>50%</span>
                <span class="ms-3">|</span>
                <v-icon>mdi-thermometer</v-icon>
                <span>30&#176;C</span>
                <span class="ms-3">|</span>
                <v-icon>mdi-lightbulb</v-icon>
                <span>500 lx</span>
              </div>
            </div>

            <!-- Right Column: Weather -->
            <div class="flex flex-col items-end">
              <div class="flex flex-col items-center">
                <div>
                  <v-icon>mdi-map-marker</v-icon>
                  <span>Ho Chi Minh City</span>
                </div>
                <img src="/cloud.png" alt="Cloudy" class="w-32 h-auto me-2" />
                <span class="text-lg">Cloudy</span>
              </div>
            </div>
          </div>
        </div>

        <div class="border-3 border-purple-300 basis-12/25 rounded-2xl my-4 p-3" dark>
          <h2 class="text-lg text-center font-bold mb-2">Energy Usage Distribution by Device</h2>
          <EnergyPieChart />
        </div>
      </div>


      <div class="bg-slate-200 basis-12/25 rounded-2xl p-4">
        <DeviceSwitch />
        <HistoryLine />
        <Member />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import EnergyPieChart from './EnergyPieChart.vue'
import DeviceSwitch from './DeviceSwitch.vue'
import HistoryLine from './HistoryLine.vue'
import Member from './Member.vue'

const currentDate = ref('')
const currentTime = ref('')
const greeting = ref('')
const greetingIcon = ref('')

function getGreeting(date: Date) {
  const hour = date.getHours()
  if (hour >= 5 && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 18) return 'Good afternoon'
  return 'Good evening'
}

function getGreetingIcon(date: Date) {
  const hour = date.getHours()
  if (hour >= 5 && hour < 12) return '/morning.png'
  if (hour >= 12 && hour < 18) return '/afternoon.png'
  return '/evening.png'
}

function getFormattedDate(date: Date) {
  const weekday = date.toLocaleDateString('en-GB', { weekday: 'long' })
  const day = date.getDate()
  const month = date.toLocaleDateString('en-GB', { month: 'long' })
  const year = date.getFullYear()

  return `${weekday}, ${day} ${month} ${year}`
}

function updateDateTime() {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString()
  currentDate.value = getFormattedDate(now)
  greeting.value = getGreeting(now)
  greetingIcon.value = getGreetingIcon(now)
}

onMounted(() => {
  updateDateTime() // initial load
  setInterval(updateDateTime, 1000)
})
</script>

<style scoped>
.gradient-bg {
  background-image: linear-gradient(to left,
      #d6beff,
      #4E4FEB);
}
</style>