<template>
  <ul v-if="buttons.length>1">
    
  </ul>
</template>

<script>
import {getStore, setStore} from "../../../config/myLocalStorage.js";
import views from "../../../views/MainViews.js";

export default {
  name: "Footer",
  props: {
    
  },
  data(){
    return {
      buttons: [],
    }
  },
  created(){
    let storedButtons = JSON.parse(getStore("footerButtons"));
    let buttons = this.buttons;
    if(storedButtons){
      for(let i=0, len=storedButtons.length; i<len; i++){
        try {
          buttons.push(allFooterButtons[storedButtons[i]]);
        } catch(error) {
          console.log("Invaild index of allFooterButtons: out of range!");
        }
      }
    } else {
      setStore("footerButtons", [0]);
      buttons.push(0);
    }
  },
  watch: {

  },
}

</script>

<style scoped="scoped">
  
.header {
  width: 100%;
  height: 1rem;
}

</style>