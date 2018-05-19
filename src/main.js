import 'babel-polyfill'
import 'common/stylus/index.styl'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'

Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
