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
    
    <b-modal id="new-task-form-modal" centered
        @hidden="newTaskFormAlert=false">
      <template slot="modal-header">
        <h6>添加新任务</h6>
      </template>
      <b-form id="new-task-form">
        <b-form-input type="text" id="new-task" v-model="newTask.content" ref="newTask"
            placeholde="what is next to do"/>
        <b-form-select v-model="newTask.folderName" :options="taskFolderOptions"/>
        <b-form-input type="date" v-model="newTask.date"
            placeholde="日期"
            @focus="newTaskFormAlert=false"/>
      </b-form>
      <template slot="modal-footer">
        <span class="form-alert" 
            v-show="newTaskFormAlert">
          请输入清单名称
        </span>
        <b-button size="sm" variant="success" @click="commitNewTask">
          添加
        </b-button>
      </template>
    </b-modal>
      
 

    
    <Sidebar ref="Sidebar" :taskFolders="taskFolders" 
        @refreshFolderList="getFolderList"/>

    
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
        if(response.data.success===true){
          let taskList = response.data.taskList;
          taskList.forEach(element => {
            this.allTasks.push(element);
            // this.allTasks[this.allTasks.length-1].id = element._id;
          })
          // this.allTasks = taskList;
        }
      })
      .catch(error => console.log(`getTaskList error: ${error}`));
    this.getFolderList();
    let now = new Date();
    this.defaultDate = (now => {
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
    this.newTask.date = this.defaultDate;
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
        content: "",
        date: "",
        folderName: null,
      },
      defaultDate: "",
      state: {
        taskContentInput: false,
        taskDateInput: false,
        taskFolderNameInput: false, 
      },
      newTaskForm: false,
      imgConfig: { blank: true, blankColor: '#8a2be2', width: 50, height: 50, class: 'm1' },
      taskFolders: [],
      newTaskFormAlert: false,
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
    commitNewTask(){
      let len = this.allTasks.length;
      let newTask = this.newTask;
      let folderName = "";
      if(newTask.content==="") {
        this.newTaskFormAlert = true;
        console.log("empty")
        return;
      }
      if(newTask.folderName!==null){
        folderName = this.taskFolderOptions[newTask.folderName].text;
      }
      newTask = {
        'name': newTask.content,
        'date': (new Date(newTask.date)).getTime(),
        'folderName': folderName,
        'complete': false,
      }
      axios
        .post("addTask", newTask)
        .then(response => {
          if(response.data.success===true){
            newTask.id = response.data.id;
            this.allTasks.push(newTask);
            this.defaultNewTaskForm();
            this.$bvModal.hide("new-task-form-modal");
          }
        })
    },
    defaultNewTaskForm(){
      this.newTask.content = "";
      this.newTask.folderName = null;
      this.newTask.date = this.defaultDate;
    },
    closeSidebar(){
      console.log("begin");
      let state = this.$store.state.showSidebar;
      console.log("end");
      if(state===true){
        this.$store.commit('sidebarToggle');
      }
    },
    getFolderList() {
      axios
        .get(Api.getFolderList)
        .then(response => {
          if(response.data.success===true){
            this.taskFolders = response.data.folderList;
          }
        });
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
      let options = [{value: null, text: "收集箱"}];
      for(let i=0,len=taskFolders.length;i<len;i++){
        options.push({value: i+1,text: taskFolders[i].folderName});
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

.form-alert {
  color: red;
}
</style>