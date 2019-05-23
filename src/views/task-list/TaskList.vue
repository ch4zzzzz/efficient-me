<template>
  <section class="TaskListView">
    <Header :title="title">
      <!-- <template #sidebar>
        
      </template> -->
    </Header>

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

    <div id="add-task-button" v-show="!newTaskForm" @click="addTask">
      <b-img id="add-task-background" v-bind="imgConfig" rounded="circle" alt="Circle image"></b-img>
      <span id="add-task-icon" class="iconfont icon-icon_add"></span>
    </div>
    
    <b-form-input type="text"/>
    <input type="text">

    <b-form id="new-task-form" v-show="newTaskForm">
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
    
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>

    <Sidebar :user="user"></Sidebar>
  </section>

</template>

<script>
import Header from "../../components/common/header/Header.vue";
import Task from "./Task.vue";
import Sidebar from "./Sidebar.vue";
import 'animate.css';


// const store = new Vuex.Store({
//   state: {
//     taskContentInput: false,
//     taskDateInput: false,
//     taskFolderNameInput: false, 
//   },
//   mutations: {
//     taskContentInputToggle: state => {
//       state.taskContentInput = !state.taskContentInput;
//     },
//     taskDateInputToggle: state => {
//       state.taskDateInput = !state.taskDateInput;
//     }
//     taskFolderNameInputToggle: state => {
//       state.taskFolderNameInput = !state.taskFolderNameInput;
//     }
//   },
//   getter: {
//     newTaskForm: state => {
//       return state.taskContentInput || state.taskDateInput || 
//           state.taskFolderNameInput;
//     }
//   }
// })

export default {
  name: "TaskList",
  components: {
    Header,
    Task,
    Sidebar,
  },
  data(){
    return {
      title: "今天",
      allTasks: [
        {
          id: 1,
          name: "1",
          time: "today",
          folderName: "all",
          complete: true,
        },
        {
          id: 2,
          name: "2",
          time: "today",
          folderName: "1",
          complete: false,
        },
        {
          id: 3,
          name: "3",
          time: "today",
          folderName: "all",
          complete: false,
        },
        {
          id: 4,
          name: "4",
          time: "today",
          folderName: "all",
          complete: true,
        },
      ],
      user: {
        username: "Chairman",
        photo: "",

      },
      folderName: "",
      newTask: {},
      state: {
        taskContentInput: false,
        taskDateInput: false,
        taskFolderNameInput: false, 
      },

      imgConfig: { blank: true, blankColor: '#8a2be2', width: 50, height: 50, class: 'm1' },
    }
  },
  methods: {
    folderFilter(folderName) {
      console.log(folderName)
      let tasks = this.allTasks;
      if(folderName===""){
        return tasks;
      }
      return tasks.filter(task => task.folderName===folderName);
    },
    addTask(){
      this.state.taskContentInput = true;
    },
    hideTaskInput(){
      window.setTimeout(() => {
        console.log("blur")
        this.newTaskInput = false;
      }, 300)
    },
    taskContentInputFocus() {
      this.state.taskContentInput = true;
    },
    taskContentInputToggle() {
      if(this.state.taskContentInput){
        setTimeout(() => {
          this.state.taskContentInput = false;
        }, 300);
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
    newTaskForm: function(){
      let state = this.state;
      return state.taskContentInput || state.taskDateInput || 
          state.taskFolderNameInput;
    }
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
}

.task-list {
  display: block;
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
  position: fixed;
  bottom: 0;
}

#new-task {
  width: 100%;
}
</style>