import {baseUrl} from '../config/env.js'

const Api = {
  login: baseUrl+"login",
  getTaskList: baseUrl+"getTaskList",
  getFolderList: baseUrl+"getFolderList",
  getUser: baseUrl+"getUser",
  getSelfInfo: baseUrl+"getSelfInfo",
  modifySelfInfo: new RegExp('^'+baseUrl+'modifySelfInfo'+'=[a-zA-Z]*$')
}

export {
  Api
}