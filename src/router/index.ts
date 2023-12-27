import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/account-balance'
    },
    {
      path: '/account-balance',
      name: 'account-balance',
      component: () => import('../views/AccountBalanceView.vue')
    },
    {
      path: '/account-balance/recharges',
      name: 'recharges',
      component: () => import('../views/RechargesView.vue')
    },
    {
      path: "/notFound",
      component: () => import('@/views/NotFoundView.vue'),
    }
  ]
})

export default router
