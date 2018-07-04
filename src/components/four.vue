<script>
import $ from 'jquery'
export default {
    name: 'four',
    data: function() {
        return  {
            four: 'childComponent 的 four'
        }
    },
    inject: ['test'],
    template: 
        '<div id="four">four</div>',
    mounted: function() {
        console.log(this.$root.four); // 指向根实例
        console.log(this.$parent.four); // 指向父组件
        console.log(this.test);
        console.log($('#four'));
    }
}
</script>