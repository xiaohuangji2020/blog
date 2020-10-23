<template>
  <div class="main">
    <h3>canvas动画基础</h3>
    <section class="sec">
      <h4 class="title">一、点做正圆运动</h4>
      <div class="content">
        <div class="text">
          <ul>
            <li>点绕圆心 做正弦运动</li>
            <li>主要工作是算出点在当前时刻的坐标</li>
          </ul>
        </div>
        <div class="canvas-box">
          <div class="op">
            <a class="starter" @click="run(1)">start</a>
            <a class="stoper" @click="run(1, true)">stop</a>
          </div>
          <canvas id="canvas-1" width="400" height="300"></canvas>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
interface Ball {
  x: number; // 轨道圆心x
  y: number; // 轨道圆心y
  R: number; // 轨道半径
  r: number; // 点自身半径
  deg: number; // 当前角度
  v: number; // 角度递增值，决定速度
}
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class WindPrinciple extends Vue {
  private drawer = 0;
  private beforeDestroy() {
    cancelAnimationFrame(this.drawer);
  }
  private run(index: number, cancel = false) {
    const canvas: HTMLCanvasElement | null = document.querySelector(`#canvas-${index}`);
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (ctx) {
      if (cancel) {
        cancelAnimationFrame(this.drawer);
      } else {
        this.draw(ctx, index);
      }
    }
  }

  private draw(ctx: CanvasRenderingContext2D, index: number) {
    cancelAnimationFrame(this.drawer);
    switch (index) {
      case 1:
        ctx.fillStyle = '#0288D1';
        ctx.strokeStyle = '#03A9F4';
        this.drawCircle(ctx, { x: 200, y: 150, R: 100, r: 10, deg: 0, v: 0.01 });
        break;
      default:
        break;
    }
  }

  private drawCircle(ctx: CanvasRenderingContext2D, ball: Ball) {
    ctx.clearRect(0, 0, 400, 300);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.R, 0, 2 * Math.PI); // 轨道
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(ball.x + ball.R * Math.cos(ball.deg), ball.y + ball.R * Math.sin(ball.deg), ball.r, 0, 2 * Math.PI);
    ctx.fill();
    ball.deg += ball.v;
    if (ball.deg > 8) ball.deg -= 8; // 防止太大了
    this.drawer = requestAnimationFrame(() => {
      this.drawCircle(ctx, ball);
    });
  }
}
</script>

<style lang="less" scoped>
.main {
  width: 950px;
  margin: 0 auto;
  padding: 0 15px;
  line-height: 34px;
}
.sec {
  border: 1px solid #ccc;
  .content {
    display: flex;
  }
  .text {
    flex: 1;
  }
  .canvas-box {
    flex: 1;
    position: relative;
  }
  .op {
    position: absolute;
    left: 0;
    top: 0;
  }
  .starter,
  .stoper {
    padding: 5px 10px;
    cursor: pointer;
  }
}
</style>
