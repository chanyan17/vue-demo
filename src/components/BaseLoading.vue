<template id="base_loading">
    <div class="base-loading" :style="loadingStyle">
        <div
            v-for="(dotNum, index) in dotNums"
            :key="index"
            :style="dotTransform(index, dotNums)">
            <span :style="dotAimation(index, dotNums)"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseLoading',
    template: '#base_loading',
    props: {
        dotNums: {
            type: Number,
            required: true,
            default: 10
        },
        loadingSize: {
            type: Number,
            required: true,
            default: 168
        },
        dotRadius: {
            type: Number,
            required: true,
            default: 10
        },
        dotColor: {
            type: String,
            required: true,
            default: '#d8d8d8'
        }
    },
    data() {
        return {
        }
    },
    methods: {
        dotTransform: function(index, dotNums) {
            let rad = 2 * Math.PI / dotNums * index;
            let X = Math.cos(rad) * this.loadingSize / 2;
            let Y = Math.sin(rad) * this.loadingSize / 2;
            return {
                marginTop: -1 * (this.dotRadius) + 'px',
                marginLeft: -1 * (this.dotRadius) + 'px',
                transform: 'translate('+ X + 'px, '+ Y + 'px)'
            }
        },
        dotAimation: function(index, dotNums) {
            let delayTime = -1 * (1 + (index + 1) * 1 / dotNums) + 's'
            return {
                width: this.dotRadius * 2 + 'px',
                height: this.dotRadius * 2 + 'px',
                backgroundColor: this.dotColor,
                animationDelay: delayTime
            }
        }
    },
    computed: {
        loadingStyle: function() {
            return {
                width: this.loadingSize + 'px',
                height: this.loadingSize + 'px'
            }
        }
    }
}
</script>
<style scoped>
.base-loading {
    position: relative;
    font-size: 0;
    transform-origin: center;
}
.base-loading div {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
}
.base-loading span {
    display: block;
    animation: ball-spin 1s infinite ease-in-out;
    border-radius: 100%;
}
@keyframes ball-spin {
    0%,
        100% {
        opacity: 1;
        transform: scale(1);
    }
    20% {
        opacity: 1;
    }
    80% {
        opacity: 0;
        transform: scale(0);
    }
}
</style>
