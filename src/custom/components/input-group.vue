<template>
  <div class="flex-center">
    <div class="img-container">
      <img :class="{'active-img': focused}" src="../../assets/hugh.png"/>
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
}

.active {
  color: #2540ff !important;
}

span {
  margin-left: 15px;
}

.active-img {
  border: 2px solid #2540ff;
  border-radius: 50%;
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
