<script>
export default {
    name: 'one',
    data: function() {
        return  {}
    },
    template: 
        '<div>one<base-list></base-list></div>',
    mounted: function() {
        this.$once('hook:destroyed', function () {
            console.log('destroyed');
        });
    }
}
</script>