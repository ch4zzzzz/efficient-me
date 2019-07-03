<template>
  <section>
    <img id="cropper-photp" alt="photo">
    <p @click="logImg">cilck</p>
  </section>
</template>

<script>
export default {
  name: 'Cropper',
  data(){
    return {
      imgLocalUrl: "",
    }
  },
  created(){
    this.showImg(this.imgFile);
  },
  props: {
    imgFile: {
      type: String,
      default: ''
    }
  },
  methods: {
    logImg() {
      console.log(this.imgLocalUrl)
    },
    showImg(file) {
      // const blobFile = JSON.parse(file);
      console.log(file)
      const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = e => {
      //   console.log(reader.result)
      //   this.imgLocalUrl = reader.result;
      // }
    }
  },
  watch: {
    imgFile(val) {
      this.showImg(val);
    }
  }
}
</script>