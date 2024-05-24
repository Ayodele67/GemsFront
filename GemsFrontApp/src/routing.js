import { createMemoryHistory, createRouter } from 'vue-router'

import Register from './pages/Register.vue'
import Login from './pages/Login.vue'

const routes = [
  { path: '/', component: Register },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})