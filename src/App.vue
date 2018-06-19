<template>
  <div id="app">
      <vue-tpl></vue-tpl>
      <computed-watch></computed-watch>
      <class-style></class-style>
      <conditional></conditional>
  </div>
</template>

<script>
import VueTpl from './components/VueTpl'
import ComputedWatch from './components/ComputedWatch'
import ClassStyle from './components/ClassStyle'
import Conditional from './components/Conditional'
export default {
    name: 'App',
    components: {
        VueTpl,
        ComputedWatch,
        ClassStyle,
        Conditional
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
