<template id="base_input">
    <label>
        {{ label }}
        <input
            v-bind="$attrs"
            v-bind:value="value"
            v-on="$listeners"
        >
    </label>
</template>

<script>
    export default {
        name: 'BaseInput',
        props: ['label', 'value'],
        /* 在Vue2.4.0,可以在组件定义中添加inheritAttrs：false，组件将不会把未被注册的props呈现为普通的HTML属性。但是在组件里我们可以通过其$attrs可以获取到没有使用的注册属性，如果需要，我们在这也可以往下继续传递。 */
        inheritAttrs: false
    }
</script>