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
        @show="passContentValue"
        @cancel="cancelEvent"
        @close="closeEvent"
        @hide="hideEvent">
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

    <b-modal v-else-if="type==='img'" class="photo-edit" ref="item-edit-modal" centered hide-footer>
      <template slot="modal-header">
        <h6>
          {{'修改'+item.name}}
        </h6>
      </template>
      <ul class="ul" v-show="!photo">
        <li class="photo-edit-li">拍照</li>
        <li class="photo-edit-li" @click="selectLocalImg">选择本地图片</li>
        <input id="localImgSelector" style="display: none;"
            type="file" name="selectLocalImg" placeholder="选择本地图片"
            @change="startCropper">
      </ul>
      <div>
        <img v-show="photo" alt="photo" id="self-info-new-photo">
      </div>
 
    </b-modal>

  </b-list-group-item>
</template>

<script>
import axios from 'axios'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css';

export default {
  name: "SelfInfoItem",
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

.photo-edit-li {
  list-style-type: none;
  margin-bottom: 1rem;
}

#self-info-new-photo {
  max-width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>