import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './axios';
import store from './vuex';
import Vuex from 'vuex';

createApp(App).use(store).use(Vuex).use(router).mount('#app');
