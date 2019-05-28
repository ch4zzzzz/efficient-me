<template>
  <div id="app">
   
    <router-view id="main-view"></router-view>

    <Header :title="title">
      <template #sidebar>
        <a @click="sidebarToggle">
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
      if(currentView == "TaskList"){
        return this.$store.state.taskFolder;
      }
      return currentView;
    }
  },
  methods: {
    sidebarToggle(){
      this.$store.commit("sidebarToggle");
    }
  }
}
</script>

<style>
#app {
  height: 100%;
}

#main-view {
  margin-top: 1.6rem;
}
</style>
