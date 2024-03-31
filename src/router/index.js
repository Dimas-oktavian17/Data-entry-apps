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
      path: '/tables/:id',
      name: 'tablesDetails',
      component: () => import('@/views/Tables/TablesDetails.vue'),
      props: route => ({ ...route.params, id: route.params.id }),
    },
    {
      path: '/tables-edit/edits/:id',
      name: 'tablesEdits',
      component: () => import('@/views/Tables/TablesEdits.vue'),
      props: route => ({ ...route.params, id: route.params.id }),
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
      path: '/learn',
      name: 'learn',
      component: () => import('@/views/learn/uploud.vue')
    },
    {
      path: '/forgot-password',
      name: 'reset-password',
      component: () => import('@/views/ResetPassword.vue')
    },
    // tailwind
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard/ECommerceView.vue'),
      meta: {
        title: 'Dashboard'
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
    },
    // will match everything and put it under `route.params.pathMatch`
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound/NotFound.vue'), },
  ]
})
// router.beforeEach((to, from, next) => {
//   const login = authPinia()
//   if (!login.user && to.name !== 'sign-in' && to.name !== 'sign-up') {
//     // If user is not logged in and trying to access a restricted route (not sign-in or sign-up), redirect to sign-in
//     next({ name: 'sign-in' })
//   }
//   else {
//     // Otherwise, allow navigation
//     next()
//   }
// })


export default router
