import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

import './api/mock-api.js'

Vue.config.productionTip = false

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

router.beforeEach((to, from, next) => {
  console.log(`to.name: ${to.name}`)
  store.commit("changeCurrentView", to.name);
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
