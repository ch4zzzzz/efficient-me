<template>
  <li class="task">
    <input type="checkbox" v-model="task.complete">
    <div id="this-task">
      <span id="task-name">
      {{task.name}}
      </span>

      <br>

      <span id="task-time" class="task-info">
        {{task.time}}
      </span>

      <span id="folder-name" class="task-info">
        {{task.folderName}}
      </span>
    </div>
    
  </li>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  }
}
</script>

<style scoped="scoped">
.task {
  list-style: none;
  display: block;
}

#this-task {
  display: inline-block;
  margin-left: 1rem;
  margin-right: 0.5rem;
}

#task-name {
  display: inline-block;
}

.task-info {
  display: inline-block;
  font-size: 0.8rem;
}

#task-time {
  float: left;
}

#folder-name {
  float: right;
}


</style>