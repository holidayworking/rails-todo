<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import HelloWorld from './components/HelloWorld.vue';

  export default Vue.extend({
    name: 'App',
    components: {
      HelloWorld,
    },
  });
</script>

<style lang="scss">
  /* stylelint-disable-next-line selector-max-id */
  #app {
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
    text-align: center;
  }
</style>
