<template>
  <main class="main">
    <ul class="intro-l">
      <li>完全不知道要写些什么</li>
      <li>不是文人、也不是墨客的<span class="stress">理科生</span></li>
      <li>脑回路或者说<span class="stress">精神</span>有点不正常</li>
    </ul>
    <ul class="intro-r">
      <li>就是想<span class="stress">搞</span>个博客玩玩</li>
      <li>是<span class="stress">废柴</span>哦</li>
      <li>自定义职介为：<span class="stress">Berserker</span></li>
    </ul>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Content extends Vue {}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  position: relative;
  width: 950px;
  margin: 0 auto;
  padding-top: 150px;
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
}
@media (max-width: 950px) {
  .main {
    width: 100%;
  }
}
</style>
