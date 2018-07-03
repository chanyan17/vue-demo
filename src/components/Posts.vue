<template>
<div>
    <ul>
        <li v-for="(item, index) in data" :key="index" @click="current_idx = index">{{item.id}}</li>
    </ul>
    <div>
        {{data[current_idx].name}}
    </div>
</div>
</template>
<script>
export default {
    name: 'Posts',
    data: function() {
        return {
            data: [
                {id: 'FFF', name: 'fish'},
                {id: 'CCC', name: 'cat'},
                {id: 'DDD', name: 'dog'},
            ],
            current_idx: 0
        }
    }
}
</script>

