<template>
    <div>
        <div>输入时间戳：<input type="text" v-model="timestamp"></div>
        <div>{{date}}</div>
        <div>监听变化：<input type="text" v-model="target"></div>
    </div>
</template>
<script>
export default {
    name: 'ComputedWatch',
    data() {
        return {
            timestamp: (new Date()).getTime(),
            target: '请改变我的值'
        }
    },
    computed: {
        date: function() {
            var tmp_date = new Date(this.timestamp),
                year = tmp_date.getFullYear(),
                month = tmp_date.getMonth() + 1,
                day = tmp_date.getDate();
            console.log(_);
            return [year, '年', month, '月', day, '日'].join('');
        }
    },
    watch: {
        target: function(newValue, oldValue) {
            console.log('旧值：' + oldValue);
            console.log('当前的值：' + newValue);
        }
    }
}
</script>
