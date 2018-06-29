<script>
export default {
    name: 'props-demo',
    props: {
        titleText: String,
        checkTips: {
            validator: function (value) {
            // 这个值必须匹配下列字符串中的一个
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
        }
      }
    },
    data: function() {
        return  {}
    },
    template: 
        '<div>{{titleText}} {{checkTips}}</div>'
}
</script>