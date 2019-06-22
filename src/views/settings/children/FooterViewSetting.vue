<template>
  <section id="footer-view-setting">
    <p class="illustration">已开启的功能会在主界面底部选项卡中显示</p>
    <b-list-group>
      <b-list-group-item v-for="(item, index) in items" :key="item.id"
          :index="index">
        <b-form-checkbox v-model="item.checked" name="check-button" switch
            @input="executeSetting($event, index)">
          {{item.title}}
        </b-form-checkbox>
      </b-list-group-item>
    </b-list-group>
  </section>
</template>

<script>
import {views} from "../../../components/common/footer/MainViews.js"

export default {
  name: "FootViewSetting",
  data(){
    return {
      items: [],
    }
  },
  created(){
    this.items = views.slice(1);
  },
  methods: {
    executeSetting(newVal, index) {
      if(newVal) {
        this.$store.commit("addFooterButtons", index+1);
      } else {
        this.$store.commit("deleteFooterButtons", index+1);
      }
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