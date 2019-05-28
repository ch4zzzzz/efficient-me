<template>
  <section class="header">

    <h2 id="header-title">
      
      <slot name="sidebar"></slot>
      
      <span class="title"> {{title}} </span>
    </h2>
  </section>

  
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'efficient me',
    },
    headerButtons: Array,
    otherSettings: Array,
  },
}
</script>

<style scoped="scoped">
.header {
  font-size: 1.2rem;
  top: 0;
  position: fixed;
  width: 100%;
  height: 1.8rem;
  /*display: block;*/
  background: white;
  border-bottom: solid;
}

#header-title {
  text-align: left;
  font-size: 1.2rem;
  margin-left: 0.3rem;
}

</style>