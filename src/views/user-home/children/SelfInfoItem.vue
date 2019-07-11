<template>
  <b-list-group-item class="item" @click="edit">
    <span class="item-name">
      {{item.name}}
    </span>
    <span v-if="(type==='text')&&item.content" class="item-content">
      {{content}}
    </span>
    <span v-else-if="(type==='img')&&item.content">
       <img :src="item.content" alt="头像" class="self-info-photo">
    </span>
    
    
    <b-modal v-if="type==='text'" class="item-edit"
        ref='item-edit-modal'
        centered
        @show="passContentValue">
      <template slot="modal-header">
        <h6>
          {{'修改'+item.name}}
        </h6>
      </template>
      <b-form-input placeholder="" ref="input" v-model="newContent"/>
      <template slot="modal-footer" slot-scope="{ ok }">
        <b-button size="sm" variant="success" @click="update();ok()">
          提交
        </b-button>
      </template>
    </b-modal>
    <ImageCut v-else-if="type==='img'" ref="item-edit-modal"
        uploadUrl="/setPhoto"/>

  </b-list-group-item>
</template>

<script>
import axios from 'axios';
import ImageCut from './ImageCut.vue';

export default {
  name: "SelfInfoItem",
  components: {
    ImageCut,
  },
  created(){
    this.content = this.item.content;
  },
  data(){
    return {
      content: "",
      photo: false,
      newContent: "",
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
    },
    aspectRatio: {
      type: Number,
      default: NaN,
    }
  },
  methods: {
    edit(){
      let invariant = this.invariant;
      if(invariant===true){
        return;
      } else {
        this.$refs['item-edit-modal'].show();
      }
    },
    update() {
      let newValue = this.newContent;
      let updateApiName = this.updateApiName;
      axios
        .post(`modifySelfInfo/${updateApiName}`, {'value': newValue})
        .then(response => {
          let data = response.data;
          return data.success;
        })
        .then(resolve => {
          if(resolve===true){
            this.content = newValue;
          } 
        })
    },
    selectLocalImg() {
      const localImgSelector = document.querySelector('#localImgSelector');
      localImgSelector.click();
    },
    startCropper(event) {
      this.photo = true;
      const files = Array.prototype.slice.call(event.target.files);
      // const fileUrl = window.URL.createObjectURL(files[0]);
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        const img = document.querySelector('#self-info-new-photo');
        img.src = reader.result;
        const cropper = new Cropper(img, {
          aspectRatio: 1/1
        })
      }
    },
    passContentValue() {
      this.newContent = this.content;
    }
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

</style>