import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskFolder: "",
  },
  mutations: {
    changeFolder(state, folderName) {
      state.taskFolder = folderName;
    }
  },
  actions: {

  }
})
