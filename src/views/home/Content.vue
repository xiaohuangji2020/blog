<template>
  <main class="main">
    <section class="sec sec1"></section>
    <!-- <div class="sec2">
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
    </div> -->
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Content extends Vue {}
</script>

<style lang="less" scoped>
.main {
  width: 950px;
  margin: 0 auto;
  line-height: 34px;
}
.sec1 {
  position: relative;
  height: 250px;
  background: url('~@/assets/images/home/banner1.png') no-repeat center top;
  background-size: contain;
  border-radius: 20px;
  box-shadow: 0 22px 50px -24px rgba(0, 0, 0, 0.6);
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    width: 30px;
    height: 30px;
  }
  &::before {
    left: 10px;
    background: url('~@/assets/images/pin2.png') no-repeat center;
    background-size: contain;
    transform: rotateY(180deg);
  }
  &::after {
    right: 10px;
    background: url('~@/assets/images/pin1.png') no-repeat center;
    background-size: contain;
  }
}
@media (max-width: 950px) {
  .main {
    width: 100%;
  }
}
</style>
