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
      path: '/register',
      name: 'sign-up',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/signUp.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/Dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashBoard.vue')
    },
    {
      path: '/forgot-password',
      name: 'reset-password',
      component: () => import('@/views/ResetPassword.vue')
    },
    // tailwind
    {
      path: '/eCommerce',
      name: 'eCommerce',
      component: () => import('@/views/Dashboard/ECommerceView.vue'),
      meta: {
        title: 'eCommerce Dashboard'
      }
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/CalendarView.vue'),
      meta: {
        title: 'Calendar'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
      meta: {
        title: 'Profile'
      }
    },
    {
      path: '/forms/form-elements',
      name: 'formElements',
      component: () => import('@/views/Forms/FormElementsView.vue'),
      meta: {
        title: 'Form Elements'
      }
    },
    {
      path: '/forms/form-layout',
      name: 'formLayout',
      component: () => import('@/views/Forms/FormLayoutView.vue'),
      meta: {
        title: 'Form Layout'
      }
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('@/views/TablesView.vue'),
      meta: {
        title: 'Tables'
      }
    },
    {
      path: '/pages/settings',
      name: 'settings',
      component: () => import('@/views/Pages/SettingsView.vue'),
      meta: {
        title: 'Settings'
      }
    },
    {
      path: '/charts/basic-chart',
      name: 'basicChart',
      component: () => import('@/views/Charts/BasicChartView.vue'),
      meta: {
        title: 'Basic Chart'
      }
    },
    {
      path: '/ui-elements/alerts',
      name: 'alerts',
      component: () => import('@/views/UiElements/AlertsView.vue'),
      meta: {
        title: 'Alerts'
      }
    },
    {
      path: '/ui-elements/buttons',
      name: 'buttons',
      component: () => import('@/views/UiElements/ButtonsView.vue'),
      meta: {
        title: 'Buttons'
      }
    },
    {
      path: '/auth/signin',
      name: 'signin',
      component: () => import('@/views/Authentication/SigninView.vue'),
      meta: {
        title: 'Signin'
      }
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: () => import('@/views/Authentication/SignupView.vue'),
      meta: {
        title: 'Signup'
      }
    }
  ]
})

export default router
