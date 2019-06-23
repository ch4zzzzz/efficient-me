<template>
  <ul id="footer">
    <li v-for="item in storedButtons" :key="item.id"
        @click="turnTo(item.link)">
      <span :class="item.icon" class="icon"></span>
    </li>
  </ul>
</template>

<script>
import {getStore, setStore} from "../../../config/myLocalStorage.js";
import {views} from "./MainViews.js";

export default {
  name: "Footer",
  props: {
    
  },
  data(){
    return {
      allFooterButtons: views,
    }
  },
  methods: {
    turnTo(link) {
      this.$router.replace(link);
    }
  },
  computed: {
    storedButtons() {
      const allFooterButtons = this.allFooterButtons;
      const buttons = this.$store.state.footerButtons;
      let storedButtons = [];
      if(buttons.length===0) {
        this.$store.commit("addFooterButtons", 0);
        storedButtons.push(allFooterButtons[0]);
      } else {
        for(let item of buttons) {
          storedButtons.push(allFooterButtons[item]);
        }
      }
      return storedButtons;
    },
  },
  watch: {
    showFooter(newVal, oldVal) {
      if(newVal===true) {
        this.$emit('open', newVal);
      } else {
        this.$emit('close', newVal);
      }
    },
  }
}

</script>

<style scoped="scoped">
#footer {
  list-style: none;
  position: fixed;
  bottom: 0;
  height: 3rem;
  width: 100%;
  margin: 0;
  border-top: solid;
  padding-left: 0;
  background-color: white;
  display: flex;
}

#footer > li {
  flex: auto;
}

.header {
  width: 100%;
  height: 1rem;
}

.icon {
  display: inline-block;
  font-size: 2rem;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>