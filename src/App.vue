<template>
  <div id="app">
    <base-loading
        :dot-color="dotColor" :dot-nums="dotNums" :loading-size="loadingSize" :dot-radius="dotRadius">
    </base-loading>
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
    <props-demo title-text="props属性" check-tips="success"></props-demo>
    <base-checkbox v-model="lovingVue" @change="onChange">男</base-checkbox>
    <base-native @click.native="doThis"></base-native>
    <base-input v-on:input="onInput"></base-input>
    <sync :show.sync="valueChild"></sync>
    <button @click="changeValue">toggle</button>
    <slots-scope v-bind:todos="todos">
        <template slot-scope="slotProps">
            <!-- 为待办项自定义一个模板，-->
            <!-- 通过 'slotProps' 定制每个待办项。-->
            <span v-if="slotProps.todo.isComplete">✓</span>
            {{ slotProps.todo.text }}
        </template>
    </slots-scope>
    <div>
        <span v-for="(item, index) in keep_alive_list" :key="index" @click="changeAliveComponent(item)" style="padding: 0px 50px;">{{item}}</span>
    </div>
    <keep-alive>
        <component v-bind:is="currentAliveComponent"></component>
    </keep-alive>
    <four ref="childComponentData"></four>
    <Map></Map>
    
    <div v-on:click="isShow = !isShow">
        toggle
        <transition name="fade">
            <span v-show="isShow">hello</span>
        </transition>
    </div>
    <span>{{plus(1, 2)}}</span>
    <input type="text" v-auto-focus>
    <div>
        <input type="text" v-model="filterData">
        <div>{{ filterData | capitalize }}</div>
    </div>
    <render :level="6">Hello world!</render>
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
import buttonCounter from './components/Components'
import one from './components/one'
import two from './components/two'
import three from './components/three'
import propsDemo from './components/propsDemo'
import Sync from './components/Sync'
import SlotsScope from './components/SlotsScope'
import Posts from './components/Posts'
import four from './components/four'
import Map from './components/Map'
import {plus} from './assets/mixins/plus'
import render from './components/render'

export default {
    name: 'App',
    data: function() {
        return {
            component_list: [
                'one',
                'two',
                'three'
            ],
            currentTabComponent: 'one',
            lovingVue: '',
            valueChild: true,
            todos: [
                {id: '1', text: 'doA', isComplete: true},
                {id: '2', text: 'doB', isComplete: false},
                {id: '3', text: 'doC', isComplete: true}
            ],
            keep_alive_list: [
                'two',
                'posts'
            ],
            currentAliveComponent: 'posts',
            four: 'parent component 的 four',
            loadingSize: 200,
            dotRadius: 10,
            dotColor: '#ff3366',
            dotNums: 20,
            isShow: true,
            filterData: 'chen'
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
        propsDemo,
        Sync,
        SlotsScope,
        Posts,
        four,
        Map,
        render
    },
    methods: {
        changeComponent: function(item) {
            this.currentTabComponent = item;
        },
        onChange: function() {
            console.log(arguments);
        },
        onInput: function(value) {
            console.log(value);
        },
        doThis: function() {
            console.log('Vue的给组件绑定原生事件');
        },
        changeValue(){
            this.valueChild = !this.valueChild
        },
        changeAliveComponent: function(item) {
            this.currentAliveComponent = item;
        },
    },
    mounted: function() {
        console.log(this.$refs.childComponentData.four);
    },
    mixins: [plus]
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
.bar {
    width: 374px;
    height: 374px;
    background-color: blanchedalmond;
    border: 1px solid #898989;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>