<template>
  <section id="settings-main">
    <section id="settings-user-info">
      <img id="settings-user-photo" :src="user.photo" alt="photo">
      <span id="settings-username">
        {{user.username}}
      </span>
      <span id="settings-user-level">
        <b-badge variant="light">
          {{user.level}}
        </b-badge>
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

    }
  },
  computed: {
    user(){
      return this.$store.state.user;
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