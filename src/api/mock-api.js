import Mock from 'mockjs'
import {Api} from "./api.js"


//生成从minNum到maxNum的随机数


Mock.mock(Api.getTaskList, {
  'taskList|2-10': [{
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
  'photo': 'https://github.com/ch4zzzzz/efficient-me/raw/master/src/assets/img/1.jpg',

})

Mock.mock(Api.login, {
  'success': true,
  'user': {
    'username': '@cname',
    'photo': 'https://github.com/ch4zzzzz/efficient-me/raw/master/src/assets/img/1.jpg',
    'level': 4,
  }
})

Mock.mock(Api.getSelfInfo, {
  'success': true,
  'user': {
    'username': '@cname',
    'photo': 'https://github.com/ch4zzzzz/efficient-me/raw/master/src/assets/img/1.jpg',
    'name': '@cname',
    'introduction': '@csentence(4,10)',
    'email': '@email',
    
  }
})