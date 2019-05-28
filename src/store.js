import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskFolder: "",
    currentView: "TaskList",
    showSidebar: false,
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
    }
  },
  actions: {

  }
})
