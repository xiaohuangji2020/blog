<template>
    <div class="technology-wrap">
        <transition-group enter-active-class="bounce-in" leave-active-class="bounce-in">
            <router-link
                v-for="item of category"
                :to="item[0]"
                :key="item[0]"
                class="t-nav"
                :class="getRandomClass()"
                :style="getRandomStyle()"
            >
                {{ item[1] }}
            </router-link>
        </transition-group>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ModalEdit extends Vue {
    private category: Map<string, string> = new Map();
    protected mounted() {
        this.category = new Map();
        this.category.set('/note', '笔记');
        this.category.set('/canvas', 'canvas');
    }
    private getRandomClass() {
        return 'c-' + Math.round(Math.random() * 5);
    }
    private getRandomStyle() {
        const x = Math.round(Math.random() * 40) + 20;
        const y = Math.round(Math.random() * 30) + 20;
        const wh = Math.round(Math.random() * 50) + 100;
        return {
            left: `${x}%`,
            top: `${y}%`,
            width: `${wh}px`,
            height: `${wh}px`,
            'line-height': `${wh}px`
        };
    }
}
</script>

<style lang="less" scoped>
@import url('~@/assets/css/animation.css');

.technology-wrap {
    height: 100vh;
    background: url(~@/assets/images/bg-1.png) repeat;
}
.t-nav {
    position: absolute;
    border: 3px solid white;
    border-radius: 50%;
    z-index: 1;

    &:hover {
        z-index: 2;
        background-color: white;
        transition: background-color 0.2s linear;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 3px solid transparent;
        border-radius: 50%;
    }
    &.c-0::after {
        border-left-color: palegoldenrod;
        animation: my-rotate 1.3s ease 0.1s infinite;
    }
    &.c-1::after {
        border-left-color: orangered;
        animation: my-rotate-reverse 1.4s ease infinite;
    }
    &.c-2::after {
        border-left-color: sandybrown;
        animation: my-rotate 0.6s linear infinite;
    }
    &.c-3::after {
        border-left-color: aquamarine;
        animation: my-rotate-reverse 1.2s ease-in-out 0.2s infinite;
    }
    &.c-4::after {
        border-left-color: pink;
        animation: my-rotate 1.5s ease-in 0.4s infinite;
    }
    &.c-5::after {
        border-left-color: paleturquoise;
        animation: my-rotate-reverse 1.1s ease-out 0.1s infinite;
    }
}
</style>
