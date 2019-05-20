<template>
  <section id="login">
    <b-form id="login-form">
      <h1> {{appName}} </h1>
      <b-form-group class="label"
          label="用户名"
          label-for="input-username">
          
      </b-form-group>
      <b-form-input id="input-username"
          class="input"
          v-model="form.username"
          required>
      </b-form-input>
      <b-form-group class="label"
          label="密码"
          label-for="input-password">
          
      </b-form-group>
      <b-form-input id="input-password"
          class="input"
          type="password"
          v-model="form.password"
          required>
      </b-form-input>
      <b-button class="button" type="submit" variant="primary">登录</b-button>
    </b-form>
    
    <!-- 注册和找回密码 -->
    <section id="other-links">
      <b-link class="link link-left" to="">注册账号</b-link>
      <b-link class="link link-right" to="">找回密码</b-link>
    </section>


  
  </section>
</template>

<script>
import {appName} from "../../config/app.js";

export default {
  name: 'Login',
  data() {
    return {
      appName,
      form: {
        username: "",
        password: "",
      }
    }
  },
}
</script>

<style scoped="scoped">
#login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  width: 80%;
}

.label {
  margin-left: 1.2rem;
  margin-bottom: 0;
  text-align: left;
}

.input {
  width: 90%;
  margin: 0 auto;
  display: block;
}

.button {
  margin-top: 3rem;
  width: 90%;
}

#other-links {
  position: fixed;
  bottom: 0.5rem;
  width: 60%;
  margin-left: 20%
}

.link {
  display: inline-block;
  position: relative;
}

.link-left {
  float: left;
}

.link-right {
  float: right;
}
</style>
