<template>
  <div class="wrap">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script lang="ts">
interface Circle {
  x: number;
  y: number;
  r: number;
}
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class CoilWave extends Vue {
  private pannel = {
    width: 0,
    height: 0,
    centerX: 0,
    centerY: 0
  };
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private style = {
    lineWidth: 1,
    fillStyle: '#aaa',
    strokeStyle: '#888'
  };
  private option = {
    scaleY: 0.2
  };
  private circles: Circle[] = [];
  private mounted() {
    this.canvas = document.querySelector('#canvas');
    if (!this.canvas) {
      return;
    }
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) {
      return;
    }
    this.pannel.width = window.innerWidth;
    this.pannel.height = window.innerHeight;
    this.canvas.width = this.pannel.width;
    this.canvas.height = this.pannel.height;
    this.pannel.centerX = this.pannel.width / 2;
    this.pannel.centerY = this.pannel.height / 2;
    this.generate();
    this.draw();
  }
  private generate() {
    let i = 0;
    while (++i < 7) {
      this.circles.push({
        x: this.pannel.centerX,
        y: this.pannel.centerY,
        r: i * 80
      });
    }
  }
  private draw() {
    this.drawCircle();
  }
  private drawCircle() {
    const ctx = this.ctx;
    if (!ctx) return;
    const circles = this.circles;
    const option = this.option;
    ctx.lineWidth = this.style.lineWidth;
    ctx.fillStyle = this.style.fillStyle;
    ctx.strokeStyle = this.style.strokeStyle;
    ctx.save();
    ctx.scale(1, option.scaleY);

    circles.forEach((circle: Circle, index: number) => {
      ctx.beginPath();
      ctx.arc(circle.x, circle.y / option.scaleY, circle.r, 0, 2 * Math.PI);
      ctx.closePath();
      if (index === 0) {
        ctx.fill();
      } else {
        ctx.stroke(); // 先restore，后stroke，circle的线就是一样粗了(需要调整代码位置，不然只能画出最后一圈)
      }
    });
    ctx.restore();
  }
}
</script>

<style lang="less" scoped></style>
