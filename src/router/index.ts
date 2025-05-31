// src/router.ts
import { createRouter, createWebHistory } from 'vue-router'
import StreamDashboard from '../components/StreamDashboard.vue'

const routes = [
  { path: '/', name: 'Input', component: StreamDashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router