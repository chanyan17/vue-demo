<template>
<div>
    <div>
        <button v-on:click="changOk">change OK</button>
        <h5 v-if="ok">Yes</h5>
        <h5 v-else>No</h5>
    </div>
    <!-- v-show 不支持 <template> 元素，也不支持 v-else -->
    <template v-if="isUsernameLoginType">
        <label>Username</label>
        <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address" key="email-input">
    </template>
    <button v-on:click="changeLoginType">切换登录方式</button>
</div>
</template>

<script>
export default {
    name: 'Conditional',
    data () {
        return {
            ok: false,
            isUsernameLoginType: true
        }
    },
    methods: {
        changOk: function() {
            this.ok = !this.ok;
        },
        changeLoginType: function() {
            this.isUsernameLoginType = !this.isUsernameLoginType;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
