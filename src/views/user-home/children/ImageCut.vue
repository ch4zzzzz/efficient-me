<template>
  <b-modal id="image-cut" class="photo-edit"
      centered hide-footer
      @hide="turnToDefault">
    <template slot="modal-header">
      <h6>
        {{itemName}}
      </h6>
    </template>
    <ul class="ul" v-show="!photo">
      <li class="photo-edit-li" @click="selectLocalImg">选择本地图片</li>
    </ul>
    <div v-show="photo">
      <img alt="photo" id="selected-photo">
      <span class="button-container" @click.stop="excuteButtons">
        <b-button class="button" variant="outline-info" id="pickImg">确定</b-button>
        <b-button class="button" variant="outline-info" id="rePickImg">重选</b-button>
        <b-button class="button" variant="outline-info" id="quitImgSelector">取消</b-button>
      </span>
    </div>
    <input id="localImgSelector"
        style="display: none;"
        type="file" name="selectLocalImg"
        placeholder="选择本地图片"
        accept=".jpg, jpeg" 
        @change="startCropper">
  </b-modal>
</template>

<script>
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import axios from 'axios';

export default {
  name: "ImageCut",
  data() {
    return {
      photo: false,
      cropper: undefined,
    }
  },
  props: {
    itemName: {
      type: String,
      default: "选择图片"
    },
    uploadUrl: {
      type: String,
      default: ""
    },
    aspectRatio: {
      type: Number,
      default: 1/1,
    }
  },
  methods: {
    show() {
      this.$bvModal.show('image-cut')
    },
    selectLocalImg() {
      const localImgSelector = document.querySelector('#localImgSelector');
      localImgSelector.click();
    },
    startCropper(event) {
      this.photo = true;
      const aspectRatio = this.aspectRatio;
      const files = Array.prototype.slice.call(event.target.files);
      // const fileUrl = window.URL.createObjectURL(files[0]);
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        const img = document.querySelector('#selected-photo');
        img.src = reader.result;
        if(this.cropper) {
          let cropper = this.cropper;
          cropper.replace(reader.result); 
        } else {
          console.log("new")
          let cropper = new Cropper(img, {
            aspectRatio,
            background: false,
          });
          this.cropper = cropper;
        }
      }
    },
    turnToDefault() {
      this.photo = false;
      let cropper = this.cropper;
      if(cropper) {
        cropper.destroy();
        this.cropper = undefined;
      }
    },
    excuteButtons(event) {
      const id = event.target.id;
      if(id==="pickImg") {
        const cropper = this.cropper;
        cropper.getCroppedCanvas().toBlob((blob) => {
          const formData = new FormData();
          formData.append('image', blob);
          axios
            .post(this.uploadUrl, formData)
            .then(res => {
              const data = res.data;
              if(data.success) {
                console.log(data.url);
              }
            })
        });
      } else if(id==="rePickImg") {
        this.selectLocalImg();
      } else if(id==="quitImgSelector") {
        this.$bvModal.hide('image-cut')
      }
    }
  }
}
</script>

<style scoped="scoped">
.ul {
  padding-left: 0;
}

.photo-edit-li {
  list-style-type: none;
  margin-bottom: 1rem;
}

#selected-photo {
  max-width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.button-container {
  margin-top: 0.5rem;
  display: flex;
}

.button-container > .button {
  flex: auto;
}
</style>