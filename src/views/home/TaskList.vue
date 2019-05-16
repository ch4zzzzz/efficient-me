<template>
  <section>
    <Header :title="title"/>
    <ul>
      <Task v-for="task in tasks" :task="task" :key="task.id"/>
    </ul>
  </section>

</template>

<script>
import Header from "../../components/common/header/Header.vue";
import Task from "./Task.vue";

export default {
  name: "TaskList",
  components: {
    Header,
    Task,
  },
  data(){
    return {
      title: "今天",
      tasks: [
        {
          name: "1",
          time: "today",
          folderName: "all",
          complete: false,
        },
        {
          name: "2",
          time: "today",
          folderName: "all",
          complete: false,
        }
      ],
    }
  },

}

</script>

<style scoped="scoped"></style>