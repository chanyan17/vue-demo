<script>
export default {
    name: 'button-counter',
    data: function() {
        return  {
            count: 0
        }
    },
    template: 
        '<div>\
            <button v-on:click="count++">You clicked me {{ count }} times.</button>\
            <div>Warning! <slot></slot></div>\
        </div>'
}
</script>