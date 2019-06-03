import {baseUrl} from '../config/env.js'

const Api = {
  login: baseUrl+"login",
  getTaskList: baseUrl+"getTaskList",
  getFolderList: baseUrl+"getFolderList",
  getUserInfo: baseUrl+"getUserInfo",
  getSelfInfo: baseUrl+"getSelfInfo",
}

export {
  Api
}