<template>
    <ul id="nav">
        <div
            v-for="(item, index) of navList"
            :key="index"
            class="nav-li"
            :style="{
                'background-color':
                    'hsla(' + (180 + index * 10) + ', 100%, 50%, 100%)'
            }"
        >
            {{ item }}
        </div>
    </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ModalEdit extends Vue {
    private navList: string[] = ['首页', '技术', '简历', '关于', '其他板块'];
}
</script>

<style lang="less" scoped>
#nav {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    .nav-li {
        height: 40px;
        width: 200px;
        margin-bottom: 50px;
        border: 2px solid white;
        line-height: 40px;
        color: #fff;
        cursor: pointer;
        border-radius: 0 20px 20px 0;
        text-align: center;
        transform: translateX(-180px);
        transition: transform 0.3s ease-out;

        &:hover {
            transform: translateX(0);
        }
    }
}
</style>
