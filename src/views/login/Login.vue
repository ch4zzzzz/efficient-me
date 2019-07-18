<template>
  <section id="login" @submit.stop.prevent>
    <b-form id="login-form">
      <h1 id="login-form-h"> {{appName}} </h1>
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

      <b-button class="button" type="submit" variant="primary" @click="login">登录</b-button>
    </b-form>
    
    <!-- 注册和找回密码 -->
    <!-- <section id="other-links">

      <b-link class="link link-left" to="">注册账号</b-link>
      <b-link class="link link-right" to="">找回密码</b-link>
    </section> -->


  
  </section>
</template>

<script>
import {appName} from "../../config/app.js";
import axios from 'axios';
import {Api} from '../../api/api.js';
import {setStore} from '../../config/myLocalStorage.js';

export default {
  name: 'Login',
  created() {
    axios
      .post("/tLogin/", {})
      .then(response => {
        this.handleResponse(response);
      })
      .catch(error => {
        console.log(error);
      })
  },
  data() {
    return {
      appName,
      form: {
        username: "",
        password: "",
      },
      saveUser: false,
    }
  },
  methods: {
    login(){
      let form = this.form;
      let username = form.username;
      let password = form.password;
      axios
        .post(Api.login, {
          username,
          password,
        })
        .then(response => {
          this.handleResponse(response);
        })
        .catch(error => {
          console.log(error);
        })
    },
    handleResponse(response) {
      let data = response.data
      let user = data.user;
      if(data.success){
        this.$store.commit('setUser', user);
        this.$store.commit('login');
        this.$router.replace("/task-list/");
        setStore('username', user.username);
        return Promise.resolve(response);
      } 

    }
  }
}
</script>

<style scoped="scoped">
#login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
  width: 80%;
}

#login-form-h {
  text-align: center;
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
  position: relative;
  width: 90%;
  left: 50%;
  transform: translate(-50%, 0);
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
