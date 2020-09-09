<template>
  <div id="app">
    <form>
      <InputGroup />
      <InputGroup />
      <InputGroup />
    </form>
  </div>
</template>

<script>
import InputGroup from './custom/components/input-group.vue';

export default {
  name: 'App',
  components: {
    InputGroup,
  },
};
</script>

<style>
@font-face {
  font-family: Roboto;
  src: url('./assets/fonts/Roboto-Regular.ttf') format('truetype');
}

#app {
  font-family: Roboto;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

InputGroup {
  margin: 20px;
}
</style>
