<template>
  <section class="TaskListView">
    <Header :title="title">
      <!-- <template #sidebar>
        
      </template> -->
    </Header>
    <!-- <hr> -->

<!--     <b-list-group class="task-list" v-if="uncompletedTasks.length">
      <span class="list-title">未完成</span>
      <Task v-for="task in uncompletedTasks" 
          :task="task" :key="task.id"
          />
    </b-list-group> -->
    <transition-group v-if="uncompletedTasks.length"
        name="custom-classes-transition" tag="b-list-group"
        enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">

      <Task v-for="task in uncompletedTasks" 
          :task="task" :key="task.id"
          class="custom-classes-transition-item"/>
    </transition-group>

<!--     <transition name="list-title">
      <span class="list-title">已完成</span>
    </transition> -->

    <transition-group v-if="completedTasks.length"
        name="custom-classes-transition" tag="b-list-group"
        enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
      <li key="title" class="list-title">已完成</li>
      <Task v-for="task in completedTasks" 
          :task="task" :key="task.id"
          class="custom-classes-transition-item"/>
    </transition-group>

<!--     <b-list-group class="task-list" v-if="completedTasks.length">
      
      <Task v-for="task in completedTasks" :task="task" :key="task.id"/>
    </b-list-group> -->

    <div id="add-task-button" @click="addTask">
      <b-img id="add-task-background" v-bind="imgConfig" rounded="circle" alt="Circle image"></b-img>
      <span id="add-task-icon" class="iconfont icon-icon_add"></span>
    </div>

    <input type="text" v-model="newTask" id="new-task" ref="newTask"
        v-show="newTaskInput">

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
      newTask: "",
      newTaskInput: false,
      imgConfig: { blank: true, blankColor: '#8a2be2', width: 75, height: 75, class: 'm1' },
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
      this.$refs.newTask.focus();
      this.newTaskInput = true;
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

.custom-classes-transition-item {
  transition: all 1s ease-out;
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

#new-task {
  width: 100%;
}
</style>