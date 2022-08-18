//disable eslint for this file
/* eslint-disable */
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
    component: () => import('../views/AccommodationPage')
  },
  {
    path: '/tours',
    name: 'Tours',
    component: () => import('../views/ToursPage')
  },
  {
    path: '/agriproducts',
    name: 'Agriproducts',
    component: () => import('../views/AgriProducts')
  },
  {
    path: '/handicrafts',
    name: 'Handicrafts',
    component: () => import('../views/HandiCrafts')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterPage')
  },
  {
    path: '/payment-successful',
    name: 'PaymentSuccessful',
    component: () => import('../views/PaymentSuccessful')
  },
  {
    path: '/payment-cancelled',
    name: 'PaymentCancelled',
    component: () => import('../views/PaymentCancelled')
  },
  {
    path: '/payment-failed',
    name: 'PaymentFailed',
    component: () => import('../views/PaymentFailed')
  },
  {
    path: '/forgotPassword',
    name: 'Forgot Password',
    component: () => import('../views/ForgotPasswordPage')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/TermsOfRefference')
  },
  {
    path: '/dzongkhags/:location_id',
    name: 'Dzongkhags',
    component: () => import('../views/DzongkhagsPage')
  },
  {
    path: '/accommodation-dzongkhags/:slug',
    name: 'AccommodationDzongkhags',
    component: () => import('../views/DzongkhagsPage')
  },
  {
    path: '/tours-dzongkhags/:slug',
    name: 'ToursDzongkhags',
    component: () => import('../views/DzongkhagsPage')
  },
  {
    path: '/properties/:id',
    name: 'SingleProperty',
    props: true,
    component: () => import('../views/SingleProperty')
  },
  {
    path: '/category-agriproducts/:name',
    name: 'Category-Agriproducts',
    component: () => import('../views/AgriProductsPage')
  },
  {
    path: '/category-handicrafts/:name',
    name: 'Category-Handicrafts',
    component: () => import('../views/HandicraftProductsPage')
  },
  {
    path: '/loader',
    name: 'LoaderPage',
    component: () => import('../views/LoaderTest')
  },
  {
    path: '/search/:category',
    name: 'Search',
    component: () => import('../views/SearchPage')
  },
  {
    path: '/searchhandicraft/:category',
    name: 'SearchHandicraftPage',
    component: () => import('../views/SearchHandicraftPage')
  },
  {
    path: '/searchaccommodation/:category',
    name: 'SearchAccommodationPage',
    component: () => import('../views/SearchAccommodationPage')
  },
  {
    path: '/searchtours/:category',
    name: 'SearchToursPage',
    component: () => import('../views/SearchToursPage')
  },
  {
    path: '/tour/:id',
    name: 'SingleTour',
    component: () => import('../views/SingleTour')
  },
  {
    path: '/product/:slug',
    name: 'SingleProduct',
    component: () => import('../views/SingleProduct')
  },
  {
    path: '/article/:slug',
    name: 'SingleArticle',
    component: () => import('../views/SingleArticle')
  },
  {
    path: '/cat-filter/:slug',
    name: 'CategoryFilter',
    component: () => import('../views/CategoryFilter')
  },
  {
    path: '/agri-dzo-filter/:slug',
    name: 'AgriDzoFilter',
    component: () => import('../views/AgriDzoFilter')
  },
  {
    path: '/handicraft-dzo-filter/:slug',
    name: 'HandiDzoFilter',
    component: () => import('../views/HandiDzoFilter')
  },
  {
    path: '/hotel/:id',
    name: 'SingleHotel',
    component: () => import('../views/SingleHotel')
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () => import('../views/NotFound')
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: () => import('../views/ProfilePage'),
    meta: {
      requiresAuth: true,
    }
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

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

router.beforeEach(async (to, from, next) => { 
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if(getAuth().currentUser) {
      next();
    }else {
        alert('You must be logged in to view this page.'),
        next("/login");
      };
  };
  document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
  next()
  window.scrollTo(0, 0);
});

export default router
