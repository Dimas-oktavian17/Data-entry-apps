import { createRouter, createWebHistory } from 'vue-router'
import SignedIn from '@/views/Authentication/signIn.vue'
import { AuthSignUp } from '@/stores/auth/authSignup'

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
      component: () => import('@/views/Authentication/signUp.vue')
    },
    {
      path: '/forgot-password',
      name: 'reset-password',
      component: () => import('@/views/Authentication/ResetPassword.vue')
    },
    // tailwind
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard/ECommerceView.vue'),
      meta: {
        title: 'Dashboard',
        requiresAuth: true // Protect the Dashboard route
      }
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/UiElements/CalendarView.vue'),
      meta: {
        title: 'Calendar',
        requiresAuth: true // Protect the Calendar route
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/Profile/ProfileView.vue'),
      meta: {
        title: 'Profile',
        requiresAuth: true // Protect the Profile route
      }
    },
    {
      path: '/forms/form-elements',
      name: 'formElements',
      component: () => import('@/views/Forms/FormElementsView.vue'),
      meta: {
        title: 'Form Elements',
        requiresAuth: true // Protect the Form Elements route
      }
    },
    {
      path: '/forms/form-layout',
      name: 'Form Employe',
      component: () => import('@/views/Forms/FormLayoutView.vue'),
      meta: {
        title: 'Form Layout',
        requiresAuth: true // Protect the Form Layout route
      }
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('@/views/Tables/TablesView.vue'),
      meta: {
        title: 'Tables',
        requiresAuth: true // Protect the Tables route
      }
    },
    {
      path: '/pages/settings',
      name: 'Page Settings',
      component: () => import('@/views/Pages/SettingsView.vue'),
      meta: {
        title: 'Settings',
        requiresAuth: true // Protect the Settings route
      }
    },
    {
      path: '/charts/basic-chart',
      name: 'basicChart',
      component: () => import('@/views/Charts/BasicChartView.vue'),
      meta: {
        title: 'Basic Chart',
        requiresAuth: true // Protect the Basic Chart route
      }
    },
    {
      path: '/ui-elements/alerts',
      name: 'alerts',
      component: () => import('@/views/UiElements/AlertsView.vue'),
      meta: {
        title: 'Alerts',
        requiresAuth: true // Protect the Alerts route
      }
    },
    {
      path: '/ui-elements/buttons',
      name: 'buttons',
      component: () => import('@/views/UiElements/ButtonsView.vue'),
      meta: {
        title: 'Buttons',
        requiresAuth: true // Protect the Buttons route
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
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound/NotFound.vue') },
  ]
})

// Global navigation guard
router.beforeEach((to, from, next) => {
  const authStore = AuthSignUp();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.userActive) {
      next({ name: 'sign-in' });
    } else {
      next();
    }
  } else if ((to.name === 'sign-in' || to.name === 'sign-up') && authStore.userActive) {
    next({ name: 'Dashboard' });
  } else {
    next();
  }
});

export default router
