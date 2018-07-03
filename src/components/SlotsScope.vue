<template id="slots_scope">
    <ul>
        <li
            v-for="todo in todos"
            v-bind:key="todo.id"
        >
            <slot v-bind:todo="todo"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SlotsScope',
    template: '#slots_scope',
    props: ['todos']
}
</script>
