<template>
  <q-page class="q-pa-lg text-center">
    <div>
      <q-btn-group spread>
        <q-btn @click="timeInNow" color="positive" label="TIME IN" icon="more_time"/>
        <q-btn color="negative" label="TIME OUT" icon="timer_off"/>
      </q-btn-group>
    </div>
    <q-card flat square bordered>
      <q-card-section>
        <div class="text-h4">48 hours</div>
      </q-card-section>
    </q-card>

    <q-card flat square he>
      <q-img src="statics/images/clock.jpg" class="time-image absolute-top">
        <h2 style="text-align: center;" :class="'green'">{{ runningTime }}</h2>
        <div class="full">
          <div>TIME IN: {{timein}}</div>
        </div>
      </q-img>
    </q-card>
  </q-page>
</template>
<style lang="scss" scoped>
.full {
  width: 100%;
}
.time-image {
  z-index: -1;
  opacity: 0.8;
  filter: grayscale(80%);
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>

<script>
/* eslint-disable */
import { date } from "quasar";
export default {
  name: "PageIndex",
  data() {
    return {
      timein: "Not yet",
      Started: false,
      timeStart: null,
      runningTime: "00:00:00"
    };
  },
  watch: {
    timeStart: function() {
      console.log("watch....");
      var st = 1;
      if (st < 1) {
        console.log("watch....less than 1");
      } else {
      }
      var result = this.timeStart;
      if (this.Started) {
        result = Date.now() - this.timeStart;
      }
      this.runningTime = date.formatDate(result, "hh:mm:ss a");
    }
    // runningTime: function() {
    //   console.log("watch....");
    //   var result = this.timeStart;
    //   if (this.Started) {
    //     result = Date.now() - this.timeStart;
    //   }
    //   this.runningTime = date.formatDate(result, "hh:mm:ss a");
    //   this.timeUpdate();
    // }
  },
  methods: {
    timeInNow() {
      if (!this.Started) {
        this.timeStart = Date.now();
        this.timein = date.formatDate(Date.now(), "hh:mm:ss a");
      }
    },
    timeUpdate() {
      var result = this.timeStart;
      console.log("fdsafbhdsbfasdbf");
      if (this.Started) {
        result = Date.now() - this.timeStart;
      }
      this.runningTime = date.formatDate(result, "hh:mm:ss a");
    }
  }
};
</script>
