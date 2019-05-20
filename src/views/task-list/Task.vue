<template>
  <b-list-group-item class="task">
    <b-form-checkbox
      :id="task.name"
      :name="task.name"
      v-model="task.complete"
      class="task-checkbox"
    >

    </b-form-checkbox>

    <span class="task-info">
      <span class="task-name">
        {{task.name}}
      </span>

      <br>

      <span class="task-time">
        {{task.time}}
      </span>

      <span class="folder-name">
        {{task.folderName}}
      </span>
    </span>

  </b-list-group-item>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object
  }
}
</script>

<style scoped="scoped">

.task-checkbox {
  display: inline-block;
  float: left;
  width: 5%;
}

.task-name {
  display: inline-block;
  text-align: left;
  float: left;
}

.task-info {
  display: inline-block;
  font-size: 1rem;
  width: 90%;
}

.task-time, .folder-name {
  color: #c0c0c0;
  font-size: 0.8rem;
 }

.task-time {
  float: left;
}

.folder-name {
  float: right;
}

</style>
