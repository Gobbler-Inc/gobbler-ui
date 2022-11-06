import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import View from '@/views/View.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/view',
      component: View,
    },
  ],
})
