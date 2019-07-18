import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)
// const Login =  () => import("./views/login/Login.vue")
import Login from "./views/login/Login.vue"
const SignIn = () => import("./views/sign-in/SignIn.vue")
// import SignIn from "./views/sign-in/SignIn.vue"
// const TaskList = () => import("./views/task-list/TaskList.vue")
import TaskList from "./views/task-list/TaskList.vue"
const Settings = () => import("./views/settings/Settings.vue")
// import Settings from "./views/settings/Settings.vue"
const SettingsMain = () => import("./views/settings/Main.vue")
// import {default as SettingsMain} from "./views/settings/Main.vue"
const FooterViewSetting = () => import("./views/settings/children/FooterViewSetting.vue")
// import FooterViewSetting from "./views/settings/children/FooterViewSetting.vue"
const UserHome = () => import("./views/user-home/UserHome.vue")
// import UserHome from "./views/user-home/UserHome.vue"
const UserHomeMain = () => import("./views/user-home/Main.vue")
// import {default as UserHomeMain} from "./views/user-home/Main.vue"
const SelfInfo = () => import("./views/user-home/children/SelfInfo.vue")
// import SelfInfo from "./views/user-home/children/SelfInfo.vue"
const Cropper = () => import("./views/user-home/children/Cropper.vue")
// import Cropper from "./views/user-home/children/Cropper.vue"
const Tomatoes = () => import("./views/tomatoes/Tomatoes.vue")
// import Tomatoes from "./views/tomatoes/Tomatoes.vue";
const Calendar = () => import("./views/calendar/Calendar.vue")
// import Calendar from "./views/calendar/Calendar.vue";

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
            },
            {
              path: "cropper/:imgFile",
              component: Cropper,
              name: "Cropper",
              props: true,
              meta: {
                title: "修改头像"
              }
            }
          ]
        },
        {
          path: "tomatoes/",
          component: Tomatoes,
          name: "Tomatoes",
          meta: {
            title: "番茄钟"
          }
        },
        {
          path: "calendar/",
          component: Calendar,
          name: "Calendar",
          meta: {
            title: "日历视图"
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
