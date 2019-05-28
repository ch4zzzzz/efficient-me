import Mock from 'mockjs'
import {Api} from "./api.js"


//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
  switch(arguments.length){ 
    case 1: 
      return parseInt(Math.random()*minNum+1,10); 
    break; 
    case 2: 
      return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
    break; 
      default: 
        return 0; 
      break; 
  } 
} 

function randomFolderName(){
  let folderNames = [
    "数学",
    "语文",
    "英语",
    "历史",
    "地理"
  ];
  let len = folderNames.length;
  return folderNames[randomNum(0,len-1)];
}


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