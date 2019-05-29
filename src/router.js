import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

import Login from "./views/login/Login.vue"
import TaskList from "./views/task-list/TaskList.vue"
import Settings from "./views/settings/Settings.vue"
import {default as SettingsMain} from "./views/settings/Main.vue"
import FooterViewSetting from "./views/settings/childView/FooterViewSetting.vue"

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  strict: process.env.NODE_ENV !== 'production',
  routes: [
    {
      path: "/",
      component: App,
      children: [
        {
          path: "",
          redirect: 'home/',
        },
        {
          path: "home/", // 首页 登录页
          component: Login,
        },
        {
          path: "task-list/", // 任务列表页
          component: TaskList,
        },
        {
          path: "settings/",
          component: Settings,
          children: [
            {
              path: "",
              component: SettingsMain,
            },
            {
              path: "footer-view-setting/",
              component: FooterViewSetting,
            }
          ]
        },
      ]
    },
    

  ]
})
