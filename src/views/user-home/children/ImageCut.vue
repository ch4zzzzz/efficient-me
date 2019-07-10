<template>
  <b-modal v-else-if="type==='img'" class="photo-edit" centered hide-footer>
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
</template>

<script>
export default {
  name: "ImageCut",
  
}
</script>

<style></style>