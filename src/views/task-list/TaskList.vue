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
    
    <b-form id="new-task-form" v-show="newTaskForm">
      <b-form-input type="text" id="new-task" v-model="newTask.content" ref="newTask"
          v-focus="newTaskInput"
          @blur="hideTaskInput"/>
      <b-form-input type="text" v-model="newTask.folderName" 
          @focus="newTaskFolderNameInputToggle"
          @blur="newTaskFolderNameInputToggle"/>
      <b-form-input type="date" v-model="newTask.date"
          @focus="newTaskDateInputToggle"
          @blur="newTaskDateInputToggle"/>
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
      newTaskInput: false,
      newTaskDate: false,
      newTaskFolderName: false,
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
      this.newTaskInput = true;
    },
    hideTaskInput(){
      this.newTaskInput = false;
    },
    newTaskDateInputToggle(){
      // console.log(this.newTaskDate);
      this.newTaskDate = !this.newTaskDate;
    },
    newTaskFolderNameInputToggle(){
      this.newTaskFolderName = !this.newTaskFolderName;
      console.log(this.newTaskFolderName);
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
    newTaskForm: function(){
      return this.newTaskInput || this.newTaskDate
          || this.newTaskFolderName;
    }
  },
  directives: {
    focus: {
      // 指令的定义
      update: function (el, value) {
        if(value){
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