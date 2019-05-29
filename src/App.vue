<template>
  <div id="app">
   
    <router-view class="main-view"></router-view>

    <Header :title="title">
      <template #sidebar>
        <a v-if="isTaskList" @click="sidebarToggle">
        <!-- <a @click="openSidebar"> -->
          <span class="iconfont icon-icon_threeline_fill"></span>
        </a>
      </template>
    </Header>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/common/header/Header.vue"
import Footer from "./components/common/footer/Footer.vue"
import Vue from "vue";
import ClickOutSide from 'vue-v-clickoutside'
Vue.directive('clickoutside', ClickOutSide);


export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
  computed: {
    title: function(){
      let currentView = this.$store.state.currentView;
      if(currentView === "TaskList"){
        return this.$store.state.taskFolder;
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
    }
  },
  updated: function(){
    console.log(`Current view: ${this.title}`);
  }
}
</script>

<style>
#app {
  height: 100%;
}

.main-view {
  padding-top: 1rem;
}
</style>
