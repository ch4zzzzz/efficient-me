import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './api/mock-api.js'

Vue.config.productionTip = false


// 处理页面跳转
router.beforeEach((to, from, next) => {
  const name = to.name
  console.log(`to.name: ${name}`)
  store.commit("changeCurrentView", name);

  if(name==="Settings") {
    store.commit("hideFooter")
  }
  next();
})


// axios.defaults.baseURL = 'https://localhost';
// axios拦截器
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
