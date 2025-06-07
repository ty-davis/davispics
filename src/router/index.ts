import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../pages/About.vue')
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: () => import('../pages/Portfolio.vue')
    },
    {
      path: '/Book',
      name: 'Book',
      component: () => import('../pages/Book.vue')
    }
  ]
})

export default router
