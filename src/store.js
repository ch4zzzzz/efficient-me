import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

const localStorage = createPersistedState({
  storage: window.localStorage,
  reducer(state) {
    return {
      user: state.user,
      footerButtons: state.footerButtons,
    }
  }
})

const sessionStorage = createPersistedState({
  storage: window.sessionStorage,
  reducer(state) {
    return {
      isLogined: state.isLogined,
    }
  }
})

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [localStorage, sessionStorage],
  state: {
    taskFolder: "",
    currentView: "",
    title: "",
    showSidebar: false,
    footer: false,
    user: {},
    footerButtons: [0],
    isLogined: false,
  },
  mutations: {
    changeFolder(state, folderName) {
      state.taskFolder = folderName;
    },
    changeCurrentView(state, viewName) {
      state.currentView = viewName;
    },
    setTitle(state, title) {
      state.title = title;
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
    showFooter(state) {
      state.footer = true;
    },
    hideFooter(state) {
      state.footer = false;
    },
    addFooterButtons(state, ...indexs) {
      const set = new Set(state.footerButtons);
      for(let i=0, len=indexs.length;i<len;i++){
        set.add(indexs[i]);
      }
      state.footerButtons = Array.from(set);
    },
    deleteFooterButtons(state, ...indexs) {
      const set = new Set(state.footerButtons);
      for(let i=0, len=indexs.length;i<len;i++) {
        set.delete(indexs[i]);
      }
      state.footerButtons = Array.from(set);
    },
    login(state) {
      state.isLogined = true;
    },
    logout(state) {
      state.isLogined = false;
    }
  },
  actions: {

  }
})
