<template>
  <section id="user-home-main">
    <section id="user-home-user-info" @click="turnToSelfInfo">
      <img id="user-home-user-photo" :src="user.photo" alt="photo">
      <div id="user-home-basic-info">
        <div id="user-home-basic-info-content">
          <span id="user-home-username-span">
            <b-badge variant="light">
              {{user.level}}
            </b-badge>
            {{user.username}}
          </span>
          <span v-if="user.selfIntroduction">
            {{user.selfIntroduction}}
          </span>
        </div>

      </div>

    </section>
  </section>
</template>

<script>
export default {
  name: "UserHomeMain",
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
    turnToSelfInfo(){
      this.$router.push('self-info/');
    }
  }
}
</script>

<style scoped="scoped">
#user-home-main {
  width: 100%;
  height: 100%;
}

#user-home-user-info{
  margin-top: 0.2rem;
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
}

#user-home-user-photo {
  margin-left: 1rem;
  height: 100%;
  width: auto;
  border-radius: 50%;
  flex: none;
}

#user-home-basic-info{
  margin-left: 1rem;
  text-align: left;
  flex: auto;
}

#user-home-basic-info-content {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
}
</style>