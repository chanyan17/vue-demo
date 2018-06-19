<template>
<div>
    <div>
        <button v-on:click="changOk">change OK</button>
        <h5 v-if="ok">Yes</h5>
        <h5 v-else>No</h5>
    </div>
</div>
</template>

<script>
export default {
    name: 'Conditional',
    data () {
        return {
            ok: false
        }
    },
    methods: {
        changOk: function() {
            this.ok = !this.ok;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
