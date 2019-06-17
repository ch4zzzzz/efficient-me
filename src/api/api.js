import {baseUrl} from '../config/env.js'

const Api = {
  login: baseUrl+"login",
  getTaskList: baseUrl+"getTaskList",
  getFolderList: baseUrl+"getFolderList",
  getSelfInfo: baseUrl+"getSelfInfo",
  modifySelfInfo: new RegExp('^'+baseUrl+'modifySelfInfo'+'/[a-zA-Z]*$'),
  addTask: baseUrl+"addTask",
  addFolder: baseUrl+"addFolder"
}

export {
  Api
}