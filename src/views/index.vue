<template>
    <div class="index">
        <h1>Welcome! <span>and emmm~~~~</span></h1>
        <my-nav></my-nav>
        <main class="main">
            <ul class="intro-l">
                <li>完全不知道要写些什么</li>
                <li>不是文人、也不是墨客的<span class="stress">理科生</span></li>
                <li>脑回路或者说<span class="stress">精神</span>有点不正常</li>
                <li>自定义职介为：<span class="stress">Berserker</span></li>
                <li>还真的想做一个<span class="stress">英灵</span>，可惜事迹太少</li>
            </ul>
            <ul class="intro-r">
                <li>就是想<span class="stress">搞</span>个博客玩玩</li>
                <li>是<span class="stress">废柴</span>哦</li>
                <li>吃我一掌，<span class="stress">产品</span></li>
                <li>对产品<span class="stress">宝具</span> · 需求什么的都去s吧</li>
                <li>效果：<span class="stress">砍需求</span>，rm -rf&lt;overcharge时效果提升&gt;</li>
            </ul>
        </main>
        <div class="separator"></div>
        <div class="author">powered by 圆企鹅·Alter</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import myNav from '@/views/common/nav.vue';

@Component({
    components: {
        myNav
    }
})
export default class ModalEdit extends Vue {
    private navList: string[] = ['首页', '技术', '简历', '关于'];
}
</script>

<style lang="less" scoped>
.index {
    min-height: 100vh;
    background: url(~@/assets/images/bg-1.png) repeat;
}
h1 {
    position: absolute;
    top: 20%;
    left: 10%;
    color: white;

    span {
        padding-left: 10px;
        font-size: 18px;
    }
}
.main {
    display: flex;
    padding-top: 250px;
    line-height: 34px;

    .intro-l {
        flex: 1;
        margin-right: 20px;
        text-align: right;
    }

    .intro-r {
        flex: 1;
        margin-left: 20px;
        text-align: left;
    }

    .stress {
        padding: 0 2px;
        font-size: 20px;
        font-weight: bold;
        filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.4));
    }
}
.separator {
    position: absolute;
    left: 50%;
    width: 800px;
    height: 3px;
    margin-top: 30px;
    background: rgba(44, 62, 80, 0.5);
    transform: translateX(-50%);
}
.author {
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: white;
}
</style>
