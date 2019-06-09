<template>
  <b-list-group-item class="task">
    <b-form-checkbox
      :id="`Task-${task.id.toString()}`"
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

      <span class="task-date">
        {{date}}
      </span>

      <span class="folder-name">
        {{task.folderName || "收集箱"}}
      </span>
    </span>

  </b-list-group-item>
</template>

<script>
export default {
  name: 'Task',
  created: function(){
    let date = new Date(parseInt(this.task.date));
    this.date = (date => {
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      if(month.toString().length<2){
        month = '0'+month;
      }
      let day = date.getDate();
      if(day.toString().length<2){
        day = '0'+day;
      }
      return `${year}-${month}-${day}`;
    })(date);
  },
  data(){
    return {
      date: "",
    }
  },
  props: {
    task: Object
  }
}
</script>

<style scoped="scoped">

.task {
  width: 100%;
}

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

.task-date, .folder-name {
  color: #c0c0c0;
  font-size: 0.8rem;
 }

.task-date {
  float: left;
}

.folder-name {
  float: right;
}

</style>
