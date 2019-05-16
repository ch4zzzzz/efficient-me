<template>
  <li>
    <router-link :to="button.link">
      <span :class="button.icon"></span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "FooterButton",
  props: {
    button: Object,
  }
}
</script>

<style scoped="scoped">

</style>