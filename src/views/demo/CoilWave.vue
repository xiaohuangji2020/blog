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
  deg: number;
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
    bgFillStyle: 'white',
    lineWidth: 1,
    fillStyle: '#aaa',
    strokeStyle: '#888'
  };
  private option = {
    scaleY: 0.2,
    circleSpeed: 0.01, // 环运动速度
    circleRange: 40 // 环运动范围
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
    const ctx = this.ctx;
    this.pannel.width = window.innerWidth;
    this.pannel.height = window.innerHeight;
    this.canvas.width = this.pannel.width;
    this.canvas.height = this.pannel.height;
    this.pannel.centerX = this.pannel.width / 2;
    this.pannel.centerY = this.pannel.height / 2;
    this.generate();
    this.draw(ctx);
  }
  private generate() {
    let i = 0;
    while (++i < 7) {
      this.circles.push({
        x: this.pannel.centerX,
        y: this.pannel.centerY,
        r: i * 80,
        deg: i * 12
      });
    }
  }
  private draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.style.bgFillStyle;
    ctx.fillRect(0, 0, this.pannel.width, this.pannel.height);
    this.drawCircle(ctx);
    requestAnimationFrame(() => {
      this.draw(ctx);
    });
  }
  private drawCircle(ctx: CanvasRenderingContext2D) {
    const circles = this.circles;
    const option = this.option;
    ctx.lineWidth = this.style.lineWidth;
    ctx.fillStyle = this.style.fillStyle;
    ctx.strokeStyle = this.style.strokeStyle;
    ctx.save();
    ctx.scale(1, option.scaleY);
    circles.forEach((circle: Circle, index: number) => {
      const dis = Math.sin(circle.deg) * option.circleRange;
      circle.deg += option.circleSpeed;
      ctx.beginPath();
      ctx.arc(circle.x, circle.y / option.scaleY - dis * 10, circle.r - dis, 0, 2 * Math.PI);
      if (index === 0) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    });
    ctx.restore(); // 先restore，后stroke，circle的线就是一样粗了
  }
}
</script>

<style lang="less" scoped></style>
