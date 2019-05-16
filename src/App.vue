<template>
  <div id="app">
    
    <TaskList/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./components/common/footer/Footer.vue"
import TaskList from "./views/home/TaskList.vue"

export default {
  name: "App",
  components: {
    Footer,
    TaskList,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
