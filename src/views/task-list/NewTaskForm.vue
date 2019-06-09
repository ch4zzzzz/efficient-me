<template>
  <b-form id="new-task-form">
    <b-form-input type="text" id="new-task" v-model="newTask.content" ref="newTask"
        v-focus="state.taskContentInput"
        @focus="taskContentInputFocus"
        @blur="taskContentInputToggle"
        placeholde="what is next to do"/>
    <b-form-input type="text" v-model="newTask.folderName" 
        @focus="taskFolderNameInputToggle"
        @blur="taskFolderNameInputToggle"/>
    <b-form-input type="date" v-model="newTask.date"
        @focus="taskDateInputToggle"
        @blur="taskDateInputToggle"
        placeholde="日期"/>  
  </b-form>
</template>

<script>
export default {
  name: "NewTaskForm",
  data(){
    return {
      
    }
  },
  props: {

  },
  computed: {

  }
}
</script>

<style scoped="scoped"></style>