import Mock from 'mockjs'
import {Api} from "./api.js"


//生成从minNum到maxNum的随机数


Mock.mock(Api.getTaskList, {
  'taskList|10-15': [{
    'id|+1': 1,
    'name': '@csentence(4,12)',
    'date': '@date(T)',
    'folderName': '@ctitle(2,5)',
    'complete': '@boolean'
  }]
})

Mock.mock(Api.getFolderList, {
  'folderList|2-5': [{
    'folderName': '@ctitle(2,5)'
  }]
})

Mock.mock(Api.getUserInfo, {
  'username': '@cname',
  // 'photo': 

})