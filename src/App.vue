<template>
  <div id="app">
    <keep-alive>
      <router-view class="main-view"></router-view>
    </keep-alive>

    <Header>
    </Header>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/common/header/Header.vue"
import Footer from "./components/common/footer/Footer.vue"
import Vue from "vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
  computed: {

  },

}
</script>

<style scoped="scoped">
#app {
  height: 100%;
  touch-action: none;
}

.main-view {
  padding-top: 1.5rem;
}
</style>
