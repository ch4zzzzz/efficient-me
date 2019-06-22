import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

import Login from "./views/login/Login.vue"
import SignIn from "./views/sign-in/SignIn.vue"
import TaskList from "./views/task-list/TaskList.vue"
import Settings from "./views/settings/Settings.vue"
import {default as SettingsMain} from "./views/settings/Main.vue"
import FooterViewSetting from "./views/settings/children/FooterViewSetting.vue"
import UserHome from "./views/user-home/UserHome.vue"
import {default as UserHomeMain} from "./views/user-home/Main.vue"
import SelfInfo from "./views/user-home/children/SelfInfo.vue"
import Tomatoes from "./views/tomatoes/Tomatoes.vue";

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
          meta: {
            title: 'Login'
          }
        },
        {
          path: "sign-in/",
          component: SignIn,
          name: 'SignIn',
          meta: {
            title: "注册"
          }
        },
        {
          path: "task-list/", // 任务列表页
          component: TaskList,
          name: 'TaskList',
          meta: {
            title: "任务清单"
          }
        },
        {
          path: "settings/",
          component: Settings,
          children: [
            {
              path: "",
              component: SettingsMain,
              name: "Settings",
              meta: {
                title: "设置"
              }
            },
            {
              path: "footer-view-setting/",
              component: FooterViewSetting,
              name: "设置选项卡",
              meta: {
                title: "设置选项卡"
              }
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
              name: "User",
              meta: {
                title: "个人主页"
              }
            },
            {
              path: "self-info/",
              component: SelfInfo,
              name: "Account",
              meta: {
                title: "账户"
              }
            }
          ]
        },
        {
          path: "tomatoes",
          component: Tomatoes,
          name: "Tomatoes",
          meta: {
            title: "番茄钟"
          }
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
    

  ]
})
