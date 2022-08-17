import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './axios';
import store from './vuex';
import Vuex from 'vuex';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCno7sml18ggOTTRFesioxtyqjGb_KMVJM",
  authDomain: "shine-1278c.firebaseapp.com",
  projectId: "shine-1278c",
  storageBucket: "shine-1278c.appspot.com",
  messagingSenderId: "339329800446",
  appId: "1:339329800446:web:dec5bbaff863c5420aedaf",
  measurementId: "G-QP3328C30B"
};
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

createApp(App).use(store).use(Vuex).use(router).mount('#app');
