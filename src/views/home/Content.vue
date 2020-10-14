<template>
  <main class="main">
    <section class="appear-animation sec-banner"></section>
    <section class="sec-note">
      <h3>笔记</h3>
      <div class="inner">
        <section class="appearanimation box">
          文章1
        </section>
        <section class="appearanimation box">
          文章2
        </section>
        <section class="appearanimation box">
          文章3
        </section>
      </div>
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
  padding: 0 15px;
  line-height: 34px;
}
.sec-banner {
  position: relative;
  height: 250px;
  background: url('~@/assets/images/home/banner1.png') no-repeat center;
  background-size: contain;
  border-radius: 20px;
  box-shadow: 0 12px 50px -30px rgba(0, 0, 0, 0.6);
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
.sec-note {
  margin-top: 60px;
  .inner {
    display: flex;
    position: relative;
    flex-flow: row wrap;
    margin: 0 -15px;
    .box {
      width: 445px;
      height: 270px;
      margin: 15px;
      overflow: hidden;
      box-shadow: 0 9px 25px -26px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      transition: transform 0.2s linear;
      cursor: pointer;
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.1);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s linear;
      }
      &:hover {
        transform: translateY(-5px);
        &::before {
          opacity: 1;
        }
      }
    }
  }
}
@media (max-width: 950px) {
  .main {
    width: 100%;
  }
}
</style>
