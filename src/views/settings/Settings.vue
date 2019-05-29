<template>
  <section id="settings">
    <router-view></router-view>

  </section>
</template>

<script>
export default {
  name: "Settings",
  created(){
    this.$store.commit('changeCurrentView', "Settings");
  }
}

</script>

