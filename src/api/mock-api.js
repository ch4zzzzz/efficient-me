import Mock from 'mockjs'
import {Api} from "./api.js"

Mock.mock(Api.getTaskList, {
  'taskList|1-10': [{
    'id|+1': 1,
    'name': '@csentence(4,12)',
    'date': '@date(T)',
    'foldername': '@ctitle(2,5)',
    'complete': '@boolean'
  }]
})