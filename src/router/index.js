import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/accommodation',
    name: 'accommodation',
    component: () => import(/* webpackChunkName: "about" */ '../views/AccommodationPage')
  },
  {
    path: '/tours',
    name: 'tours',
    component: () => import(/* webpackChunkName: "about" */ '../views/ToursPage')
  },
  {
    path: '/agriproducts',
    name: 'agriproducts',
    component: () => import( /* webpackChunkName: "about" */ '../views/AgriProducts')
  },
  {
    path: '/handicrafts',
    name: 'handicrafts',
    component: () => import( /* webpackChunkName: "about" */ '../views/HandiCrafts')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "about" */ '../views/LoginPage')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( /* webpackChunkName: "about" */ '../views/RegisterPage')
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: () => import( /* webpackChunkName: "about" */ '../views/ForgotPasswordPage')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import( /* webpackChunkName: "about" */ '../views/TermsOfRefference')
  },
  {
    path: '/dzongkhags',
    name: 'dzongkhags',
    component: () => import( /* webpackChunkName: "about" */ '../views/dzongkhags/DzongkhagsPage')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
