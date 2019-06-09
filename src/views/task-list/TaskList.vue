<template>
  <section class="TaskListView">
    

    <transition-group class="task-list"
        name="custom-classes-transition" tag="b-list-group"
        enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown leave-active">
      <li v-if="uncompletedTasks.length" key="uncompletedTasks"
          class="list-title task-list-item">未完成</li>
      <Task v-for="task in uncompletedTasks" 
          :task="task" :key="task.id"
          class="task-list-item"/>
      <li v-if="completedTasks.length" key="completedTasks"
          class="list-title task-list-item">已完成</li>
      <Task v-for="task in completedTasks" 
          :task="task" :key="task.id"
          class="task-list-item"/>
    </transition-group>


    <div id="add-task-button" @click="addTask">
      <b-img id="add-task-background" v-bind="imgConfig" rounded="circle" alt="Circle image"></b-img>
      <span id="add-task-icon" class="iconfont icon-icon_add"></span>
    </div>
    

<!--     <b-form id="new-task-form" v-show="newTaskForm">
      <b-form-input type="text" id="new-task" v-model="newTask.content" ref="newTask"
          v-focus="state.taskContentInput"
          @focus="taskContentInputFocus"
          @blur="taskContentInputToggle"
          placeholde="what is next to do"/>
      <b-form-input type="text" v-model="newTask.folderName" 
          @focus="taskFolderNameInputToggle"
          @blur="taskFolderNameInputToggle"/>
      <span id="task-list-date-input" class="iconfont icon-icon_calendar_fill"></span>
      <b-form-input type="date" v-model="newTask.date"
          @focus="taskDateInputToggle"
          @blur="taskDateInputToggle"
          placeholde="日期"/> -->
    <b-modal id="new-task-form-modal" centered>
      <b-form id="new-task-form">
        <b-form-input type="text" id="new-task" v-model="newTask.content" ref="newTask"
            placeholde="what is next to do"/>
        <b-form-select :value="newTask.folderName" :options="taskFolderOptions"/>
        <b-form-input type="date" v-model="newTask.date"
            placeholde="日期"/>
      </b-form>
    </b-modal>
      
 

    
    <Sidebar ref="Sidebar" :taskFolders="taskFolders"></Sidebar>

    
  </section>

</template>

<script>
import Task from "./Task.vue";
import Sidebar from "./Sidebar.vue";
import axios from 'axios';
import {Api} from '../../api/api.js';
import 'animate.css';


export default {
  name: "TaskList",
  components: {
    Task,
    Sidebar,
  },
  created: function(){
    axios
      .get(Api.getTaskList)
      .then(response => {
        this.allTasks = response.data.taskList;
      })
      .catch(error => console.log(`getTaskList error: ${error}`));
    axios
      .get(Api.getFolderList)
      .then(response => {
        this.taskFolders = response.data.folderList;
      });
    let now = new Date();
    this.newTask.date = (now => {
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      if(month.toString().length<2){
        month = '0'+month;
      }
      let day = now.getDate();
      if(day.toString().length<2){
        day = '0'+day;
      }
      return `${year}-${month}-${day}`;
    })(now);
  },
  data(){
    return {
      title: "今天",
      allTasks: [],
      user: {
        username: "Chairman",
        photo: "",

      },
      newTask: {
        date: "",
        folderName: "",
      },
      state: {
        taskContentInput: false,
        taskDateInput: false,
        taskFolderNameInput: false, 
      },
      newTaskForm: false,
      imgConfig: { blank: true, blankColor: '#8a2be2', width: 50, height: 50, class: 'm1' },
      taskFolders: [],
    }
  },
  methods: {
    folderFilter(folderName) {
      console.log(`Current folderName: ${folderName}`)
      let tasks = this.allTasks;
      if(folderName===""){
        return tasks;
      }
      return tasks.filter(task => task.folderName===folderName);
    },
    addTask(){
      // this.state.taskContentInput = true;
      this.newTaskForm = true;
      this.$bvModal.show("new-task-form-modal");
    },

    taskContentInputFocus() {
      this.state.taskContentInput = true;
    },
    taskContentInputToggle() {
      if(this.state.taskContentInput){
        setTimeout(() => {
          this.state.taskContentInput = false;
        }, 100);
      } else {
        this.state.taskContentInput = true;
      }
      console.log(this.newTaskForm);
    },
    taskDateInputToggle() {
      if(this.state.taskDateInput){
        setTimeout(() => {
          this.state.taskDateInput = false;
        }, 300);
      } else {
        this.state.taskDateInput = true;
      }
      console.log(this.newTaskForm);
    },
    taskFolderNameInputToggle() {
      if(this.state.taskFolderNameInput){
        setTimeout(() => {
          this.state.taskFolderNameInput = false;
        }, 300);
      } else {
        this.state.taskFolderNameInput = true;
      }
      console.log(this.newTaskForm);
    },
    closeSidebar(){
      console.log("begin");
      let state = this.$store.state.showSidebar;
      console.log("end");
      if(state===true){
        this.$store.commit('sidebarToggle');
      }
    }
  },
  computed: {
    tasks: function(){
      return this.folderFilter(this.folderName);
    },
    completedTasks: function(){
      return this.tasks.filter(task => task.complete);
    },
    uncompletedTasks: function(){
      return this.tasks.filter(task => !task.complete);
    },
    folderName: function(){
      return this.$store.state.taskFolder;
    },
    showSidebar: function(){
      return this.$store.state.showSidebar;
    },
    taskFolderOptions: function(){
      let taskFolders = this.taskFolders;
      let options = {};
      for(let i=0,len=taskFolders.length;i<len;i++){
        options[`${i+1}`] = taskFolders[i].folderName;
      }
      console.log(options)
      return options;
    }
  },
  watch: {
    showSidebar: function(){
      if(this.showSidebar==true){
        console.log("TaskList: Sidebar open")
        this.$refs.Sidebar.open();
      }
    },
  },
  directives: {
    focus: {
      // 指令的定义
      update: function (el, obj) {
        if(obj.value){
          el.focus();
        }
      }
    }
  },
}

</script>

<style scoped="scoped">
@import '../../assets/icon/iconfont.css';

.TaskListView {
  width: 100%;
  height: 100%;
  position: relative;
  touch-action: none;
  overflow: scroll;
}

.task-list {
  display: block;
  position: relative;
  width: 100%;
}

.list-title {
  display: block;
  width: 100%;
  background-color: #c0c0c0;
}

.custom-classes-transition-move {
  transition: 0.5s;
  touch-action: none;
  display: block;
}

.leave-active {
  position: absolute;
  opacity: 0.5;
}

#add-task-button {
  position: fixed;
  bottom: 0.5rem;
  right: 1rem;
}

#add-task-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
}

#new-task-form {
  width: 100%;
  /*position: fixed;*/
  bottom: 0;
  background-color: white;
}

#new-task {
  width: 100%;
}

#task-list-date-input {
  font-size: 2rem;
}
</style>