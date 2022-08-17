import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/accommodation',
    name: 'Accommodations',
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
    path: '/payment-successful',
    name: 'PaymentSuccessful',
    component: () => import( /* webpackChunkName: "about" */ '../views/PaymentSuccessful')
  },
  {
    path: '/payment-cancelled',
    name: 'PaymentCancelled',
    component: () => import( /* webpackChunkName: "about" */ '../views/PaymentCancelled')
  },
  {
    path: '/payment-failed',
    name: 'PaymentFailed',
    component: () => import( /* webpackChunkName: "about" */ '../views/PaymentFailed')
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
  {
    path: '/accommodation-dzongkhags/:slug',
    name: 'AccommodationDzongkhags',
    component: () => import( /* webpackChunkName: "about" */ '../views/DzongkhagsPage')
  },
  {
    path: '/tours-dzongkhags/:slug',
    name: 'ToursDzongkhags',
    component: () => import( /* webpackChunkName: "about" */ '../views/DzongkhagsPage')
  },
  {
    path: '/properties/:id',
    name: 'SingleProperty',
    props: true,
    component: () => import( /* webpackChunkName: "about" */ '../views/SingleProperty')
  },
  {
    path: '/category-agriproducts/:name',
    name: 'Category-Agriproducts',
    component: () => import( /* webpackChunkName: "about" */ '../views/AgriProductsPage')
  },
  {
    path: '/category-handicrafts/:name',
    name: 'Category-Handicrafts',
    component: () => import( /* webpackChunkName: "about" */ '../views/HandicraftProductsPage')
  },
  {
    path: '/loader',
    name: 'LoaderPage',
    component: () => import( /* webpackChunkName: "about" */ '../views/LoaderTest')
  },
  {
    path: '/search/:category',
    name: 'Search',
    component: () => import( /* webpackChunkName: "about" */ '../views/SearchPage')
  },
  {
    path: '/searchhandicraft/:category',
    name: 'SearchHandicraftPage',
    component: () => import( /* webpackChunkName: "about" */ '../views/SearchHandicraftPage')
  },
  {
    path: '/searchaccommodation/:category',
    name: 'SearchAccommodationPage',
    component: () => import( /* webpackChunkName: "about" */ '../views/SearchAccommodationPage')
  },
  {
    path: '/searchtours/:category',
    name: 'SearchToursPage',
    component: () => import( /* webpackChunkName: "about" */ '../views/SearchToursPage')
  },
  {
    path: '/tour/:id',
    name: 'SingleTour',
    component: () => import( /* webpackChunkName: "about" */ '../views/SingleTour')
  },
  {
    path: '/product/:slug',
    name: 'SingleProduct',
    component: () => import( /* webpackChunkName: "about" */ '../views/SingleProduct')
  },
  {
    path: '/article/:slug',
    name: 'SingleArticle',
    component: () => import( /* webpackChunkName: "about" */ '../views/SingleArticle')
  },
  {
    path: '/cat-filter/:slug',
    name: 'CategoryFilter',
    component: () => import( /* webpackChunkName: "about" */ '../views/CategoryFilter')
  },
  {
    path: '/agri-dzo-filter/:slug',
    name: 'AgriDzoFilter',
    component: () => import( /* webpackChunkName: "about" */ '../views/AgriDzoFilter')
  },
  {
    path: '/handicraft-dzo-filter/:slug',
    name: 'HandiDzoFilter',
    component: () => import( /* webpackChunkName: "about" */ '../views/HandiDzoFilter')
  },
  {
    path: '/hotel/:id',
    name: 'SingleHotel',
    component: () => import( /* webpackChunkName: "about" */ '../views/SingleHotel')
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () => import( /* webpackChunkName: "about" */ '../views/NotFound')
    }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async(to, from, next) => {
  document.title = `${ process.env.VUE_APP_TITLE } | ${ to.name }`
  next()  
  // vue router scrolls to page top on route change
  window.scrollTo(0, 0)
})

export default router
