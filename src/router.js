import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

import Login from "./views/login/Login.vue"
import TaskList from "./views/task-list/TaskList.vue"
import Settings from "./views/settings/Settings.vue"
import {default as SettingsMain} from "./views/settings/Main.vue"
import FooterViewSetting from "./views/settings/children/FooterViewSetting.vue"
import UserHome from "./views/user-home/UserHome.vue"
import {default as UserHomeMain} from "./views/user-home/Main.vue"
import SelfInfo from "./views/user-home/children/SelfInfo.vue"

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
          name: 'Login',
        },
        {
          path: "task-list/", // 任务列表页
          component: TaskList,
          name: 'TaskList'
        },
        {
          path: "settings/",
          component: Settings,
          children: [
            {
              path: "",
              component: SettingsMain,
              name: "Settings",
            },
            {
              path: "footer-view-setting/",
              component: FooterViewSetting,
              name: "设置选项卡"
            }
          ]
        },
        {
          path: "user/",
          component: UserHome,
          children: [
            {
              path: "",
              component: UserHomeMain,
              name: "个人主页",
            },
            {
              path: "self-info/",
              component: SelfInfo,
              name: "账户",
            }
          ]

        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
    

  ]
})
