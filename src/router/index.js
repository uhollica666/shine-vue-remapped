import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/accommodation',
    name: 'Accommodation',
    component: () => import(/* webpackChunkName: "about" */ '../views/AccommodationPage')
  },
  {
    path: '/tours',
    name: 'Tours',
    component: () => import(/* webpackChunkName: "about" */ '../views/ToursPage')
  },
  {
    path: '/agriproducts',
    name: 'Agriproducts',
    component: () => import( /* webpackChunkName: "about" */ '../views/AgriProducts')
  },
  {
    path: '/handicrafts',
    name: 'Handicrafts',
    component: () => import( /* webpackChunkName: "about" */ '../views/HandiCrafts')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "about" */ '../views/LoginPage')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( /* webpackChunkName: "about" */ '../views/RegisterPage')
  },
  {
    path: '/forgotPassword',
    name: 'Forgot Password',
    component: () => import( /* webpackChunkName: "about" */ '../views/ForgotPasswordPage')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import( /* webpackChunkName: "about" */ '../views/TermsOfRefference')
  },
  {
    path: '/dzongkhags/:location_id',
    name: 'Dzongkhags',
    component: () => import( /* webpackChunkName: "about" */ '../views/DzongkhagsPage')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${ process.env.VUE_APP_TITLE } | ${ to.name }`
   next()
})

export default router
