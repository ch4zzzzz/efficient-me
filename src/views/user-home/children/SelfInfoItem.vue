<template>
  <b-list-group-item class="item">
    <span class="item-name">
      {{item.name}}
    </span>
    <span v-if="item.content" class="item-content">
      {{item.content}}
    </span>
    <slot></slot>
  </b-list-group-item>
</template>

<script>
export default {
  name: "SelfInfoItem",
  props: {
    item: Object,
  }
}
</script>

<style scoped="scoped">
.item {
  line-height: 2rem;
  box-sizing: content-box;
  font-size: 1rem;
}

.item-name {
  display: inline-block;
  float: left;
  margin-left: 1rem;
}

.item-content {
  display: inline-block;
  float: right;
  margin-right: 1rem;
}


</style>