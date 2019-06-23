<template>
  <div id="app">
    <keep-alive>
      <router-view class="main-view"
          :class="{'footer-existing': showFooter}">      
      </router-view>
    </keep-alive>

    <Header v-show="!isLoginView">
    </Header>
    <Footer v-if="showFooter"/>
  </div>
</template>

<script>
import Header from "./components/common/header/Header.vue"
import Footer from "./components/common/footer/Footer.vue"

export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
  data(){
    return {
      footerExisting: false,
    }
  },
  methods: {
    footerShowed() {
      this.footerExisting = true;
    },
    footerHidden() {
      this.footerExisting = false;
    }
  },
  computed: {
    isLoginView(){
      return this.$store.state.currentView==="Login"
    },
    showFooter() {
      const buttonLen = this.$store.state.footerButtons.length;
      return (this.$store.state.footer) && (buttonLen > 1);
    },
  },

}
</script>

<style scoped="scoped">
#app {
  height: 100%;
  touch-action: none;
}

.main-view {
  padding-top: 3rem;
}

.footer-existing {
  padding-bottom: 3rem;
}
</style>
