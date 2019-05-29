<template>
  <section id="setting-main">
    <section id="settings-user-info">
      <img id="settings-user-photo" :src="user.photo" alt="photo">
      <span id="settings-username">
        {{user.username}}
      </span>
      <span id="settings-user-level">
        <b-badge variant="light">4</b-badge>
      </span>
    </section>
    <section id="settings-list">
      <b-list-group id="basic-settings">
        <b-list-group-item id="settings-footer-view" @click="turnToFooterViewSetting">选项卡</b-list-group-item>
        <b-list-group-item>主题</b-list-group-item>
      </b-list-group>
    </section>
  </section>

</template>

<script>
export default {
  name: "Main",
  data(){
    return {
      user: {
        username: "salamander",
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558928507222&di=d9297e82c0f542dc21102132f2e88b77&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201503%2F10%2F20150310191646_5AuSC.jpeg",
      },
    }
  },
  methods: {
    turnToFooterViewSetting(){
      this.$router.push("footer-view-setting/");
    },
  }
}
</script>

<style scoped="scoped">
#settings {
  /*height: 100%;*/
  width: 100%;
  /*margin-top: 10rem;*/
}

#settings-user-info {
  width: 100%;
}

#settings-user-photo {
  margin-left: 1rem;
  width: 20%;
  height: 20%;
  border-radius: 50%;
}

#settings-username {
  margin-left: 1rem;
}

#settings-user-level {
  /*position: relative;*/
  right: 2rem;
}

#settings-list {
  margin-top: 0.2rem;
  width: 100%;
}
</style>