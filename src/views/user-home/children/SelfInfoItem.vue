<template>
  <b-list-group-item class="item" @click="edit">
    <span class="item-name">
      {{item.name}}
    </span>
    <span v-if="(type==='text')&&item.content" class="item-content">
      {{item.content}}
    </span>
    <span v-else-if="(type==='img')&&item.content">
       <img :src="item.content" alt="头像" class="self-info-photo">
    </span>
    
    <ItemEdit ref="item-edit-modal" :updateApiName="updateApiName"></ItemEdit>
  </b-list-group-item>
</template>

<script>
import ItemEdit from './ItemEdit.vue'

export default {
  name: "SelfInfoItem",
  props: {
    item: Object,
    type: {
      type: String,
      default: 'text',
    },
    updateApiName: {
      type: String,
      default: "",
    }
  },
  components: {
    ItemEdit,
  },
  methods: {
    edit(){
      let type = this.type;
      if(type==='invariant'){
        console.log("invariant");
      } else {
        console.log("edit");
        this.$refs['item-edit-modal'].show();
      }
    }
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

.self-info-photo {
  height: 2rem;
  width: auto;
  border-radius: 50%;
  float: right;
  margin-right: 1rem;
}

</style>