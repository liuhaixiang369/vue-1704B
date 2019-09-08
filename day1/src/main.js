// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import store from './store'
Vue.prototype.axios=axios
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
