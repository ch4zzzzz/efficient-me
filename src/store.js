import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskFolder: "",
    currentView: "",
    showSidebar: false,
    user: {},
  },
  mutations: {
    changeFolder(state, folderName) {
      state.taskFolder = folderName;
    },
    changeCurrentView(state, viewName) {
      state.currentView = viewName;
    },
    sidebarToggle(state) {
      state.showSidebar = !state.showSidebar;
    },
    sidebarShow(state) {
      state.showSidebar = true;
    },
    sidebarHide(state) {
      state.showSidebar = false;
    },
    setUser(state, user){
      state.user = user;
    },
  },
  actions: {

  }
})
