<template>
    <div>
        <p>show的值{{show}}</p>
        <button @click.stop="closeDiv">设置false</button>
    </div>
</template>

<script>
export default {
    name: 'sync',
    props: ['show'],
    methods: {
        closeDiv() {
          this.$emit('update:show', false); //触发 input 事件，并传入新值
        }
    }
}
</script>
