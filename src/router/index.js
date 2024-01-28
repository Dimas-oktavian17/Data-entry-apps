import { createRouter, createWebHistory } from 'vue-router'
import SignedIn from '@/views/signIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: SignedIn
    },
    {
      path: '/SignUp',
      name: 'sign-up',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/signUp.vue')
    }
  ]
})

export default router
