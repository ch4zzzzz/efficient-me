<template>
  <div id="app">
    
    <!-- <router-view></router-view> -->
    <router-view></router-view>
    <!-- <TaskList/> -->
    <Footer/>
  </div>
</template>

<script>
import Footer from "./components/common/footer/Footer.vue"
import TaskList from "./views/task-list/TaskList.vue"

export default {
  name: "App",
  components: {
    Footer
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
