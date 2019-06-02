<template>
  <section class="header">

    <h2 id="header-title">
      <a v-if="isTaskList" @click="sidebarShow" id="sidebar-open-button">
        <!-- <a @click="openSidebar"> -->
        <span id="sidebar-open-button-icon" class="iconfont icon-icon_threeline_fill"></span>
      </a>
      
      <span class="title"> {{title}} </span>
    </h2>
  </section>

  
</template>

<script>
export default {
  name: 'Header',
  props: {
    headerButtons: Array,
    otherSettings: Array,
  },
  computed: {
    title: function(){
      let currentView = this.$store.state.currentView;
      if(currentView === "TaskList"){
        let taskFolder = this.$store.state.taskFolder;
        if(taskFolder){
          return taskFolder
        } else {
          return currentView;
        }        
      }
      console.log(`Current view: ${currentView}`)
      return currentView;
    },
    isTaskList: function(){
      return this.$store.state.currentView==="TaskList";
    }
  },
  methods: {
    sidebarToggle(){
      this.$store.commit("sidebarToggle");
    },
    sidebarShow(){
      console.log("sidebarShow")
      this.$store.commit("sidebarShow");
    }
  },
  updated: function(){
    console.log(`Current view: ${this.title}`);
  }

}
</script>

<style scoped="scoped">
.header {
  font-size: 2rem;
  top: 0;
  position: fixed;
  width: 100%;
  height: 3rem;
  display: block;
  background: white;
  border-bottom: solid;
}

#header-title {
  text-align: left;
  font-size: 2rem;
  margin-left: 0.3rem;
}

#sidebar-open-button {
  display: inline-block;
}

#sidebar-open-button-icon {
  font-size: 2rem;
}
</style>