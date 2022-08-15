import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Compose from '../views/Compose.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/compose',
      name: 'Compose',
      component: Compose
    },
   
  ]
})

export default router
