import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyDRiPFXZYCHvAEnwn7ZKveuzeKM1MIk48M',
  authDomain: 'vue-calendar-57924.firebaseapp.com',
  projectId: 'vue-calendar-57924',
  storageBucket: 'vue-calendar-57924.appspot.com',
  messagingSenderId: '652369880269',
  appId: '1:652369880269:web:28ba1ace77a613337db584',
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');
