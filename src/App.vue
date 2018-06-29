<template>
  <div id="app">
    <vue-tpl></vue-tpl>
    <computed-watch></computed-watch>
    <class-style></class-style>
    <conditional></conditional>
    <list></list>
    <to-do></to-do>
    <froms></froms>
    <button-counter>test slot</button-counter>
    <div>
        <span v-for="(item, index) in component_list" :key="index" @click="changeComponent(item)" style="padding: 0px 50px;">{{item}}</span>
    </div>
    <component v-bind:is="currentTabComponent"></component>
    <props-demo title-text="props属性" check-tips="success"></props-demo></div>
</template>

<script>
import VueTpl from './components/VueTpl'
import ComputedWatch from './components/ComputedWatch'
import ClassStyle from './components/ClassStyle'
import Conditional from './components/Conditional'
import List from './components/List'
import ToDo from './components/ToDo'
import Froms from './components/Forms'
import buttonCounter from './components/Components'
import one from './components/one'
import two from './components/two'
import three from './components/three'
import propsDemo from './components/propsDemo'
export default {
    name: 'App',
    data: function() {
        return {
            component_list: [
                'one',
                'two',
                'three'
            ],
            currentTabComponent: 'one'
        }
    },
    // 局部注册组件
    components: {
        VueTpl,
        ComputedWatch,
        ClassStyle,
        Conditional,
        List,
        "to-do": ToDo,
        Froms,
        buttonCounter,
        one,
        two,
        three,
        propsDemo
    },
    methods: {
        changeComponent: function(item) {
            this.currentTabComponent = item;
        }
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
