<template>
  <section class="header">

    <h2 class="header">
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
  created(){
    console.log(this.title);
  }
}
</script>

<style scoped="scoped">
.header {
  text-align: left;
  font-size: 1.2rem;
  margin-left: 0.3rem;
}
  
</style>