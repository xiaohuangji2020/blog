<template>
    <div class="index">
        <h1>Welcome! <span>and emmm~~~~</span></h1>
        <ul class="intro">
            <li>完全不知道要写些什么</li>
            <li>不是文人、也不是墨客的<span class="stress">理科生</span></li>
            <li>脑回路或者说<span class="stress">精神</span>有点不正常</li>
            <li>自定义职介为：<span class="stress">Berserker</span></li>
            <li>菜单导航在左侧</li>
            <li>以上</li>
        </ul>
        <div class="author">powered by 圆企鹅·Alter</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ModalEdit extends Vue {
    private navList: string[] = ['首页', '技术', '关于'];
}
</script>

<style lang="less" scoped>
h1 {
    position: absolute;
    top: 20%;
    color: white;

    span {
        padding-left: 10px;
        font-size: 18px;
    }
}
.intro {
    position: absolute;
    top: 30%;
    left: 20%;
    line-height: 34px;
    text-align: right;

    .stress {
        padding: 0 2px;
        font-size: 20px;
        font-weight: bold;
        filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.4));
    }
}
.author {
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: white;
}
</style>
