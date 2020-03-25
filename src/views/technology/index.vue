<template>
    <div class="technology-wrap">
        <transition-group name="fade">
            <router-link v-for="item of category" :to="item[0]" :key="item[0]" class="t-nav" :style="getRandomStyle()">
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
        this.category.set('/note', '笔记');
        this.category.set('/canvas', 'canvas');
    }
    private getRandomStyle() {
        const x = Math.round(Math.random()) * 40 + 20;
        const y = Math.round(Math.random()) * 30 + 20;
        const wh = Math.round(Math.random()) * 50 + 100;
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
.technology-wrap {
    height: 100vh;
    background: rgb(204, 211, 210);
}
.t-nav {
    position: absolute;
    border: 3px solid white;
    border-radius: 50%;
    z-index: 1;

    &:hover {
        z-index: 2;
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
