<script>
export default {
    name: 'Map',
    data() {
        return {
            map: null
        }
    },
    template: '<div id="allmap" style="height: 30rem"></div>',
    mounted() {
        this.map = new BMap.Map('allmap')
        this.point = new BMap.Point(118.060576,36.842432);
        this.map.centerAndZoom(this.point,15);
        console.log($('#allmap'));
    }
}
</script>
