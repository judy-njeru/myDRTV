import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import cookieconsent from 'vue-cookieconsent-component'

// Vue.component('cookie-consent', cookieconsent)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
