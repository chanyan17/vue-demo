<template>
  <div id="app">
    <vue-tpl></vue-tpl>
    <computed-watch></computed-watch>
    <class-style></class-style>
    <conditional></conditional>
    <list></list>
    <to-do></to-do>
    <froms></froms>
  </div>
</template>

<script>
import VueTpl from './components/VueTpl'
import ComputedWatch from './components/ComputedWatch'
import ClassStyle from './components/ClassStyle'
import Conditional from './components/Conditional'
import List from './components/List'
import ToDo from './components/ToDo'
import Froms from './components/Forms'
export default {
    name: 'App',
    // 局部注册组件
    components: {
        VueTpl,
        ComputedWatch,
        ClassStyle,
        Conditional,
        List,
        "to-do": ToDo,
        Froms
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
