<template>
  <div class="group flex-center">
    <div class="img-container">
      <div v-if="focused" class="img-round-circle"></div>
      <img src="../../assets/hugh.png"/>
    </div>
    <div class="content">
      <div class="flex head-title" :class="{'active': focused}">{{name}} IS</div>
      <div class="flex-v-end">
        <NumericInput
          @focused="focused = true"
          @blured="focused = false"
          /><span>hours old</span>
      </div>
    </div>
  </div>
</template>

<script>
import NumericInput from './numeric-input.vue';

export default {
  name: 'InputGroup',
  data: () => ({
    focused: false,
  }),
  components: {
    NumericInput,
  },
  props: {
    name: {
      type: String,
      default: 'HUGH',
    },
  },
  methods: {
  },
};
</script>

<style scoped>
.group {
  min-height: 65px;
}

.flex {
  display: flex;
}

.flex-v-end {
  display: flex;
  align-items: flex-end;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-container {
  position: relative;
  width: 59px;
  height: 59px;
}

.img-round-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #2540ff;
  border-radius: 50%;
}

.img-container > img {
  position: absolute;
  top: 2px;
  right: -2px;
  width: 55px;
}

.active {
  color: #2540ff !important;
}

span {
  margin-left: 9px;
  font-size: 14px;
}

.head-title {
  font-size: 13px;
  font-weight: bold;
  color: #2c2c30;
}

.content {
  margin-left: 16px;
}
</style>
