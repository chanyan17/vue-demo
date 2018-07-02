<template id="base_checkbox">
<div>
    <label>
        <input type="checkbox" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)">
        <slot></slot>
    </label>
</div>
</template >

<script>
export default {
    name: 'BaseCheckbox',
     model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: '#base_checkbox',
    methods: {}
}
</script>