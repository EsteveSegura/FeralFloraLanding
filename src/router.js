import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

export function createAppRouter() {
  const isSSR = typeof window === 'undefined'
  return createRouter({
    history: isSSR ? createMemoryHistory() : createWebHistory(),
    routes,
  })
}
