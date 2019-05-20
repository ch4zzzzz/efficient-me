<template>
  <section id="sidebar">
    <section id="user-info">
      <b-img rounded="circle"
          :src="user.photo"></b-img>
      {{user.username}}
    </section>

    
  </section>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    user: Object,
  }
}
</script>

<style scoped="scoped">
#sidebar {
  position: absolute;
  top: 0;
  left: -80%;
  width: 80%;
  height: 100%;
  display: block;
  background-color: #c0c0c0;
}


</style>
