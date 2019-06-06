<template>
  <b-modal class="item-edit" ref='modal' centered>
    <template slot="modal-header">
      <h6>
        {{'修改'+itemName}}
      </h6>
    </template>
    <b-form-input v-model="content" placeholder=""></b-form-input>
    <template slot="modal-footer" slot-scope="{ ok }">
      <b-button size="sm" variant="success" @click="update();ok()">
        提交
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'ItemEdit',
  data(){
    return {
      content: "",
    }
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    itemName: {
      type: String,
      default: '项目'
    },
    updateApiName: {
      type: String,
      default: "",
    }
  },
  methods: {
    show() {
      this.$refs['modal'].show();
    },
    update() {
      let newValue = this.content;
      this.$store.commit('updateApiName', newValue);
    }
  }
}
</script>

<style scoped="scoped">
.item-edit {
  touch-action: none;
}
</style>