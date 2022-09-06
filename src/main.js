import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './axios';
import store from './vuex';
// import storeTwo from './vuex';
import Vuex from 'vuex';
// import VueToast from 'vue-toast-notification';
// import "vue-toast-notification/dist/theme-sugar.css";

createApp(App).use(store).use(Vuex).use(router).mount("#app");
