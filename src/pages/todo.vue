<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
        class="col"
        filled
        square
        placeholder="Add Task"
        bg-color="white"
        v-model="newTask"
        dense
        @keyup.enter="addTask"
      >
        <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add"/>
        </template>
      </q-input>
    </div>
    <q-list separator bordered class="bg-white">
      <q-item
        v-for="(task, i) in tasks"
        :key="i"
        @click="task.done = !task.done"
        clickable
        v-ripple
        :class="{'done bg-blue-1': task.done}"
      >
        <q-item-section avatar>
          <q-checkbox v-model="task.done" class="no-pointer-events" color="primary"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn @click.stop="deleteTask(i)" flat dense round color="primary" icon="delete"/>
        </q-item-section>
      </q-item>
    </q-list>

    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon name="check" size="100px" color="primary"/>
      <div class="text-h5 text-primary text-center">No Tasks</div>
    </div>
  </q-page>
</template>
<style lang="scss" scoped>
.no-tasks {
  opacity: 0.5;
}
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
</style>

<script>
/* eslint-disable */
export default {
  name: "PageIndex",
  data() {
    return {
      newTask: "",
      tasks: []
    };
  },
  methods: {
    deleteTask(i) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like realy delete task?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.tasks.splice(i, 1);
          this.$q.notify({
            type: "positive",
            message: `Task deleted successfully.`
          });
        });
    },

    addTask() {
      if (this.newTask.length) {
        this.tasks.push({ title: this.newTask, done: false });
        this.newTask = "";
      }
    }
  }
};
</script>
