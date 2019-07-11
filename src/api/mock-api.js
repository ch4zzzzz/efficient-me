import Mock from 'mockjs'
import {Api} from "./api.js"


//生成从minNum到maxNum的随机数


Mock.mock(Api.getTaskList, {
  'success': true,
  'taskList|2-10': [{
    'id|+1': 1,
    'name': '@csentence(4,12)',
    'date': '@date',
    'folderName': '@ctitle(2,5)',
    'complete': '@boolean'
  }]
})

Mock.mock(Api.getFolderList, {
  'success': true,
  'folderList|2-5': [{
    'folderName': '@ctitle(2,5)'
  }]
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

Mock.mock(Api.modifySelfInfo, {
  'success': true,
})

Mock.mock(Api.addTask, {
  'success': true,
  'id': 10000
})

Mock.mock(Api.addFolder, {
  'success': true,
})

// Mock.mock(Api.tLogin, {
//   'success': true,
//   'user': {
//     'username': '@cname',
//     'photo': 'https://github.com/ch4zzzzz/efficient-me/raw/master/src/assets/img/1.jpg',
//     'level': 4,
//   }
// })

Mock.mock('http://localhost:8080/tLogin/', {
  'success': true,
  'user': {
    'username': '@cname',
    'photo': 'https://github.com/ch4zzzzz/efficient-me/raw/master/src/assets/img/1.jpg',
    'level': 4,
  }
})

Mock.mock(Api.setPhoto, {
  'success': true,
  'image': 'image'
})