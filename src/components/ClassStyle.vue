<template>
    <div>
        <div v-bind:class="{'red': isRed, 'green': isGreen}">红色字体 <span v-bind:class="fontStyle">绿色加粗斜体</span> <span :class="computedStyle">计算属性</span> <span :class="[fontWeight, color]">数组的形式</span></div>
        <div v-bind:style="styleObject">内联样式</div>
    </div>
</template>
<script>
export default {
    name: 'ClassStyle',
    data() {
        return {
            isRed: true,
            isGreen: false,
            fontStyle: {
                green: true,
                bold: true,
                italic: true
            },
            isBold: true,
            isBlack: true,
            fontWeight: 'bolder',
            color: 'black'
        }
    },
    computed: {
        computedStyle: function() {
            return {
                black: this.isBlack,
                bold: this.isBold
            }
        },
        styleObject: function() {
            return {
                color: 'blue',
                fontSize: '13px'
            }
        }
    },
    watch: {
    },
    methods: {
    }
}
</script>
<style scoped>
    .red {
        color: red;
    }
    .green {
        color: green;
    }
    .black {
        color: black;
    }
    .bold {
        font-weight: bold;
    }
    .bolder {
        font-weight: bolder;
    }
    .italic {
        font-style: italic;
    }
</style>
