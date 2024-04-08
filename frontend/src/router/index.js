import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/prices',
      name: 'prices',
      component: () => import('../views/PricesView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQView.vue')
    },
    // {
    //   path: '/appointment',
    //   name: 'appointment',
    //   component: () => import('../views/AppointmentView.vue')
    // }
  ]
})

export default router

