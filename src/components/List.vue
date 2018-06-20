<template>
<div>
    <div>
        <h6 v-for="(item, index) in arrayData" :key="index">{{index}}、{{item}}</h6>
    </div>
    <div>
        <h6 v-for="(value, key, index) in objectData" :key="index">{{index}}. {{key}}:{{value}}</h6>
    </div>
    <div>
        数组变异方法：<span v-for="(item, index) in list" :key="index">{{item}} </span>
        <button @click="unshiftItem">头部插入一个随机数</button>
        <button @click="pushItem">尾部插入一个随机数</button>
        <button @click="popItem">删除最后一个元素并返回</button>
        <button @click="shiftItem">删除第一个元素并返回</button>
        <button @click="spliceItem">指定删除某个(此处第一个)元素</button>
        <button @click="sortList">升序排序</button>
        <button @click="reverseList">颠倒数组中元素的顺序</button>
        <div>
            数组<span v-for="(item, index) in testData" :key="index">{{item}} </span>
            <button @click="setValue1">利用索引直接设置一个项(将5改为4)</button>
            <button @click="setValue2">利用索引直接设置一个项(将6改为5)</button>
            <button @click="setLength">修改数组的长度(设置为4)</button>
        </div>
    </div>
    <div>
        <h6 v-for="(value, key, index) in objectTestData" :key="index">{{index}}. {{key}}:{{value}}</h6>
        <button @click="addAttrData">添加响应式属性</button>
    </div>
    <div>数组过滤
        <h6><span v-for="(n, index) in evenNumbers" :key="index">{{n}} </span></h6>
        <h6><span v-for="(n, index) in even(numbers)" :key="index">{{n}} </span></h6>
    </div>
    <div>
        <span v-for="(n, index) in 10" :key="index">{{ n }} </span>
    </div>
</div>
</template>

<script>
export default {
    name: 'List',
    data () {
        return {
            arrayData: [
                '5',
                '4',
                '1'
            ],
            objectData: {
                name: 'Kary',
                age: 20,
                sex: 'female'
            },
            list: [1, 2, 3, 5, 6],
            testData: [1, 2, 3, 5, 6],
            objectTestData: {
                name: 'Kary'
            },
            numbers: [ 1, 2, 3, 4, 5 ]
        }
    },
    computed: {
        evenNumbers: function() {
            return this.numbers.filter(function(n) {
                return n%2 === 0;
            });
        }
    },
    methods: {
        unshiftItem: function() {
            this.list.unshift( Math.floor(Math.random()*10+1) );
        },
        pushItem: function() {
            this.list.push( Math.floor(Math.random()*10+1) );
        },
        popItem: function() {
            this.list.pop();
        },
        shiftItem: function() {
            this.list.shift();
        },
        spliceItem: function() {
            this.list.splice(0, 1);
        },
        sortList: function() {
            this.list.sort((x, y) => {
                return x-y;
            });
        },
        reverseList: function() {
            this.list.reverse();
        },
        setValue1: function() {
            this.$set(this.testData, 3, 4);
        },
        setValue2: function() {
            this.testData.splice(4, 1, 5);
        },
        setLength: function() {
            this.testData.splice(4);
        },
        addAttrData: function() {
            this.objectTestData = Object.assign({}, this.objectTestData, {
                age: 20,
                sex: 'female'
            })
        },
        even: function(numbers) {
            return numbers.filter(function(n) {
                return n%2 === 0;
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
