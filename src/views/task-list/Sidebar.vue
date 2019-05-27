<template>
  <section id="sidebar">

    <section id="user-info">
      <img id="photo"
        rounded="circle" :src="user.photo"/>
      <div id="buttons">
        <span class="iconfont icon-icon_setting_fill button"></span>
      </div>
      <span id="username">{{user.username}}</span>
    </section>
    
    <section id="folders">
      <b-list-group id="basic-folders">
        <b-list-group-item>
          <span class="iconfont icon-icon_calendar_fill folder-icon"></span>
          <span>今天</span>
        </b-list-group-item>
        <b-list-group-item>
          <span class="iconfont icon-icon_collect_fill"></span>
          <span>任务一览</span>
        </b-list-group-item>
      </b-list-group>
      <hr class="line">
      <b-list-group id="task-folders">
        <b-list-group-item v-for="folder in taskFolders" :key=folder.id
            @click="changeFolder(folder.folderName)">
          <span class="iconfont icon-icon_workmore"></span>
          <span>{{folder.folderName}}</span>
        </b-list-group-item>
      </b-list-group>
      <hr class="line">
      <b-list-group id="folder-settings">
        <b-list-group-item>
          <span class="iconfont icon-icon_add"></span>
          <span>添加清单</span>
        </b-list-group-item>
      </b-list-group>
    </section>
  </section>
</template>

<script>
import axios from 'axios';
import {Api} from '../../api/api.js';

export default {
  name: "Sidebar",
  created: function(){
    axios
      .post(Api.getFolderList)
      .then(response => {
        this.taskFolders = response.data.folderList;
      })
  },
  props: {
    

  },
  data() {
    return {
      user: {
        username: "salamander",
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558928507222&di=d9297e82c0f542dc21102132f2e88b77&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201503%2F10%2F20150310191646_5AuSC.jpeg",
      },
      taskFolders: [],
    }
  },
  methods: {
    changeFolder(folderName){
      console.log(folderName);
      this.$store.commit('changeFolder', folderName);
    }
  }
}
</script>

<style scoped="scoped">
@import '../../assets/icon/iconfont.css';

#sidebar {
  position: fixed;
  top: 0;
  /*left: -80%;*/
  width: 80%;
  height: 100%;
  display: block;
  background-color: #c0c0c0;
}

#user-info {
  margin-left: 0.6rem;
}

#photo {
  width: 30%;
  height: 30%;
  border-radius: 50%;
  display: block;
  float: left;
}

#buttons {
  display: block;
  float: right;
  margin-right: 0.5rem;
}

.button {
  font-size: 2rem;
}

#username {
  display: block;
  clear: both;
  font-weight: bold;
}

.line {
  margin-top: 0;
  margin-bottom: 0;
  background-color: black;
}
</style>
