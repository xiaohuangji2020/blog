<template>
  <main class="main">
    <section class="sec sec-banner"></section>
    <section class="sec note-sec sec2">
      文章1
    </section>
    <section class="sec note-sec sec3">
      文章2
    </section>
    <section class="sec note-sec sec4">
      文章3
    </section>
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
.sec-banner {
  position: relative;
  height: 250px;
  background: url('~@/assets/images/home/banner1.png') no-repeat center;
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
