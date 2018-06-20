<template>
<div>
    <div>
        <input type="text" v-model="suggest">
        <button :class="suggestClass">提交</button>
    </div>
    <div>
        单个复选框，绑定到布尔值
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">值：{{ checked }}</label>
    </div>
    <div>
        多个复选框，绑定到同一个数组
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div>
        单选按钮
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
    </div>
    <div>
        下拉选择(单选)
        <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
    </div>
    <div>
        下拉多选
        <select v-model="selectedes" multiple style="width: 50px;">
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <br>
        <span>Selectedes: {{ selectedes }}</span>
    </div>
    <div>
        常用下拉
        <select v-model="selected_value">
            <option v-for="(option, index) in options" :key="index" v-bind:value="option.value">
                {{ option.text }}
            </option>
        </select>
        <span>selected_value: {{ selected_value }}</span>
    </div>
    <div>
        change时响应值
        <input type="text" v-model.lazy="msg"> <span>{{msg}}</span>
    </div>
    <div>
        数值型输入
        <input type="number" v-model.number="num"> <span>{{num}}</span>
    </div>
    <div>
        头尾去白
        <input type="text" v-model.trim="text"> <span>{{text}}</span>
    </div>
</div>
</template>

<script>
export default {
    name: 'VueTpl',
    data () {
        return {
            suggest: '',
            checked: false,
            checkedNames: [ "Jack", "John" ],
            picked: '',
            selected: 'C',
            selectedes: [],
            selected_value: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ],
            msg: '',
            num: undefined,
            text: ''
        }
    },
    computed: {
        suggestClass: function() {
            if(this.suggest.length) {
                return 'ok'
            }else{
                return 'unOk'
            }
        }
    },
    methods: {

    }
}
</script>
<style>
    .ok {
        background-color: chartreuse;
        color: #FFF;
    }
    .unOk {
        background-color: #999;
        color: #545454;
    }
</style>
