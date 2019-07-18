<template>
  <section id="sign-in">
    <b-form id="sign-in-form">
      <h1 id="sign-in-form-h">加入{{appName}}</h1>
      <b-form-group class="label"
          label="用户名"
          label-for="sign-in-username"/>
      <b-form-input id="sign-in-input-username"
          class=input
          v-model="form.username">
      </b-form-input>
    </b-form>
  </section>
</template>

<script>
import {appName} from "../../config/app.js"

export default Promise.resolve({
  name: "SignIn",
  data() {
    return {
      appName,
      form: {
        username: "",
        password: "",
        email: ""
      }
    }
  }
})
</script>

<style scoped="scoped">
#sign-in-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 80%;
}

#sign-in-form-h {
  text-align: center;
  font-size: 2rem;
}

</style>