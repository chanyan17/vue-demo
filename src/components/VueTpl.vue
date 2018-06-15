<template>
<div>
    <div>{{text}} <span v-text="text"></span> </div>
    <div v-html="html"></div>
    <div v-bind:id="bindText">id bind value</div>
    <button v-bind:disabled="isButtonDisabled">isButtonDisabled is true</button>
    <div>{{num ? num + 1 : 0}}</div>
    <a v-bind:href="baiduHref">百度</a>
    <a :href="sinaHref">新浪</a>
    <div v-if="can_seen">看见我了吗<span v-if="cant_seen">我在这</span></div>
    <div @click="consoleRed">外面是红色 <span v-on:click.stop="consoleGreen">里面是绿色</span></div>
</div>
</template>

<script>
export default {
    name: 'VueTpl',
    data () {
        return {
            text: 'text value',
            html: '<h3>html value</h3>',
            bindText: '123',
            isButtonDisabled: true,
            num: 1,
            baiduHref: 'http://www.baidu.com',
            sinaHref: 'http://www.sina.com',
            can_seen: true,
            cant_seen: false
        }
    },
    methods: {
        consoleRed: function () {
            console.log('red');
        },
        consoleGreen: function () {
            console.log('green');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
