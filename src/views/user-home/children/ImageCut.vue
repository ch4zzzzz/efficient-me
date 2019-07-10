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
        @change="startCropper">
  </b-modal>
</template>

<script>
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
  name: "ImageCut",
  data() {
    return {
      photo: false,
      cropper: false,
      cropperReplace: undefined,
      cropperDestory: undefined,
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
          this.cropperReplace(reader.result); 
        } else {
          console.log("new")
          let cropper = new Cropper(img, {
            aspectRatio,
            background: false,
          });
          this.cropperDestory = cropper.destroy.bind(cropper);
          this.cropperReplace = cropper.replace.bind(cropper);
          this.cropper = true;
        }
      }
    },
    turnToDefault() {
      this.photo = false;
      const cropper = this.cropper;
      if(cropper) {
        this.cropperdestroy();
        this.cropper = false;
      }
    },
    excuteButtons(event) {
      const id = event.target.id;
      if(id==="pickImg") {
        const cropper = this.cropper;
        const imgCanvasData = cropper.getCroppedCanvas();
        const data = imgCanvasData.toDataUrl();
        console.log(data);
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