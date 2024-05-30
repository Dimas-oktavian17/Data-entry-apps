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
        title: 'Dashboard'
      }
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/UiElements/CalendarView.vue'),
      meta: {
        title: 'Calendar'
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/Profile/ProfileView.vue'),
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
      name: 'Form Employe',
      component: () => import('@/views/Forms/FormLayoutView.vue'),
      meta: {
        title: 'Form Layout'
      }
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('@/views/Tables/TablesView.vue'),
      meta: {
        title: 'Tables'
      }
    },
    {
      path: '/pages/settings',
      name: 'Page Settings',
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

// export let redirectToDashboard = false;

// router.afterEach((to, from) => {
//   if (to.name === 'Dashboard') {
//     redirectToDashboard = true;
//   } else {
//     redirectToDashboard = false;
//   }
// });


// router.beforeEach((to, from, next) => {
//   const login = AuthSignUp()
//   // Check if the user is logged in and their email is verified
//   if (!login.user || !login.user.emailVerified) {
//     // If user is not logged in or email is not verified, redirect to sign-in or sign-up page
//     if (to.name !== 'sign-in' && to.name !== 'sign-up') {
//       next({ name: 'sign-in' }); // Redirect to sign-in page
//     } else {
//       next(); // Allow navigation to sign-in or sign-up page
//     }
//   } else {
//     // If the user is logged in and their email is verified
//     if (redirectToDashboard) {
//       next(false); // Prevent further navigation
//     } else {
//       next(); // Allow navigation
//     }
//   }
// })
// Router file
export default router
