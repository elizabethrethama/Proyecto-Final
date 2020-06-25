import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARqRPdU8iPmyCzlNtsDY_gfT7nJX78CdE",
  authDomain: "rethama-portafolio.firebaseapp.com",
  databaseURL: "https://rethama-portafolio.firebaseio.com",
  projectId: "rethama-portafolio",
  storageBucket: "rethama-portafolio.appspot.com",
  messagingSenderId: "177503839009",
  appId: "1:177503839009:web:fd0cee25bd247c075a1460"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Db trae toda la coleccion de la base de datos(firebase)
export const db = firebase.firestore();

//**BOOTSTRAP */
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
import { ImagePlugin } from 'bootstrap-vue'
Vue.use(ImagePlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';
//**BOOTSTRAP */

Vue.config.productionTip = false

let app = null

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')     
  }
})
