# 接口文档

```javascript
baseUrl
```

[TOC]

## 接口列表

说明：每个请求返回的数据中，总有`success`，`type`，`message`

`success===true`表明请求成功，`type`和`message`则说明返回数据的信息

### 登录

* 请求方式

  `POST`

* url

  `'/login'`

* request body

  ```javascript
  {
    username,
    password
  }
  ```

* 返回示例

  ```javascript
  {
    success:true,
    type: 'LOGIN_SUCCESS',
    message: 'Login success.',
    user: {
     	username: 'user2020',
  	name: '用户2020',
      photo: 'https://github.com/ch4zzzzz/efficient-me/raw/master/src/assets/img/1.jpg'
     	level: 4,
      email: 'emial@a.b',
      introduction: '个人简介',
      createDate: '2019-03-03',
      lastLoginDate: '2019-06-01'
    }
  }
  ```

### 添加任务

* 请求方式

  `POST`

* url

  `'/addTask'`

* request body

  ```javascript
  {
    name,
    date,
    folderName
  }
  ```

* 返回示例

  ```javascript
  {
    success: true,
    type: 'ADD_TASK_SUCCESSFULLY',
    message: 'Add task successfully',
    id // 添加的任务的id
  }
  ```

### 获取任务列表

* 请求方式

  `GET`

* url

  `'/getTaskList'`

* 返回示例

  ```javascript
  {
    success: true,
    type: 'GOT_TASKS',
    message: 'Got tasks',
    taskList: [
      {
        name: '学习',
        folderName: '数学',
        date: '2019-06-05',
        complete: false
      },
      {
        name: '吃饭',
        folderName: '',
        date: '2019-06-09',
        complete: true
      }
    ]
  }
  ```

### 添加文件夹

* 请求方式

  `POST`

* url

  `'/addFolder'`

* request body

  ```javascript
  {
    folderName
  }
  ```

* 返回示例

  ```javascript
  {
    success: true,
    type: 'ADD_FOLDER_SUCCESSFULLY',
    message: 'Add folder successfully'
  }
  ```

  

### 获取文件夹列表

* 请求方式

  `GET`

* url

  `'/getFolderList'`

* 返回示例

  ```javascript
  {
    success: true,
    type: 'GOT_FOLDERS',
    message: 'Got folders',
    folderList: [
      {
        folderName: '数学'
      },
      {
        folderName: '语文'
      }
    ]
  }
  ```

### 获取个人资料

* 请求方式

  `GET`

* url

  `'/getSelfInfo'`

* 返回示例

  ```javascript
  {
    success: true,
    type: 'GET_USERINFO_SUCCESSFULLY',
    message: 'Get userInfo successfully',
    user: {
      username: 'chairman',
      name: 'chairwolf',
      photo: 'https://github.com/ch4zzzzz/efficient-me/raw/master/src/assets/img/1.jpg',
      level: 4,
      email: 'emial@a.b',
      introduction: '个人简介',
      createDate: '2019-03-03',
      lastLoginDate: '2019-06-01'
    }
  }
  ```

### 修改个人资料

* 请求方式

  `POST`

* url

  `/modifySelfInfo/:itemName`：`itemName`为修改项的名称

* request body

  ```javascript
  {
    value // 要修改成的值
  }
  ```

* 返回示例

  ```javascript
  {
    success: true,
    type: 'MODIFY_USERINFO_SUCCESSFULLY',
    message: 'Modify userInfo successfully'
  }
  ```

  