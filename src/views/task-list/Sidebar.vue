<template>

    
  <section id="sidebar" :style="openStyle">

    <section id="user-info">
      <img id="sidebar-photo"
        rounded="circle" :src="user.photo"
        @click="turnToUserHome"/>
      <div id="buttons">
        <span class="iconfont icon-icon_setting_fill button" @click="turnToSettings"></span>
      </div>
      <span id="username">{{user.username}}</span>
    </section>
    
    <section id="folders">
      <b-list-group id="basic-folders">
        <b-list-group-item>
          <span class="iconfont icon-icon_calendar_fill folder-icon"></span>
          <span>今天</span>
        </b-list-group-item>
        <b-list-group-item @click="changeFolder('')">
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
import {Api} from '../../api/api.js';


export default {
  name: "Sidebar",
  created: function(){
    

  },
  destroyed: function(){

  },
  props: {
    taskFolders: {
      type: Array,
    }

  },
  data() {
    return {
      openStyle: {},
      isOpen: false,
    }
  },
  computed: {
    user(){
      return this.$store.state.user;
    }
  },
  methods: {
    changeFolder(folderName){
      console.log(folderName);
      this.$store.commit('changeFolder', folderName);
    },
    turnToSettings(){
      this.$router.push("/settings/");
    },
    turnToUserHome(){
      this.$router.push("/user/");
    },
    open(){
      console.log("open");
      this.openStyle = {
        left: 0,
      };
      this.isOpen = true;
      document.addEventListener('click', this.documentClick, {passive: true});
    },
    close(){
      console.log("close");
      this.openStyle = {};
      this.isOpen = false;
      document.removeEventListener('click', this.documentClick);
    },
    documentClick(e){
      console.log("documentClick");
      let target = null;
      if(e && e.target){
        target = e.target;
      }
      let id = target.id;
      console.log(`got target: ${id}`)
      if(id !== 'sidebar' &&
            id !== 'sidebarOpenButton' &&
            id !== 'user-info' &&
            id !== 'sidebar-open-button-icon' &&
            this.isOpen){
        this.$store.commit("sidebarHide");
        this.isOpen = false;
        this.close(); 
      } else if(id === 'sidebar-open-button-icon') {
        this.open();
      }
    }
  }
}
</script>

<style scoped="scoped">
@import '../../assets/icon/iconfont.css';

#sidebar {
  position: fixed;
  top: 0;
  left: -80%;
  width: 80%;
  height: 100%;
  display: block;
  background-color: #c0c0c0;
  z-index: 1;
  transition: 0.5s;
}

#user-info {
  margin-left: 0.6rem;
}

#sidebar-photo {
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
