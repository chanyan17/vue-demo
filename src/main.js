// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import lodash from 'lodash'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import ToDoItem from './components/ToDoItem'
import Components from './components/Components'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.prototype._ = lodash

// 全局注册组件
Vue.component('todo-item', ToDoItem);
Vue.component('button-counter', Components);

// 全局注册基础模块
const requireComponent = require.context(
    // 其组件目录的相对路径
    './components',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName)

    // 获取组件的 PascalCase 命名
    const componentName = upperFirst(
      camelCase(
        // 剥去文件名开头的 `'./` 和结尾的扩展名
        fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
      )
    )
  
    // 全局注册组件
    Vue.component(
      componentName,
      // 如果这个组件选项是通过 `export default` 导出的，
      // 那么就会优先使用 `.default`，
      // 否则回退到使用模块的根。
      componentConfig.default || componentConfig
    )
})

// 全局注册指令
const requireDirective = require.context(
    // 指令目录
    './directives',
    // 不查找子目录
    false,
    // js文件
    /.+\.js$/
)

// 对每个配匹的文件
requireDirective.keys().forEach(fileName => {
    // 请求指令模块
    const directiveConfig = requireDirective(fileName)

    // 获取组件的 PascalCase 命名
    const directiveName = fileName
        // 移除开始的 './'
        .replace(/^\.\//, '')
        // 移除文件扩展
        .replace(/\.\w+$/, '');
    // 注册指令, 文件名作为指令名
    Vue.directive(
        directiveName,
        directiveConfig.default || directiveConfig
    )
})

// 全局注册过滤器
const requireFilter = require.context(
    // 指令目录
    './filters',
    // 不查找子目录
    false,
    // js文件
    /.+\.js$/
)

// 对每个配匹的文件
requireFilter.keys().forEach(fileName => {
    // 请求指令模块
    const filterConfig = requireFilter(fileName)

    // 获取组件的 PascalCase 命名
    const filterName = fileName
        // 移除开始的 './'
        .replace(/^\.\//, '')
        // 移除文件扩展
        .replace(/\.\w+$/, '');
    // 注册指令, 文件名作为指令名
    Vue.filter(
        filterName,
        filterConfig.default || filterConfig
    )
})
//0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)
// 1. 定义 (路由) 组件。可以从其他文件 import 进来
const Foo = { template: '<App/>', components: { App }}
const Bar = { template: '<div class="bar">bar</div>' }
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
// 4. 创建和挂载根实例。
/* eslint-disable no-new */
let app = new Vue({
    el: '#app',
    router,
    data: function() {
        return {
            name: 'vue-demo',
            four: 'main.js 的 four'
        }
    },
    provide: {
        test: '在父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量。需要注意的是这里不论子组件有多深，只要调用了inject那么就可以注入provider中的数据。而不是局限于只能从当前父组件的prop属性来获取数据。'
    },
    //components: { App },
    //template: '<App/>',
    beforeCreate: function () {
        // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
        console.log('===== 创建前 =====')
        console.log(this.name)
        console.log(this.$el)
    },
    created: function () { 
        // 实例已经创建完成之后被调用
        // 实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调
        console.log('===== 已创建 =====')
        console.log(this.name)
        console.log(this.$el)
    },
    beforeCompile: function () {
        console.log('===== 未开始编译 =====')
        console.log(this.name)
        console.log(this.$el)
    },
    compiled: function () {
        // 在编译结束之后调用
        // 编译模板，把data里面的数据和模板生成html
        console.log('===== 编译完成 =====')
        console.log(this.name)
        console.log(this.$el)
    },
    beforeMount: function () {
        // 在挂载开始之前被调用
        // 相关的 render 函数首次被调用
        console.log('===== Mount之前 =====')
        console.log(this.name)
        console.log(this.$el)
    },
    mounted: function () {
        // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
        // 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内
        console.log('===== Mount完成 =====')
        console.log(this.name)
        console.log(this.$el)
    },
    beforeUpdate: function () {
        // 数据更新时调用
        // 发生在虚拟 DOM 重新渲染和打补丁之前
        console.log('===== 更新前 =====')
        console.log(this.name)
        console.log(this.$el)
    },
    updated: function () {
        // 数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用
        // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
        console.log('===== 更新完成 =====')
        console.log(this.name)
        console.log(this.$el)
    },
    ready: function () {
        // 在编译结束和$el 第一次插入文档之后调用，如果在第一次attached钩子之后调用
        // 注意，必须是由Vue插入，比如 vm.$appendTo()等方法或指令更新，才会触发ready 钩子
        console.log('===== 一切都准备好了 =====')
        console.log(this.name)
        console.log(this.$el)
    },
    attached: function () {
        // 在 vm.$el插入DOM时调用。必须是由指令或实例方法，比如$appendTo()插入，直接操作vm.$el不会触发这个钩子
        console.log('===== 插入DOM成功 =====')
        console.log(this.name)
        console.log(this.$el)
    },
    detached: function () {
        // 触发事件 app.$destroy(true)，其中参数true控制是否删除DOM节点或者app.$remove()
        // 在vm.$el 从DOM中删除时调用。必须是由指令或实例方法删除，直接操作vm.$el不会触发这个钩子
        console.log('===== 删除DOM成功 =====')
        console.log(this.name)
        console.log(this.$el)
    },
    beforeDestroy: function () {
        // 触发方式，在console里面打印app.$destroy()
        // 实例销毁之前调用。此时实例仍然有功能 
        console.log('===== 销毁前 =====')
        console.log(this.name)
        console.log(this.$el)
    },
    destroyed: function () {
        // 触发方式，在console里面打app.$destroy()
        // 其中app.$destroy(true)是删除DOM节点，会触发detached函数，但是实例仍然存在
        // 在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑
        // 注意是解绑不是销毁，所有的子实例也已经被销毁
        console.log('===== 已销毁 =====')
        console.log(this.name)
        console.log(this.$el)
    }
});
window.app = app;