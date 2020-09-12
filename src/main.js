import Vue from 'vue'
import App from './App.vue'

import store from './store.js'
import router from './router.js'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

new Vue({ 
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App />'
})