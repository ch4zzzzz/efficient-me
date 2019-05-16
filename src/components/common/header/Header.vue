<template>
  <span class="header"> {{title}} </span>
  
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
  width: 100%;
  height: 1rem;
}

  
</style>