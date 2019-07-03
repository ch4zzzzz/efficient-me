import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Base from './Base.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './api/mock-api.js'

Vue.config.productionTip = false


// 处理页面跳转
router.beforeEach((to, from, next) => {
  const {name, meta:{title}} = to;
  store.commit("changeCurrentView", name);
  store.commit("setTitle", title);
  if(name==="Settings" || name==="User") {
    store.commit("hideFooter");
  } else if(name==="TaskList") {
    store.commit("showFooter");
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
    return config;　　
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

//返回拦截
axios.interceptors.response.use(response => {
  return Promise.resolve(response);
}, error => {
  const response = error.response;
  if(response.status===401) {
    router.replace('/home/');
    return Promise.reject(response);
  }
})

new Vue({
  router,
  store,
  render: h => h(Base)
}).$mount('#app')
