<template>
  <b-modal ref='modal' centered>
    <template slot="modal-header">
      <h6>
        {{'修改'+itemName}}
      </h6>
    </template>
    <b-form-input v-model="content" placeholder=""></b-form-input>
    <template slot="modal-footer" slot-scope="{ ok, cancel, hide }">
      <b-button size="sm" variant="success" @click="ok()">
        OK
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
    }
  },
  methods: {
    show() {
      this.$refs['modal'].show();
    },
  }
}
</script>

<style scoped="scoped"></style>