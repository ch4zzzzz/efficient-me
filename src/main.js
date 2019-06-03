import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

import './api/mock-api.js'

Vue.config.productionTip = false

// FastClick
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// 处理页面跳转
router.beforeEach((to, from, next) => {
  console.log(`to.name: ${to.name}`)
  store.commit("changeCurrentView", to.name);
  next();
})

// axios拦截器
import axios from 'axios'
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    let regex = /.*csrftoken=([^;.]*).*$/; // 用于从cookie中匹配 csrftoken值
    config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1];
    console.log("set X-CSRFToken");
    return config;　　
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
