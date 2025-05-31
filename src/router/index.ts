// src/router.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import StreamDashboard from '../components/StreamDashboard.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: StreamDashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router