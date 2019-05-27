<template>
  <b-form id="new-task-form">
    <b-form-input type="text" id="new-task" v-model="newTask.content" ref="newTask"
        v-focus="state.taskContentInput"
        @focus="taskContentInputFocus"
        @blur="taskContentInputToggle"/>
    <b-form-input type="text" v-model="newTask.folderName" 
        @focus="taskFolderNameInputToggle"
        @blur="taskFolderNameInputToggle"/>
    <b-form-input type="date" v-model="newTask.date"
        @focus="taskDateInputToggle"
        @blur="taskDateInputToggle"/>
  </b-form>
</template>

<script>
export default {
  name: "NewTaskForm",
  data(){
    return {
      newTask: {},
      state: {
        taskContentInput: false,
        taskDateInput: false,
        taskFolderNameInput: false, 
      },
    }
  },
  props: {

  },
  computed: {
    newTaskForm: function(){
      let state = this.state;
      return state.taskContentInput || state.taskDateInput || 
          state.taskFolderNameInput;
    }
  }
}
</script>

<style scoped="scoped"></style>