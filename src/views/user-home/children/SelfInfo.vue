<template>
  <b-list-group id="self-info-group" v-if="user">
    <SelfInfoItem :item="{name: itemNames[itemList[0]], content: user[itemList[0]]}" type="invariant"/>
    <SelfInfoItem :item="{name: itemNames[itemList[1]], content: user[itemList[1]]}" type="img">
    </SelfInfoItem>
    <SelfInfoItem v-for="item in itemList.slice(2)" :key="itemNames[item]" :item="{name: itemNames[item], content: user[item]}"/>
    <!-- <SelfInfoItem id="self-info-name"/> -->
    <!-- <SelfInfoItem id="self-info-intro"/> -->
    <!-- <SelfInfoItem id="self-info-email"/> -->
    <!-- <SelfInfoItem id="self-info-change-password"/> -->
  </b-list-group>
</template>

<script>
import SelfInfoItem from './SelfInfoItem.vue';
import axios from 'axios';

export default {
  name: "SelfInfo",
  components: {
    SelfInfoItem,
  },
  created: function(){
    axios
      .get('getSelfInfo')
      .then(response => {
        let data = response.data;
        if(data.success){
          this.user = data.user;
        }
      })
  },
  data(){
    return {
      user: null,
      itemList: [
        'username',
        'photo',
        'name',
        'introduction',
        'email',
      ],
      itemNames:{
        'username': '用户名',
        'photo': '头像',
        'name': '昵称',
        'introduction': '简介',
        'email': '邮箱',
      }
    }
  },
  computed: {

  }
}
</script>

<style scoped="scoped">

</style>