import {baseUrl} from '../config/env.js'

const Api = {
  getTaskList: baseUrl+"getTaskList",
  getFolderList: baseUrl+"getFolderList",
  getUserInfo: baseUrl+"getUserInfo",
}

export {
  Api
}