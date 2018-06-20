<template>
    <div>
        <form v-on:submit.prevent="addNewTodo">
            <label for="new-todo">add a todo</label>
            <input id="new-todo" v-model="newTodoText">
            <button type="submit">Add</button>
        </form>
        <ul>
            <!-- 组件中使用全局组件 -->
            <li
                is="todo-item"
                v-for="(todo, index) in todos"
                :key="todo.id"
                :title="todo.title"
                @remove="todos.splice(index, 1)"
            ></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ToDo',
    data: function() {
        return {
            newTodoText: '',
            todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
            ],
            nextTodoId: 4
        }
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
