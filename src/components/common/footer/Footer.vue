<template>
  <ul v-if="showFooter" id="footer">
    <li v-for="item in storedButtons" :key="item.id">
      {{item.title}}
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
  // created(){
  //   const allFooterButtons = this.allFooterButtons;
  //   const storedButtons = JSON.parse(getStore("footerButtons"));
  //   const buttons = this.buttons;
  //   if(storedButtons){
  //     for(let i=0, len=storedButtons.length; i<len; i++){
  //       try {
  //         buttons.push(allFooterButtons[storedButtons[i]]);
  //       } catch(error) {
  //         console.log("Invaild index of allFooterButtons: out of range!");
  //       }
  //     }
  //   } else {
  //     const defaultView = views[0]
  //     setStore("footerButtons", [defaultView]);
  //     buttons.push(defaultView);
  //   }
  // },
  computed: {
    showFooter() {
      // return (this.$store.state.footer) && (this.buttons.length > 1);
      return true;
    },
    storedButtons() {
      const allFooterButtons = this.allFooterButtons;
      const buttons = this.$store.state.footerButtons;
      const storedButtons = [];
      if(buttons.length===0) {
        this.$store.commit("addFooterButtons", 0);
        storedButtons.push(allFooterButtons[0]);
      } else {
        console.log(buttons)
        for(let item of buttons) {
          storedButtons.push(allFooterButtons[item]);
        }
      }
      console.log(storedButtons)
      return storedButtons;
    },
  },
}

</script>

<style scoped="scoped">
#footer {
  list-style: none;
  position: sticky;
  bottom: 0;
  height: 1.5rem;
}

#footer > li {
  float: left;
}

.header {
  width: 100%;
  height: 1rem;
}

</style>