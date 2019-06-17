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
    
    
    <b-modal v-if="type==='text'" class="item-edit" ref='item-edit-modal' centered>
      <template slot="modal-header">
        <h6>
          {{'修改'+item.name}}
        </h6>
      </template>
      <b-form-input placeholder="" ref="input" v-model="content"/>
      <template slot="modal-footer" slot-scope="{ ok }">
        <b-button size="sm" variant="success" @click="update();ok()">
          提交
        </b-button>
      </template>
    </b-modal>

    <b-modal v-else-if="type==='img'" class="photo-edit" ref="item-edit-modal" centered hide-footer>
      <template slot="modal-header">
        <h6>
          {{'修改'+item.name}}
        </h6>
      </template>
      <ul class="ul">
        <li class="photo-edit-li">拍照</li>
        <li class="photo-edit-li"><input type="file" name="selectLocalImg" placeholder="选择本地图片"></li>
      </ul>
      
 
    </b-modal>

  </b-list-group-item>
</template>

<script>
import axios from 'axios'

export default {
  name: "SelfInfoItem",
  created(){
    this.content = this.item.content;
  },
  data(){
    return {
      content: "",
    }
  },
  props: {
    item: Object,
    type: {
      type: String,
      default: 'text',
    },
    updateApiName: {
      type: String,
      default: "",
    },
    invariant: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    edit(){
      let invariant = this.invariant;
      if(invariant===true){
        console.log("invariant");
      } else {
        console.log("edit");
        this.$refs['item-edit-modal'].show();
      }
    },
    show() {
      this.$refs['modal'].show();
    },
    update() {
      let newValue = this.content;
      let updateApiName = this.updateApiName;
      axios
        .post(`modifySelfInfo/${updateApiName}`, {'value': newValue})
        .then(response => {
          let data = response.data;
          console.log(data.success);
          return data.success;
        })
        .then(resolve => {
          if(resolve===true){
            this.item.content = newValue;
          } else {
            this.content = this.item.content;
          }
        })
    },
  },
  watch: {
    ret(){
      this.item.content = this.ret;
      console.log(`${this.item.content} ${this.ret}`)
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
  /*margin-right: 1rem;*/
}

.self-info-photo {
  height: 2rem;
  width: auto;
  border-radius: 50%;
  float: right;
  /*margin-right: 1rem;*/
}

.ul {
  padding: 0;
  margin-left: 1rem;
  font-size: 1.2rem;
}

.photo-edit-li {
  list-style-type: none;
  margin-bottom: 1rem;
}

</style>