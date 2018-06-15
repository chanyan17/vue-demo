<template>
  <div id="app">
      <vue-tpl></vue-tpl>
      <computed-watch></computed-watch>
  </div>
</template>

<script>
import VueTpl from './components/VueTpl'
import ComputedWatch from './components/ComputedWatch'

export default {
    name: 'App',
    components: {
        VueTpl,
        ComputedWatch
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
