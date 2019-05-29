<template>
  <section id="footer-view-setting">
    <p class="illustration">已开启的功能会在主界面底部选项卡中显示</p>
    <b-list-group>
      <b-list-group-item>
        <b-form-checkbox v-model="checked" name="check-button" switch>
          Switch Checkbox
        </b-form-checkbox>
      </b-list-group-item>
    </b-list-group>
  </section>
</template>

<script>
export default {
  name: "FootViewSetting",
  data(){
    return {
      checked: false,
    }
  }
}
</script>

<style scoped="scoped">
.illustration {
  display: block;
  margin-left: 0.3rem;
}
</style>