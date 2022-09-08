const SitemapPlugin = require("sitemap-webpack-plugin").default;
// You can write the paths as an array of strings or an array of objects
const paths = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomePage"),
  },
  {
    path: "/accommodation",
    name: "Accommodations",
    component: () => import("../views/AccommodationPage"),
  },
  {
    path: "/tours",
    name: "Tours",
    component: () => import("../views/ToursPage"),
  },
  {
    path: "/agriproducts",
    name: "Agriproducts",
    component: () => import("../views/AgriProducts"),
  },
  {
    path: "/handicrafts",
    name: "Handicrafts",
    component: () => import("../views/HandiCrafts"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginPage"),
  },
  {
    path: "/admin-login",
    name: "AdminLoginPage",
    component: () => import("../views/AdminLoginPage"),
  },
  {
    path: "/ecom-vendor-login",
    name: "VendorLoginPage",
    component: () => import("../views/VendorLoginPage"),
  },
  {
    path: "/vendor-login",
    name: "BookingVendorLoginPage",
    component: () => import("../views/BookingVendorLoginPage"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/RegisterPage"),
  },
  {
    path: "/payment-successful",
    name: "PaymentSuccessful",
    component: () => import("../views/PaymentSuccessful"),
  },
  {
    path: "/payment-cancelled",
    name: "PaymentCancelled",
    component: () => import("../views/PaymentCancelled"),
  },
  {
    path: "/payment-failed",
    name: "PaymentFailed",
    component: () => import("../views/PaymentFailed"),
  },
  {
    path: "/forgotPassword",
    name: "Forgot Password",
    component: () => import("../views/ForgotPasswordPage"),
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import("../views/TermsOfRefference"),
  },
  {
    path: "/dzongkhags/:location_id",
    name: "Dzongkhags",
    component: () => import("../views/DzongkhagsPage"),
  },
  {
    path: "/accommodation-dzongkhags/:slug",
    name: "AccommodationDzongkhags",
    component: () => import("../views/DzongkhagsPage"),
  },
  {
    path: "/tours-dzongkhags/:slug",
    name: "ToursDzongkhags",
    component: () => import("../views/DzongkhagsPage"),
  },
  {
    path: "/properties/:id",
    name: "SingleProperty",
    props: true,
    component: () => import("../views/SingleProperty"),
  },
  {
    path: "/category-agriproducts/:name",
    name: "Category-Agriproducts",
    component: () => import("../views/AgriProductsPage"),
  },
  {
    path: "/category-handicrafts/:name",
    name: "Category-Handicrafts",
    component: () => import("../views/HandicraftProductsPage"),
  },
  {
    path: "/loader",
    name: "LoaderPage",
    component: () => import("../views/LoaderTest"),
  },
  {
    path: "/search/:category",
    name: "Search",
    component: () => import("../views/SearchPage"),
  },
  {
    path: "/searchhandicraft/:category",
    name: "SearchHandicraftPage",
    component: () => import("../views/SearchHandicraftPage"),
  },
  {
    path: "/searchaccommodation/:category",
    name: "SearchAccommodationPage",
    component: () => import("../views/SearchAccommodationPage"),
  },
  {
    path: "/searchtours/:category",
    name: "SearchToursPage",
    component: () => import("../views/SearchToursPage"),
  },
  {
    path: "/tour/:id",
    name: "SingleTour",
    component: () => import("../views/SingleTour"),
  },
  {
    path: "/product/:slug",
    name: "SingleProduct",
    component: () => import("../views/SingleProduct"),
  },
  {
    path: "/article/:slug",
    name: "SingleArticle",
    component: () => import("../views/SingleArticle"),
  },
  {
    path: "/cat-filter/:slug",
    name: "CategoryFilter",
    component: () => import("../views/CategoryFilter"),
  },
  {
    path: "/agri-dzo-filter/:slug",
    name: "AgriDzoFilter",
    component: () => import("../views/AgriDzoFilter"),
  },
  {
    path: "/handicraft-dzo-filter/:slug",
    name: "HandiDzoFilter",
    component: () => import("../views/HandiDzoFilter"),
  },
  {
    path: "/hotel/:id",
    name: "SingleHotel",
    component: () => import("../views/SingleHotel"),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () => import("../views/NotFound"),
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: () => import("../views/ProfilePage"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signedoutfromshopdashboardpage",
    name: "SignedOutFromShopDashboardPage",
    component: () => import("../views/SignedOutFromShopDashboardPage"),
  },
];

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  configureWebpack: {
    plugins: [new SitemapPlugin({ base: "https://shinebhutan.com", paths })],
  },
  transpileDependencies: true,
});
