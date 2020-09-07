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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
